import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const slides = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUuUhksiOBEqyFLjNwyyO90kqP4zEUQ9s0blPyRfP6spGUijRmcPYOw_-tvfGYqGVCK7v10cNLMmIs-7kDG8TyAm6r75J_WnLoVtKEBh3YBhEtE93BiMd2V7fq1puT3rELdlQ9FR44AWTTxLg9yScEApZXQUloYkoBErdD7THOjjUIOdh9G6coL-kCrvevk4Fb-eFHCxairyRm241Z9TQNG1VK5f6__0v1f9gLW7l-E51KU1iJSJU-',
    icon: 'search',
    iconColor: 'text-[#9b4500]',
    title: 'Discover Idle Assets',
    desc: 'Find high-value equipment sitting unused in your community network.',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBo3ek_kvecefn-AYmK8Vk7at_VRYPlmUInM1Dh9cu0SHRPrfSnJfrWmC6nh1sxZAqkl3iqsrNuWg9VUu1gFwmKTNu_-81sc74SZqIguNF60zxOGMYAIZutTphiHFONP00KGcYv5iEsjUDPlO2RxtvqMyX7HloJDhU4QfN113mtD6g3Z1pa1wUelasskCODv9tMTsDXa5_REJk9ehpWSaeYcCbCuYTFjs8R19pkMDe9qK7Rn18FyHl',
    icon: 'verified_user',
    iconColor: 'text-[#0a6d31]',
    title: 'Book Securely',
    desc: 'Institutional-grade verification ensures every transaction is safe and reliable.',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzBkUgHdegA8kEcZYsRVgHbymvrQ4y5Ix9ewK4X9hcPr-9Q-XXz71dZLw_V3EPC6pcoKmchCGYccuAwouoIaY-QyScIzvGgNRWn7ldQlSCjORoPyv4LfF0wA3Q63zRHG3nN2KWjql7aMhpitzUx6_FTa_UG76CLYpDdEQ9FcQj8Y-9jVosezD_EL8uAyVkdrGbFwjv8vvXl5IUr8Q8M05ajdCsLC_RlW-R-tGba_244gSRR68O4Yyb',
    icon: 'savings',
    iconColor: 'text-[#435c9e]',
    title: 'Save Costs',
    desc: 'Maximize utility and reduce overhead by sharing resources effectively.',
  },
]

export default function SplashPage() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)
  const [touchStart, setTouchStart] = useState(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const goTo = (i) => setCurrent(Math.max(0, Math.min(slides.length - 1, i)))

  const handleTouchStart = (e) => setTouchStart(e.changedTouches[0].screenX)
  const handleTouchEnd = (e) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].screenX
    if (diff > 50) goTo(current + 1)
    if (diff < -50) goTo(current - 1)
    setTouchStart(null)
  }

  return (
    <div className="flex flex-col min-h-dvh bg-[#f8f9ff] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#ffdbc9]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-[#9df6ab]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Logo Section */}
      <div className={`flex flex-col items-center justify-center pt-20 pb-6 z-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="w-20 h-20 rounded-2xl bg-[#e4efff] flex items-center justify-center shadow-[0_8px_30px_rgba(10,42,107,0.08)] mb-5 relative overflow-hidden group">
          <img src="/logo.png" className="w-full h-full object-contain p-2" alt="Logo" />
        </div>
        <h1 className="font-display font-bold text-2xl text-[#0f1c2a] mb-1">IdealAsset Bharat</h1>
        <p className="text-[#584236] text-[15px]">Making every asset count.</p>
      </div>

      {/* Carousel */}
      <div
        className={`flex-1 flex flex-col justify-center z-10 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden w-full px-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)`, width: `${slides.length * 100}%` }}
          >
            {slides.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center" style={{ width: `${100 / slides.length}%` }}>
                <div className="w-full max-w-[280px] aspect-square rounded-3xl bg-[#dce9fd] shadow-[0_12px_40px_rgba(10,42,107,0.06)] mb-8 overflow-hidden relative mx-auto">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg">
                    <span className={`material-symbols-outlined ${s.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                  </div>
                </div>
                <h2 className="font-display font-semibold text-2xl text-[#0f1c2a] mb-2">{s.title}</h2>
                <p className="text-[#584236] text-[16px] leading-relaxed max-w-[260px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-[#9b4500] w-6' : 'bg-[#e0c0b0] w-2'}`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={`px-6 pb-10 pt-4 z-10 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <button
          onClick={() => navigate('/auth')}
          className="w-full bg-[#f97302] text-white font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(249,115,2,0.3)] active:scale-[0.98] transition-all duration-200 group"
        >
          <span>Get Started</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        <div className="text-center mt-5">
          <button onClick={() => navigate('/home')} className="text-[14px] text-[#584236]">
            Already have an account?{' '}
            <span className="font-semibold text-[#0f1c2a]">Log in</span>
          </button>
        </div>
      </div>
    </div>
  )
}
