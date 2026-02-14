// FILE: src/pages/Events.tsx
import { motion } from 'framer-motion'
import EventCard from '@/components/EventCard'

const events = [
  {
    id: 1,
    title: 'Hackathon 2025',
    date: 'Feb 15, 2025',
    time: '9:00 AM',
    venue: 'Tech Block, Room 101',
    capacity: 100,
    registered: 87,
    status: 'upcoming' as const,
    society: 'Tech Society',
  },
  {
    id: 2,
    title: 'Cultural Night',
    date: 'Feb 18, 2025',
    time: '6:00 PM',
    venue: 'Main Auditorium',
    capacity: 500,
    registered: 500,
    status: 'full' as const,
    society: 'Cultural Club',
  },
  {
    id: 3,
    title: 'Football Tournament Finals',
    date: 'Feb 16, 2025',
    time: '4:00 PM',
    venue: 'Sports Complex',
    capacity: 200,
    registered: 156,
    status: 'live' as const,
    society: 'Sports Association',
  },
  {
    id: 4,
    title: 'Poetry Slam',
    date: 'Feb 20, 2025',
    time: '5:00 PM',
    venue: 'Library Amphitheater',
    capacity: 80,
    registered: 45,
    status: 'upcoming' as const,
    society: 'Literary Society',
  },
  {
    id: 5,
    title: 'Photography Workshop',
    date: 'Feb 22, 2025',
    time: '10:00 AM',
    venue: 'Arts Block',
    capacity: 40,
    registered: 38,
    status: 'upcoming' as const,
    society: 'Photography Club',
  },
]

export default function Events() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Events</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Discover and register for upcoming society events.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {events.map((event) => (
          <motion.div
            key={event.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <EventCard {...event} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
