import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0a0a] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-40 pb-24">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="uppercase tracking-[0.35em] text-amber-200/80 text-xs sm:text-sm">
          Modern Vintage Aesthetic
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05]">
          asyncPranav
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 max-w-2xl text-white/80">
          Software Engineer crafting calm, considered experiences with a penchant for retro-futurism.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="px-5 py-3 rounded-full bg-amber-300 text-black font-medium hover:bg-amber-200 transition-colors">View Work</a>
          <a href="#contact" className="px-5 py-3 rounded-full border border-white/20 hover:border-white/40 text-white">Contact</a>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b0a0a] to-transparent pointer-events-none" />
    </section>
  )
}
