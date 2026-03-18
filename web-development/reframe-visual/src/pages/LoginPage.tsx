import React from 'react';
import { Navigation } from '../components/Navigation';

export const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      <main className="flex-grow flex items-center justify-center py-24 px-6 relative overflow-hidden">
        
        {/* Background Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="w-full max-w-md bg-white border-2 border-black p-10 md:p-14 shadow-[8px_8px_0px_#121212] relative z-10">
          <h1 className="text-3xl font-outfit font-black tracking-tight uppercase text-black mb-2 text-center">Platform Login</h1>
          <p className="text-center text-sm font-medium text-black/60 mb-8">Access your dashboard and active jobs.</p>
          
          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest mb-2">Email Address</label>
              <input type="email" placeholder="agency@example.com" className="w-full p-4 border-2 border-black/20 focus:border-[#6366F1] outline-none font-medium transition-colors" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Password</label>
                <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#6366F1] hover:underline">Forgot?</a>
              </div>
              <input type="password" placeholder="••••••••" className="w-full p-4 border-2 border-black/20 focus:border-[#6366F1] outline-none font-medium transition-colors" />
            </div>
            
            <button type="button" onClick={() => window.location.href='/dashboard'} className="w-full bg-black text-white py-4 mt-4 uppercase text-[11px] font-bold tracking-[0.15em] border-2 border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_#6366F1] transition-all">
              Sign In —
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="h-[2px] bg-black/10 flex-grow"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">Or continue with</span>
            <div className="h-[2px] bg-black/10 flex-grow"></div>
          </div>

          <button className="w-full bg-white text-black py-4 uppercase text-[11px] font-bold tracking-[0.15em] border-2 border-black/20 hover:border-black transition-colors flex justify-center items-center gap-2">
            Google
          </button>
        </div>
      </main>
    </div>
  );
};
