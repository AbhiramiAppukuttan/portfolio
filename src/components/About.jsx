import { motion } from 'framer-motion'
import { MapPin, Zap, ArrowUpRight } from 'lucide-react'
import { personal, stats } from '../data/portfolio'

const card = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-50px' },
  transition:  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div {...card()} className="text-center mb-16">
          <p className="font-mono text-emerald-400 text-sm tracking-widest mb-3">about me</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Who I Am</h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-4">

          {/* ── BIO CARD — 7 cols ── */}
          <motion.div
            {...card(0.05)}
            className="col-span-12 lg:col-span-7 glass rounded-3xl p-7 relative overflow-hidden group
                       hover:border-white/[0.14] transition-colors duration-300"
          >
            <div className="absolute inset-0 dot-grid opacity-60 rounded-3xl" />
            <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-emerald-400/[0.07] rounded-full blur-3xl
                            group-hover:bg-emerald-400/[0.12] transition-all duration-700" />

            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                <span className="w-5 h-px bg-slate-600" /> My Story
              </span>

              <p className="text-slate-300 leading-[1.85] text-[0.95rem]">
                I'm a full stack developer with a track record of building and shipping
                real applications — from a{' '}
                <span className="text-white font-semibold">live finance platform</span> to a
                CRM system powering an active business.
              </p>

              <p className="text-slate-300 leading-[1.85] text-[0.95rem]">
                Working across the entire stack means I understand how decisions at the
                database level ripple through to what the user sees. That perspective makes me
                <span className="text-white font-semibold"> faster to debug, easier to collaborate with,
                and better at building things that last.</span>
              </p>

              <p className="text-slate-400 leading-[1.85] text-[0.95rem]">
                I also train developers — which keeps me sharp. Explaining something
                clearly is the fastest way to discover what you don't fully know yet.
              </p>

            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — 5 cols ── */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">

            {/* AVAILABILITY */}
            <motion.div
              {...card(0.1)}
              className="glass rounded-3xl p-5 flex items-center gap-4 border-l-[2.5px] border-emerald-400
                         hover:bg-emerald-400/[0.04] transition-all duration-300"
            >
              <div className="relative shrink-0">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />
                <span className="relative w-3.5 h-3.5 rounded-full bg-emerald-400 block" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Available for Opportunities</p>
                <p className="text-slate-500 text-xs mt-0.5">Open to full-time roles &amp; freelance</p>
              </div>
              <Zap size={14} className="text-emerald-400 ml-auto shrink-0" />
            </motion.div>

            {/* LOCATION */}
            <motion.div
              {...card(0.15)}
              className="glass rounded-3xl p-5 flex items-center justify-between
                         hover:border-white/[0.13] transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-400/10 flex items-center justify-center">
                  <MapPin size={16} className="text-rose-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Ernakulam, Kerala</p>
                  <p className="text-slate-500 text-xs mt-0.5">Remote &amp; On-site · India</p>
                </div>
              </div>
              <a
                href={personal.linkedin}
                target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center
                           text-slate-500 hover:text-emerald-400 hover:border-emerald-400/30 transition-all"
              >
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* ALL STATS — 2×2 grid */}
            <motion.div {...card(0.2)} className="grid grid-cols-2 gap-3 flex-1">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-4 text-center relative overflow-hidden group
                             hover:border-emerald-400/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/[0.04] to-violet-400/[0.04]
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <span className="block text-3xl font-black gradient-text leading-none mb-1.5">{s.value}</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
