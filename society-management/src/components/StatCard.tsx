// FILE: src/components/StatCard.tsx
import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'
import GlassCard from './GlassCard'

interface StatCardProps {
  title: string
  value: number
  icon: React.ReactNode
  trend?: { value: number; positive: boolean }
  delay?: number
}

export default function StatCard({ title, value, icon, trend, delay = 0 }: StatCardProps) {
  const { count } = useCountUp(value, 1200)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <GlassCard>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
              <p className="mt-1 text-3xl font-bold text-slate-800 dark:text-white">
                {count.toLocaleString()}
              </p>
              {trend && (
                <span
                  className={`mt-2 inline-block text-sm font-medium ${
                    trend.positive ? 'text-emerald-500' : 'text-red-500'
                  }`}
                >
                  {trend.positive ? '+' : '-'}{Math.abs(trend.value)}% from last month
                </span>
              )}
            </div>
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30"
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              {icon}
            </motion.div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
