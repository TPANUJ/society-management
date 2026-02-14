// FILE: src/components/GlassCard.tsx
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-soft dark:shadow-soft-dark ${className}`}
      whileHover={hover ? { scale: 1.03, y: -4 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
