import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Photo & Video Production',
    items: [
      'Documentary films & advocacy',
      'Drone & aerial coverage (ISO)',
      'Corporate interviews & profiles',
      'Event coverage & live streaming',
      'Wedding & lifestyle client galleries',
      'English/Somali subtitling & captions',
    ],
  },
  {
    title: 'Creative Post-Production',
    items: [
      'Motion graphics & VFX',
      'Brand animation reels',
      'Infographic videos for policy',
      'Social cuts (1:1, 9:16, 16:9)',
      'Audio mixing & sound design',
    ],
  },
  {
    title: 'Digital Media & Marketing',
    items: [
      'Social strategy & campaign design',
      'Paid ads (YouTube, FB, LinkedIn)',
      'SEO & content marketing',
      'Influencer & affiliate marketing',
      'Newsletters & email automation',
      'Landing pages & funnels',
    ],
  },
  {
    title: 'Travel & Tours Storytelling',
    items: [
      'Destination photo/video',
      'Heritage trail documentation',
      'Souvenir content for airports & embassies',
      'Virtual tours (360°/VR)',
      'Local guide partnerships',
    ],
  },
  {
    title: 'Events & Experiential',
    items: [
      'Event branding (print + digital)',
      'AV setup & screen design',
      'Media wall & press coverage',
      'Recap films & social snippets',
      'Sponsorship decks & affiliate tracking',
    ],
  },
  {
    title: 'Training & Capacity',
    items: [
      'Media production bootcamps',
      'NGO visibility workshops',
      'Digital marketing for SMEs',
      'Photography masterclasses (SNPA & CSC)',
    ],
  },
];

export default function Services() {
  return (
    <section id="tiers" className="relative bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-5xl"
        >
          Services that scale with your vision
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          From capture to campaign — one ecosystem for creators, NGOs, and brands.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-lg font-semibold">{c.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 min-h-[6px] w-1.5 min-w-[6px] rounded-full bg-white/70"></span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
