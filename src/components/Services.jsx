import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import Reveal from './Reveal'
import { SERVICES } from '../data'
export default function Services() {
  const [active, setActive] = useState(0)
  const s = SERVICES[active]
  return (
    <section id="sherbimet" className="section">
      <Reveal><h2 className="font-display text-4xl md:text-6xl font-extrabold">SHËRBIMET TONA</h2><p className="mt-4 max-w-xl text-white/60">Gjashtë fusha ku ndërtojmë, dizajnojmë dhe rrisim biznesin tuaj.</p></Reveal>
      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <ul className="space-y-3" role="tablist" aria-label="Shërbimet">
          {SERVICES.map((x, i) => { const I = x.icon, on = i === active; return (
            <li key={x.n}>
              <button role="tab" aria-selected={on} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} className={`group flex w-full items-center gap-5 rounded-2xl border px-5 py-4 text-left transition ${on ? 'border-cyan/60 bg-white/[0.07]' : 'border-white/10 hover:bg-white/[0.04]'}`}>
                <span className="font-display text-sm text-white/40 w-7">{x.n}</span>
                <span className={`grid h-11 w-11 place-items-center rounded-xl transition ${on ? 'bg-gradient-to-br from-violet to-cyan' : 'bg-white/5'}`}><I size={20} /></span>
                <span className="font-display font-bold text-lg">{x.title}</span>
              </button>
            </li>) })}
        </ul>
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl glass p-8 md:p-10 lg:sticky lg:top-28 self-start">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet/30 blur-3xl" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.div key={s.n} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }} role="tabpanel" className="relative">
              <s.icon size={40} className="text-cyan" />
              <h3 className="mt-6 font-display text-3xl font-extrabold">{s.title}</h3>
              <ul className="mt-8 space-y-4">{s.items.map((it) => <li key={it} className="flex gap-3 text-white/80"><Check size={18} className="mt-1 shrink-0 text-cyan" />{it}</li>)}</ul>
              <a href="#kontakti" className="btn-primary mt-10">Kërko këtë shërbim</a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
