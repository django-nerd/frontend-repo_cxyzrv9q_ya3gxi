import { useEffect } from 'react'

export default function Modal({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-[92vw] max-w-xl rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-2xl animate-in">
        <button aria-label="Close" onClick={onClose} className="absolute right-3 top-3 h-8 w-8 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200">✕</button>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Welcome to TechFolio</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          This site is a modern, responsive portfolio theme with a playful tech vibe. Explore the sections, try the sticky navigation, and enjoy smooth scroll animations.
        </p>
        <div className="mt-4 rounded-lg border border-slate-200 dark:border-white/10 p-4 text-sm text-slate-600 dark:text-slate-300">
          Tip: Resize the window to see the mobile menu and adaptive layout.
        </div>
      </div>
    </div>
  )
}
