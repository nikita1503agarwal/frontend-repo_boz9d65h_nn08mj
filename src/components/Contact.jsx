import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0f0e0e] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <SectionHeader eyebrow="Say hi" title="Contact" subtitle="For collaborations, consulting, or just to share cool retro tech." />
        <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your name" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" />
          <input type="email" placeholder="Email" className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" />
          <textarea placeholder="Message" rows="5" className="md:col-span-2 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" />
          <div className="md:col-span-2">
            <button type="button" onClick={() => window.open('mailto:asyncpranav@gmail.com')} className="px-5 py-3 rounded-full bg-amber-300 text-black font-medium hover:bg-amber-200 transition-colors">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
