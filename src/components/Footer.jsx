import { Instagram, Facebook, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { NAV, SERVICES, CONTACT } from '../data'
export default function Footer() {
  const h = 'font-display font-bold mb-4'
  const a = 'text-sm text-white/60 hover:text-cyan transition'
  return (
    <footer className="mt-24 border-t border-white/10 bg-navy/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        <div><Logo /><p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">Agjenci kreative dhe digjitale për biznese që duan identitet të fortë, prezencë profesionale online dhe rritje të qëndrueshme.</p>
          <div className="mt-6 flex gap-3">{[[Instagram, CONTACT.instagram, 'Instagram'], [Facebook, CONTACT.facebook, 'Facebook'], [MessageCircle, CONTACT.whatsapp, 'WhatsApp']].map(([I, href, l]) => <a key={l} href={href} aria-label={l} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full glass hover:border-cyan transition"><I size={17} /></a>)}</div></div>
        <nav aria-label="Navigimi në fund"><h3 className={h}>Navigimi</h3><ul className="space-y-2.5">{NAV.map(([l, href]) => <li key={href}><a href={href} className={a}>{l}</a></li>)}</ul></nav>
        <div><h3 className={h}>Shërbimet</h3><ul className="space-y-2.5">{SERVICES.map((s) => <li key={s.n}><a href="#sherbimet" className={a}>{s.title}</a></li>)}</ul></div>
        <div><h3 className={h}>Kontakti</h3><ul className="space-y-2.5 text-sm text-white/60"><li>{CONTACT.phone}</li><li>{CONTACT.location}</li></ul></div>
      </div>
      <p className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/45">© 2026 V-MediaWorks. Të gjitha të drejtat e rezervuara.</p>
    </footer>
  )
}
