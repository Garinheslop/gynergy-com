
"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Types
interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface LeadInfo {
  name?: string
  email?: string
  phone?: string
  interests?: string[]
}

// API URL for ARIA public endpoint
const ARIA_API_URL = process.env.NEXT_PUBLIC_ARIA_API_URL || "https://app.lvl5life.com/api/aria-public"

// Session ID for tracking
function getSessionId() {
  if (typeof window === "undefined") return ""
  let sessionId = sessionStorage.getItem("aria_session_id")
  if (!sessionId) {
    sessionId = `aria_${Date.now()}_${Math.random().toString(36).substring(7)}`
    sessionStorage.setItem("aria_session_id", sessionId)
  }
  return sessionId
}

// Opening message
const OPENING_MESSAGE: Message = {
  id: "opening",
  role: "assistant",
  content: "Hi! I'm ARIA, your guide to transformation. What brings you to GYNERGY today?",
  timestamp: new Date(),
}

export function ARIAChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([OPENING_MESSAGE])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasUnread, setHasUnread] = useState(false)
  const [leadCaptured, setLeadCaptured] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Clear unread when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false)
    }
  }, [isOpen])

  // Parse lead info from message (simple detection)
  const extractLeadInfo = useCallback((message: string): LeadInfo | null => {
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/
    const phoneRegex = /(?:\+1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}/

    const email = message.match(emailRegex)?.[0]
    const phone = message.match(phoneRegex)?.[0]

    // Simple name extraction (looks for "my name is X" or "I'm X")
    const nameMatch = message.match(/(?:my name is|i'm|i am|call me)\s+([A-Za-z]+(?:\s+[A-Za-z]+)?)/i)
    const name = nameMatch?.[1]

    if (email || phone || name) {
      return { email, phone, name }
    }
    return null
  }, [])

  // Send message
  const sendMessage = useCallback(async () => {
    const message = inputValue.trim()
    if (!message || isLoading) return

    setInputValue("")
    setIsLoading(true)

    // Add user message
    const userMessage: Message = {
      id: `user_${Date.now()}`,
      role: "user",
      content: message,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMessage])

    // Extract lead info if present
    const leadInfo = extractLeadInfo(message)
    if (leadInfo?.email) {
      setLeadCaptured(true)
    }

    // Prepare conversation history
    const conversationHistory = messages.map(m => ({
      role: m.role,
      content: m.content,
    }))

    try {
      const response = await fetch(ARIA_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Session-Id": getSessionId(),
        },
        body: JSON.stringify({
          message,
          conversationHistory,
          sessionId: getSessionId(),
          leadInfo: leadInfo || undefined,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        if (response.status === 429) {
          // Rate limited
          const retrySeconds = errorData.retryAfterSeconds || 60
          setMessages(prev => [...prev, {
            id: `assistant_${Date.now()}`,
            role: "assistant",
            content: `I appreciate your enthusiasm! Let's slow down a bit. I'll be ready again in about ${retrySeconds} seconds.`,
            timestamp: new Date(),
          }])
          setIsLoading(false)
          return
        }
        throw new Error(errorData.error || "Failed to send message")
      }

      // Handle streaming response
      const reader = response.body?.getReader()
      if (!reader) throw new Error("No reader available")

      const decoder = new TextDecoder()
      let assistantContent = ""
      const assistantMessageId = `assistant_${Date.now()}`

      // Add empty assistant message that we'll fill
      setMessages(prev => [...prev, {
        id: assistantMessageId,
        role: "assistant",
        content: "",
        timestamp: new Date(),
      }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split("\n")

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6))
              if (data.token) {
                assistantContent += data.token
                setMessages(prev =>
                  prev.map(m =>
                    m.id === assistantMessageId
                      ? { ...m, content: assistantContent }
                      : m
                  )
                )
              }
              if (data.done) {
                if (!isOpen) {
                  setHasUnread(true)
                }
              }
            } catch {
              // Ignore parse errors for incomplete chunks
            }
          }
        }
      }

    } catch (error) {
      console.error("[ARIA Widget] Error:", error)
      setMessages(prev => [...prev, {
        id: `assistant_${Date.now()}`,
        role: "assistant",
        content: "I'm having a moment of reflection. Please try again in a moment, or explore gynergy.com to learn more about our transformation programs.",
        timestamp: new Date(),
      }])
    } finally {
      setIsLoading(false)
    }
  }, [inputValue, isLoading, messages, extractLeadInfo, isOpen])

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Bubble Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#AFECDB] text-black flex items-center justify-center shadow-lg hover:bg-[#AFECDB]/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat with ARIA"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
            )}
          </>
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-120px)] bg-[#0D0D0D] border border-[#2E2E2E] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-[#2E2E2E] bg-[#1A1A1A]">
              <div className="w-10 h-10 bg-[#AFECDB]/20 flex items-center justify-center">
                <span className="text-[#AFECDB] font-bebas text-lg">A</span>
              </div>
              <div className="flex-1">
                <h3 className="font-oswald text-white text-sm uppercase tracking-wider">ARIA</h3>
                <p className="text-white/40 text-xs font-inter">Your Transformation Guide</p>
              </div>
              {leadCaptured && (
                <span className="px-2 py-1 bg-[#AFECDB]/20 text-[#AFECDB] text-xs font-oswald uppercase">
                  Connected
                </span>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 ${
                      msg.role === "user"
                        ? "bg-[#AFECDB] text-black"
                        : "bg-[#1A1A1A] text-white/90 border border-[#2E2E2E]"
                    }`}
                  >
                    <p className="text-sm font-inter leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-[#1A1A1A] border border-[#2E2E2E] px-3 py-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-[#AFECDB] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-[#AFECDB] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-[#AFECDB] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#2E2E2E] bg-[#0D0D0D]">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-[#1A1A1A] border border-[#2E2E2E] text-white placeholder:text-white/40 px-3 py-2 text-sm font-inter focus:outline-none focus:border-[#AFECDB]/50"
                  disabled={isLoading}
                  maxLength={1000}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="px-4 py-2 bg-[#AFECDB] text-black font-oswald text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#AFECDB]/90 transition-colors"
                >
                  Send
                </button>
              </div>
              <p className="text-white/30 text-xs font-inter mt-2 text-center">
                Powered by GYNERGY.AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
