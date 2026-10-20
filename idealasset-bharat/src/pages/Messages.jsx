import React, { useState, useRef, useEffect } from 'react';

const initialChats = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop&crop=face',
    unread: 2,
    time: '10:42 AM',
    latest: "Booking confirmed! I'll be there by 9 AM sharp.",
    tag: 'Booking Confirmed',
    tagClass: 'bg-tertiary-container/20 text-on-tertiary-container',
    messages: [
      { sender: 'them', text: "Namaste! I wanted to confirm my booking for the DU North Campus Auditorium on 24th October. Is the projector and PA system included in the rental?", time: '10:30 AM' },
      { sender: 'me', text: 'Namaste Priya ji! Yes, the auditorium comes with a full PA system, projector, and a 200-seat capacity. You can also request mic setups for ₹500 extra.', time: '10:38 AM' },
      { sender: 'them', text: "That's great! Booking confirmed! I'll be there by 9 AM sharp.", time: '10:42 AM' }
    ],
    asset: {
      title: 'DU North Campus College Auditorium',
      img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80',
      details: 'Oct 24 • 9:00 AM - 5:00 PM'
    }
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    unread: 0,
    time: 'Yesterday',
    latest: 'Thank you! The classroom was perfect for our coaching batch.',
    tag: 'Completed',
    tagClass: 'bg-surface-variant text-on-surface-variant',
    messages: [
      { sender: 'me', text: 'Arjun ji, hope the classroom booking went smoothly. Please leave a review when you get a chance!', time: '2:15 PM' },
      { sender: 'them', text: 'Thank you! The classroom was perfect for our coaching batch. Air conditioning worked well and the whiteboard was clean. Will definitely book again.', time: '4:30 PM' }
    ],
    asset: {
      title: 'CBSE Model School Classroom',
      img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80&sat=-50',
      details: 'Oct 12 • 8:00 AM - Oct 12 • 2:00 PM'
    }
  },
  {
    id: 3,
    name: 'Kavita Nair',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    unread: 0,
    time: 'Oct 12',
    latest: 'What is the per-day rate for the conference hall?',
    tag: 'Inquiry',
    tagClass: 'bg-primary-fixed-dim/20 text-primary',
    messages: [
      { sender: 'them', text: 'What is the per-day rate for the conference hall? We need it for a 2-day corporate training session for 50 people next month.', time: '3:00 PM' }
    ],
    asset: {
      title: 'Rajendra Nagar Conference Hall',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeA_TqWBflsz2Ec5Q-kvFa0tqC4GSs5J_UL5cCz-C0_axds4wbZwjRyltCG83LCWfTHjxYzwSvLc2pUkvMvRUk_IO5FJ9RsjvUB0hhlyurZ9idf_R5MGvcwWU2rqwP0yW7KxZTfiFguVsw6cpogsp8rpD9nas30_As_HyeU4xKUZmg0w3ReapdVblgmuOobXStqkJ0aH3banrdxmqOfe1Dg4YNlVDxP3Sqknpkdyo-XMPbn-pUOqcv',
      details: 'Nov 5 • 9:00 AM - Nov 6 • 6:00 PM'
    }
  },
  {
    id: 4,
    name: 'Suresh Babu',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    unread: 1,
    time: '9:15 AM',
    latest: 'Is the science lab available on 2nd November for 3 hours?',
    tag: 'Inquiry',
    tagClass: 'bg-primary-fixed-dim/20 text-primary',
    messages: [
      { sender: 'them', text: 'Namaste! I am Suresh from Coimbatore. Is the AID Delhi Science Lab available on 2nd November for 3 hours? We have a school group of 30 students for a practical session.', time: '9:10 AM' },
      { sender: 'them', text: 'Is the science lab available on 2nd November for 3 hours?', time: '9:15 AM' }
    ],
    asset: {
      title: 'AID Delhi Science Lab',
      img: '/science-lab.jpg',
      details: 'Nov 2 • 10:00 AM - 1:00 PM'
    }
  }
];

const Messages = () => {
  const [chats, setChats] = useState(initialChats);
  const [activeChatId, setActiveChatId] = useState(null);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const activeChat = chats.find(c => c.id === activeChatId);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeChat?.messages]);

  const handleSelectChat = (id) => {
    setActiveChatId(id);
    // Mark as read
    setChats(prev => prev.map(c => c.id === id ? { ...c, unread: 0 } : c));
    
    // Hide bottom navigation via translation
    const globalNav = document.querySelector('nav');
    if (globalNav) {
      globalNav.style.transform = 'translateY(100%)';
      globalNav.style.transition = 'transform 0.3s ease-out';
    }
  };

  const handleCloseChat = () => {
    setActiveChatId(null);
    
    // Restore bottom navigation
    const globalNav = document.querySelector('nav');
    if (globalNav) {
      globalNav.style.transform = 'translateY(0)';
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !activeChatId) return;

    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setChats(prev => prev.map(c => {
      if (c.id === activeChatId) {
        return {
          ...c,
          time: timeString,
          latest: inputText,
          messages: [...c.messages, { sender: 'me', text: inputText, time: timeString }]
        };
      }
      return c;
    }));

    setInputText('');
  };

  return (
    <main className="pt-16 min-h-screen bg-surface">
      <div className="flex flex-col w-full h-full relative">
        
        {/* Conversation List View */}
        <div className="flex flex-col w-full pb-24">
          {/* Search Bar */}
          <div className="px-container-margin py-sm bg-surface sticky top-16 z-10 shadow-[0_2px_10px_rgba(10,42,107,0.05)]">
            <div className="flex items-center gap-sm bg-surface-container-low rounded-full px-md py-sm transition-colors focus-within:bg-surface-container">
              <span className="material-symbols-outlined text-on-surface-variant">search</span>
              <input
                className="flex-1 bg-transparent border-none focus:outline-none text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/50"
                placeholder="Search messages..."
                type="text"
              />
            </div>
          </div>

          {/* Active Chats */}
          <div className="px-container-margin py-xs flex flex-col gap-xs mt-sm">
            {chats.map(chat => (
              <button
                key={chat.id}
                onClick={() => handleSelectChat(chat.id)}
                className={`chat-item flex items-center gap-md p-sm rounded-xl transition-all duration-200 active:scale-[0.98] text-left w-full ${
                  chat.unread > 0 ? 'bg-surface-container-low font-semibold' : 'hover:bg-surface-container-lowest'
                }`}
              >
                <div className="relative flex-shrink-0">
                  {chat.avatar ? (
                    <img className="w-14 h-14 rounded-full object-cover shadow-sm" alt={chat.name} src={chat.avatar} />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline-md text-headline-md shadow-sm">
                      {chat.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  {chat.unread > 0 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-container rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm ring-2 ring-surface">
                      {chat.unread}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-xs">
                    <h3 className="font-headline-md text-body-md text-on-surface truncate">{chat.name}</h3>
                    <span className={`font-label-md text-label-md ${chat.unread > 0 ? 'text-primary-container font-bold' : 'text-on-surface-variant'}`}>
                      {chat.time}
                    </span>
                  </div>
                  <p className={`font-body-sm text-body-sm truncate ${chat.unread > 0 ? 'text-on-surface font-semibold' : 'text-on-surface-variant'}`}>
                    {chat.latest}
                  </p>
                  <div className="flex items-center gap-xs mt-1">
                    <span className={`px-2 py-0.5 rounded-sm font-label-md text-[10px] ${chat.tagClass || 'bg-surface-variant text-on-surface-variant'}`}>
                      {chat.tag}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Individual Chat Screen Overlay */}
        <div
          className={`fixed inset-0 z-[60] bg-surface flex flex-col pt-safe transition-transform duration-300 ease-out ${
            activeChatId ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {activeChat && (
            <>
              {/* Chat Header */}
              <div className="h-16 px-container-margin flex items-center gap-md bg-[#0A2A6B] text-white shadow-md relative z-20">
                <button
                  onClick={handleCloseChat}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="flex items-center gap-sm flex-1 min-w-0">
                  {activeChat.avatar ? (
                    <img className="w-10 h-10 rounded-full object-cover" alt={activeChat.name} src={activeChat.avatar} />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-semibold">
                      {activeChat.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <div className="flex flex-col min-w-0">
                    <h2 className="font-headline-md text-body-md font-semibold truncate text-white">{activeChat.name}</h2>
                    <span className="font-label-md text-[10px] text-white/80 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-secondary-container rounded-full animate-pulse"></span> Online
                    </span>
                  </div>
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>

              {/* Pinned Booking Context */}
              {activeChat.asset && (
                <div className="bg-surface-container-low px-container-margin py-sm shadow-[0_2px_15px_rgba(10,42,107,0.08)] relative z-10">
                  <div className="flex gap-sm items-center bg-white rounded-lg p-sm shadow-sm relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
                    <img className="w-12 h-12 rounded bg-surface-container object-cover" alt={activeChat.asset.title} src={activeChat.asset.img} />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body-md text-body-sm font-semibold text-on-surface truncate">{activeChat.asset.title}</h4>
                      <p className="font-label-md text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[12px]">calendar_today</span> {activeChat.asset.details}
                      </p>
                    </div>
                    <button className="px-3 py-1.5 bg-secondary-container/30 text-on-secondary-container rounded-full font-label-md text-[10px] whitespace-nowrap hover:bg-secondary-container/50 transition-colors cursor-pointer">
                      View Details
                    </button>
                  </div>
                </div>
              )}

              {/* Chat Messages Area */}
              <div className="flex-1 overflow-y-auto px-container-margin py-md flex flex-col gap-sm bg-surface">
                <div className="flex justify-center my-xs">
                  <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-md text-[10px] text-on-surface-variant">Today</span>
                </div>

                {activeChat.messages.map((msg, index) => {
                  const isMe = msg.sender === 'me';
                  return (
                    <div
                      key={index}
                      className={`flex flex-col max-w-[85%] ${isMe ? 'self-end items-end mt-sm' : 'self-start items-start'}`}
                    >
                      <div
                        className={`p-sm rounded-2xl shadow-sm font-body-md text-body-sm ${
                          isMe
                            ? 'bg-primary text-on-primary rounded-tr-sm'
                            : 'bg-surface-container-low text-on-surface rounded-tl-sm'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <div className="flex items-center gap-1 mt-1 mx-1">
                        <span className="font-label-md text-[10px] text-on-surface-variant">{msg.time}</span>
                        {isMe && (
                          <span className="material-symbols-outlined text-[12px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                            done_all
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <form
                onSubmit={handleSend}
                className="p-sm bg-white border-t border-surface-container-high shadow-[0_-4px_20px_rgba(10,42,107,0.05)] pb-safe relative z-20"
              >
                <div className="flex items-end gap-sm bg-surface rounded-xl p-xs shadow-inner">
                  <button
                    type="button"
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors mb-0.5"
                  >
                    <span className="material-symbols-outlined">add_circle</span>
                  </button>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend(e);
                      }
                    }}
                    className="flex-1 bg-transparent border-none focus:outline-none resize-none py-2.5 font-body-md text-body-sm text-on-surface max-h-[100px]"
                    placeholder="Type a message..."
                    rows={1}
                  />
                  <button
                    type="submit"
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-primary-container text-white rounded-full hover:bg-primary transition-colors shadow-sm mb-0.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Messages;
