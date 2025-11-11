export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      {eyebrow && <p className="text-xs tracking-[0.25em] uppercase text-amber-200/80">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-white/70 max-w-2xl">{subtitle}</p>}
    </div>
  )
}
