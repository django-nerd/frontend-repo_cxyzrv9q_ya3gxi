import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Modal from './components/Modal'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <Hero onOpenModal={() => setOpen(true)} />
      <Sections />
      <Modal open={open} onClose={() => setOpen(false)} />

      <footer className="relative z-10 border-t border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 dark:text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} TechFolio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
