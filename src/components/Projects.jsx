import { motion } from 'framer-motion'
import { ExternalLink, Github, TrendingUp } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-emerald-400 text-sm tracking-widest mb-3">projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Things I've Built</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-7">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`glass rounded-2xl p-7 flex flex-col hover:-translate-y-2 hover:border-emerald-400/30
                hover:shadow-2xl hover:shadow-emerald-400/[0.08] transition-all duration-300
                ${p.featured ? 'border-emerald-400/15' : ''}`}
            >
              {/* header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  {p.featured && (
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-[0.18em] mb-2 block">
                      ★ Featured Project
                    </span>
                  )}
                  <h3 className="text-white font-black text-2xl">{p.title}</h3>
                  <p className="text-emerald-400 text-sm font-semibold mt-1">{p.subtitle}</p>
                </div>
                <div className="flex gap-3 mt-1 shrink-0">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="text-slate-500 hover:text-emerald-400 transition-colors" title="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-slate-500 hover:text-emerald-400 transition-colors" title="GitHub">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* impact badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 w-fit mb-4">
                <TrendingUp size={12} className="text-emerald-400" />
                <span className="text-emerald-400 text-xs font-bold">{p.impact}</span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>

              {/* highlights */}
              <ul className="space-y-2 mb-6 flex-grow">
                {p.highlights.map(h => (
                  <li key={h} className="flex gap-2.5 text-sm text-slate-400">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* tech stack */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 pt-5 border-t border-white/[0.06]">
                {p.tech.map(t => (
                  <span key={t} className="font-mono text-xs text-slate-500">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
