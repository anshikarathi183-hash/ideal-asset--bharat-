import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialBookings = [
  {
    id: 1,
    title: 'DU North Campus College Auditorium',
    status: 'Confirmed',
    img: '/auditorium.jpg',
    location: 'North Campus, Delhi',
    pickup: 'Oct 24, 9:00 AM',
    returnTime: 'Oct 24, 5:00 PM',
    tab: 'upcoming'
  },
  {
    id: 2,
    title: 'Rajendra Nagar Conference Hall',
    status: 'Pending Approval',
    img: '/conference-hall.jpg',
    location: 'Sector 10, Gurgaon',
    pickup: 'Nov 5, 9:00 AM',
    returnTime: 'Nov 6, 6:00 PM',
    tab: 'upcoming'
  },
  {
    id: 3,
    title: 'CBSE Model School Classroom',
    status: 'Completed',
    img: '/classroom.jpg',
    location: 'Sector 45, Gurgaon',
    pickup: 'Oct 12, 08:00 AM',
    returnTime: 'Oct 12, 02:00 PM',
    tab: 'completed'
  },
  {
    id: 4,
    title: 'AID Delhi Science Lab',
    status: 'Cancelled',
    img: '/science-lab.jpg',
    location: 'Sohna Road, Gurgaon',
    pickup: 'Sep 24, 09:00 AM',
    returnTime: 'Sep 24, 12:00 PM',
    tab: 'cancelled'
  },
  {
    id: 5,
    title: 'Delhi Urban Public Library Hall',
    status: 'Ongoing',
    img: '/library.jpg',
    location: 'Sector 14, Gurgaon',
    pickup: 'Oct 20, 11:00 AM',
    returnTime: 'Oct 20, 05:00 PM',
    tab: 'ongoing'
  }
];

const Bookings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredBookings = initialBookings.filter(b => b.tab === activeTab);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-secondary/90 text-white';
      case 'Pending Approval':
        return 'bg-primary/90 text-white';
      case 'Completed':
        return 'bg-tertiary/90 text-white';
      case 'Cancelled':
        return 'bg-error/90 text-white';
      default:
        return 'bg-secondary-container text-on-secondary-container';
    }
  };

  const getStatusDotColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-secondary-fixed';
      case 'Pending Approval':
        return 'bg-primary-fixed';
      case 'Completed':
        return 'bg-tertiary-fixed';
      case 'Cancelled':
        return 'bg-error-container';
      default:
        return 'bg-white';
    }
  };

  return (
    <main className="pt-16 min-h-screen bg-surface">
      <div className="flex flex-col w-full bg-surface min-h-[calc(100vh-64px)] pb-24">
        {/* Header Section */}
        <div className="px-container-margin py-lg bg-surface-container-low rounded-b-[24px] shadow-[0_4px_20px_rgba(10,42,107,0.05)]">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-xs">My Bookings</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage your upcoming and past reservations.</p>
          
          {/* Tabs */}
          <div className="flex gap-sm mt-lg overflow-x-auto pb-sm no-scrollbar hide-scrollbar snap-x">
            {[
              { id: 'upcoming', label: 'Upcoming', count: initialBookings.filter(b => b.tab === 'upcoming').length },
              { id: 'ongoing', label: 'Ongoing', count: initialBookings.filter(b => b.tab === 'ongoing').length },
              { id: 'completed', label: 'Completed', count: initialBookings.filter(b => b.tab === 'completed').length },
              { id: 'cancelled', label: 'Cancelled', count: initialBookings.filter(b => b.tab === 'cancelled').length }
            ].map(tab => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`snap-start flex-none px-md py-sm rounded-full font-label-md text-label-md transition-all ${
                    active
                      ? 'bg-primary text-on-primary shadow-md shadow-primary/20'
                      : 'bg-surface text-on-surface-variant border border-outline-variant/30 hover:bg-surface-variant'
                  }`}
                >
                  {tab.label} {tab.count > 0 && `(${tab.count})`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col gap-md p-container-margin mt-sm">
          {filteredBookings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-[48px] opacity-40 mb-2">calendar_today</span>
              <p className="font-body-md">No bookings in this category.</p>
            </div>
          ) : (
            filteredBookings.map(booking => (
              <div
                key={booking.id}
                className="bg-surface-container-lowest rounded-[16px] shadow-[0_4px_20px_rgba(10,42,107,0.08)] overflow-hidden relative group"
              >
                {/* Status Badge */}
                <div className={`absolute top-sm right-sm z-10 px-sm py-xs rounded-full flex items-center gap-xs shadow-sm ${getStatusColor(booking.status)}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(booking.status)} animate-pulse`}></span>
                  <span className="font-label-md text-label-md text-white">{booking.status}</span>
                </div>

                <div className="flex flex-col">
                  <div className="w-full h-32 relative">
                    <img className="w-full h-full object-cover" alt={booking.title} src={booking.img} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-md flex flex-col gap-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-headline-md text-[18px] leading-[24px] text-on-surface mb-xs font-semibold">
                          {booking.title}
                        </h3>
                        <div className="flex items-center gap-xs text-on-surface-variant">
                          <span className="material-symbols-outlined text-[16px]">location_on</span>
                          <span className="font-body-sm text-body-sm">{booking.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-md bg-surface-container-low p-sm rounded-[12px] mt-xs">
                      <div className="flex flex-col flex-1">
                        <span className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-wider mb-0.5">Pick-up</span>
                        <span className="font-body-sm text-body-sm text-on-surface font-semibold">{booking.pickup}</span>
                      </div>
                      <div className="w-px bg-outline-variant/30"></div>
                      <div className="flex flex-col flex-1">
                        <span className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-wider mb-0.5">Return</span>
                        <span className="font-body-sm text-body-sm text-on-surface font-semibold">{booking.returnTime}</span>
                      </div>
                    </div>

                    <div className="flex gap-sm mt-sm">
                      <button
                        onClick={() => navigate('/messages')}
                        className="flex-1 bg-surface-variant text-on-surface font-label-md text-label-md py-sm rounded-lg flex items-center justify-center gap-xs transition-colors hover:bg-surface-container-highest cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                        Message Owner
                      </button>
                      <button className="flex-none bg-surface-variant text-on-surface w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-surface-container-highest">
                        <span className="material-symbols-outlined text-[18px]">more_vert</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Bookings;
