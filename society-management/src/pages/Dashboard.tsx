// FILE: src/pages/Dashboard.tsx
import { Users, Calendar, TrendingUp, Award } from 'lucide-react'
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import StatCard from '@/components/StatCard'
import GlassCard from '@/components/GlassCard'

const lineData = [
  { name: 'Jan', members: 120, events: 8 },
  { name: 'Feb', members: 145, events: 12 },
  { name: 'Mar', members: 168, events: 15 },
  { name: 'Apr', members: 195, events: 18 },
  { name: 'May', members: 220, events: 22 },
  { name: 'Jun', members: 248, events: 20 },
]

const pieData = [
  { name: 'Tech', value: 35, color: '#00f5ff' },
  { name: 'Cultural', value: 28, color: '#a855f7' },
  { name: 'Sports', value: 22, color: '#22c55e' },
  { name: 'Others', value: 15, color: '#f59e0b' },
]

const recentActivity = [
  { id: 1, action: 'New member joined Tech Society', time: '2 min ago' },
  { id: 2, action: 'Event "Hackathon 2025" created', time: '15 min ago' },
  { id: 3, action: 'Cultural fest registration opened', time: '1 hour ago' },
  { id: 4, action: 'Sports Society reached 100 members', time: '2 hours ago' },
]

const upcomingEvents = [
  { id: 1, title: 'Hackathon 2025', date: 'Feb 15', society: 'Tech Society' },
  { id: 2, title: 'Cultural Night', date: 'Feb 18', society: 'Cultural' },
  { id: 3, title: 'Football Tournament', date: 'Feb 20', society: 'Sports' },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Dashboard</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">Welcome back! Here's your overview.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard
          title="Total Societies"
          value={24}
          icon={<Users className="h-6 w-6 text-neon-cyan" />}
          trend={{ value: 12, positive: true }}
          delay={0}
        />
        <StatCard
          title="Active Events"
          value={18}
          icon={<Calendar className="h-6 w-6 text-neon-purple" />}
          trend={{ value: 8, positive: true }}
          delay={0.1}
        />
        <StatCard
          title="Total Members"
          value={1248}
          icon={<TrendingUp className="h-6 w-6 text-neon-cyan" />}
          trend={{ value: 23, positive: true }}
          delay={0.2}
        />
        <StatCard
          title="Events This Month"
          value={32}
          icon={<Award className="h-6 w-6 text-neon-purple" />}
          trend={{ value: 5, positive: false }}
          delay={0.3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <GlassCard className="lg:col-span-2">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">
              Growth Overview
            </h2>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={lineData}>
                <defs>
                  <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f5ff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#00f5ff" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="name" stroke="currentColor" className="text-xs" />
                <YAxis stroke="currentColor" className="text-xs" />
                <Tooltip
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(20px)',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="members"
                  stroke="#00f5ff"
                  fillOpacity={1}
                  fill="url(#colorMembers)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="events"
                  stroke="#a855f7"
                  fillOpacity={1}
                  fill="url(#colorEvents)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">
              Society Distribution
            </h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(20px)',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <GlassCard>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
              Recent Activity
            </h2>
            <div className="space-y-3">
              {recentActivity.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl p-3 hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                >
                  <p className="text-sm text-slate-700 dark:text-slate-300">{item.action}</p>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
              Upcoming Events
            </h2>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between rounded-2xl p-3 border border-white/20 dark:border-white/10 hover:border-neon-cyan/30 transition-colors cursor-pointer"
                >
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">{event.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{event.society}</p>
                  </div>
                  <span className="text-sm font-medium text-neon-cyan">{event.date}</span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
