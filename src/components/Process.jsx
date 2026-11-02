import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { STEPS } from '../data'
export default function Process() {
  return (
    <section id="procesi" className="section">
      <Reveal><h2 className="font-display text-4xl md:text-6xl font-extrabold max-w-3xl">NGA IDEJA DERI TE <span className="grad-text">REZULTATI.</span></h2></Reveal>
      <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
        <motion.span aria-hidden className="absolute left-[19px] top-0 h-full w-px origin-top bg-gradient-to-b from-violet to-cyan lg:left-0 lg:top-[19px] lg:h-px lg:w-full lg:origin-left" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
        {STEPS.map(([t, d], i) => (
          <li key={t} className="relative pl-14 lg:pl-0 lg:pt-14">
            <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-cyan bg-ink font-display text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-display text-xl font-bold">{t}</h3><p className="mt-2 text-sm text-white/60 leading-relaxed">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
