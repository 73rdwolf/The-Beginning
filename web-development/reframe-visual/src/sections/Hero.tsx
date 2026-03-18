import React from 'react';
import { ArrowRight, Check, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const proofPoints = [
  'Human retouchers on every order',
  'Live review before payment',
  'Built for ecommerce volume',
];

const stats = [
  { label: 'Avg. first pass', value: '24h' },
  { label: 'Revision window', value: '1 free' },
  { label: 'Launch discount', value: '20%' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-black bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_32%),linear-gradient(180deg,_#ffffff_0%,_#f4f4ff_100%)]">
      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-[1600px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center px-8 py-16 sm:px-12 md:px-20 lg:py-20">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-4 py-2 text-[12px] font-black uppercase tracking-[0.18em] text-black shadow-[4px_4px_0px_#121212]">
              <Sparkles className="h-3.5 w-3.5 text-[#6366F1]" strokeWidth={2.5} />
              Premium product editing from $0.19
            </div>
            <div className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.18em] text-black/60">
              <Zap className="h-3.5 w-3.5 text-[#6366F1]" strokeWidth={2.5} />
              Fast review, no upfront payment
            </div>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-outfit text-[52px] font-black uppercase leading-[0.9] tracking-tight text-black sm:text-[68px] lg:text-[88px] xl:text-[104px]">
              Make your
              <br />
              catalog look
              <br />
              expensive.
            </h1>
            <p className="mt-6 max-w-2xl border-l-[3px] border-black pl-6 text-base font-medium leading-7 text-black/72 md:text-lg">
              Reframe turns raw ecommerce photography into conversion-grade imagery with
              human retouching, live review, and production-friendly turnaround.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/jobs/new/services"
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-black bg-black px-8 py-4 text-[13.5px] font-black uppercase tracking-[0.16em] text-white shadow-[6px_6px_0px_#6366F1] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_#6366F1]"
            >
              Get 3 Free Edits
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 rounded-full border-2 border-black bg-white px-8 py-4 text-[13.5px] font-black uppercase tracking-[0.16em] text-black transition-all duration-200 hover:bg-black hover:text-white"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] border border-black/10 bg-white/90 px-5 py-4 shadow-[0_12px_30px_rgba(18,18,18,0.06)]"
              >
                <div className="text-2xl font-outfit font-black uppercase tracking-tight text-black">
                  {stat.value}
                </div>
                <div className="mt-1 text-[12px] font-black uppercase tracking-[0.16em] text-black/52">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {proofPoints.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-3 text-[13.5px] font-black uppercase tracking-[0.14em] text-black/72"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black bg-white">
                  <Check className="h-3.5 w-3.5 text-[#6366F1]" strokeWidth={3} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative border-t border-black lg:border-l lg:border-t-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.28),_transparent_32%),linear-gradient(180deg,_#161616_0%,_#0d0d0d_100%)]" />
          <div className="relative flex min-h-[640px] items-center px-6 py-12 sm:px-10 md:px-14 lg:h-full">
            <div className="relative mx-auto w-full max-w-[640px]">
              <div className="absolute -left-4 top-10 rounded-[24px] border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
                <div className="text-[12px] font-black uppercase tracking-[0.18em] text-white/60">
                  Before
                </div>
                <div className="mt-2 text-[15px] font-bold uppercase tracking-wide text-white">
                  Flat light
                  <br />
                  weak edge detail
                </div>
              </div>

              <div className="absolute -right-4 bottom-14 rounded-[24px] border border-[#6366F1] bg-[#6366F1] px-5 py-4 text-white shadow-[0_18px_50px_rgba(99,102,241,0.28)]">
                <div className="text-[12px] font-black uppercase tracking-[0.18em] text-white/72">
                  After Reframe
                </div>
                <div className="mt-2 text-[15px] font-bold uppercase tracking-wide">
                  Depth restored
                  <br />
                  shelf-ready finish
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-white/12 bg-[#111111] shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <div>
                    <div className="text-[12px] font-black uppercase tracking-[0.18em] text-white/50">
                      Spring campaign
                    </div>
                    <div className="mt-1 text-lg font-outfit font-black uppercase tracking-tight text-white">
                      Premium studio recovery
                    </div>
                  </div>
                  <div className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[12px] font-black uppercase tracking-[0.18em] text-white/72">
                    18 / 42 approved
                  </div>
                </div>

                <div className="grid gap-3 p-5 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,_#2c2c2c_0%,_#1b1b1b_100%)] p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[12px] font-black uppercase tracking-[0.18em] text-white/56">
                        Raw upload
                      </span>
                      <span className="text-[12px] font-black uppercase tracking-[0.18em] text-white/32">
                        Before
                      </span>
                    </div>
                    <div className="flex h-[320px] items-center justify-center rounded-[20px] border border-dashed border-white/10 bg-[radial-gradient(circle_at_50%_18%,_rgba(255,255,255,0.1),_transparent_24%),linear-gradient(180deg,_#353535_0%,_#1c1c1c_100%)]">
                      <div className="w-[184px] rounded-[28px] border border-white/10 bg-[#262626] px-8 py-10 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                        <div className="mx-auto h-28 w-20 rounded-[20px] bg-[#4b4b4b]" />
                        <div className="mx-auto mt-4 h-3 w-24 rounded-full bg-white/8" />
                        <div className="mx-auto mt-3 h-3 w-20 rounded-full bg-white/8" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#6366F1]/40 bg-[linear-gradient(180deg,_rgba(99,102,241,0.22)_0%,_rgba(17,17,17,0.94)_30%,_#111111_100%)] p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full border border-[#6366F1]/30 bg-[#6366F1]/16 px-3 py-1 text-[12px] font-black uppercase tracking-[0.18em] text-[#c7c8ff]">
                        Delivered
                      </span>
                      <span className="text-[12px] font-black uppercase tracking-[0.18em] text-white/56">
                        After
                      </span>
                    </div>
                    <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,_rgba(255,255,255,0.16),_transparent_24%),linear-gradient(180deg,_#f4f2ff_0%,_#d8ddff_46%,_#b7c4ff_100%)]">
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,_transparent,_rgba(18,18,18,0.14))]" />
                      <div className="relative w-[184px] rounded-[28px] border border-black/8 bg-white px-8 py-10 shadow-[0_24px_70px_rgba(18,18,18,0.16)]">
                        <div className="mx-auto h-28 w-20 rounded-[20px] bg-[linear-gradient(180deg,_#434343_0%,_#131313_100%)]" />
                        <div className="mx-auto mt-4 h-3 w-24 rounded-full bg-[#9ea5ff]" />
                        <div className="mx-auto mt-3 h-3 w-20 rounded-full bg-[#d5d8ff]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 border-t border-white/10 px-5 py-5 sm:grid-cols-3">
                  {['Background cleanup', 'Shadow rebuild', 'Color balancing'].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 text-[12px] font-black uppercase tracking-[0.16em] text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
