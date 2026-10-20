import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0A2A6B] pt-safe shadow-[0_4px_20px_rgba(10,42,107,0.1)]">
        <div className="h-16 px-gutter flex items-center gap-md">
          <button 
            onClick={() => navigate('/home')} 
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
        <div className="flex flex-col w-full pb-8">
          <div className="px-container-margin py-8 flex flex-col items-center text-center gap-md">
            {/* Confirmation Animated Circle */}
            <div className="relative w-32 h-32 mb-4">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75"></div>
              <div className="absolute inset-2 bg-primary/30 rounded-full animate-pulse"></div>
              <div className="relative w-full h-full bg-primary text-on-primary rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(155,69,0,0.3)]">
                <span className="material-symbols-outlined text-[64px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
            </div>

            <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface font-semibold">Booking Confirmed!</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-[280px]">
              Your reservation is locked in. We've sent the details to your email.
            </p>

            {/* Receipt Summary Card */}
            <div className="bg-surface-container w-full rounded-xl p-md flex flex-col gap-sm shadow-[0_4px_20px_rgba(10,42,107,0.1)] mt-4">
              <div className="flex justify-between items-center pb-sm border-b border-outline-variant/30">
                <span className="text-body-sm font-body-sm text-on-surface-variant">Booking ID</span>
                <span className="text-label-md font-label-md text-on-surface font-semibold">#BK-9824-XT</span>
              </div>
              
              <div className="flex items-start gap-md pt-xs">
                <div className="w-12 h-12 rounded-lg bg-surface flex-shrink-0 flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col text-left text-on-surface">
                  <span className="text-body-md font-body-md font-semibold">Pro-Grade Cement Mixer (Electric)</span>
                  <span className="text-body-sm font-body-sm text-on-surface-variant">Northside Depot, Stall 12B</span>
                </div>
              </div>

              <div className="flex items-start gap-md pt-xs">
                <div className="w-12 h-12 rounded-lg bg-surface flex-shrink-0 flex items-center justify-center text-secondary shadow-sm">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div className="flex flex-col text-left text-on-surface">
                  <span className="text-body-md font-body-md font-semibold">Oct 24, 2023</span>
                  <span className="text-body-sm font-body-sm text-on-surface-variant">09:00 AM - Oct 26, 05:00 PM (2 Days)</span>
                </div>
              </div>
            </div>

            {/* Held Payment Info Card */}
            <div className="bg-secondary-container/50 w-full rounded-xl p-md flex items-center gap-md shadow-[0_4px_20px_rgba(10,42,107,0.05)] mt-2">
              <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                security
              </span>
              <p className="text-body-sm font-body-sm text-on-secondary-container text-left">
                Your payment of <strong>₹3,700</strong> is held securely until the booking is complete.
              </p>
            </div>

            {/* Navigation Options */}
            <div className="w-full flex flex-col gap-sm mt-8">
              <button 
                onClick={() => navigate('/bookings')}
                className="w-full bg-primary text-on-primary py-4 rounded-lg text-body-md font-body-md font-semibold shadow-[0_4px_20px_rgba(155,69,0,0.2)] active:scale-[0.98] transition-transform hover:bg-[#7e3800] cursor-pointer"
              >
                View Booking Details
              </button>
              <button 
                onClick={() => navigate('/home')}
                className="w-full bg-surface-variant text-on-surface py-4 rounded-lg text-body-md font-body-md font-semibold active:scale-[0.98] transition-transform hover:bg-surface-container-highest cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingConfirmation;
