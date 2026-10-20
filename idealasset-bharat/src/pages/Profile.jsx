import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: 'dashboard', label: 'Owner Dashboard', path: '/dashboard' },
    { icon: 'person', label: 'Edit Profile', onClick: () => alert('Edit Profile flow coming soon!') },
    { icon: 'payment', label: 'Payment Methods', onClick: () => alert('Payment Methods flow coming soon!') },
    { 
      icon: 'star', 
      label: 'My Reviews', 
      extra: <div className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-bold rounded-full mr-xs">2 New</div>, 
      onClick: () => alert('Reviews flow coming soon!') 
    },
    { icon: 'help', label: 'Help & Support', onClick: () => alert('Help & Support flow coming soon!') },
    { icon: 'settings', label: 'Settings', onClick: () => alert('Settings flow coming soon!') }
  ];

  return (
    <main className="pt-16 pb-24 min-h-screen bg-surface">
      <div className="flex flex-col w-full pb-xl">
        {/* Profile Header */}
        <div className="flex flex-col items-center px-container-margin gap-sm">
          <div className="relative mt-md">
            <img alt="User Profile" className="w-24 h-24 rounded-full object-cover shadow-[0_8px_24px_rgba(10,42,107,0.15)] ring-4 ring-surface" src="/profile.jpg"/>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-sm transition-transform active:scale-95">
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </button>
          </div>
          <div className="flex flex-col items-center gap-xs text-center mt-sm">
            <div className="flex items-center gap-xs">
              <h1 className="text-headline-md font-headline-md text-on-surface">Anshika Rathi</h1>
              <span className="material-symbols-outlined text-secondary bg-secondary-container/50 rounded-full text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }} title="Verified Identity">verified</span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant">Member since 2023</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="px-container-margin mt-lg">
          <div className="grid grid-cols-2 gap-md">
            <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(10,42,107,0.06)] flex flex-col items-center justify-center gap-xs relative overflow-hidden group">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/5 rounded-full transition-transform group-active:scale-150"></div>
              <span className="text-display-lg font-display-lg text-primary font-bold">12</span>
              <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider text-center">Assets Listed</span>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-md shadow-[0_4px_20px_rgba(10,42,107,0.06)] flex flex-col items-center justify-center gap-xs relative overflow-hidden group">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary/5 rounded-full transition-transform group-active:scale-150"></div>
              <span className="text-display-lg font-display-lg text-secondary font-bold">47</span>
              <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider text-center">Bookings Made</span>
            </div>
          </div>
        </div>

        {/* Saved Locations Bento */}
        <div className="px-container-margin mt-lg">
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(10,42,107,0.06)] overflow-hidden">
            <div className="p-md flex items-center justify-between bg-surface-bright">
              <div className="flex items-center gap-xs text-on-surface">
                <span className="material-symbols-outlined text-primary-container">bookmark</span>
                <h2 className="text-body-md font-headline-md font-semibold">Saved Locations</h2>
              </div>
              <button className="text-label-md font-label-md text-primary font-semibold cursor-pointer">View All</button>
            </div>
            <div className="p-base flex gap-md overflow-x-auto pb-md snap-x no-scrollbar hide-scrollbar">
              <div className="min-w-[200px] flex-shrink-0 snap-center rounded-lg overflow-hidden relative group">
                <div className="w-full h-24 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1ggksFVfp9sQC-dqBjxPnMyr0z7JeeZ2KaVbi6eBFsqAC0cDuqMstpYhBeL2qjQUntyKrKvsF92Sg6o3PI-6yxRHSl-AINWdFCMbBGSpaLh1XC56ttCg4V36lQGQ2fV8CBrGnxh5ov0veu04BGVrmeu1A34EVqchimylzIcKUtGmMFKWDCnaAI8vHlJ_z8SLPsqQprCBHI-ytQ7wmBNS8fuUWnrIDDnaQCP5HP7WmuVoEx9PV3_o5')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
                <p className="absolute bottom-xs left-sm text-label-md font-label-md text-on-primary">Downtown Core</p>
              </div>
              <div className="min-w-[200px] flex-shrink-0 snap-center rounded-lg overflow-hidden relative group">
                <div className="w-full h-24 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSVk56zsQOJx_Tz1PHUQJfiGHz4MLppY6GxiuVKvHcm7WKGe-1gzIZxD9rUm2Gu4oAFvDSMnlcOMt1l5c_dgKMN_a3A2oKOWopr3peJgWXSwVwIl0BYnflQq3IxfXdUqip2Ql5GbS7JXAdY0ONGtC4smeXnm-h_Bl7n-BvTGQ-0wt0NH9q0fSbXud8Q9kIwKOIWqedCm58Kf1zb0m_5-gmVyyxeaZzQYeIvCSYDrDLQ85MqDUeHwKb')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
                <p className="absolute bottom-xs left-sm text-label-md font-label-md text-on-primary">Brooklyn Heights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu List */}
        <div className="px-container-margin mt-lg mb-xl">
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(10,42,107,0.04)] overflow-hidden flex flex-col menu-container">
            {menuItems.map((item, idx) => (
              <React.Fragment key={idx}>
                <button 
                  onClick={() => item.path ? navigate(item.path) : item.onClick()}
                  className="menu-item flex items-center justify-between p-md bg-transparent hover:bg-surface-container-low transition-colors w-full text-left relative overflow-hidden cursor-pointer"
                >
                  <div className="flex items-center gap-md relative z-10">
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-tertiary-container">
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>
                    <span className="text-body-md font-body-md text-on-surface font-semibold">{item.label}</span>
                  </div>
                  <div className="flex items-center relative z-10">
                    {item.extra}
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">chevron_right</span>
                  </div>
                </button>
                <div className="h-[1px] w-[calc(100%-32px)] bg-surface-variant mx-auto opacity-50"></div>
              </React.Fragment>
            ))}
            
            <button 
              onClick={() => navigate('/')}
              className="menu-item flex items-center justify-between p-md bg-transparent hover:bg-error-container/20 transition-colors w-full text-left relative overflow-hidden cursor-pointer"
            >
              <div className="flex items-center gap-md relative z-10">
                <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
                  <span className="material-symbols-outlined text-[20px]">logout</span>
                </div>
                <span className="text-body-md font-body-md text-error font-semibold">Log Out</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
