// FILE: src/components/EventCard.tsx
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'

interface EventCardProps {
  title: string
  date: string
  time: string
  venue: string
  capacity: number
  registered: number
  status: 'upcoming' | 'live' | 'full'
  society: string
}

export default function EventCard({
  title,
  date,
  time,
  venue,
  capacity,
  registered,
  status,
  society,
}: EventCardProps) {
  const progress = (registered / capacity) * 100

  return (
    <motion.div
      className="rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 overflow-hidden"
      whileHover={{
        scale: 1.03,
        y: -8,
        boxShadow: '0 0 30px rgba(0, 245, 255, 0.2), 0 0 60px rgba(168, 85, 247, 0.15)',
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{society}</span>
          <motion.span
            className={`inline-flex items-center gap-1 rounded-2xl px-3 py-1 text-xs font-medium ${
              status === 'live'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : status === 'full'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
            }`}
            animate={
              status === 'live'
                ? {
                    boxShadow: [
                      '0 0 0 0 rgba(16, 185, 129, 0.4)',
                      '0 0 0 8px rgba(16, 185, 129, 0)',
                    ],
                  }
                : undefined
            }
            transition={
              status === 'live'
                ? {
                    duration: 1.5,
                    repeat: Infinity,
                  }
                : undefined
            }
          >
            {status === 'live' && (
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            )}
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </motion.span>
        </div>

        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Calendar className="h-4 w-4 text-neon-cyan shrink-0" />
            <span>
              {date} · {time}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <MapPin className="h-4 w-4 text-neon-purple shrink-0" />
            <span>{venue}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
              <Users className="h-4 w-4" />
              Capacity
            </span>
            <span className="font-medium text-slate-800 dark:text-white">
              {registered}/{capacity}
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/20 dark:bg-black/20 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
