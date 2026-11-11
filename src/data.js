import { Megaphone, Globe, Fingerprint, Share2, PenTool, ShoppingBag } from 'lucide-react'
// TODO: Zëvendëso me të dhënat reale
export const CONTACT = {
  phone: '+383 XX XXX XXX', whatsapp: 'https://wa.me/383XXXXXXXX',
  instagram: 'https://instagram.com/vmediaworks', facebook: 'https://facebook.com/vmediaworks',
  location: 'Kosovë',
}
export const NAV = [['Rreth nesh','#rreth-nesh'],['Shërbimet','#sherbimet'],['Portofolio','#portofolio'],['Procesi','#procesi'],['Kontakti','#kontakti']]
export const SERVICES = [
  { n:'01', icon:Megaphone, title:'Marketing digjital', items:['Reklama në Facebook dhe Instagram','Menaxhimi i fushatave Meta Ads','Strategji marketingu','Analizë dhe optimizim i reklamave','Rritja e prezencës digjitale'] },
  { n:'02', icon:Globe, title:'Krijimi i website-ve', items:['Website profesional për biznese','Dyqane online E-commerce','Zhvillim i dyqaneve Shopify','Landing Pages','Ridizajnim i website-ve ekzistuese'] },
  { n:'03', icon:Fingerprint, title:'Identiteti i brendit', items:['Dizajn i logos','Identitet vizual','Zgjedhja e ngjyrave dhe tipografisë','Strategji e brendit','Materiale vizuale profesionale'] },
  { n:'04', icon:Share2, title:'Menaxhimi i rrjeteve sociale', items:['Menaxhimi i Instagram dhe Facebook','Planifikimi i përmbajtjes','Krijimi i postimeve','Dizajn grafik','Video dhe Reels'] },
  { n:'05', icon:PenTool, title:'Dizajn grafik dhe kreativ', items:['Dizajne për reklama','Banera promocionalë','Dizajn i produkteve','Materiale për rrjete sociale','Kreativa për fushata marketingu'] },
  { n:'06', icon:ShoppingBag, title:'Zgjidhje për E-commerce', items:['Krijimi i dyqaneve online','Konfigurimi i Shopify','Organizimi i produkteve dhe kategorive','Optimizimi i faqeve të produkteve','Përmirësimi i përvojës së blerjes'] },
]
export const WHY = [
  ['Kreativitet pa kufij','Ide dhe zgjidhje që e dallojnë biznesin tuaj.'],
  ['Strategji profesionale','Çdo projekt fillon me një plan të qartë.'],
  ['Teknologji moderne','Përdorim i mjeteve dhe zgjidhjeve bashkëkohore.'],
  ['Fokus në rezultate','Punojmë për të ndihmuar biznesin tuaj të zhvillohet.'],
]
export const CATS = ['Të gjitha','Website dhe dyqane online','Identitet vizual','Marketing digjital','Dizajn grafik','Fushata reklamuese']
// Punët reale. Për të shtuar një projekt tjetër, kopjo një bllok dhe ndrysho t, url, banners, d.
// banners = foto të plota të banerëve (e para shfaqet në kartë, të gjitha hapen në galeri).
// k = mockup rezervë nëse fotoja nuk ngarkohet.
const shop = (host, files) => files.map(([f, v]) => `https://${host}/cdn/shop/files/${f}?v=${v}&width=1600`)
export const WORKS = [
  {
    t: 'Tech x Town', c: 'Website dhe dyqane online', k: 'laptop',
    url: 'https://techxtown.com',
    banners: ['/techxtown-home.jpg', ...shop('techxtown.com', [
      ['Untitled_1920_x_900_px_1920_x_900_px_385d5e95-36fd-4085-a28e-4f53ccc1555f.png', 1784820488],
      ['Untitled_design.png', 1784743218],
      ['Untitled_1920_x_900_px_2.png', 1784752383],
      ['Untitled_1920_x_900_px_3.png', 1784754859],
    ])],
    d: 'Dyqan online Shopify për elektronikë dhe aksesorë: smart watch, kamera sigurie, gaming dhe audio.',
  },
  {
    t: 'AB-COM', c: 'Website dhe dyqane online', k: 'phone',
    url: 'https://abcom-ks.store',
    banners: ['/abcom-home.jpg', ...shop('abcom-ks.store', [
      ['Smart_Home_Gadgets_on_Display.png', 1793486437],
      ['Modern_Phone_Accessories_on_a_Cozy_Desk.png', 1793486581],
      ['Cinematic_audio_products_banner.png', 1793486877],
      ['Personal_care_grooming_products_banner.png', 1793487063],
      ['Projector_and_Android_TV_banner.png', 1793549617],
      ['Gaming_products_Instagram_post.png', 1793487195],
      ['Security_camera_product_banner.png', 1793487293],
      ['Smartwatch_product_banner_Instagram_Post.png', 1793487406],
    ])],
    d: 'Dyqan online për elektronikë, teknologji dhe produkte për shtëpi, me dërgesë në Kosovë, Shqipëri dhe Maqedoni.',
  },
  {
    t: 'Benny Group', c: 'Website dhe dyqane online', k: 'banner',
    url: 'https://bennygroup.store',
    banners: ['/benny-home.jpg', ...shop('bennygroup.store', [
      ['Neon_Night_Electric_Scooter.png', 1792849322],
      ['Gemini_Generated_Image_xtp8l2xtp8l2xtp8.jpg', 1792693501],
      ['Gemini_Generated_Image_3kxqkd3kxqkd3kxq.jpg', 1792865211],
    ])],
    d: 'Dyqan online "Të gjitha në një vend": elektronikë, gadget-e, gaming dhe trotinetë elektrikë.',
  },
]
export const STEPS = [
  ['Konsultimi','Njohja me biznesin dhe objektivat tuaja.'],
  ['Planifikimi','Hartimi i strategjisë dhe konceptit kreativ.'],
  ['Krijimi','Dizajnimi dhe zhvillimi i projektit.'],
  ['Lansimi','Publikimi dhe prezantimi i projektit.'],
  ['Zhvillimi','Përmirësimi dhe optimizimi i vazhdueshëm.'],
]
