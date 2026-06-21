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
          <p className="font-mono text-red-500 text-sm tracking-widest mb-3">work experience</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Where I've Worked</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/70 to-transparent" />

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
                <div className={`absolute left-[18px] top-6 w-4 h-4 rounded-full border-2 -translate-y-1/2 ${
                  job.current
                    ? 'border-red-500 bg-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.25)]'
                    : 'border-zinc-700 bg-[#050508]'
                }`} />

                <div className="glass rounded-2xl p-6 hover:border-red-500/60 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">{job.role}</h3>
                      <p className="flex items-center gap-1.5 text-zinc-400 font-medium text-sm mt-1">
                        <MapPin size={13} />
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="font-mono text-xs text-zinc-500 bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 rounded-full">
                        {job.period}
                      </span>
                      {job.current && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 bg-white/[0.05] border border-red-500/30 px-2.5 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.points.map(pt => (
                      <li key={pt} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className="text-zinc-600 mt-0.5 shrink-0">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag}
                        className="text-xs font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-md"
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
