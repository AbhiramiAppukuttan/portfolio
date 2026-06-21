import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ArrowDown, ExternalLink } from 'lucide-react'
import { personal, typedPhrases } from '../data/portfolio'

const badges = [
  { label: 'React.js',  color: '#61dafb', style: { top: '5%',  right: '-8%' } },
  { label: 'Node.js',   color: '#68a063', style: { top: '48%', right: '-14%' } },
  { label: 'MongoDB',   color: '#47a248', style: { bottom: '8%', right: '4%' } },
  { label: 'Express',   color: '#aaaaaa', style: { bottom: '5%', left: '20%' } },
  { label: 'Tailwind',  color: '#38bdf8', style: { top: '2%',  left: '18%' } },
]

const socials = [
  { href: personal.linkedin, icon: <Linkedin size={17} />, label: 'LinkedIn', external: true },
  { href: personal.github,   icon: <Github size={17} />,   label: 'GitHub',   external: true },
  { href: `mailto:${personal.email}`, icon: <Mail size={17} />,  label: 'Email' },
  { href: `tel:${personal.phone}`,    icon: <Phone size={17} />, label: 'Phone' },
]

export default function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx]     = useState(0)
  const [deleting, setDeleting]   = useState(false)
  const [imgError, setImgError]   = useState(false)

  const displayText = typedPhrases[phraseIdx].slice(0, charIdx)

  useEffect(() => {
    const phrase = typedPhrases[phraseIdx]
    if (!deleting && charIdx === phrase.length) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }
    if (deleting && charIdx === 0) {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % typedPhrases.length)
      return
    }
    const t = setTimeout(() => setCharIdx(c => c + (deleting ? -1 : 1)), deleting ? 55 : 85)
    return () => clearTimeout(t)
  }, [charIdx, deleting, phraseIdx])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[72px]">
      <div className="max-w-6xl mx-auto px-6 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-mono text-red-500 text-sm tracking-widest mb-3"
            >
              Hi there, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-5xl md:text-6xl font-black leading-[1.08] mb-5"
            >
              <span className="text-white">Abhirami</span>
              <br />
              <span className="gradient-text">Appukuttan</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-1 text-lg md:text-xl text-zinc-400 font-medium mb-6 min-h-[32px]"
            >
              <span>I build&nbsp;</span>
              <span className="text-white font-bold">{displayText}</span>
              <span className="inline-block w-[2px] h-5 bg-white animate-blink ml-0.5" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-zinc-400 leading-relaxed max-w-[500px] mb-9"
            >
              Full Stack MERN Developer who cares about what happens after the code is pushed.
              Clean APIs, fast UIs, and databases that don't buckle when real users show up.
              Based in Kerala —{' '}
              <span className="text-zinc-200 font-semibold">building for production, not just demos.</span>
            </motion.p>

            {/* Buttons — red border outline, no fill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#projects"
                className="flex items-center gap-2 px-7 py-3 border border-red-500 text-zinc-200 font-bold rounded-xl
                           hover:border-red-400 transition-all duration-200 hover:-translate-y-1"
              >
                <ExternalLink size={16} /> View My Work
              </a>
              <a href="#contact"
                className="px-7 py-3 border border-white/[0.1] text-zinc-400 font-semibold rounded-xl
                           hover:border-white/20 hover:text-zinc-200 transition-all duration-200 hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Socials — border outline only on hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-3"
            >
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/[0.08]
                             text-zinc-500 hover:text-zinc-200 hover:border-red-500/40
                             hover:-translate-y-1 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Photo — red ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-red-500/[0.12] blur-3xl scale-125" />
              <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-zinc-800 to-red-500 animate-spin-slow"
                  style={{ padding: '2px' }}>
                  <div className="w-full h-full rounded-full bg-[#050508]" />
                </div>
                <div className="absolute inset-[2px] rounded-full overflow-hidden">
                  {!imgError ? (
                    <img
                      src="/profile.jpg"
                      alt="Abhirami Appukuttan"
                      className="w-full h-full object-cover object-center"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                      <span className="text-7xl font-black gradient-text">AA</span>
                    </div>
                  )}
                </div>
                {badges.map((b, i) => (
                  <motion.div
                    key={b.label}
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 2.8, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute glass rounded-full px-3 py-1.5 text-[11px] font-bold shadow-lg whitespace-nowrap"
                    style={{ ...b.style, color: b.color }}
                  >
                    {b.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={15} />
        </motion.div>
      </motion.a>
    </section>
  )
}
