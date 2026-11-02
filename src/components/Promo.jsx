import Reveal from './Reveal'
export default function Promo() {
  return (
    <section className="px-5 sm:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet via-electric to-[#1d4ed8] px-8 py-20 md:px-16 text-center">
        <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan/40 blur-3xl" />
        <h2 className="relative mx-auto max-w-3xl font-display text-3xl md:text-5xl font-extrabold leading-tight">ËSHTË KOHA TA NGRISIM BIZNESIN TUAJ NË NIVELIN TJETËR.</h2>
        <p className="relative mx-auto mt-6 max-w-xl text-white/85">Na tregoni idenë tuaj. Ne do ta shndërrojmë në një përvojë digjitale profesionale.</p>
        <a href="#kontakti" className="relative mt-10 inline-flex rounded-full bg-white px-8 py-4 font-display text-sm font-bold text-ink transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">FILLONI PROJEKTIN TUAJ</a>
      </Reveal>
    </section>
  )
}
