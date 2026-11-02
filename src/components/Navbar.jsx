import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import { NAV } from '../data'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => { const f = () => setSolid(window.scrollY > 30); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solid || open ? 'bg-ink/80 backdrop-blur-xl border-b border-white/10' : ''}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-[72px]" aria-label="Navigimi kryesor">
        <a href="#top" aria-label="V-MediaWorks, faqja kryesore"><Logo /></a>
        <ul className="hidden lg:flex items-center gap-9 text-sm font-medium text-white/70">
          {NAV.map(([l, h]) => <li key={h}><a href={h} className="hover:text-cyan transition">{l}</a></li>)}
        </ul>
        <a href="#kontakti" className="btn-primary hidden lg:inline-flex !py-2.5">Nis projektin</a>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label={open ? 'Mbyll menunë' : 'Hap menunë'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden px-5 pb-6">
            {NAV.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3 font-display text-xl border-b border-white/5">{l}</a></li>)}
            <li className="pt-5"><a href="#kontakti" onClick={() => setOpen(false)} className="btn-primary w-full">Nis projektin tënd</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
