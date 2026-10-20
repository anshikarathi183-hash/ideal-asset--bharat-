import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingCheckout = () => {
  const navigate = useNavigate();
  const [pickupDate, setPickupDate] = useState('Oct 24, 2023');
  const [pickupTime, setPickupTime] = useState('09:00 AM');
  const [returnDate, setReturnDate] = useState('Oct 26, 2023');
  const [returnTime, setReturnTime] = useState('05:00 PM');
  
  const dailyRate = 1800.00;
  const days = 2;
  const subtotal = dailyRate * days;
  const serviceFee = 500.00;
  const discount = -400.00;
  const total = subtotal + serviceFee + discount;

  const handleConfirm = () => {
    navigate('/booking/confirmation');
  };

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen">
      {/* Custom Checkout Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0A2A6B] pt-safe shadow-[0_4px_20px_rgba(10,42,107,0.1)]">
        <div className="h-16 px-gutter flex items-center gap-md">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-full cursor-pointer hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-headline-md font-headline-md text-white truncate">Booking Workflow</h1>
          <div className="ml-auto flex items-center gap-md">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <img src="/profile.jpg" className="w-full h-full object-cover" alt="Profile" />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 min-h-screen bg-surface pb-safe">
        <div className="flex flex-col w-full px-container-margin gap-md pb-xl">
          {/* Asset Summary Card */}
          <div className="mt-base bg-surface-container-low rounded-xl p-md flex gap-sm shadow-[0_4px_20px_rgba(10,42,107,0.1)] relative">
            <div className="w-24 h-24 rounded-lg bg-surface-variant overflow-hidden shrink-0 relative shadow-sm">
              <img 
                className="w-full h-full object-cover" 
                alt="Pro-Grade Cement Mixer" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoM7FR8zYkSvEtpHl1xfhvhVFxrUBR24NZFzL6GHDj0GHyNvg3XZ5s_6kbghnvBmiYOUA3QfZu4BdLwMZhxjJEYRdj8pQZTLPnGnzoQRqlqKr4GGYTv8BxFeos0aUZgXqcNfEFfPqrzwRxGNNmgHAf7HHbmEQrs290hKWLiSbPnUuD11r02FyZIOKZYctsGc9ax4sl2PSDWhufLcT6nvzAQCFWrNi5pzx0_PH8RIYeFlqvLCmbSvNR" 
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface line-clamp-2 leading-tight">
                  Pro-Grade Cement Mixer (Electric)
                </h2>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-xs flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">location_on</span>
                  Northside Depot (2.4 miles)
                </p>
              </div>
              <div className="flex items-center gap-xs mt-sm">
                <span className="bg-secondary/10 text-on-secondary-container px-2 py-1 rounded-md text-label-md font-label-md">Available Now</span>
                <span className="text-label-md font-label-md text-on-surface-variant">4.9 ★ (128 reviews)</span>
              </div>
            </div>
          </div>

          {/* Date & Time Picker */}
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(10,42,107,0.1)]">
            <h3 className="text-body-lg font-body-lg text-on-surface font-semibold mb-sm">Rental Period</h3>
            <div className="grid grid-cols-2 gap-sm">
              {/* Pickup Date */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline group-focus-within:text-primary transition-colors">calendar_month</span>
                </div>
                <input 
                  className="w-full bg-surface-container-low text-on-surface text-body-md font-body-md py-sm pl-10 pr-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all shadow-sm" 
                  id="start-date" 
                  type="text" 
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
                <label className="absolute -top-2 left-3 bg-surface-container-lowest px-1 text-label-md font-label-md text-outline group-focus-within:text-primary transition-colors" htmlFor="start-date">Pickup Date</label>
              </div>
              {/* Pickup Time */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline group-focus-within:text-primary transition-colors">schedule</span>
                </div>
                <select 
                  className="w-full bg-surface-container-low text-on-surface text-body-md font-body-md py-sm pl-10 pr-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all shadow-sm appearance-none" 
                  id="start-time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                >
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                </select>
                <label className="absolute -top-2 left-3 bg-surface-container-lowest px-1 text-label-md font-label-md text-outline group-focus-within:text-primary transition-colors" htmlFor="start-time">Pickup Time</label>
              </div>
              {/* Return Date */}
              <div className="relative group mt-sm">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline group-focus-within:text-primary transition-colors">calendar_month</span>
                </div>
                <input 
                  className="w-full bg-surface-container-low text-on-surface text-body-md font-body-md py-sm pl-10 pr-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all shadow-sm" 
                  id="end-date" 
                  type="text" 
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
                <label className="absolute -top-2 left-3 bg-surface-container-lowest px-1 text-label-md font-label-md text-outline group-focus-within:text-primary transition-colors" htmlFor="end-date">Return Date</label>
              </div>
              {/* Return Time */}
              <div className="relative group mt-sm">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline group-focus-within:text-primary transition-colors">schedule</span>
                </div>
                <select 
                  className="w-full bg-surface-container-low text-on-surface text-body-md font-body-md py-sm pl-10 pr-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all shadow-sm appearance-none" 
                  id="end-time"
                  value={returnTime}
                  onChange={(e) => setReturnTime(e.target.value)}
                >
                  <option>05:00 PM</option>
                  <option>06:00 PM</option>
                  <option>07:00 PM</option>
                </select>
                <label className="absolute -top-2 left-3 bg-surface-container-lowest px-1 text-label-md font-label-md text-outline group-focus-within:text-primary transition-colors" htmlFor="end-time">Return Time</label>
              </div>
            </div>
            <div className="mt-md bg-secondary-container/30 rounded-lg p-sm flex items-start gap-sm">
              <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">info</span>
              <p className="text-body-sm font-body-sm text-on-surface-variant">Pickup and return must be completed during the depot's operating hours (8:00 AM - 8:00 PM).</p>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(10,42,107,0.1)]">
            <h3 className="text-body-lg font-body-lg text-on-surface font-semibold mb-sm">Payment Summary</h3>
            <div className="flex flex-col gap-sm text-body-md font-body-md text-on-surface-variant">
              <div className="flex justify-between items-center">
                <span>₹{dailyRate.toFixed(0)} x {days} Days</span>
                <span>₹{subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Service Fee</span>
                <span>₹{serviceFee.toFixed(0)}</span>
              </div>
              <div className="flex justify-between items-center text-secondary">
                <span className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[16px]">verified</span> 
                  Community Member Discount
                </span>
                <span>-₹{Math.abs(discount).toFixed(0)}</span>
              </div>
              <hr className="border-t border-outline-variant/30 my-xs" />
              <div className="flex justify-between items-center text-headline-md font-headline-md text-on-surface mt-xs font-semibold">
                <span>Total (INR)</span>
                <span>₹{total.toFixed(0)}</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(10,42,107,0.1)]">
            <div className="flex justify-between items-center mb-sm">
              <h3 className="text-body-lg font-body-lg text-on-surface font-semibold">Payment Method</h3>
              <button className="text-primary text-label-md font-label-md font-semibold cursor-pointer">Edit</button>
            </div>
            <div className="flex items-center gap-md p-sm bg-surface-container-low rounded-lg shadow-sm">
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center shadow-sm relative overflow-hidden">
                <svg className="h-4 text-[#1A1F71]" fill="none" viewBox="0 0 38 12">
                  <path d="M14.7 0.2L9.6 11.8H6.3L4.1 2.6C3.9 1.9 3.8 1.6 3.1 1.2C1.6 0.4 0 0 0 0L0.1 0.2C0.6 0.4 1.7 0.9 2.2 1.4C2.5 1.7 2.7 2.1 2.8 2.8L5.4 11.8H8.8L14.7 0.2ZM27.1 8C27.1 4.9 22.8 4.7 22.8 3.4C22.8 3.1 23.2 2.7 24 2.6C24.4 2.5 25.5 2.5 27.2 3.3L27.8 0.4C26.8 0.1 25.5 0 24.2 0C21.1 0 18.9 1.6 18.9 4C18.9 5.8 20.6 6.8 21.8 7.4C23 8 23.4 8.4 23.4 8.9C23.4 9.8 22.3 10.2 21.4 10.2C19.7 10.2 18.9 9.8 17.9 9.3L17.3 12.3C18.3 12.7 19.9 13.1 21.6 13.1C25 13.1 27.1 11.4 27.1 8ZM35 11.8H38L35.5 0.2H32.8C32.2 0.2 31.7 0.5 31.5 1L26.9 11.8H30.3L30.9 10H34.5L35 11.8ZM31.8 7.6L33.2 3.7L34.1 7.6H31.8ZM18.3 0.2H15.1L12.3 11.8H15.6L18.3 0.2Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-body-md font-body-md text-on-surface font-medium">Visa ending in 4242</p>
              </div>
              <span className="material-symbols-outlined text-secondary">check_circle</span>
            </div>
          </div>

          {/* Trust & Confirm */}
          <div className="mt-sm flex flex-col gap-md">
            <div className="flex items-start gap-sm text-body-sm font-body-sm text-on-surface-variant px-xs">
              <span className="material-symbols-outlined text-[18px] text-outline mt-0.5 shrink-0">lock</span>
              <p>Payments are processed securely. You won't be charged until the owner confirms your booking request.</p>
            </div>
            
            <button 
              onClick={handleConfirm}
              className="w-full bg-[#0A2A6B] text-white py-4 rounded-xl text-headline-md font-headline-md shadow-[0_4px_12px_rgba(10,42,107,0.3)] flex items-center justify-center gap-sm active:scale-[0.98] hover:bg-[#082256] transition-all relative overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10 font-semibold">Confirm Booking - ₹{total.toFixed(0)}</span>
              <span className="material-symbols-outlined relative z-10">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingCheckout;
