import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import Reveal from './Reveal'
import { VMark } from './Logo'
import { CATS, WORKS } from '../data'
function Mock({ k }) {
  const base = 'relative h-full w-full overflow-hidden bg-gradient-to-br from-navy to-ink grid place-items-center'
  const bars = <div className="space-y-1.5 w-full"><div className="h-2 w-2/3 rounded bg-white/70" /><div className="h-1.5 w-full rounded bg-white/20" /><div className="h-1.5 w-4/5 rounded bg-white/20" /><div className="h-5 w-16 rounded-full bg-cyan mt-2" /></div>
  if (k === 'laptop') return <div className={base}><div className="w-[68%]"><div className="rounded-t-lg border-2 border-white/25 bg-gradient-to-br from-violet/60 to-electric/60 p-4 aspect-[16/10]">{bars}</div><div className="h-2 rounded-b-lg bg-white/30 mx-[-6%]" /></div></div>
  if (k === 'phone') return <div className={base}><div className="w-[30%] aspect-[9/18] rounded-2xl border-2 border-white/30 bg-gradient-to-b from-electric/70 to-violet/70 p-2.5">{bars}</div></div>
  if (k === 'logo') return <div className={base}><div className="grid place-items-center h-24 w-24 rounded-3xl bg-white"><VMark size={56} /></div></div>
  if (k === 'chart') return <div className={base}><div className="flex items-end gap-2 h-24">{[30, 45, 40, 65, 80, 100].map((h, i) => <div key={i} className="w-5 rounded-t bg-gradient-to-t from-violet to-cyan" style={{ height: `${h}%` }} />)}</div></div>
  if (k === 'cards') return <div className={base}><div className="grid grid-cols-3 gap-2 w-[70%]">{['from-violet', 'from-electric', 'from-cyan'].map((c, i) => <div key={i} className={`aspect-square rounded-lg bg-gradient-to-br ${c} to-ink/60`} />)}</div></div>
  return <div className={base}><div className="w-[78%] rounded-xl bg-gradient-to-r from-violet via-electric to-cyan p-5 aspect-[2/1] flex items-center"><div className="w-1/2">{bars}</div></div></div>
}
function Shot({ w }) {
  const [failed, setFailed] = useState(false)
  if (!w.img || failed) return <Mock k={w.k} />
  return <img src={w.img} alt={`Pamje e faqes ${w.t}`} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} className="h-full w-full object-cover object-center" />
}
export default function Portfolio() {
  const [cat, setCat] = useState(CATS[0])
  const cats = CATS.filter((c, i) => i === 0 || WORKS.some((w) => w.c === c))
  const list = WORKS.filter((w) => cat === CATS[0] || w.c === cat)
  return (
    <section id="portofolio" className="section">
      <Reveal><h2 className="font-display text-4xl md:text-6xl font-extrabold">PUNËT TONA</h2><p className="mt-4 text-white/60 max-w-xl">Website dhe dyqane online që kemi ndërtuar dhe menaxhuar. Kliko në një projekt për ta parë faqen live.</p></Reveal>
      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtro sipas kategorisë">
        {cats.map((c) => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`rounded-full border px-5 py-2 text-sm transition ${cat === c ? 'border-transparent bg-gradient-to-r from-violet to-electric' : 'border-white/15 text-white/70 hover:border-cyan/60'}`}>{c}</button>)}
      </div>
      <LayoutGroup>
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((w) => (
              <motion.article layout key={w.t} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="group overflow-hidden rounded-3xl glass">
                <a href={w.url} target="_blank" rel="noopener noreferrer" aria-label={`Hap faqen ${w.t}`} className="block">
                  <div className="aspect-[4/3] overflow-hidden"><div className="h-full w-full transition duration-500 group-hover:scale-105"><Shot w={w} /></div></div>
                  <div className="p-5">
                    <p className="text-xs text-cyan">{w.c}</p>
                    <h3 className="mt-1 font-display font-bold">{w.t}</h3>
                    {w.d && <p className="mt-2 text-sm text-white/60">{w.d}</p>}
                    <p className="mt-3 text-sm text-cyan transition group-hover:translate-x-1">Shiko faqen ↗</p>
                  </div>
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  )
}
