import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react'
import { personal } from '../data/portfolio'

const methods = [
  { icon: <Mail size={18} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: <Phone size={18} />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/abhirami-appukuttan', href: personal.linkedin, external: true },
  { icon: <Github size={18} />, label: 'GitHub', value: 'github.com/abhirami-appukuttan', href: personal.github, external: true },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]       = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const body = encodeURIComponent(`Hi Abhirami,\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`
    setForm({ name: '', email: '', subject: '', message: '' })
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-emerald-400 text-sm tracking-widest mb-3">contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Get In Touch</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Building something that needs a developer who can own the full stack?
            Looking for a MERN engineer who also trains teams? Let's talk —
            I keep things straightforward and reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Methods */}
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
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-emerald-400/30 hover:translate-x-1 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400/20 transition-colors shrink-0">
                  {m.icon}
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">{m.label}</p>
                  <p className="text-slate-300 text-sm font-medium break-all">{m.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-6 mt-2">
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently based in <span className="text-white font-semibold">Ernakulam, Kerala</span> and
                open to <span className="text-emerald-400 font-semibold">remote or on-site</span> opportunities
                across India and globally.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
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
                  <label className="text-xs text-slate-500 uppercase tracking-wider font-semibold block mb-2">
                    {f.label}
                  </label>
                  <input
                    type={f.type} name={f.name} value={form[f.name]}
                    onChange={handleChange} placeholder={f.placeholder} required
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-slate-200
                               placeholder-slate-600 outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10
                               transition-all duration-200"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wider font-semibold block mb-2">Subject</label>
              <input
                type="text" name="subject" value={form.subject}
                onChange={handleChange} placeholder="Job Opportunity / Collaboration" required
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-slate-200
                           placeholder-slate-600 outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10
                           transition-all duration-200"
              />
            </div>

            <div>
              <label className="text-xs text-slate-500 uppercase tracking-wider font-semibold block mb-2">Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange} rows={5}
                placeholder="Hi Abhirami, I'd love to discuss..." required
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-slate-200
                           placeholder-slate-600 outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10
                           transition-all duration-200 resize-none"
              />
            </div>

            <button type="submit"
              className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-sm
                transition-all duration-200 ${
                  sent
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30'
                    : 'bg-emerald-400 text-[#0a0a0f] hover:bg-emerald-300 shadow-lg shadow-emerald-400/20 hover:shadow-emerald-400/35 hover:-translate-y-0.5'
                }`}
            >
              {sent ? <><CheckCircle size={16} /> Message Sent!</> : <><Send size={16} /> Send Message</>}
            </button>
            <p className="text-center text-xs text-slate-600">Opens your email client with the message pre-filled</p>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
