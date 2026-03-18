import React from 'react';
import { Navigation } from '../components/Navigation';

export const AccountSettings: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      
      {/* Platform Sub-Nav */}
      <div className="bg-[#121212] text-white px-10 md:px-20 lg:px-[10%] xl:px-[12%] py-4 flex gap-8 border-b-4 border-[#6366F1]">
        <a href="/dashboard" className="text-[11px] font-bold uppercase tracking-widest hover:text-white text-white/50 transition-colors">Overview</a>
        <a href="/jobs/new/services" className="text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Start Job</a>
        <a href="/account" className="text-[11px] font-bold uppercase tracking-widest text-white transition-colors">Account & Billing</a>
      </div>

      <main className="flex-grow py-12 px-10 md:px-20 lg:px-[10%] xl:px-[12%] flex flex-col md:flex-row gap-12">
        <aside className="w-full md:w-64 flex-shrink-0">
          <ul className="space-y-1">
            <li><a href="#" className="block py-3 px-4 border-l-4 border-[#6366F1] bg-black/5 font-bold uppercase tracking-widest text-[11px]">Profile</a></li>
            <li><a href="#" className="block py-3 px-4 border-l-4 border-transparent hover:bg-black/5 font-bold uppercase tracking-widest text-[11px] text-black/60">Billing</a></li>
            <li><a href="#" className="block py-3 px-4 border-l-4 border-transparent hover:bg-black/5 font-bold uppercase tracking-widest text-[11px] text-black/60">Team</a></li>
            <li><a href="#" className="block py-3 px-4 border-l-4 border-transparent hover:bg-black/5 font-bold uppercase tracking-widest text-[11px] text-black/60">API Keys</a></li>
          </ul>
        </aside>

        <div className="flex-grow max-w-3xl">
          <h1 className="text-3xl font-outfit font-black tracking-tight uppercase text-black mb-8 border-b-2 border-black pb-4">Profile Settings</h1>
          
          <div className="bg-white border-2 border-black p-8 rounded-3xl shadow-[4px_4px_0px_#121212] mb-8">
            <h2 className="text-xl font-outfit font-bold uppercase tracking-tight mb-6">Personal Information</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-black/60">First Name</label>
                  <input type="text" defaultValue="Shovon" className="w-full p-4 border-2 border-black/20 focus:border-[#6366F1] outline-none font-medium transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-black/60">Last Name</label>
                  <input type="text" defaultValue="Ahmed" className="w-full p-4 border-2 border-black/20 focus:border-[#6366F1] outline-none font-medium transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-black/60">Email Address</label>
                <input type="email" defaultValue="shovon@agency.com" className="w-full p-4 border-2 border-black/20 bg-black/5 text-black/50 outline-none font-medium" disabled />
                <span className="text-[10px] text-[#6366F1] font-bold mt-2 inline-block uppercase tracking-widest cursor-pointer hover:underline">Change Email</span>
              </div>
              <button type="button" className="bg-black text-white px-8 py-3 text-[11px] font-bold tracking-widest uppercase hover:-translate-y-1 shadow-[4px_4px_0px_#6366F1] transition-all">
                Save Changes
              </button>
            </form>
          </div>
          
          <div className="bg-red-50 border-2 border-red-200 p-8">
            <h2 className="text-xl font-outfit font-bold uppercase tracking-tight text-red-600 mb-2">Danger Zone</h2>
            <p className="text-sm font-medium text-red-600/70 mb-6">Permanently delete your account and all associated job data. This action is not reversible.</p>
            <button className="border-2 border-red-600 text-red-600 px-6 py-2 text-[10px] rounded-full font-bold tracking-widest uppercase hover:bg-red-600 hover:text-white transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
