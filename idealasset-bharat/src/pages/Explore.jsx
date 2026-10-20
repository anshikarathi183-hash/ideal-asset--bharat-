import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialAssets = [
  {
    id: 1,
    title: "Honda EU2200i Generator",
    price: 1800,
    unit: "day",
    distance: "1.2 km away",
    location: "Tech District, Delhi",
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0TN6rcINyhQkzK_1FTUkr2lpzFocP_fViYF-Ok74B05O-YWRJOPuPdV_WQll_KdfAyzJu5dDG7c7IK_U6JIVr8EzwZuefHq4GFVsK4ddyDqFbxLGT5mzTLQ1bQG_QrpW2UXwqmx81FLvAeStMdyjU0r5w-2BtP50eE6EDfHVByA9z8BuGnawpmNi9cod7XYh9p1Tr_LjMwtBUzuRTequnn9c3E0R665HOrGB4xlhfhevJ2LqmRhTf",
    status: "Available Now",
    statusColor: "secondary",
    verified: true,
    category: "Generators"
  },
  {
    id: 2,
    title: "Champion 3500W Portable Generator",
    price: 1400,
    unit: "day",
    distance: "3.5 km away",
    location: "Vasant Kunj, Delhi",
    rating: 4.7,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB5SmkY5pUMRvOfxxxeCdexO6doliWl3NTW0PC7W1w9Uteohbx64N2DWiQMOY-WsfRM4bmFj2yV6bGNsq2gbF5oXfuOzL8I0OKfrIvcGC2poZlPrznirCXDt-UG5_ALSiuu1OUNL-vdlx6ijc7BBx-nRbAoDneIC83Ctri3iawdcm6Uz5it2f5TooY9uHItM44tJnQJMVWim0PxSVykdD9deXJhUq0zyJdJT_SN4CxSAjBdx8-aMrM",
    status: "Available Tomorrow",
    statusColor: "primary",
    verified: true,
    category: "Generators"
  },
  {
    id: 3,
    title: "Prusa i3 MK3S+ 3D Printer",
    price: 500,
    unit: "hour",
    distance: "0.8 km away",
    location: "Connaught Place, Delhi",
    rating: 4.8,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMfSi6WUgP4VvRvbwPgDIXQpJEdeakx2w3fV4563DtV-uUlJb_Z5r7XDPqpLIKENlsD7qwlY73A0Lu6ng5vLwstoWTPh-ApSoYAE5TLcB8mZhXiZRGlRGMgxMkaa4B0REDkSwJp-vyJRptplpK31Yv5MjIcVA5Cz4Uq2A3rhdf04RTe4DeIwPwETxIehRaMLoCPdVZY77zIf4-kgHSRGIpPk28802ImP41IlFgn6upNzvY4vVKNw-Q",
    status: "Available Now",
    statusColor: "secondary",
    verified: true,
    category: "Printers"
  },
  {
    id: 4,
    title: "Rajendra Nagar Conference Hall",
    price: 4500,
    unit: "day",
    distance: "2.5 km away",
    location: "Sector 10, Gurgaon",
    rating: 4.6,
    image: "/conference-hall.jpg",
    status: "Available Now",
    statusColor: "secondary",
    verified: true,
    category: "Spaces"
  },
  {
    id: 5,
    title: "DU North Campus College Auditorium",
    price: 8000,
    unit: "day",
    distance: "3.1 km away",
    location: "Sector 36, Gurgaon",
    rating: 4.8,
    image: "/auditorium.jpg",
    status: "Available Now",
    statusColor: "secondary",
    verified: true,
    category: "Spaces"
  },
  {
    id: 6,
    title: "CBSE Model School Classroom",
    price: 400,
    unit: "hour",
    distance: "1.8 km away",
    location: "Sector 45, Gurgaon",
    rating: 4.5,
    image: "/classroom.jpg",
    status: "Available Tomorrow",
    statusColor: "primary",
    verified: true,
    category: "Spaces"
  },
  {
    id: 7,
    title: "Delhi Urban Public Library Hall",
    price: 600,
    unit: "hour",
    distance: "0.9 km away",
    location: "Sector 14, Gurgaon",
    rating: 4.7,
    image: "/library.jpg",
    status: "Available Now",
    statusColor: "secondary",
    verified: false,
    category: "Spaces"
  },
  {
    id: 10,
    title: "AID Delhi Science Lab",
    price: 500,
    unit: "hour",
    distance: "2.3 km away",
    location: "Sohna Road, Gurgaon",
    rating: 4.9,
    image: "/science-lab.jpg",
    status: "Available Now",
    statusColor: "secondary",
    verified: true,
    category: "Spaces"
  },
  {
    id: 11,
    title: "Ideal Sports Ground",
    price: 800,
    unit: "hour",
    distance: "1.5 km away",
    location: "MG Road, Gurgaon",
    rating: 4.6,
    image: "/sports-ground.jpg",
    status: "Available Now",
    statusColor: "secondary",
    verified: true,
    category: "Spaces"
  },
  {
    id: 12,
    title: "Jawahar Navodaya Vidyalaya Hall",
    price: 5500,
    unit: "day",
    distance: "4.2 km away",
    location: "Sector 62, Noida",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80&fit=crop",
    status: "Available Now",
    statusColor: "secondary",
    verified: true,
    category: "Spaces"
  },
  {
    id: 13,
    title: "Indiranagar Urban Reading Hall",
    price: 350,
    unit: "hour",
    distance: "2.0 km away",
    location: "Indiranagar, Bengaluru",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80&fit=crop",
    status: "Available Tomorrow",
    statusColor: "primary",
    verified: true,
    category: "Spaces"
  },
  {
    id: 14,
    title: "Kendriya Vidyalaya Playground",
    price: 600,
    unit: "hour",
    distance: "1.1 km away",
    location: "Dwarka, Delhi",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
    status: "Available Now",
    statusColor: "secondary",
    verified: false,
    category: "Spaces"
  },
  {
    id: 8,
    title: "Pro-Grade Concrete Mixer",
    price: 2200,
    unit: "day",
    distance: "4.8 km away",
    location: "Okhla Industrial Area",
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0TN6rcINyhQkzK_1FTUkr2lpzFocP_fViYF-Ok74B05O-YWRJOPuPdV_WQll_KdfAyzJu5dDG7c7IK_U6JIVr8EzwZuefHq4GFVsK4ddyDqFbxLGT5mzTLQ1bQG_QrpW2UXwqmx81FLvAeStMdyjU0r5w-2BtP50eE6EDfHVByA9z8BuGnawpmNi9cod7XYh9p1Tr_LjMwtBUzuRTequnn9c3E0R665HOrGB4xlhfhevJ2LqmRhTf",
    status: "Available Now",
    statusColor: "secondary",
    verified: true,
    category: "Tools"
  },
  {
    id: 9,
    title: "DJI Mavic 3 Cine Camera Drone",
    price: 5500,
    unit: "day",
    distance: "2.1 km away",
    location: "Saket, Delhi",
    rating: 5.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB5SmkY5pUMRvOfxxxeCdexO6doliWl3NTW0PC7W1w9Uteohbx64N2DWiQMOY-WsfRM4bmFj2yV6bGNsq2gbF5oXfuOzL8I0OKfrIvcGC2poZlPrznirCXDt-UG5_ALSiuu1OUNL-vdlx6ijc7BBx-nRbAoDneIC83Ctri3iawdcm6Uz5it2f5TooY9uHItM44tJnQJMVWim0PxSVykdD9deXJhUq0zyJdJT_SN4CxSAjBdx8-aMrM",
    status: "In Use (Reserve Now)",
    statusColor: "primary",
    verified: true,
    category: "Cameras"
  }
];

const categories = ["All", "Spaces", "Generators", "Printers", "Tools", "Cameras"];

const Explore = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showResults, setShowResults] = useState(true);

  // Filter Logic
  const filteredAssets = initialAssets.filter(asset => {
    const matchesSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          asset.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || asset.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pt-16 pb-24 min-h-screen bg-surface">
      <div className="flex flex-col w-full relative h-full">
        
        {/* Sticky Search & Filter Header */}
        <div className="sticky top-16 z-40 bg-surface/90 backdrop-blur-md px-container-margin py-sm shadow-sm flex flex-col gap-sm">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              className="w-full pl-xl pr-sm py-sm rounded-full bg-surface-container text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" 
              placeholder="Search spaces, printers, generators..." 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-xs top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>
          
          {/* Category Chips Scroll */}
          <div className="flex overflow-x-auto gap-xs pb-xs no-scrollbar hide-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-sm py-xs rounded-full text-label-md font-label-md transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-primary text-on-primary shadow-sm' 
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Map/List Toggle (Floating) */}
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 bg-inverse-surface text-inverse-on-surface rounded-full px-xs py-xs flex items-center shadow-xl">
          <button className="px-md py-xs rounded-full bg-on-surface text-surface text-label-md font-label-md flex items-center gap-xs cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span> List
          </button>
          <button className="px-md py-xs rounded-full text-inverse-on-surface text-label-md font-label-md flex items-center gap-xs cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">map</span> Map
          </button>
        </div>

        {/* Content Area */}
        {filteredAssets.length === 0 ? (
          <div className="flex-1 px-container-margin py-md flex flex-col items-center justify-center min-h-[530px] text-center" id="empty-state">
            <div className="w-48 h-48 mb-md relative">
              <svg className="w-full h-full text-surface-container-highest absolute inset-0 animate-pulse" viewBox="0 0 200 200">
                <circle cx="100" cy="100" fill="currentColor" opacity="0.5" r="80"></circle>
                <circle cx="100" cy="100" fill="currentColor" opacity="0.8" r="50"></circle>
              </svg>
              <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-tertiary text-[64px]">search_off</span>
            </div>
            <h2 className="text-headline-md font-headline-md text-on-surface mb-xs font-semibold">No assets found</h2>
            <p className="text-body-md font-body-md text-on-surface-variant mb-lg max-w-[280px]">
              We couldn't find matches for "{searchQuery || selectedCategory}" nearby. Widen your search or clear filters.
            </p>
            <button 
              className="px-lg py-sm rounded-full bg-primary-container text-on-primary text-label-md font-label-md shadow-md flex items-center gap-xs active:scale-95 transition-transform cursor-pointer hover:bg-primary transition-colors" 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span> Reset Filters
            </button>
          </div>
        ) : (
          <div className="flex-1 px-container-margin py-md flex flex-col gap-md">
            {filteredAssets.map(asset => (
              <div 
                key={asset.id}
                onClick={() => navigate(`/asset/${asset.id === 2 ? 2 : 1}`)}
                className="bg-surface-container-lowest rounded-xl shadow-card overflow-hidden flex flex-col group relative cursor-pointer hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="h-40 w-full relative">
                  <img className="w-full h-full object-cover" src={asset.image} alt={asset.title} />
                  <div className="absolute top-sm right-sm bg-surface-container-lowest/90 backdrop-blur-sm px-xs py-xs rounded-full flex items-center gap-xs text-on-surface text-label-md font-label-md shadow-sm">
                    <span className="material-symbols-outlined text-[14px] text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> {asset.rating}
                  </div>
                </div>
                <div className="p-md flex flex-col gap-xs">
                  <div className="flex justify-between items-start gap-sm">
                    <h3 className="text-body-lg font-headline-md text-on-surface truncate font-semibold group-hover:text-primary transition-colors">{asset.title}</h3>
                    <div className="text-body-lg font-headline-md text-primary-container whitespace-nowrap font-semibold">₹{asset.price.toLocaleString('en-IN')}<span className="text-label-md font-label-md text-on-surface-variant font-normal">/{asset.unit}</span></div>
                  </div>
                  <div className="flex items-center gap-xs text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>{asset.distance} • {asset.location}</span>
                  </div>
                  <div className="mt-xs flex items-center justify-between">
                    <div className={`flex items-center gap-xs ${asset.statusColor === 'secondary' ? 'bg-secondary-container/50 text-on-secondary-container' : 'bg-primary-fixed/50 text-on-primary-fixed'} px-sm py-xs rounded-full`}>
                      <div className={`w-2 h-2 rounded-full ${asset.statusColor === 'secondary' ? 'bg-secondary' : 'bg-primary'}`}></div>
                      <span className="text-label-md font-label-md">{asset.status}</span>
                    </div>
                    {asset.verified && (
                      <div className="flex items-center gap-xs text-secondary text-label-md font-label-md">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Verified Owner
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Explore;
