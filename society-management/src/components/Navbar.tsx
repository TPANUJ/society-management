// FILE: src/components/Navbar.tsx
import { useState, useEffect, useRef } from 'react'
import { Menu, Search, Bell, ChevronDown, User } from 'lucide-react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

interface NavbarProps {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [searchFocused, setSearchFocused] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false)
      }
    }
    if (profileOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [profileOpen])

  return (
    <header className="sticky top-0 z-30 flex h-16 md:h-20 items-center justify-between gap-4 rounded-b-2xl md:rounded-2xl md:mx-4 md:mt-4 px-4 md:px-6 backdrop-blur-xl bg-white/60 dark:bg-black/60 border-b md:border border-white/20 dark:border-white/10 shadow-soft dark:shadow-soft-dark">
      <div className="flex items-center gap-3">
        <motion.button
          onClick={onMenuClick}
          className="hidden md:flex h-10 w-10 items-center justify-center rounded-2xl hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="h-5 w-5 text-slate-700 dark:text-slate-200" />
        </motion.button>

        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple md:hidden">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <h1 className="font-semibold text-slate-800 dark:text-white hidden sm:block">Society Hub</h1>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <motion.div
          className={searchFocused ? 'flex-1 max-w-xs' : 'w-10 md:w-48'}
          animate={{ width: searchFocused ? 256 : undefined }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative flex items-center rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 overflow-hidden">
            <Search className="absolute left-3 h-4 w-4 text-slate-500 dark:text-slate-400" />
            <input
              type="search"
              placeholder="Search..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full bg-transparent py-2 pl-10 pr-4 text-sm placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 rounded-2xl"
            />
          </div>
        </motion.div>

        <ThemeToggle />

        <motion.button
          className="relative flex h-10 w-10 items-center justify-center rounded-2xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell className="h-5 w-5 text-slate-700 dark:text-slate-200" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
        </motion.button>

        <div className="relative" ref={profileRef}>
          <motion.button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 rounded-2xl pl-2 pr-3 py-2 backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/50 to-neon-purple/50">
              <User className="h-4 w-4 text-white" />
            </div>
            <ChevronDown className="h-4 w-4 text-slate-600 dark:text-slate-300 hidden sm:block" />
          </motion.button>

          {profileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-48 rounded-2xl backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-white/20 dark:border-white/10 shadow-soft dark:shadow-soft-dark py-2"
            >
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-white/20 dark:hover:bg-white/10 rounded-xl">
                Profile
              </button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-white/20 dark:hover:bg-white/10 rounded-xl">
                Settings
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-red-500/10 rounded-xl">
                Sign out
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}
