// FILE: src/pages/Societies.tsx
import { motion } from 'framer-motion'
import SocietyCard from '@/components/SocietyCard'

const societies = [
  {
    id: 1,
    name: 'Tech Society',
    description: 'Building the future with code. Workshops, hackathons, and tech talks.',
    members: 245,
    category: 'Technology',
  },
  {
    id: 2,
    name: 'Cultural Club',
    description: 'Celebrating diversity through dance, music, and traditional arts.',
    members: 189,
    category: 'Cultural',
  },
  {
    id: 3,
    name: 'Sports Association',
    description: 'Fitness, tournaments, and team spirit. From cricket to chess.',
    members: 312,
    category: 'Sports',
  },
  {
    id: 4,
    name: 'Literary Society',
    description: 'Poetry, debates, creative writing, and storytelling sessions.',
    members: 156,
    category: 'Literary',
  },
  {
    id: 5,
    name: 'Photography Club',
    description: 'Capture moments, learn composition, and explore visual arts.',
    members: 98,
    category: 'Arts',
  },
  {
    id: 6,
    name: 'Drama Society',
    description: 'Acting, direction, and theatrical productions on campus.',
    members: 134,
    category: 'Cultural',
  },
]

export default function Societies() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Societies</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Explore and join societies that match your interests.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
        {societies.map((society) => (
          <motion.div
            key={society.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <SocietyCard
              name={society.name}
              description={society.description}
              members={society.members}
              category={society.category}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
