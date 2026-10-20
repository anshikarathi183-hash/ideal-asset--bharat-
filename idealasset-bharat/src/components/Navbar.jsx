import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header({ onNotificationsClick }) {
  const navigate = useNavigate()
  const location = useLocation()
  const noHeader = ['/', '/auth', '/booking/checkout', '/booking/confirmation']
  const isNoHeader = noHeader.includes(location.pathname) || location.pathname.startsWith('/asset/')
  if (isNoHeader) return null

  return (
    <header className="fixed top-0 w-full z-50 shadow-[0_4px_20px_rgba(10,42,107,0.1)]" style={{ backgroundColor: '#0A2A6B' }}>
      <div className="h-16 px-5 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => navigate('/home')}
          className="flex items-center h-10 w-24 select-none cursor-pointer"
        >
          <img src="/logo.png" className="h-full w-full object-contain" alt="idealAsset BHARAT" />
        </button>

        {/* Location selector */}
        <div className="flex-1 flex justify-center items-center gap-1 px-4 py-1 bg-white/10 rounded-full text-white/90 max-w-[200px] cursor-pointer">
          <span className="material-symbols-outlined text-[20px]">location_on</span>
          <span className="text-[12px] font-semibold tracking-wide truncate">Select Location</span>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onNotificationsClick}
            className="w-9 h-9 flex items-center justify-center text-white relative"
          >
            <span className="material-symbols-outlined">notifications</span>
            <div className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="w-9 h-9 rounded-full overflow-hidden border border-white/20 cursor-pointer"
          >
            <img src="/profile.jpg" className="w-full h-full object-cover" alt="Profile" />
          </button>
        </div>
      </div>
    </header>
  )
}
