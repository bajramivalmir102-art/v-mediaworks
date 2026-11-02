import { Sparkles, Compass, Cpu, Target } from 'lucide-react'
import Reveal from './Reveal'
import { VMark } from './Logo'
import { WHY } from '../data'
const icons = [Sparkles, Compass, Cpu, Target]
export default function About() {
  return (
    <>
      <section id="rreth-nesh" className="section grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.02]">KREATIVITETI TAKOHET ME <span className="grad-text">STRATEGJINË.</span></h2>
          <p className="mt-8 text-white/65 leading-relaxed max-w-lg">V-MediaWorks është një agjenci kreative dhe digjitale që ndihmon bizneset të ndërtojnë identitet të fuqishëm, të krijojnë prezencë profesionale online dhe të arrijnë më shumë klientë.</p>
          <p className="mt-5 text-white/65 leading-relaxed max-w-lg">Ne kombinojmë kreativitetin, teknologjinë dhe strategjinë për të ofruar zgjidhje moderne që i japin vlerë çdo biznesi.</p>
        </Reveal>
        <Reveal delay={0.15} className="relative h-[380px]">
          <div className="absolute left-0 top-6 h-64 w-[62%] rounded-3xl bg-gradient-to-br from-violet to-electric p-6 flex items-end"><span className="font-display text-xl font-bold">Kreativiteti</span></div>
          <div className="absolute right-0 top-0 h-48 w-[44%] rounded-3xl glass p-5 flex items-end"><span className="font-display font-bold">Teknologjia</span></div>
          <div className="absolute right-4 bottom-0 h-52 w-[56%] rounded-3xl bg-gradient-to-tr from-electric to-cyan p-6 flex items-end text-ink"><span className="font-display text-xl font-bold">Strategjia</span></div>
          <div className="absolute left-[18%] bottom-4 grid h-24 w-24 place-items-center rounded-2xl bg-ink border border-white/15"><VMark size={52} /></div>
        </Reveal>
      </section>
      <section className="section !pt-0">
        <Reveal><h2 className="font-display text-3xl md:text-5xl font-extrabold max-w-2xl">BIZNESI JUAJ MERITON MË SHUMË.</h2></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([t, d], i) => { const I = icons[i]; return (
            <Reveal key={t} delay={i * 0.08}>
              <div className="glass h-full rounded-3xl p-7 transition hover:border-cyan/50 hover:-translate-y-1">
                <I className="text-cyan" size={28} /><h3 className="mt-6 font-display text-lg font-bold">{t}</h3><p className="mt-2 text-sm text-white/60 leading-relaxed">{d}</p>
              </div>
            </Reveal>) })}
        </div>
      </section>
    </>
  )
}
