import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div>
            <p className="text-white font-black text-xl tracking-tight">
              abhirami<span className="text-emerald-400">.</span>
            </p>
            <p className="text-slate-500 text-xs mt-1">Full Stack MERN Developer</p>
          </div>

          {/* Social */}
          <div className="flex gap-2">
            {[
              { href: personal.linkedin,          icon: <Linkedin size={15} />, label: 'LinkedIn' },
              { href: personal.github,            icon: <Github size={15} />,   label: 'GitHub'   },
              { href: `mailto:${personal.email}`, icon: <Mail size={15} />,     label: 'Email'    },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/[0.08]
                           text-slate-500 hover:text-emerald-400 hover:border-emerald-400/40
                           hover:-translate-y-0.5 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Divider + Copyright */}
        <div className="mt-8 pt-5 border-t border-white/[0.05] text-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Abhirami Appukuttan. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
