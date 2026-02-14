// FILE: src/components/Sidebar.tsx
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, Users, Calendar, Sparkles } from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/societies', icon: Users, label: 'Societies' },
  { path: '/events', icon: Calendar, label: 'Events' },
  { path: '/ai', icon: Sparkles, label: 'AI' },
]

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 80 : 256 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="hidden md:flex fixed left-0 top-0 z-40 h-screen flex-col rounded-r-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border-r border-white/20 dark:border-white/10 shadow-soft dark:shadow-soft-dark"
      >
        <div className="flex h-16 items-center px-4 border-b border-white/20 dark:border-white/10">
          <AnimatePresence mode="wait">
            {collapsed ? (
              <motion.div
                key="logo-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple"
              >
                <span className="text-white font-bold text-lg">S</span>
              </motion.div>
            ) : (
              <motion.div
                key="logo-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="font-semibold text-slate-800 dark:text-white truncate">Society</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex-1 overflow-hidden p-3">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => collapsed && onToggle()}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-3 rounded-2xl px-3 py-2 mb-2 transition-all duration-200',
                    isActive
                      ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 dark:border-neon-purple/30 shadow-glow'
                      : 'hover:bg-white/20 dark:hover:bg-white/5'
                  )
                }
              >
                <Icon className="h-5 w-5 shrink-0 text-neon-cyan" />
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap overflow-hidden text-slate-700 dark:text-slate-200 font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </NavLink>
            )
          })}
        </nav>
      </motion.aside>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around rounded-t-3xl backdrop-blur-xl bg-white/80 dark:bg-black/80 border-t border-white/20 dark:border-white/10 py-2 px-2 safe-area-pb">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  'flex flex-col items-center gap-1 rounded-2xl px-4 py-2 transition-all',
                  isActive ? 'text-neon-cyan' : 'text-slate-500 dark:text-slate-400'
                )
              }
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </>
  )
}
