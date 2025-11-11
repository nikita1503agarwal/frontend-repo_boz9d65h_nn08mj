import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'Open Source Contributions',
    description: 'A collection of PRs, issues, and packages maintained across the ecosystem.',
    link: 'https://github.com/asyncPranav',
    tags: ['OSS', 'DX', 'Automation'],
  },
  {
    title: 'Personal Website',
    description: 'Design-forward site experimenting with motion, typography, and performance.',
    link: 'https://github.com/asyncPranav',
    tags: ['Next.js', 'Design Systems', 'SEO'],
  },
  {
    title: 'CLI Tools',
    description: 'Tiny utilities for repetitive tasks, packaged with care and docs.',
    link: 'https://github.com/asyncPranav',
    tags: ['Node', 'Go', 'DevEx'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0b0a0a] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeader eyebrow="Selected" title="Projects" subtitle="Highlights from public work and experiments." />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 hover:border-amber-300/40 hover:from-white/[0.12] hover:to-white/[0.04] transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-200">{p.title}</h3>
                <span className="text-xs text-white/60">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="mt-2 text-white/70 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 text-white/80">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
