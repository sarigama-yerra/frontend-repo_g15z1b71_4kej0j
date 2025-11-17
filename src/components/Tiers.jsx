import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter (Light)',
    price: '15–25',
    audience: 'Freelancers / Solo creators',
    features: [
      'Portfolio site',
      '10 GB storage',
      'Client galleries (Zenfolio-style)'
    ],
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional (Pro)',
    price: '35–60',
    audience: 'Studios / SMEs',
    features: [
      'Full CRM + bookings',
      'Payment gateway',
      'Custom domain'
    ],
    highlight: true,
    cta: 'Upgrade to Pro'
  },
  {
    name: 'Enterprise (Agency)',
    price: '75–120',
    audience: 'NGOs / Government',
    features: [
      'Unlimited storage',
      'Multi-user dashboard',
      'Analytics + priority support'
    ],
    cta: 'Talk to Sales'
  }
];

export default function Tiers() {
  return (
    <section id="pricing" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-5xl"
        >
          Tiered plans for every creator
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Benchmarked with Zenfolio & Pixieset — priced for local growth.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-2xl border border-white/10 p-6 backdrop-blur ${p.highlight ? 'bg-white text-black' : 'bg-white/5'}`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <div className="text-xl font-semibold">{p.name}</div>
              <div className="mt-1 text-sm text-white/60">{p.audience}</div>
              <div className={`mt-6 text-5xl font-bold ${p.highlight ? 'text-black' : 'text-white'}`}>${p.price}<span className="text-base font-medium opacity-60">/mo</span></div>
              <ul className="mt-6 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${p.highlight ? 'bg-black text-white hover:bg-black/80' : 'bg-white text-black hover:bg-white/80'}`}>
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ['Digital Marketing Bundle', 'SEO + ads + social from $120/mo'],
            ['Documentary Package', 'From $2,000 per film'],
            ['Event Bundle', 'From $800 (AV + media kit)']
          ].map(([title, sub]) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold">{title}</div>
              <div className="text-xs text-white/70">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
