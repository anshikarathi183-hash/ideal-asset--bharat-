import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AssetDetail = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-[#0A2A6B] pt-safe shadow-[0_4px_20px_rgba(10,42,107,0.1)]">
        <div className="h-16 px-gutter flex items-center gap-md">
          <button className="w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-full" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-headline-md font-headline-md text-white truncate">Asset Details</h1>
          <div className="ml-auto flex items-center gap-md">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center border border-white/20">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 min-h-screen bg-surface pb-safe">
        <div className="flex flex-col w-full relative pb-[88px]">
          {/* Image Gallery */}
          <div className="relative w-full h-72">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApffjKh0nrgo-Ty4OVUuvcKXIQFUK95xaEYWqkkTUXeynNDey2rZffbnh9qIxvDzi2AqXvPNVuRKksIK5wmNw3o716fQPV0IcU-ELeS2UspFlllGR19sXFafWeUJlMYK3-J2gx-XypUrUoi6JFs2GCynfJWe9rmf7_N9XFrixDWA05TSa1JkredgBQr7ARmrQ7n3h4Md8y0_uwfKyqpiqe0QHgpilwrCf1jLLYcZM6wMc2h_aOmwst')" }}></div>
            <div className="absolute bottom-md right-md bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface px-sm py-xs rounded-full text-label-md font-label-md flex items-center gap-xs shadow-sm">
              <span className="material-symbols-outlined text-[16px]">photo_library</span>
              1/6
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col gap-lg px-gutter py-lg">
            {/* Header Details */}
            <div className="flex flex-col gap-xs">
              <div className="flex items-center justify-between mb-xs">
                <span className="bg-surface-container-high text-on-surface px-sm py-xs rounded-full text-label-md font-label-md inline-block">Heavy Machinery</span>
                <div className="flex items-center gap-xs bg-secondary/10 text-secondary px-sm py-xs rounded-full">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span className="text-label-md font-label-md">Verified Asset</span>
                </div>
              </div>
              <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface">Caterpillar 320 Excavator</h2>
              <div className="flex items-center gap-sm mt-xs">
                <div className="flex items-center text-primary-container">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-label-md font-label-md ml-xs">4.9</span>
                </div>
                <span className="text-on-surface-variant text-body-sm font-body-sm">(128 reviews)</span>
                <span className="text-on-surface-variant text-body-sm font-body-sm px-xs">•</span>
                <span className="text-on-surface-variant text-body-sm font-body-sm">ID: #88492</span>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-sm">
              <h3 className="text-body-lg font-body-lg text-on-surface font-semibold">About this asset</h3>
              <p className={`text-body-sm font-body-sm text-on-surface-variant leading-relaxed relative ${!expanded ? 'line-clamp-3' : ''}`}>
                High-performance 20-ton excavator suitable for medium to large construction projects. Regularly serviced, features an enclosed cab with AC, and comes with standard digging bucket. Perfect condition and ready for immediate deployment on site.
              </p>
              <button 
                className="text-primary text-body-sm font-label-md self-start font-semibold" 
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Show less' : 'Read more'}
              </button>
            </div>

            {/* Location Block */}
            <div className="bg-surface-container rounded-xl p-md shadow-[0_4px_20px_rgba(10,42,107,0.05)] flex flex-col gap-md">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-xs">
                  <h3 className="text-body-lg font-body-lg text-on-surface font-semibold">Location</h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">124 Industrial Pkwy, West District</p>
                  <p className="text-label-md font-label-md text-primary mt-xs">4.2 miles away</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined">directions</span>
                </div>
              </div>
              <div className="w-full h-32 bg-cover bg-center rounded-lg shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXWrjXd1weuhyapzvTb4PlySINWGcSOSlLrrXkSwags-NjQ9KIr5d_C60plb1Bka4R69WgSW-YWndGZkAwVoOHTyBM5LgqqFMoZJplcb2J_eF26s21BLgqKDjYGavPiUMkid_37SmUMIEua6-W3T_BD0NPs76O3rpPMVrwWcp5r2u-F28DuhiEX-qFkOq7bryFelZYSLGAibPnctXI91paISDuqcA1DQfaDszH-Y9wjcMOPg23VUl0')" }}></div>
            </div>

            {/* Availability Calendar */}
            <div className="flex flex-col gap-md">
              <div className="flex items-center justify-between">
                <h3 className="text-body-lg font-body-lg text-on-surface font-semibold">Availability</h3>
                <span className="text-label-md font-label-md text-primary">View Calendar</span>
              </div>
              
              <div className="flex gap-sm overflow-x-auto pb-sm snap-x hide-scrollbar">
                {/* Available Slot */}
                <div className="min-w-[100px] flex-shrink-0 bg-secondary/10 rounded-lg p-sm snap-start shadow-[0_2px_10px_rgba(10,42,107,0.03)] flex flex-col items-center justify-center gap-xs">
                  <span className="text-label-md font-label-md text-secondary uppercase">Mon, Oct 12</span>
                  <span className="text-body-lg font-headline-md text-secondary">08:00</span>
                  <span className="text-label-md font-label-md text-secondary">Available</span>
                </div>
                {/* Available Slot */}
                <div className="min-w-[100px] flex-shrink-0 bg-secondary/10 rounded-lg p-sm snap-start shadow-[0_2px_10px_rgba(10,42,107,0.03)] flex flex-col items-center justify-center gap-xs">
                  <span className="text-label-md font-label-md text-secondary uppercase">Tue, Oct 13</span>
                  <span className="text-body-lg font-headline-md text-secondary">08:00</span>
                  <span className="text-label-md font-label-md text-secondary">Available</span>
                </div>
                {/* Booked Slot */}
                <div className="min-w-[100px] flex-shrink-0 bg-surface-container-high opacity-70 rounded-lg p-sm snap-start flex flex-col items-center justify-center gap-xs">
                  <span className="text-label-md font-label-md text-on-surface-variant uppercase">Wed, Oct 14</span>
                  <span className="text-body-lg font-headline-md text-on-surface-variant line-through">08:00</span>
                  <span className="text-label-md font-label-md text-on-surface-variant">Booked</span>
                </div>
              </div>
            </div>

            {/* Owner Profile */}
            <div className="bg-surface-container rounded-xl p-md shadow-[0_4px_20px_rgba(10,42,107,0.05)] flex items-center gap-md">
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="w-full h-full bg-cover bg-center rounded-full shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB58NojqGMQ3Xo5nZGWyhFi-cJQf9uWI_2pDFL-1JOjqSCSXyEzp3mUkP0-U-xh_tt7vyJgLQnZr_anwdJV5oDltMGlcxUvJlXzK3_bH9zMDKi2N7PnNs11fwD16t2rP0nRqXpnVbrMeCjmaWwiu-NDjlWXykn14sH1n0YnqanbVJMRfkixOOkWwdSf2yUQsmXt6yJL1LbGUMdceLKrsuAhCX1-kmNayqS5mZDZvRRhd1Ur2VuHPaDq')" }}></div>
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-secondary text-on-secondary rounded-full flex items-center justify-center border-2 border-surface-container">
                  <span className="material-symbols-outlined text-[12px]">check</span>
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-body-lg font-body-lg text-on-surface font-semibold">Ramesh Kumar Sharma</h3>
                <p className="text-label-md font-label-md text-on-surface-variant">Institutional Provider • Member since 2021</p>
                <div className="flex items-center gap-xs mt-xs">
                  <span className="material-symbols-outlined text-[16px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-label-md font-label-md text-on-surface">4.9 (420 rentals)</span>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined">chat</span>
              </button>
            </div>
          </div>

          {/* Sticky Bottom Bar */}
          <div className="fixed bottom-0 left-0 w-full bg-surface px-gutter py-sm pb-safe shadow-[0_-4px_20px_rgba(10,42,107,0.08)] z-40">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-headline-md font-headline-md text-on-surface font-semibold">₹18,000</span>
                <span className="text-label-md font-label-md text-on-surface-variant">per day</span>
              </div>
              <button 
                onClick={() => navigate('/booking/checkout')}
                className="bg-primary-container text-on-primary shadow-sm rounded-lg px-xl py-sm flex items-center gap-sm active:scale-95 transition-transform cursor-pointer hover:bg-primary transition-colors"
              >
                <span className="text-body-lg font-body-lg font-semibold">Book Now</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AssetDetail;
