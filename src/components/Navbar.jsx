import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home',       href: '#home' },
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
          scrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/[0.05] shadow-xl shadow-black/50' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo — AA always has red border */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-red-500 flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-tight">AA</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">abhirami.</span>
          </a>

          {/* Nav links — red underline only, text stays zinc/white */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-red-500
                    after:transition-all after:duration-300 ${
                      active === l.href.slice(1)
                        ? 'text-white after:w-full'
                        : 'text-zinc-400 after:w-0 hover:text-zinc-200 hover:after:w-full'
                    }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Me — red border outline only, no fill */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:abhiramiappukuttan09@gmail.com"
              className="px-5 py-2 text-sm font-semibold text-zinc-200 border border-red-500 rounded-xl
                         hover:border-red-400 transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors p-1"
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-5 md:hidden"
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold text-zinc-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:abhiramiappukuttan09@gmail.com"
              onClick={() => setOpen(false)}
              className="mt-6 px-10 py-3 border border-red-500 text-zinc-200 font-bold rounded-xl text-lg
                         hover:border-red-400 transition-all duration-200"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
