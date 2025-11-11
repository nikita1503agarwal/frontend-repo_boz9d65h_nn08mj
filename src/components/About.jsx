import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0f0e0e] text-white py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeader eyebrow="Biography" title="About" subtitle="A developer who blends modern engineering with vintage sensibilities." />
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="prose prose-invert max-w-none text-white/80">
            <p>
              I'm Pranav — a software engineer who loves clean architecture, expressive interfaces, and that warm nostalgic vibe of retro tech. I build with React, TypeScript, Node, and cloud-native stacks, focusing on maintainability and thoughtful UX.
            </p>
            <p>
              Outside of code, you'll find me exploring vintage design, tuning keyboard layouts, and documenting craft in public. I'm currently open to collaborations and interesting product challenges.
            </p>
          </motion.div>
          <motion.ul initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
            {['React', 'TypeScript', 'Node.js', 'Go', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'].map((skill) => (
              <li key={skill} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90">
                {skill}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
