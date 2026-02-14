// FILE: src/components/ThemeToggle.tsx
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex h-10 w-20 items-center justify-center rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-cyan-100/50 dark:from-indigo-900/30 dark:to-purple-900/30 transition-opacity duration-500" />

      {/* Sun - rotates and sets when switching to dark */}
      <motion.div
        className="absolute"
        initial={false}
        animate={{
          y: isDark ? 40 : 0,
          rotate: isDark ? 90 : 0,
          opacity: isDark ? 0 : 1,
          scale: isDark ? 0.5 : 1,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Sun className="h-5 w-5 text-amber-500" strokeWidth={2.5} />
      </motion.div>

      {/* Moon - rises when switching to dark */}
      <motion.div
        className="absolute"
        initial={false}
        animate={{
          y: isDark ? 0 : -40,
          rotate: isDark ? 0 : -90,
          opacity: isDark ? 1 : 0,
          scale: isDark ? 1 : 0.5,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Moon className="h-5 w-5 text-indigo-300" strokeWidth={2.5} />
      </motion.div>
    </motion.button>
  )
}
