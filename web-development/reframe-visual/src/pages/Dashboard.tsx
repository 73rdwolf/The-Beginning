import React from 'react';
import { Navigation } from '../components/Navigation';

const activeJobs = [
  { id: 'JOB-9482', name: 'Spring Collection 2026', images: 42, status: 'In Progress', progress: '60%', due: 'Tomorrow, 4:00 PM' },
  { id: 'JOB-9481', name: 'Jewelry Macro Shots', images: 12, status: 'Pending Review', progress: '100%', due: 'Today, 1:00 PM' }
];

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col font-inter">
      <Navigation />
      
      {/* Platform Sub-Nav */}
      <div className="bg-[#121212] text-white px-10 md:px-20 lg:px-[10%] xl:px-[12%] py-4 flex gap-8 border-b-4 border-[#6366F1]">
        <a href="/dashboard" className="text-[11px] font-bold uppercase tracking-widest hover:text-[#6366F1] transition-colors">Overview</a>
        <a href="/jobs/new/services" className="text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Start Job</a>
        <a href="/account" className="text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Account & Billing</a>
      </div>

      <main className="flex-grow py-12 px-10 md:px-20 lg:px-[10%] xl:px-[12%]">
        <div className="flex justify-between items-end mb-12 border-b-2 border-black pb-6">
          <div>
            <h1 className="text-3xl font-outfit font-black tracking-tight uppercase text-black">Active Workspace</h1>
            <p className="text-black/60 font-medium mt-1">Agency Account / Shovon Ahmed</p>
          </div>
          <a href="/jobs/new/services" className="bg-[#6366F1] text-white border-2 border-black px-6 py-3 rounded-2xl text-[10px] font-bold tracking-widest uppercase hover:-translate-y-1 shadow-[4px_4px_0px_#121212] transition-all">
            + Create New Job
          </a>
        </div>

        <h2 className="text-xl font-outfit font-bold uppercase tracking-tighter mb-6">Current Jobs</h2>
        <div className="grid grid-cols-1 gap-6 mb-16">
          {activeJobs.map((job, idx) => (
            <div key={idx} className="bg-white border-2 border-black p-6 rounded-3xl shadow-[4px_4px_0px_#121212] flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex-grow w-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{job.id}</span>
                  <h3 className="text-lg font-bold tracking-tight uppercase">{job.name}</h3>
                </div>
                <div className="flex items-center gap-8 text-sm font-medium text-black/70">
                  <span>{job.images} Images</span>
                  <span>Due: {job.due}</span>
                </div>
              </div>
              
              <div className="w-full md:w-64">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#6366F1]">{job.status}</span>
                  <span className="text-[10px] font-bold tracking-widest">{job.progress}</span>
                </div>
                <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#6366F1]" style={{ width: job.progress }}></div>
                </div>
              </div>

              <a href={`/jobs/${job.id}`} className="w-full md:w-auto text-center border-2 border-black px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                View
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-outfit font-bold uppercase tracking-tighter mb-6">Recent Activity</h2>
        <div className="bg-white border-2 border-black p-8 rounded-3xl shadow-[4px_4px_0px_#121212]">
          <div className="text-center text-black/40 py-8 font-medium">No archived jobs to display.</div>
        </div>

      </main>
    </div>
  );
};
