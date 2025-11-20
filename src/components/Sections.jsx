import { useEffect, useRef } from 'react'
import { Cpu, Sparkles, Shield, Mail } from 'lucide-react'

function useInViewAnimation() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.2 }
    )

    refs.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const setRef = (el, i) => (refs.current[i] = el)
  return setRef
}

export default function Sections() {
  const setRef = useInViewAnimation()

  return (
    <main className="relative z-10">
      {/* About */}
      <section id="about" className="px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <div ref={(el) => setRef(el, 0)} className="opacity-0 translate-y-8 transition-all duration-700 [ &.in-view]:opacity-100 [ &.in-view]:translate-y-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">About TechFolio</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              TechFolio is a modern, responsive portfolio template designed for creators and developers. It blends a clean aesthetic with playful 3D touches and smooth interactions.
            </p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              The layout is mobile-first, accessibility-minded, and optimized for performance. Use it to present your work, tell your story, and invite collaboration.
            </p>
          </div>
          <div ref={(el) => setRef(el, 1)} className="opacity-0 translate-y-8 transition-all duration-700 delay-150 [ &.in-view]:opacity-100 [ &.in-view]:translate-y-0">
            <div className="grid grid-cols-2 gap-4">
              {["Fast", "Accessible", "Responsive", "Playful"].map((tag) => (
                <div key={tag} className="rounded-xl border border-slate-200 dark:border-white/10 p-4 text-center text-slate-700 dark:text-slate-200">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white text-center">Features</h2>
          <p className="mt-3 text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Thoughtful defaults and delightful details to help your work shine.</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Cpu className="h-6 w-6"/>, title: 'Modern Stack', desc: 'Built with responsive design, utility-first styling, and accessible patterns.' },
              { icon: <Sparkles className="h-6 w-6"/>, title: 'Smooth Motion', desc: 'Elements gently animate into view as you scroll for a polished feel.' },
              { icon: <Shield className="h-6 w-6"/>, title: 'Robust & Stable', desc: 'Well-structured code with comments, easy to extend and customize.' },
            ].map((f, i) => (
              <div key={f.title} ref={(el) => setRef(el, 2 + i)} className="opacity-0 translate-y-8 transition-all duration-700 [ &.in-view]:opacity-100 [ &.in-view]:translate-y-0 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-3xl">
          <div ref={(el) => setRef(el, 5)} className="opacity-0 translate-y-8 transition-all duration-700 [ &.in-view]:opacity-100 [ &.in-view]:translate-y-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Contact</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Have a project in mind? Let’s talk.</p>

            <form className="mt-8 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 p-3 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name"/>
                <input className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 p-3 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email"/>
              </div>
              <textarea rows="4" className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 p-3 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Message"></textarea>
              <button type="button" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500 transition">
                <Mail className="h-5 w-5"/>
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
