export default function Footer() {
  return (
    <footer className="bg-[#0b0a0a] text-white/70 py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} asyncPranav. Built with a modern-vintage soul.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/asyncPranav" target="_blank" className="hover:text-amber-200" rel="noreferrer">GitHub</a>
          <a href="https://x.com/asyncPranav" target="_blank" className="hover:text-amber-200" rel="noreferrer">X</a>
          <a href="mailto:asyncpranav@gmail.com" className="hover:text-amber-200">Email</a>
        </div>
      </div>
    </footer>
  )
}
