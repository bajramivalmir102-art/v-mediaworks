import { useState } from 'react'
import { Phone, MessageCircle, Instagram, Facebook, MapPin, Send } from 'lucide-react'
import Reveal from './Reveal'
import { CONTACT, SERVICES } from '../data'
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const empty = { emri: '', email: '', biznesi: '', sherbimi: '', pershkrimi: '' }
function validate(v) {
  const e = {}
  if (v.emri.trim().length < 3) e.emri = 'Shkruani emrin dhe mbiemrin.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Shkruani një adresë email të vlefshme.'
  if (!v.sherbimi) e.sherbimi = 'Zgjidhni shërbimin që kërkoni.'
  if (v.pershkrimi.trim().length < 10) e.pershkrimi = 'Përshkruani projektin me të paktën 10 shkronja.'
  return e
}
export default function Contact() {
  const [v, setV] = useState(empty)
  const [err, setErr] = useState({})
  const [status, setStatus] = useState({ type: 'idle' })
  const on = (k) => (e) => setV({ ...v, [k]: e.target.value })
  async function submit(ev) {
    ev.preventDefault()
    const e = validate(v); setErr(e)
    if (Object.keys(e).length) return
    if (!ENDPOINT) { setStatus({ type: 'error', msg: 'Formulari nuk është lidhur ende me një shërbim dërgimi. Vendosni VITE_FORM_ENDPOINT në skedarin .env.' }); return }
    setStatus({ type: 'loading' })
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!r.ok) throw new Error()
      setStatus({ type: 'ok', msg: 'Mesazhi u dërgua. Do t’ju kontaktojmë së shpejti.' }); setV(empty)
    } catch { setStatus({ type: 'error', msg: 'Mesazhi nuk u dërgua. Provoni përsëri ose na shkruani në WhatsApp.' }) }
  }
  const F = ({ id, label, children }) => <div><label htmlFor={id} className="mb-1.5 block text-sm text-white/70">{label}</label>{children}{err[id] && <p role="alert" className="mt-1 text-xs text-red-400">{err[id]}</p>}</div>
  const links = [[Phone, CONTACT.phone, `tel:${CONTACT.phone.replace(/\s/g, '')}`], [MessageCircle, 'WhatsApp', CONTACT.whatsapp], [Instagram, 'Instagram', CONTACT.instagram], [Facebook, 'Facebook', CONTACT.facebook]]
  return (
    <section id="kontakti" className="section grid gap-14 lg:grid-cols-[1fr_1.2fr]">
      <Reveal>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold">LAJMËROHU <span className="grad-text">ME NE.</span></h2>
        <p className="mt-6 max-w-md text-white/60">Na tregoni për biznesin dhe qëllimet tuaja. Ju përgjigjemi me një plan të qartë.</p>
        <ul className="mt-10 space-y-4">
          {links.map(([I, l, h]) => <li key={l}><a href={h} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-cyan transition"><span className="grid h-11 w-11 place-items-center rounded-xl glass"><I size={18} /></span>{l}</a></li>)}
          <li className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-xl glass"><MapPin size={18} /></span>{CONTACT.location}</li>
        </ul>
      </Reveal>
      <Reveal delay={0.1}>
        <form onSubmit={submit} noValidate className="glass grid gap-5 rounded-3xl p-6 sm:p-9 sm:grid-cols-2">
          <F id="emri" label="Emri dhe mbiemri"><input id="emri" className="field" value={v.emri} onChange={on('emri')} autoComplete="name" /></F>
          <F id="email" label="Email adresa"><input id="email" type="email" className="field" value={v.email} onChange={on('email')} autoComplete="email" /></F>
          <F id="biznesi" label="Emri i biznesit"><input id="biznesi" className="field" value={v.biznesi} onChange={on('biznesi')} autoComplete="organization" /></F>
          <F id="sherbimi" label="Shërbimi që kërkohet">
            <select id="sherbimi" className="field" value={v.sherbimi} onChange={on('sherbimi')}>
              <option value="" className="bg-navy">Zgjidhni shërbimin</option>
              {SERVICES.map((s) => <option key={s.n} value={s.title} className="bg-navy">{s.title}</option>)}
            </select>
          </F>
          <div className="sm:col-span-2"><F id="pershkrimi" label="Përshkrimi i projektit"><textarea id="pershkrimi" rows={5} className="field resize-none" value={v.pershkrimi} onChange={on('pershkrimi')} /></F></div>
          <div className="sm:col-span-2 flex flex-wrap items-center gap-5">
            <button className="btn-primary disabled:opacity-60" disabled={status.type === 'loading'}>{status.type === 'loading' ? 'Po dërgohet…' : 'Dërgo mesazhin'} <Send size={16} /></button>
            {status.msg && <p role="status" className={`text-sm ${status.type === 'ok' ? 'text-cyan' : 'text-red-400'}`}>{status.msg}</p>}
          </div>
        </form>
      </Reveal>
    </section>
  )
}
