// FILE: src/pages/AI.tsx
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import GlassCard from '@/components/GlassCard'

const recommendations = [
  {
    id: 1,
    society: 'Tech Society',
    reason: 'Based on your interest in coding and hackathons',
    score: 95,
  },
  {
    id: 2,
    society: 'Literary Society',
    reason: 'Your activity suggests interest in creative writing',
    score: 82,
  },
  {
    id: 3,
    society: 'Photography Club',
    reason: 'You recently engaged with visual content',
    score: 78,
  },
]

export default function AI() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">AI Recommendations</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Personalized society suggestions powered by AI.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard>
          <div className="relative p-8 overflow-hidden">
            {/* Sparkle animation overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-neon-cyan"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`p-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-neon-purple"
                  style={{
                    right: `${10 + i * 20}%`,
                    top: `${30 + (i % 2) * 30}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.5 + i * 0.2,
                  }}
                />
              ))}
            </div>

            <div className="relative flex items-start gap-4">
              <motion.div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 245, 255, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
                    '0 0 30px rgba(0, 245, 255, 0.6), 0 0 60px rgba(168, 85, 247, 0.3)',
                    '0 0 20px rgba(0, 245, 255, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="h-7 w-7 text-white" />
              </motion.div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  Your AI-Powered Matches
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Based on your interests, activity, and preferences, here are societies we think
                  you&apos;ll love.
                </p>
                <div className="space-y-4">
                  {recommendations.map((rec, i) => (
                    <motion.div
                      key={rec.id}
                      className="flex items-center justify-between rounded-2xl p-4 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.2 }}
                      whileHover={{
                        borderColor: 'rgba(0, 245, 255, 0.3)',
                        scale: 1.02,
                      }}
                    >
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-white">
                          {rec.society}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{rec.reason}</p>
                      </div>
                      <span className="text-lg font-bold text-neon-cyan">{rec.score}%</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}
