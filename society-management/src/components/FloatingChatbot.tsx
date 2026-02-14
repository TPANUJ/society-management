// FILE: src/components/FloatingChatbot.tsx
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingChatbot() {
  return (
    <motion.button
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple text-white shadow-glow md:bottom-8"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-neon-cyan/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      <MessageCircle className="h-6 w-6 relative z-10" />
    </motion.button>
  )
}
