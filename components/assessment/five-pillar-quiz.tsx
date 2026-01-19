"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getAttributionData } from "@/lib/utm-tracking"
import { trackConversion } from "@/components/analytics/google-analytics"

// Quiz questions organized by pillar
const QUIZ_QUESTIONS = {
  health: {
    name: "Health",
    color: "#22C55E",
    icon: "💪",
    questions: [
      {
        id: "h1",
        question: "How would you rate your sleep quality?",
        subtext: "Do you wake feeling rested most mornings?",
      },
      {
        id: "h2",
        question: "How are your energy levels throughout the day?",
        subtext: "Can you power through without caffeine crashes?",
      },
      {
        id: "h3",
        question: "How would you rate your physical fitness?",
        subtext: "Can you handle physical challenges with ease?",
      },
      {
        id: "h4",
        question: "How well do you manage nutrition?",
        subtext: "Are you fueling your body intentionally?",
      },
      {
        id: "h5",
        question: "How effectively do you manage stress?",
        subtext: "Do you have healthy coping mechanisms?",
      },
    ],
  },
  relationships: {
    name: "Relationships",
    color: "#F43F5E",
    icon: "❤️",
    questions: [
      {
        id: "r1",
        question: "How thriving is your romantic relationship?",
        subtext: "Or if single, how ready do you feel for one?",
      },
      {
        id: "r2",
        question: "How connected are you with family?",
        subtext: "Do you feel present and engaged?",
      },
      {
        id: "r3",
        question: "How deep are your friendships?",
        subtext: "Do you have people you can truly confide in?",
      },
      {
        id: "r4",
        question: "How strong is your professional network?",
        subtext: "Are you surrounded by people who elevate you?",
      },
      {
        id: "r5",
        question: "How involved are you in community?",
        subtext: "Are you contributing to something larger?",
      },
    ],
  },
  wealth: {
    name: "Wealth",
    color: "#3B82F6",
    icon: "💰",
    questions: [
      {
        id: "w1",
        question: "How satisfied are you with your income?",
        subtext: "Does it match your value and goals?",
      },
      {
        id: "w2",
        question: "How prepared are you for emergencies?",
        subtext: "Could you handle a $5K surprise expense?",
      },
      {
        id: "w3",
        question: "How manageable is your debt situation?",
        subtext: "Is debt shrinking or growing?",
      },
      {
        id: "w4",
        question: "How well is your money working for you?",
        subtext: "Are you building wealth while you sleep?",
      },
      {
        id: "w5",
        question: "How confident do you feel about finances?",
        subtext: "Do you feel in control of your financial future?",
      },
    ],
  },
  mindset: {
    name: "Mindset",
    color: "#8B5CF6",
    icon: "🧠",
    questions: [
      {
        id: "m1",
        question: "How positive is your self-talk?",
        subtext: "Is your inner voice a coach or a critic?",
      },
      {
        id: "m2",
        question: "How well do you regulate emotions?",
        subtext: "Can you stay calm under pressure?",
      },
      {
        id: "m3",
        question: "How growth-oriented is your mindset?",
        subtext: "Do you see challenges as opportunities?",
      },
      {
        id: "m4",
        question: "How aware are you of limiting beliefs?",
        subtext: "Have you identified your mental blocks?",
      },
      {
        id: "m5",
        question: "How intentional are your mornings?",
        subtext: "Do you start each day with purpose?",
      },
    ],
  },
  purpose: {
    name: "Purpose",
    color: "#D4AF37",
    icon: "🏆",
    questions: [
      {
        id: "p1",
        question: "How clear is your life mission?",
        subtext: "Do you know WHY you do what you do?",
      },
      {
        id: "p2",
        question: "How meaningful is your daily work?",
        subtext: "Does it feel connected to purpose?",
      },
      {
        id: "p3",
        question: "How clear is your legacy vision?",
        subtext: "Do you know how you want to be remembered?",
      },
      {
        id: "p4",
        question: "How actively are you making impact?",
        subtext: "Are you contributing to the world?",
      },
      {
        id: "p5",
        question: "How aligned are your actions with values?",
        subtext: "Do you live what you believe?",
      },
    ],
  },
}

const PILLARS = ["health", "relationships", "wealth", "mindset", "purpose"] as const
type PillarKey = (typeof PILLARS)[number]

interface Answers {
  [key: string]: number
}

interface PillarScores {
  [key: string]: number
}

export function FivePillarQuiz() {
  const [stage, setStage] = useState<"intro" | "quiz" | "email" | "results">("intro")
  const [currentPillar, setCurrentPillar] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [pillarScores, setPillarScores] = useState<PillarScores>({})

  const pillar = PILLARS[currentPillar]
  const pillarData = QUIZ_QUESTIONS[pillar]
  const question = pillarData.questions[currentQuestion]
  const totalQuestions = PILLARS.length * 5
  const answeredCount = Object.keys(answers).length

  const handleAnswer = (score: number) => {
    const newAnswers = { ...answers, [question.id]: score }
    setAnswers(newAnswers)

    // Move to next question or pillar
    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1)
    } else if (currentPillar < 4) {
      setCurrentPillar(currentPillar + 1)
      setCurrentQuestion(0)
    } else {
      // All questions answered, calculate scores
      calculateScores(newAnswers)
      setStage("email")
    }
  }

  const calculateScores = (finalAnswers: Answers) => {
    const scores: PillarScores = {}
    PILLARS.forEach((p) => {
      const pillarQuestions = QUIZ_QUESTIONS[p].questions
      const total = pillarQuestions.reduce((sum, q) => sum + (finalAnswers[q.id] || 0), 0)
      scores[p] = Math.round((total / 5) * 10) / 10
    })
    setPillarScores(scores)
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    try {
      const attribution = getAttributionData()

      // Calculate overall score
      const overallScore =
        Object.values(pillarScores).reduce((a, b) => a + b, 0) / PILLARS.length
      const lowestPillar = Object.entries(pillarScores).reduce((a, b) =>
        a[1] < b[1] ? a : b
      )

      await fetch("/api/ghl/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: firstName,
          tags: [
            "assessment-completed",
            "5-pillars-quiz",
            "gynergy-com",
            `priority-pillar-${lowestPillar[0]}`,
            `score-tier-${overallScore >= 7 ? "high" : overallScore >= 4 ? "mid" : "low"}`,
          ],
          source: "gynergy.com/assessment",
          customFields: {
            ...attribution,
            assessment_health_score: pillarScores.health,
            assessment_relationships_score: pillarScores.relationships,
            assessment_wealth_score: pillarScores.wealth,
            assessment_mindset_score: pillarScores.mindset,
            assessment_purpose_score: pillarScores.purpose,
            assessment_overall_score: overallScore,
            assessment_priority_pillar: lowestPillar[0],
            assessment_completed_at: new Date().toISOString(),
          },
        }),
      })

      trackConversion.leadMagnetDownload(email)
      setStage("results")
    } catch (err) {
      console.error("Assessment submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-400"
    if (score >= 6) return "text-yellow-400"
    if (score >= 4) return "text-orange-400"
    return "text-red-400"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 8) return "Thriving"
    if (score >= 6) return "Growing"
    if (score >= 4) return "Struggling"
    return "Crisis"
  }

  const getRecommendation = (pillar: string, score: number) => {
    const recs: Record<string, Record<string, string>> = {
      health: {
        low: "Start with sleep. Go to bed 30 minutes earlier tonight and build from there.",
        mid: "Add one 20-minute workout 3x per week. Small wins build momentum.",
        high: "Optimize your routine. Consider advanced metrics like HRV tracking.",
      },
      relationships: {
        low: "Reach out to one person you've been avoiding. Connection heals.",
        mid: "Schedule weekly quality time with your most important relationship.",
        high: "Focus on deepening existing bonds and strategic new connections.",
      },
      wealth: {
        low: "Track every dollar for 30 days. Awareness precedes change.",
        mid: "Automate savings and attack your highest-interest debt first.",
        high: "Diversify investments and explore passive income streams.",
      },
      mindset: {
        low: "Start a daily gratitude practice. 3 things each morning changes everything.",
        mid: "Identify your top 3 limiting beliefs and write counter-evidence.",
        high: "Mentor others and take on challenges outside your comfort zone.",
      },
      purpose: {
        low: "Write your own eulogy. How do you want to be remembered?",
        mid: "Align one daily action with your values. Start small.",
        high: "Create a legacy project. What will outlast you?",
      },
    }
    const tier = score >= 7 ? "high" : score >= 4 ? "mid" : "low"
    return recs[pillar]?.[tier] || ""
  }

  // INTRO SCREEN
  if (stage === "intro") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="mb-8">
            <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-[#AFECDB]">
              Free Assessment
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wide mb-6">
            The 5-Pillar
            <br />
            <span className="text-[#AFECDB]">Self-Assessment</span>
          </h1>

          <p className="text-white/60 font-body text-lg mb-8 max-w-lg mx-auto">
            Discover where you stand across Health, Relationships, Wealth, Mindset, and
            Purpose. Get personalized insights and actionable next steps.
          </p>

          <div className="grid grid-cols-5 gap-2 mb-8">
            {PILLARS.map((p) => (
              <div
                key={p}
                className="flex flex-col items-center gap-2 p-3 bg-[#1A1A1A] border border-[#2E2E2E]"
              >
                <span className="text-2xl">{QUIZ_QUESTIONS[p].icon}</span>
                <span className="text-xs font-heading uppercase text-white/60">
                  {QUIZ_QUESTIONS[p].name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>5 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>25 questions</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>Instant results</span>
            </div>
          </div>

          <button
            onClick={() => setStage("quiz")}
            className="px-12 py-4 bg-[#AFECDB] text-black font-heading font-bold uppercase tracking-wider text-lg hover:bg-[#7DD8C0] transition-colors"
          >
            Start Assessment
          </button>

          <p className="mt-6 text-white/30 text-xs font-body">
            No credit card required. Your results are private.
          </p>
        </motion.div>
      </div>
    )
  }

  // QUIZ SCREEN
  if (stage === "quiz") {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        {/* Progress bar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#2E2E2E]">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{pillarData.icon}</span>
                <span
                  className="font-heading font-bold uppercase tracking-wider"
                  style={{ color: pillarData.color }}
                >
                  {pillarData.name}
                </span>
              </div>
              <span className="text-white/40 text-sm font-body">
                {answeredCount + 1} of {totalQuestions}
              </span>
            </div>
            <div className="h-1 bg-[#2E2E2E] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#AFECDB]"
                initial={{ width: 0 }}
                animate={{ width: `${((answeredCount + 1) / totalQuestions) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 flex items-center justify-center p-4 pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl w-full text-center"
            >
              <h2 className="font-display text-2xl md:text-3xl text-white mb-3">
                {question.question}
              </h2>
              <p className="text-white/50 font-body mb-12">{question.subtext}</p>

              {/* Score buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                  <button
                    key={score}
                    onClick={() => handleAnswer(score)}
                    className="w-14 h-14 border border-[#2E2E2E] text-white font-display text-xl hover:border-[#AFECDB] hover:bg-[#AFECDB]/10 hover:text-[#AFECDB] transition-all"
                  >
                    {score}
                  </button>
                ))}
              </div>

              {/* Scale labels */}
              <div className="flex justify-between text-xs text-white/40 font-body max-w-md mx-auto">
                <span>Crisis Mode</span>
                <span>Thriving</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pillar indicators */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A] border-t border-[#2E2E2E] py-4">
          <div className="flex justify-center gap-2">
            {PILLARS.map((p, idx) => (
              <div
                key={p}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx < currentPillar
                    ? "bg-[#AFECDB]"
                    : idx === currentPillar
                      ? "bg-[#AFECDB]/50"
                      : "bg-[#2E2E2E]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // EMAIL CAPTURE SCREEN
  if (stage === "email") {
    const overallScore =
      Object.values(pillarScores).reduce((a, b) => a + b, 0) / PILLARS.length
    const lowestPillar = Object.entries(pillarScores).reduce((a, b) =>
      a[1] < b[1] ? a : b
    )

    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#AFECDB]/20 flex items-center justify-center">
              <span className="text-4xl">✨</span>
            </div>
            <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-2">
              Assessment Complete!
            </h2>
            <p className="text-white/60 font-body">
              Your overall score:{" "}
              <span className={`font-bold ${getScoreColor(overallScore)}`}>
                {overallScore.toFixed(1)}/10
              </span>
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6 mb-6">
            <p className="text-white/80 font-body text-center mb-4">
              Enter your email to unlock your{" "}
              <span className="text-[#AFECDB] font-semibold">personalized results</span>{" "}
              including:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-white/60 text-sm font-body">
                <svg
                  className="w-4 h-4 text-[#AFECDB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Score breakdown by pillar
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm font-body">
                <svg
                  className="w-4 h-4 text-[#AFECDB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Your priority pillar identified
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm font-body">
                <svg
                  className="w-4 h-4 text-[#AFECDB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Personalized action recommendations
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm font-body">
                <svg
                  className="w-4 h-4 text-[#AFECDB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                PDF results to keep
              </li>
            </ul>

            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
                className="w-full px-4 py-3 bg-black border border-[#2E2E2E] text-white placeholder-white/40 font-body focus:outline-none focus:border-[#AFECDB]/50"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-4 py-3 bg-black border border-[#2E2E2E] text-white placeholder-white/40 font-body focus:outline-none focus:border-[#AFECDB]/50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#AFECDB] text-black font-heading font-bold uppercase tracking-wider hover:bg-[#7DD8C0] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Unlocking..." : "Get My Results"}
              </button>
            </form>
          </div>

          <p className="text-center text-white/30 text-xs font-body">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    )
  }

  // RESULTS SCREEN
  if (stage === "results") {
    const overallScore =
      Object.values(pillarScores).reduce((a, b) => a + b, 0) / PILLARS.length
    const sortedPillars = Object.entries(pillarScores).sort((a, b) => a[1] - b[1])
    const lowestPillar = sortedPillars[0]
    const highestPillar = sortedPillars[sortedPillars.length - 1]

    return (
      <div className="min-h-screen bg-black py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-[#AFECDB] mb-2 block">
              {firstName ? `${firstName}'s Results` : "Your Results"}
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wide mb-4">
              5-Pillar Assessment
              <br />
              <span className="text-[#AFECDB]">Complete</span>
            </h1>
          </motion.div>

          {/* Overall Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1A1A1A] border border-[#2E2E2E] p-8 mb-8 text-center"
          >
            <div className="text-6xl font-display text-[#AFECDB] mb-2">
              {overallScore.toFixed(1)}
            </div>
            <div className="text-white/60 font-body mb-4">Overall Score out of 10</div>
            <div
              className={`inline-block px-4 py-2 font-heading font-bold uppercase tracking-wider text-sm ${
                overallScore >= 7
                  ? "bg-green-500/20 text-green-400"
                  : overallScore >= 4
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400"
              }`}
            >
              {getScoreLabel(overallScore)}
            </div>
          </motion.div>

          {/* Pillar Scores */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1A1A1A] border border-[#2E2E2E] p-6 mb-8"
          >
            <h2 className="font-display text-xl text-white uppercase tracking-wide mb-6 text-center">
              Your Pillar Breakdown
            </h2>
            <div className="space-y-4">
              {PILLARS.map((pillar) => {
                const score = pillarScores[pillar]
                const data = QUIZ_QUESTIONS[pillar]
                return (
                  <div key={pillar}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{data.icon}</span>
                        <span className="font-heading font-bold uppercase tracking-wider text-white">
                          {data.name}
                        </span>
                      </div>
                      <span className={`font-display text-xl ${getScoreColor(score)}`}>
                        {score.toFixed(1)}
                      </span>
                    </div>
                    <div className="h-2 bg-[#2E2E2E] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: data.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${score * 10}%` }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Priority Pillar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-[#1A1A1A] to-[#0A0A0A] border border-[#2E2E2E] p-6 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">
                {QUIZ_QUESTIONS[lowestPillar[0] as PillarKey].icon}
              </span>
              <div>
                <span className="text-xs font-heading text-white/40 uppercase tracking-wider">
                  Your Priority Pillar
                </span>
                <h3
                  className="font-display text-2xl uppercase"
                  style={{
                    color: QUIZ_QUESTIONS[lowestPillar[0] as PillarKey].color,
                  }}
                >
                  {QUIZ_QUESTIONS[lowestPillar[0] as PillarKey].name}
                </h3>
              </div>
            </div>
            <p className="text-white/70 font-body mb-4">
              Your {QUIZ_QUESTIONS[lowestPillar[0] as PillarKey].name.toLowerCase()} pillar
              scored {lowestPillar[1].toFixed(1)}/10. This is likely the constraint limiting
              your growth in other areas.
            </p>
            <div className="bg-black/50 p-4 border-l-4 border-[#AFECDB]">
              <p className="text-white/80 font-body text-sm">
                <span className="font-bold text-[#AFECDB]">Recommended Action: </span>
                {getRecommendation(lowestPillar[0], lowestPillar[1])}
              </p>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#AFECDB]/10 border border-[#AFECDB]/30 p-6 mb-8"
          >
            <h2 className="font-display text-xl text-white uppercase tracking-wide mb-4 text-center">
              Ready to Transform?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="/shop/digital"
                className="block p-4 bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#AFECDB]/50 transition-colors text-center"
              >
                <div className="text-3xl mb-2">📚</div>
                <div className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-1">
                  Quick Start Guide
                </div>
                <div className="text-white/50 text-xs">$17</div>
              </a>
              <a
                href="/gynergy-ai"
                className="block p-4 bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#AFECDB]/50 transition-colors text-center"
              >
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-1">
                  ARIA AI Coach
                </div>
                <div className="text-white/50 text-xs">From $49/mo</div>
              </a>
            </div>
          </motion.div>

          {/* Social Share */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-white/40 font-body text-sm mb-4">
              Check your email for your complete results PDF
            </p>
            <button
              onClick={() => window.print()}
              className="px-6 py-3 border border-[#2E2E2E] text-white/60 font-heading uppercase tracking-wider text-sm hover:border-[#AFECDB]/50 hover:text-[#AFECDB] transition-colors"
            >
              Save Results
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  return null
}
