import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialAssets = [
  {
    id: 1,
    title: 'Downtown Co-working Space',
    location: 'Connaught Place, Delhi',
    type: 'Workspace',
    status: 'Active',
    statusColor: 'text-tertiary',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBziExLTbw0tl57tDR1loN4SeL9e1mqMk-c9SSTdu-NeLeDyZZv3C-44Bij9gRuN0A5rUjdS_UAJUypXmDr8UggyTuOaV_5jRB-b7eeZxcwvcIunJONsfzGItUzLyaXfel-p66GGtBr-tkpQh0v69oidvzL-hMXvaKpi8ec1jKYpWH6KhrP6PhrOU8W0rtRlSj3_9ao9xuZvPBdV4EM9dkooqBi4bEzFG7vukHZyaZI0u7LDIfgy0zB'
  },
  {
    id: 2,
    title: 'EV Delivery Fleet (5 Units)',
    location: 'Multiple Locations',
    type: 'Vehicles',
    status: 'Maintenance',
    statusColor: 'text-primary',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgIOwqfhsDFUy2zBut_jw49-dM7EASio5S9TdliTWj8uo4zzFj8XOj6DIQ9uLZuHTvso27rYZ_Pr5fCRuhMIzjOZ5EL38I2uBOizYzD8nIjenu68URinCLKQOJ5DV6piz2p6mxTXe6QYoIO0kDand4ECJart2_tCwI0n4ZfemLAsHpwxJFJHQMR5ycKF8xd57w5s8SZDx_ztw6YhFhws4VBhtSvv1Nj_jrA3pgW629mou3ITe-R6TV'
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [assets, setAssets] = useState(initialAssets);

  return (
    <main className="pt-16 min-h-screen bg-surface">
      <div className="flex flex-col w-full gap-stack-lg p-margin-mobile pb-24">
        
        {/* Welcome & Summary Hero */}
        <section className="flex flex-col gap-stack-md mt-sm">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold">Welcome back, Anshika!</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Here is a quick overview of your assets today.</p>
            </div>
            {/* Back to profile button */}
            <button 
              onClick={() => navigate('/profile')}
              className="flex items-center gap-xs px-sm py-xs bg-surface-container rounded-full text-label-md font-semibold text-primary cursor-pointer hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Profile
            </button>
          </div>

          {/* Earnings Bento Grid */}
          <div className="grid grid-cols-2 gap-stack-sm mt-sm">
            <div className="col-span-2 rounded-xl bg-primary-container text-on-primary p-stack-md flex flex-col justify-between relative overflow-hidden min-h-[140px] shadow-sm">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-label-md text-white/80 uppercase tracking-wider">Total Earnings</span>
                  <span className="font-display font-bold text-3xl text-white">₹42,500</span>
                </div>
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm text-white">
                  <span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
                </div>
              </div>
              <div className="relative z-10 flex items-center gap-2 mt-auto text-white">
                <span className="material-symbols-outlined text-[16px] text-primary-fixed">trending_up</span>
                <span className="font-label-md text-label-md">+12.5% from last month</span>
              </div>
            </div>
            <div className="rounded-xl bg-surface-container p-stack-md flex flex-col justify-between shadow-sm h-32">
              <span className="material-symbols-outlined text-secondary text-[24px] mb-2">pending_actions</span>
              <div>
                <span className="font-headline-md text-headline-md text-on-surface font-semibold block text-xl">12</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Pending Bookings</span>
              </div>
            </div>
            <div className="rounded-xl bg-surface-container p-stack-md flex flex-col justify-between shadow-sm h-32">
              <span className="material-symbols-outlined text-tertiary text-[24px] mb-2">check_circle</span>
              <div>
                <span className="font-headline-md text-headline-md text-on-surface font-semibold block text-xl">8</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Active Today</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-sm">
          <div className="flex gap-stack-sm overflow-x-auto pb-stack-sm snap-x hide-scrollbar -mx-margin-mobile px-margin-mobile">
            {[
              { icon: 'add', label: 'Add Asset', color: 'text-primary bg-primary/10' },
              { icon: 'calendar_month', label: 'Calendar', color: 'text-secondary bg-secondary/10' },
              { icon: 'insights', label: 'Reports', color: 'text-tertiary bg-tertiary/10' },
              { icon: 'build', label: 'Maintenance', color: 'text-error bg-error/10' }
            ].map((act, i) => (
              <button 
                key={i} 
                onClick={() => alert(`${act.label} flow coming soon!`)}
                className="flex-shrink-0 snap-start flex flex-col items-center gap-2 p-stack-sm rounded-lg bg-surface-container-low min-w-[80px] shadow-sm hover:bg-surface-container transition-colors cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${act.color}`}>
                  <span className="material-symbols-outlined">{act.icon}</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface font-semibold">{act.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Active Bookings */}
        <section className="flex flex-col gap-stack-sm mt-sm">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Active Bookings</h2>
            <a className="font-label-md text-label-md text-primary flex items-center gap-[2px] font-semibold" href="#">
              View All 
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </a>
          </div>

          <div className="flex flex-col gap-stack-sm">
            {/* Booking Card 1 */}
            <div className="bg-surface-container rounded-xl p-stack-md flex flex-col gap-stack-sm shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex gap-stack-sm items-center">
                  <div className="w-12 h-12 rounded-lg bg-surface-variant overflow-hidden flex-shrink-0 shadow-inner">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Conference Room A" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3v2uak0ck3uuyK6PXln0_2VH8DyDnAS56Lrtp8LUblKBg-JPZTvMTNlyP-uzOqyrVgFb1yT5_-LLqnMup9DsHYaxQKrge4lr1-JJfickYbTMXA96Zzw7eZh1h3OwcqfdVztu7YCm3swvlmLuK0Ytf2kNI6-PFezQC7nV0uFbO_qAvQfLfW3JS91Mmnn31MlrmrBhNyeXly_husog5l0s8bRl_Ku5G0Sv6BOXTQvo5fKHWtBXe-7b5" 
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-body-md text-body-md text-on-surface font-semibold truncate">Conference Room A</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate">TechCorp Solutions</span>
                  </div>
                </div>
                <span className="px-2 py-1 bg-tertiary-container/20 text-on-tertiary-container font-label-md text-[10px] rounded-full whitespace-nowrap font-bold">In Progress</span>
              </div>
              <div className="flex items-center gap-stack-md mt-2 pt-stack-sm border-t border-surface-variant">
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span className="font-label-md text-label-md">09:00 AM - 05:00 PM</span>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant ml-auto">
                  <span className="material-symbols-outlined text-[16px]">payments</span>
                  <span className="font-label-md text-label-md font-bold text-on-surface">₹2,500</span>
                </div>
              </div>
            </div>

            {/* Booking Card 2 */}
            <div className="bg-surface-container rounded-xl p-stack-md flex flex-col gap-stack-sm shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex gap-stack-sm items-center">
                  <div className="w-12 h-12 rounded-lg bg-surface-variant overflow-hidden flex-shrink-0 shadow-inner">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Community Hall" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMivTxq1ujflCrUGRRUsxIlu4cVG5LwsmdOApd8c2EKMFI0k8BVkU6ApHZFFhtHiu8774KPqiar_V9wN5hxVdcSssBgQ1SWbwI1jHCAsBYEkB2DEIgB1E9QBMHf0YgPlSB-0m12H0PnzzoihhAaOHCzLkQFNFcgxhU1wlVtjuY9WfvQRofw6ndVNMc6Rh_l7HHdV4qcHxzNi10LkXbJ1ZXgOI_MZpfM1-HBWDsqRPnriGytbHrbbls" 
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-body-md text-body-md text-on-surface font-semibold truncate">Community Hall</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Local NGO Meetup</span>
                  </div>
                </div>
                <span className="px-2 py-1 bg-secondary-container/20 text-on-secondary-container font-label-md text-[10px] rounded-full whitespace-nowrap font-bold">Upcoming</span>
              </div>
              <div className="flex items-center gap-stack-md mt-2 pt-stack-sm border-t border-surface-variant">
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span className="font-label-md text-label-md">06:00 PM - 09:00 PM</span>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant ml-auto">
                  <span className="material-symbols-outlined text-[16px]">payments</span>
                  <span className="font-label-md text-label-md font-bold text-on-surface">₹1,200</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Assets Overview */}
        <section className="flex flex-col gap-stack-sm mt-sm">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">My Assets</h2>
            <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
            </button>
          </div>

          <div className="flex flex-col gap-stack-md">
            {assets.map(asset => (
              <div 
                key={asset.id} 
                className="flex gap-stack-md items-center bg-surface-container-lowest p-stack-sm rounded-xl shadow-sm relative overflow-hidden"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative shadow-inner">
                  <img className="w-full h-full object-cover" alt={asset.title} src={asset.img} />
                  <div className={`absolute top-1 right-1 w-3 h-3 rounded-full border-2 border-surface-container-lowest ${
                    asset.status === 'Active' ? 'bg-secondary' : 'bg-primary'
                  }`}></div>
                </div>
                <div className="flex flex-col flex-1 min-w-0 py-1 h-20 justify-between">
                  <div>
                    <h3 className="font-body-lg text-body-md text-on-surface font-semibold truncate leading-tight mb-1">{asset.title}</h3>
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      <span className="font-body-sm text-[12px] truncate">{asset.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-surface-variant text-on-surface-variant font-label-md text-[10px] rounded uppercase font-bold">
                      {asset.type}
                    </span>
                    <span className={`font-label-md text-[12px] font-bold ${asset.statusColor}`}>
                      {asset.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default Dashboard;
