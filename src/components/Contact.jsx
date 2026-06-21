import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, Loader } from 'lucide-react'
import { personal } from '../data/portfolio'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const methods = [
  { icon: <Mail size={18} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: <Phone size={18} />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/abhirami-appukuttan', href: personal.linkedin, external: true },
  { icon: <Github size={18} />, label: 'GitHub', value: 'github.com/AbhiramiAppukuttan', href: personal.github, external: true },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name:       form.name,
          email:      form.email,
          subject:    form.subject,
          message:    form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-red-500 text-sm tracking-widest mb-3">contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Get In Touch</h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Building something that needs a developer who can own the full stack?
            Looking for a MERN engineer who also trains teams? Let's talk —
            I reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {methods.map(m => (
              <a
                key={m.label}
                href={m.href}
                target={m.external ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-red-500/60 hover:translate-x-1 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-red-500/[0.08] border border-red-500/25 flex items-center justify-center text-red-400 shrink-0">
                  {m.icon}
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold mb-0.5">{m.label}</p>
                  <p className="text-zinc-300 text-sm font-medium break-all">{m.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-6 mt-2">
              <p className="text-zinc-400 text-sm leading-relaxed">
                Currently based in <span className="text-white font-semibold">Ernakulam, Kerala</span> and
                open to <span className="text-zinc-200 font-semibold">remote or on-site</span> opportunities
                across India and globally.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-7 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { name: 'name',  label: 'Your Name',  type: 'text',  placeholder: 'John Doe' },
                { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
              ].map(f => (
                <div key={f.name}>
                  <label className="text-xs text-zinc-500 uppercase tracking-wider font-semibold block mb-2">
                    {f.label}
                  </label>
                  <input
                    type={f.type} name={f.name} value={form[f.name]}
                    onChange={handleChange} placeholder={f.placeholder} required
                    className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-zinc-200
                               placeholder-zinc-600 outline-none focus:border-red-500/40 focus:ring-1 focus:ring-red-500/20
                               transition-all duration-200"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wider font-semibold block mb-2">Subject</label>
              <input
                type="text" name="subject" value={form.subject}
                onChange={handleChange} placeholder="Job Opportunity / Collaboration" required
                className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-zinc-200
                           placeholder-zinc-600 outline-none focus:border-red-500/40 focus:ring-1 focus:ring-red-500/20
                           transition-all duration-200"
              />
            </div>

            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wider font-semibold block mb-2">Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange} rows={5}
                placeholder="Hi Abhirami, I'd love to discuss..." required
                className="w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 text-sm text-zinc-200
                           placeholder-zinc-600 outline-none focus:border-red-500/40 focus:ring-1 focus:ring-red-500/20
                           transition-all duration-200 resize-none"
              />
            </div>

            <button type="submit" disabled={status === 'sending'}
              className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-sm
                border transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
                  status === 'sent'
                    ? 'border-white/20 text-zinc-300 bg-white/[0.04]'
                    : status === 'error'
                    ? 'border-red-500 text-red-400 bg-red-500/[0.06]'
                    : 'border-red-500 text-zinc-200 hover:border-red-400 hover:bg-red-500/[0.06]'
                }`}
            >
              {status === 'sending' && <><Loader size={16} className="animate-spin" /> Sending...</>}
              {status === 'sent'    && <><CheckCircle size={16} /> Message Sent!</>}
              {status === 'error'   && <>Failed — try again</>}
              {status === 'idle'    && <><Send size={16} /> Send Message</>}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
