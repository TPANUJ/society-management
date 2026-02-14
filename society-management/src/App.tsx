import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import { motion } from 'framer-motion'

// Lazy loaded routes
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Societies = lazy(() => import('@/pages/Societies'))
const Events = lazy(() => import('@/pages/Events'))
const AI = lazy(() => import('@/pages/AI'))

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

function LoadingFallback() {
  return (
    <div className="flex h-64 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-neon-cyan border-t-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PageWrapper>
                <Dashboard />
              </PageWrapper>
            }
          />
          <Route
            path="societies"
            element={
              <PageWrapper>
                <Societies />
              </PageWrapper>
            }
          />
          <Route
            path="events"
            element={
              <PageWrapper>
                <Events />
              </PageWrapper>
            }
          />
          <Route
            path="ai"
            element={
              <PageWrapper>
                <AI />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  )
}
