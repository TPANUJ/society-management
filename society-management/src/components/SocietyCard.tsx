// FILE: src/components/SocietyCard.tsx
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface SocietyCardProps {
  name: string
  description: string
  members: number
  category: string
  image?: string
}

export default function SocietyCard({ name, description, members, category }: SocietyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 overflow-hidden cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.03,
          y: -8,
          boxShadow: '0 0 30px rgba(0, 245, 255, 0.3), 0 0 60px rgba(168, 85, 247, 0.2)',
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="p-6">
          <span className="inline-block px-3 py-1 rounded-2xl text-xs font-medium bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 mb-3">
            {category}
          </span>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neon-purple">{members} members</span>
            <motion.span
              className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
