import { motion } from 'framer-motion'
import { Code2, Server, Database, Wrench } from 'lucide-react'

const categories = [
  {
    title: 'Frontend Development',
    icon:  Code2,
    iconBg: 'bg-emerald-400/10 text-emerald-400',
    headingColor: 'text-emerald-400',
    tagBg: 'bg-emerald-400/[0.07] border-emerald-400/20 text-emerald-300',
    keywords: [
      'React.js', 'Redux', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap',
    ],
  },
  {
    title: 'Backend Development',
    icon:  Server,
    iconBg: 'bg-violet-400/10 text-violet-400',
    headingColor: 'text-violet-400',
    tagBg: 'bg-violet-400/[0.07] border-violet-400/20 text-violet-300',
    keywords: [
      'Node.js', 'Express.js', 'JWT', 'bcrypt', 'PHP', 'Laravel',
    ],
  },
  {
    title: 'Database & Storage',
    icon:  Database,
    iconBg: 'bg-amber-400/10 text-amber-400',
    headingColor: 'text-amber-400',
    tagBg: 'bg-amber-400/[0.07] border-amber-400/20 text-amber-300',
    keywords: [
      'MongoDB', 'Mongoose', 'MySQL',
    ],
  },
  {
    title: 'Dev Tools & Deployment',
    icon:  Wrench,
    iconBg: 'bg-rose-400/10 text-rose-400',
    headingColor: 'text-rose-400',
    tagBg: 'bg-rose-400/[0.07] border-rose-400/20 text-rose-300',
    keywords: [
      'Git', 'GitHub', 'Postman', 'VS Code', 'Vercel', 'Render', 'npm',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-emerald-400 text-sm tracking-widest mb-3">specialization</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Core Expertise</h2>
          <p className="text-slate-500 text-sm mt-4 max-w-lg mx-auto">
            Technologies I work with across the full MERN stack and beyond.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-white/[0.14] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <h3 className={`font-bold text-base ${cat.headingColor}`}>{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.keywords.map(kw => (
                    <span key={kw} className={`text-xs px-2.5 py-1 rounded-full border font-medium ${cat.tagBg}`}>
                      {kw}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
