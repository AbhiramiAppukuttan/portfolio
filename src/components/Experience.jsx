import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-emerald-400 text-sm tracking-widest mb-3">work experience</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Where I've Worked</h2>
        </motion.div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/60 via-violet-400/40 to-transparent" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="pl-16 relative"
              >
                {/* dot */}
                <div className={`absolute left-[18px] top-6 w-4 h-4 rounded-full border-2 -translate-y-1/2 ${
                  job.current
                    ? 'border-emerald-400 bg-emerald-400/20 shadow-[0_0_12px_rgba(52,211,153,0.5)]'
                    : 'border-slate-600 bg-[#0a0a0f]'
                }`} />

                <div className="glass rounded-2xl p-6 hover:border-emerald-400/25 hover:translate-x-1 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">{job.role}</h3>
                      <p className="flex items-center gap-1.5 text-emerald-400 font-semibold text-sm mt-1">
                        <MapPin size={13} />
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="font-mono text-xs text-slate-500 bg-white/[0.05] border border-white/[0.07] px-3 py-1.5 rounded-full">
                        {job.period}
                      </span>
                      {job.current && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/25 px-2.5 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.points.map(pt => (
                      <li key={pt} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="text-emerald-400 mt-0.5 shrink-0">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag}
                        className="text-xs font-mono text-emerald-400/80 bg-emerald-400/[0.06] border border-emerald-400/15 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
