import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/20'
            : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-violet-500 flex items-center justify-center shadow-lg shadow-emerald-400/20 group-hover:shadow-emerald-400/40 transition-shadow duration-300">
              <span className="text-[#0a0a0f] font-black text-sm tracking-tight">AA</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              abhirami<span className="text-emerald-400">.</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-0.5">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === l.href.slice(1)
                      ? 'text-emerald-400 bg-emerald-400/10'
                      : 'text-slate-400 hover:text-emerald-400 hover:bg-white/[0.05]'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:abhiramiappukuttan09@gmail.com"
              className="px-5 py-2 text-sm font-semibold text-emerald-400 border border-emerald-400/40 rounded-xl hover:bg-emerald-400 hover:text-[#0a0a0f] transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden text-slate-300 hover:text-emerald-400 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/97 backdrop-blur-xl flex flex-col items-center justify-center gap-5 md:hidden"
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold text-slate-300 hover:text-emerald-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:abhiramiappukuttan09@gmail.com"
              onClick={() => setOpen(false)}
              className="mt-6 px-10 py-3 bg-emerald-400 text-[#0a0a0f] font-bold rounded-xl text-lg"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
