import Spline from '@splinetool/react-spline'

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 ring-1 ring-slate-900/10 dark:ring-white/10">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for projects
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-[0_2px_24px_rgba(59,130,246,0.25)]">
              A playful tech portfolio that stands out
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-700 dark:text-slate-200/90 max-w-xl">
              Showcasing modern web craft with 3D flair, smooth motion, and thoughtful details. Built to be fast, accessible, and responsive on every device.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a href="#features" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition">
                Explore features
              </a>
              <button onClick={onOpenModal} className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/70 backdrop-blur px-6 py-3 text-slate-900 dark:text-white ring-1 ring-slate-900/10 dark:ring-white/10 hover:bg-white/90">
                Watch intro
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white/90 dark:from-slate-900/50 dark:via-slate-900/30 dark:to-slate-900/95"></div>
    </section>
  )
}
