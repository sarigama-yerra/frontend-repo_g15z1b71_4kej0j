import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#8a2be2]/10 via-transparent to-cyan-400/10" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/90 backdrop-blur"
        >
          M2 CREATIVE & CONSULTANT — VISUAL & STORYTELLING UNIT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-4xl font-semibold leading-tight md:text-6xl"
        >
          Somaliland’s first all‑in‑one
          <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent"> creative ecosystem</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-3xl text-center text-base text-white/80 md:text-lg"
        >
          Showcase, manage, and monetize visual stories with global‑standard quality — powering photographers, filmmakers, NGOs, and brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow/20 shadow-black/30 transition hover:scale-[1.02] hover:shadow-lg"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#tiers"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <PlayCircle className="h-5 w-5" />
            Explore Platform
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-3 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur md:grid-cols-4"
        >
          {[
            ['Visual Hub', 'Portfolio hosting & sales'],
            ['Story Lab', 'Documentary & field comms'],
            ['Experience Studio', 'Events, tours & campaigns'],
            ['ISO Workflow', 'Global‑standard delivery'],
          ].map(([title, subtitle]) => (
            <div key={title} className="rounded-lg bg-white/5 p-3">
              <div className="text-sm font-semibold">{title}</div>
              <div className="text-xs text-white/70">{subtitle}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
