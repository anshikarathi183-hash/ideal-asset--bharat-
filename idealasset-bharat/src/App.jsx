import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Login from './pages/Login'
import Explore from './pages/Explore'
import AssetDetail from './pages/AssetDetail'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Bookings from './pages/Bookings'
import Messages from './pages/Messages'
import BookingCheckout from './pages/BookingCheckout'
import BookingConfirmation from './pages/BookingConfirmation'
import './App.css'

function App() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/asset/:id" element={<AssetDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/booking/checkout" element={<BookingCheckout />} />
        <Route path="/booking/confirmation" element={<BookingConfirmation />} />
      </Routes>
      <BottomNav />
    </div>
  )
}

export default App
