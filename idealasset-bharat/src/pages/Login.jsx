import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('login')
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isLogin = mode === 'login'

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div className="min-h-dvh bg-[#f8f9ff] flex flex-col">
      <div className="px-5 pt-16 pb-8 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2 pt-4">
          <h1 className="font-display font-bold text-2xl text-[#0A2A6B]">
            {isLogin ? 'Welcome back.' : 'Create an account.'}
          </h1>
          <p className="text-[#584236] text-[16px]">
            {isLogin ? 'Sign in to manage your assets securely.' : 'Join the trusted network to manage assets.'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white shadow-md rounded-2xl p-5 flex flex-col gap-6">
          {/* Toggle */}
          <div className="relative flex bg-[#e4efff] rounded-full p-1">
            <div
              className="absolute inset-y-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-all duration-300 ease-out"
              style={{ left: isLogin ? '4px' : '50%' }}
            />
            <button
              className={`flex-1 py-2 text-[12px] font-semibold tracking-wide relative z-10 transition-colors ${isLogin ? 'text-[#0f1c2a]' : 'text-[#584236]'}`}
              onClick={() => setMode('login')}
            >
              Log In
            </button>
            <button
              className={`flex-1 py-2 text-[12px] font-semibold tracking-wide relative z-10 transition-colors ${!isLogin ? 'text-[#0f1c2a]' : 'text-[#584236]'}`}
              onClick={() => setMode('signup')}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-[#584236] tracking-wide">Email or Phone Number</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8c7164] text-[20px]">person</span>
                <input
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your details"
                  className="w-full bg-white outline-none py-3 pl-10 pr-4 rounded-lg border border-[#e0c0b0]/50 focus:border-[#f97302] focus:ring-1 focus:ring-[#f97302] text-[16px] text-[#0f1c2a] placeholder:text-[#8c7164] transition-all"
                />
              </div>
            </div>

            {/* Password */}
            {isLogin && (
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#584236] tracking-wide">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8c7164] text-[20px]">lock</span>
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-white outline-none py-3 pl-10 pr-10 rounded-lg border border-[#e0c0b0]/50 focus:border-[#f97302] focus:ring-1 focus:ring-[#f97302] text-[16px] text-[#0f1c2a] transition-all"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2">
                    <span className="material-symbols-outlined text-[#8c7164] text-[20px]">{showPass ? 'visibility' : 'visibility_off'}</span>
                  </button>
                </div>
                <div className="flex justify-end">
                  <button type="button" className="text-[12px] font-semibold text-[#0A2A6B]">Forgot password?</button>
                </div>
              </div>
            )}

            {/* Submit */}
            <div className="flex flex-col gap-3 mt-2">
              <button
                type="submit"
                className="w-full bg-[#f97302] text-white py-3 rounded-full text-[18px] font-bold shadow-[0_4px_20px_rgba(249,115,2,0.25)] active:scale-[0.98] transition-transform"
              >
                {isLogin ? 'Continue' : 'Verify with OTP'}
              </button>

              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-[#e0c0b0]/40"></div>
                <span className="flex-shrink-0 mx-4 text-[12px] text-[#8c7164] font-semibold tracking-wide">OR</span>
                <div className="flex-grow border-t border-[#e0c0b0]/40"></div>
              </div>

              <button
                type="button"
                className="w-full bg-white flex items-center justify-center gap-3 py-3 rounded-full border border-[#e0c0b0]/40 active:bg-[#e4efff] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-[16px] text-[#0f1c2a] font-medium">Continue with Google</span>
              </button>
            </div>
          </form>
        </div>

        {/* Security note */}
        <div className="flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[#8c7164] text-[16px]">verified_user</span>
          <p className="text-[12px] text-[#8c7164] font-semibold tracking-wide">Institutional-grade security active</p>
        </div>
      </div>
    </div>
  )
}
