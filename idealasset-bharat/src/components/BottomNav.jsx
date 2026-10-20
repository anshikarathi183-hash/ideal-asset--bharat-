import { useNavigate, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { path: '/home', icon: 'home', label: 'Home' },
  { path: '/explore', icon: 'explore', label: 'Explore' },
  { path: '/bookings', icon: 'calendar_today', label: 'Bookings' },
  { path: '/messages', icon: 'chat_bubble', label: 'Messages' },
  { path: '/profile', icon: 'account_circle', label: 'Profile' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const hideOn = ['/', '/auth', '/booking/checkout', '/booking/confirmation']
  const isHidden = hideOn.includes(location.pathname) || location.pathname.startsWith('/asset/')
  if (isHidden) return null

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-white/90 backdrop-blur-xl pb-safe shadow-[0_-1px_8px_rgba(0,0,0,0.06)]">
      <div className="flex justify-around items-center h-16 px-4">
        {NAV_ITEMS.map(({ path, icon, label }) => {
          const active = location.pathname === path
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-1 transition-colors min-w-[56px] ${
                active ? 'text-orange-500' : 'text-[#584236]'
              }`}
            >
              <span
                className="material-symbols-outlined text-[24px]"
                style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {icon}
              </span>
              <span className="text-[11px] font-semibold tracking-wide">{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
