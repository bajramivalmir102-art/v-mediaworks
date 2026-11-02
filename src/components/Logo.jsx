import { useId } from 'react'
// Simboli: V nga dy goditje që takohen në majë, me një nyje cyan në krye (kursor / pikë lidhjeje digjitale).
export function VMark({ size = 40, animate = false, className = '' }) {
  const id = useId()
  const st = (d) => (animate ? { strokeDasharray: 1, animation: `vdraw 1.4s ${d}s both ease-out` } : undefined)
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} role="img" aria-label="Simboli V-MediaWorks">
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8B5CF6"/><stop offset=".55" stopColor="#2563EB"/><stop offset="1" stopColor="#00D4FF"/></linearGradient></defs>
      <path d="M10 14 L32 54" fill="none" stroke={`url(#${id})`} strokeWidth="8" strokeLinecap="round" pathLength="1" style={st(0.2)} />
      <path d="M54 14 L32 54" fill="none" stroke={`url(#${id})`} strokeWidth="8" strokeLinecap="round" pathLength="1" opacity=".85" style={st(0.6)} />
      <circle cx="32" cy="14" r="4.5" fill="#00D4FF" />
      <style>{`@keyframes vdraw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}`}</style>
    </svg>
  )
}
export default function Logo({ size = 36, theme = 'dark' }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <VMark size={size} />
      <span className={`font-display text-lg font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#08090D]'}`}>V-Media<span className="grad-text">Works</span></span>
    </span>
  )
}
