import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { education, certifications } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-red-500 text-sm tracking-widest mb-3">education</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Academic Background</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 flex gap-5 hover:border-red-500/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/[0.08] border border-red-500/25 flex items-center justify-center text-red-400 shrink-0">
                <GraduationCap size={22} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">{edu.degree}</h3>
                <span className="inline-block font-mono text-xs font-bold text-zinc-300 bg-white/[0.05] border border-red-500/40 px-2.5 py-0.5 rounded-md mt-2 mb-2">
                  {edu.grade}
                </span>
                <p className="text-zinc-400 text-sm">{edu.school}</p>
                <p className="font-mono text-xs text-zinc-600 mt-1">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-white font-bold text-xl text-center mb-7">Certifications</h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-red-500/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/[0.08] border border-red-500/25 flex items-center justify-center text-red-400 shrink-0">
                  <Award size={18} />
                </div>
                <span className="text-zinc-300 text-sm font-medium leading-snug">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
