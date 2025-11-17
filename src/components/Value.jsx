import { motion } from 'framer-motion';

export default function Value() {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-5xl"
        >
          Local production, global quality
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Donor visibility compliance, revenue diversification, and ISO‑standard workflows — designed for Somaliland.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ['All‑in‑one ecosystem', 'From story capture to publishing & marketing'],
            ['Donor‑compliant delivery', 'Multilingual subtitles & branding alignment'],
            ['Revenue growth', 'Tourism packages, affiliate sales, digital licensing']
          ].map(([t, s]) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-lg font-semibold">{t}</div>
              <div className="mt-2 text-sm text-white/75">{s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
