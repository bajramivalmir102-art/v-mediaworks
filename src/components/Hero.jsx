import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { VMark } from './Logo'
const lines = ['IDETË TUAJA.', 'KREATIVITETI YNË.', 'SUKSESI JUAJ.']
export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden flex items-center">
      <div aria-hidden className="absolute inset-0">
        <div className="drift absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-violet/30 blur-[120px]" />
        <div className="drift absolute top-1/3 right-[-10%] h-[520px] w-[520px] rounded-full bg-electric/25 blur-[130px]" style={{ animationDelay: '-5s' }} />
        <div className="drift absolute bottom-[-20%] left-1/3 h-[400px] w-[400px] rounded-full bg-cyan/15 blur-[120px]" style={{ animationDelay: '-9s' }} />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at 60% 40%,#000,transparent 70%)' }} />
      </div>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 pt-28 pb-16 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <h1 className="font-display font-extrabold leading-[0.98] tracking-tight text-[clamp(2.4rem,7vw,5.6rem)]">
            {lines.map((l, i) => (
              <motion.span key={l} className={`block ${i === 1 ? 'grad-text' : ''}`} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.18, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}>{l}</motion.span>
            ))}
          </h1>
          <motion.p className="mt-8 max-w-xl text-lg text-white/65 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            Ne ndërtojmë brende, krijojmë përvoja digjitale dhe zhvillojmë strategji marketingu që i ndihmojnë bizneset të dallohen dhe të rriten në botën digjitale.
          </motion.p>
          <motion.div className="mt-10 flex flex-wrap gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <a href="#kontakti" className="btn-primary">NIS PROJEKTIN TËND <ArrowUpRight size={18} /></a>
            <a href="#sherbimet" className="btn-ghost">ZBULO SHËRBIMET</a>
          </motion.div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[420px]" aria-hidden>
          {[1, 0.78, 0.56].map((s, i) => (
            <motion.div key={i} className="absolute inset-0 m-auto rounded-full border border-white/15" style={{ width: `${s * 100}%`, height: `${s * 100}%`, borderStyle: i === 1 ? 'dashed' : 'solid' }} animate={{ rotate: i % 2 ? -360 : 360 }} transition={{ duration: 40 + i * 20, repeat: Infinity, ease: 'linear' }}>
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-cyan shadow-[0_0_20px_#00D4FF]" />
            </motion.div>
          ))}
          <div className="absolute inset-0 m-auto h-1/2 w-1/2 rounded-full bg-violet/30 blur-3xl" />
          <div className="absolute inset-0 grid place-items-center"><VMark size={190} animate /></div>
        </div>
      </div>
    </section>
  )
}
