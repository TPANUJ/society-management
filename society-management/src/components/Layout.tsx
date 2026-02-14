// FILE: src/components/Layout.tsx
import { useState } from 'react'
import clsx from 'clsx'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import FloatingChatbot from './FloatingChatbot'

export default function Layout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/20 transition-colors duration-500">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div
        className={clsx(
          'flex flex-1 flex-col min-w-0 transition-all duration-300',
          sidebarCollapsed ? 'md:ml-[80px]' : 'md:ml-[256px]'
        )}
      >
        <Navbar onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className="flex-1 p-4 md:p-6 lg:p-8 pb-20 md:pb-8">
          <Outlet />
        </main>
      </div>
      <FloatingChatbot />
    </div>
  )
}
