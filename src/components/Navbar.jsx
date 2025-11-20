import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggle = () => setOpen((o) => !o)
  const close = () => setOpen(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 dark:bg-slate-900/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-inner"></span>
            TechFolio
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-500 transition-colors">Get in touch</a>
          </div>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-white/10" onClick={toggle}>
            {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in" onClick={close}>
            <div className="mt-2 space-y-2 rounded-xl border border-slate-200/50 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur p-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-slate-800 dark:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block rounded-lg px-3 py-2 bg-blue-600 text-white text-center hover:bg-blue-500">Get in touch</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
