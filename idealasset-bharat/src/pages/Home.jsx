import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const topPicks = [
  {
    id: 1,
    title: 'City Public School Classroom',
    location: 'Sector 45, Gurgaon',
    price: 400,
    unit: 'hour',
    availability: 'After 2 PM',
    image: '/classroom.jpg',
    rating: 4.7,
    category: 'Classroom',
    categoryColor: 'bg-green-100 text-green-700',
  },
  {
    id: 2,
    title: 'Urban Library Hall',
    location: 'Sector 14, Gurgaon',
    price: 600,
    unit: 'hour',
    availability: '11 AM or after 11 PM',
    image: '/library.jpg',
    rating: 4.8,
    category: 'Library',
    categoryColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 3,
    title: 'AID Delhi Science Lab',
    location: 'Sohna, Gurgaon',
    price: 500,
    unit: 'hour',
    availability: 'After 2 PM – After 1 PM',
    image: '/science-lab.jpg',
    rating: 4.9,
    category: 'Science Lab',
    categoryColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 4,
    title: 'Ideal Sports Ground',
    location: 'MG Road, Gurgaon',
    price: 800,
    unit: 'hour',
    availability: 'After 5 PM',
    image: '/sports-ground.jpg',
    rating: 4.6,
    category: 'Sports Ground',
    categoryColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 5,
    title: 'Maneera Conference Hall',
    location: 'Sohna Road, Gurgaon',
    price: 700,
    unit: 'hour',
    availability: 'After 2 PM',
    image: '/conference-hall.jpg',
    rating: 4.8,
    category: 'Conference Hall',
    categoryColor: 'bg-purple-100 text-purple-700',
  },
];

const trendingSpaces = [
  {
    id: 1,
    title: 'AID Delhi Science Lab',
    location: 'Sector 36, Gurgaon',
    price: 344,
    image: '/science-lab.jpg',
    rating: 4.9,
  },
  {
    id: 2,
    title: 'Central Science Academy',
    location: 'Sector 46, Gurgaon',
    price: 500,
    image: '/classroom.jpg',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'City College Auditorium',
    location: 'Sector 10, Gurgaon',
    price: 900,
    image: '/auditorium.jpg',
    rating: 4.8,
  },
  {
    id: 4,
    title: 'Maneera Conference Hall',
    location: 'Sohna Road, Gurgaon',
    price: 700,
    image: '/conference-hall.jpg',
    rating: 4.8,
  },
];

const categories = [
  {
    label: 'Classrooms',
    count: '2500+ spaces',
    icon: 'menu_book',
    color: 'bg-green-50 border-green-200 text-green-700',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-700',
  },
  {
    label: 'Auditoriums',
    count: '2300+ spaces',
    icon: 'theater_comedy',
    color: 'bg-purple-50 border-purple-200 text-purple-700',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
  },
  {
    label: 'Science Labs',
    count: '3000+ spaces',
    icon: 'science',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
  },
  {
    label: 'Sports Grounds',
    count: '1500+ spaces',
    icon: 'sports_soccer',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
  },
  {
    label: 'Community Halls',
    count: '1800+ spaces',
    icon: 'groups',
    color: 'bg-orange-50 border-orange-200 text-orange-700',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-700',
  },
];

const chipCategories = [
  { label: 'Classrooms', icon: 'menu_book', iconBg: 'bg-green-100', iconColor: 'text-green-700', activeBg: 'bg-[#2e7d32]' },
  { label: 'Science Labs', icon: 'science', iconBg: 'bg-blue-100', iconColor: 'text-blue-700', activeBg: 'bg-blue-600' },
  { label: 'Community Halls', icon: 'groups', iconBg: 'bg-orange-100', iconColor: 'text-orange-700', activeBg: 'bg-orange-600' },
  { label: 'Sports Grounds', icon: 'sports_soccer', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-700', activeBg: 'bg-emerald-600' },
  { label: 'Auditoriums', icon: 'theater_comedy', iconBg: 'bg-purple-100', iconColor: 'text-purple-700', activeBg: 'bg-purple-600' },
  { label: 'More', icon: 'more_horiz', iconBg: 'bg-gray-100', iconColor: 'text-gray-600', activeBg: 'bg-gray-600' },
];

const Home = () => {
  const navigate = useNavigate();
  const [activeChip, setActiveChip] = useState('Classrooms');
  const [location, setLocation] = useState('Gurgaon, Haryana');
  const [savedItems, setSavedItems] = useState({});

  const toggleSave = (id) => {
    setSavedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="pt-16 min-h-screen bg-gray-50 pb-24">

      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-br from-[#f0faf4] via-[#eaf7ed] to-[#e8f5e9] border-b border-green-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-6 pb-0 flex flex-col md:flex-row items-stretch gap-4">
          {/* Left: Text content — full width on mobile, 45% on desktop */}
          <div className="w-full md:flex-1 flex flex-col justify-center py-2 md:py-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-2">
              Book affordable institutional<br />spaces in your district
            </h1>
            <p className="text-gray-500 text-sm mb-5">
              Ideal Asset Bharat makes it easy to rent underutilized classrooms, labs, conference halls, sports grounds, and more.
            </p>
            <button
              onClick={() => navigate('/explore')}
              className="inline-flex items-center gap-2 bg-[#2e7d32] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow hover:bg-[#1b5e20] transition-colors cursor-pointer w-fit"
            >
              Get Started
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* Right: Real photo — full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-48 md:h-56 rounded-xl overflow-hidden shadow-md flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80&fit=crop"
              alt="Indian institutional space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Search Bar ── */}
      <section className="bg-white border-b border-gray-100 shadow-sm sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">

            {/* Location */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white flex-1 min-w-0 cursor-pointer hover:border-green-400 transition-colors">
              <span className="material-symbols-outlined text-[#2e7d32] text-[20px]">location_on</span>
              <select
                className="flex-1 text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer font-medium"
                value={location}
                onChange={e => setLocation(e.target.value)}
              >
                <option>Gurgaon, Haryana</option>
                <option>Delhi, NCR</option>
                <option>Noida, UP</option>
                <option>Faridabad, Haryana</option>
                <option>Mumbai, Maharashtra</option>
                <option>Bengaluru, Karnataka</option>
                <option>Pune, Maharashtra</option>
                <option>Hyderabad, Telangana</option>
                <option>Chennai, Tamil Nadu</option>
                <option>Kolkata, West Bengal</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white flex-1 min-w-0 cursor-pointer hover:border-green-400 transition-colors">
              <span className="material-symbols-outlined text-[#2e7d32] text-[20px]">calendar_today</span>
              <input
                type="text"
                defaultValue="Wed, April 25 – Fri, April 27"
                className="flex-1 text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer"
                readOnly
              />
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white sm:w-36 cursor-pointer hover:border-green-400 transition-colors">
              <span className="material-symbols-outlined text-[#2e7d32] text-[20px]">schedule</span>
              <select className="flex-1 text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer">
                <option>2 hours</option>
                <option>4 hours</option>
                <option>Half day</option>
                <option>Full day</option>
              </select>
            </div>

            {/* Search button */}
            <button
              onClick={() => navigate('/explore')}
              className="flex items-center justify-center gap-2 bg-[#e65100] hover:bg-[#bf360c] text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow transition-colors cursor-pointer whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">search</span>
              Search
            </button>
          </div>
        </div>

        {/* Category Chips with colored icon badges */}
        <div className="max-w-6xl mx-auto px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {chipCategories.map(chip => {
              const isActive = activeChip === chip.label;
              return (
                <button
                  key={chip.label}
                  onClick={() => { setActiveChip(chip.label); navigate('/explore'); }}
                  className={`flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2e7d32] text-white border-[#2e7d32] shadow'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-700'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-white/20' : chip.iconBg}`}>
                    <span className={`material-symbols-outlined text-[14px] ${isActive ? 'text-white' : chip.iconColor}`}>{chip.icon}</span>
                  </span>
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-10">

        {/* ── Top Picks ── */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">
              Top Picks in {location.split(',')[0]}
            </h2>
            <button
              onClick={() => navigate('/explore')}
              className="text-[#2e7d32] text-sm font-semibold flex items-center gap-1 hover:underline cursor-pointer"
            >
              View All <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar snap-x">
            {topPicks.map(space => (
              <div
                key={space.id}
                onClick={() => navigate('/asset/1')}
                className="min-w-[190px] w-[190px] flex-shrink-0 snap-start bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow group"
              >
                <div className="relative h-32 w-full">
                  <img src={space.image} alt={space.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <button
                    onClick={e => { e.stopPropagation(); toggleSave(space.id); }}
                    className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow cursor-pointer"
                  >
                    <span
                      className={`material-symbols-outlined text-[16px] ${savedItems[space.id] ? 'text-red-500' : 'text-gray-400'}`}
                      style={{ fontVariationSettings: savedItems[space.id] ? "'FILL' 1" : "'FILL' 0" }}
                    >favorite</span>
                  </button>
                  <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${space.categoryColor}`}>
                    {space.category}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm leading-snug line-clamp-1">{space.title}</h3>
                  <p className="text-gray-400 text-xs flex items-center gap-0.5 mt-0.5">
                    <span className="material-symbols-outlined text-[12px]">location_on</span>
                    {space.location}
                  </p>
                  <div className="mt-2 flex items-end justify-between">
                    <div>
                      <span className="text-[#2e7d32] font-bold text-sm">₹ {space.price.toLocaleString('en-IN')}</span>
                      <span className="text-gray-400 text-xs">/{space.unit}</span>
                    </div>
                    <div className="flex items-center gap-0.5 text-[10px] text-gray-400">
                      <span className="material-symbols-outlined text-[12px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      {space.rating}
                    </div>
                  </div>
                  <p className="text-[10px] text-green-600 font-medium mt-1">{space.availability}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Explore Categories ── */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Explore Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map(cat => (
              <button
                key={cat.label}
                onClick={() => navigate('/explore')}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5 ${cat.color}`}
              >
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${cat.iconBg}`}>
                  <span className={`material-symbols-outlined text-[22px] ${cat.iconColor}`}>{cat.icon}</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm leading-tight">{cat.label}</p>
                  <p className="text-[10px] opacity-70">{cat.count}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ── Trending Labs & Auditoriums ── */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Trending Labs &amp; Auditoriums</h2>
            <button
              onClick={() => navigate('/explore')}
              className="text-[#2e7d32] text-sm font-semibold flex items-center gap-1 hover:underline cursor-pointer"
            >
              View All <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingSpaces.map(space => (
              <div
                key={space.id}
                onClick={() => navigate('/asset/1')}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow group"
              >
                <div className="relative h-36 w-full">
                  <img src={space.image} alt={space.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <button
                    onClick={e => { e.stopPropagation(); toggleSave(`t-${space.id}`); }}
                    className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow cursor-pointer"
                  >
                    <span
                      className={`material-symbols-outlined text-[16px] ${savedItems[`t-${space.id}`] ? 'text-red-500' : 'text-gray-400'}`}
                      style={{ fontVariationSettings: savedItems[`t-${space.id}`] ? "'FILL' 1" : "'FILL' 0" }}
                    >favorite</span>
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm leading-snug line-clamp-1">{space.title}</h3>
                  <p className="text-gray-400 text-xs flex items-center gap-0.5 mt-0.5">
                    <span className="material-symbols-outlined text-[12px]">location_on</span>
                    {space.location}
                  </p>
                  <div className="mt-1.5 flex items-center justify-between">
                    <div>
                      <span className="text-[#2e7d32] font-bold text-sm">₹ {space.price.toLocaleString('en-IN')}</span>
                      <span className="text-gray-400 text-xs">/hour</span>
                    </div>
                    <div className="flex items-center gap-0.5 text-[10px] text-gray-400">
                      <span className="material-symbols-outlined text-[12px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      {space.rating}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Host Your Space Banner ── */}
        <section className="bg-gradient-to-r from-[#e8f5e9] to-[#f1f8e9] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-green-200">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[32px] text-[#2e7d32]">home_work</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-base">Host Your Institute's Space</h3>
              <p className="text-sm text-gray-500">Earn with your underutilized spaces. Join 1000+ institutions already with us!</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 bg-[#2e7d32] text-white px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap shadow hover:bg-[#1b5e20] transition-colors cursor-pointer"
          >
            List Now <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </section>

      </div>
    </main>
  );
};

export default Home;
