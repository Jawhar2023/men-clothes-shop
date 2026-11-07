import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { shopFile } from '../lib/utils';
import { brand } from '../data/home';
import { Reveal } from '../components/Motion';

const storyImage = shopFile('men_5.webp', 1600);
const craftImage = shopFile('men_1.webp', 1000);
const atelierImage = shopFile('men_2.webp', 1000);
const lifestyleImage = shopFile('men_3.webp', 1400);

export function AboutPage() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden">
        <motion.img
          src={storyImage}
          alt=""
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 min-h-[85vh] flex items-end pb-16 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-xl text-white"
          >
            <p className="text-[11px] tracking-[0.32em] uppercase text-white/75 mb-4">Our story</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
              {brand.name}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-md leading-relaxed">
              Men&apos;s luxury. Sharp silhouettes. A house built around elevated everyday dressing.
            </p>
            <Link
              to="/collections/shirts"
              className="inline-flex mt-9 bg-white text-ink px-8 py-4 text-xs tracking-[0.18em] uppercase hover:bg-sand transition-colors"
            >
              Shop the collection
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24 text-center">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted mb-4">Since day one</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Designed for real life, styled with intention
          </h2>
          <p className="mt-6 text-muted leading-relaxed text-base sm:text-lg">
            Milano began with a simple idea: clothing should feel as good as it looks. We craft
            collections around tactile fabrics, clean silhouettes, and versatile pieces that move from
            morning coffee to evening plans without losing composure.
          </p>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-2 min-h-[560px]">
        <div className="order-2 md:order-1 flex items-center px-6 sm:px-12 lg:px-16 py-14 bg-[#efe9e0]">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] uppercase text-muted mb-3">Materials</p>
            <h2 className="font-display text-3xl sm:text-4xl">Craft &amp; material</h2>
            <p className="mt-5 text-muted leading-relaxed max-w-md">
              From soft-touch wool blends to structured cottons and linen, every fabric is chosen for
              longevity and comfort. We favor tonal stitching, thoughtful proportions, and details
              that reward a closer look.
            </p>
          </Reveal>
        </div>
        <div className="order-1 md:order-2 min-h-[340px] overflow-hidden">
          <img
            src={craftImage}
            alt=""
            className="h-full w-full object-cover min-h-[340px] md:min-h-full transition duration-700 hover:scale-105"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 min-h-[560px]">
        <div className="min-h-[340px] overflow-hidden">
          <img
            src={atelierImage}
            alt=""
            className="h-full w-full object-cover min-h-[340px] md:min-h-full transition duration-700 hover:scale-105"
          />
        </div>
        <div className="flex items-center px-6 sm:px-12 lg:px-16 py-14">
          <Reveal>
            <p className="text-[11px] tracking-[0.24em] uppercase text-muted mb-3">Philosophy</p>
            <h2 className="font-display text-3xl sm:text-4xl">An atelier mindset</h2>
            <p className="mt-5 text-muted leading-relaxed max-w-md">
              Our team works like a modern atelier — fewer trends, more lasting wardrobe anchors.
              The goal is confidence you can wear daily: sharp shirts, easy layers, and pieces that
              feel personal.
            </p>
            <Link
              to="/collections/shirts"
              className="inline-flex mt-8 bg-ink text-white px-7 py-3.5 text-xs tracking-[0.18em] uppercase hover:bg-black transition-colors"
            >
              Explore shirts
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative min-h-[48vh] overflow-hidden">
        <img src={lifestyleImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 min-h-[48vh] flex flex-col items-center justify-center text-center text-white py-16">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight">
              Looking good doesn&apos;t have to cost the earth
            </h2>
            <p className="mt-5 text-white/85 max-w-lg mx-auto">
              We&apos;re on a mission to show that modern fashion can be both stylish and considered —
              better fabrics, clearer fits, and pieces you&apos;ll keep wearing.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/collections/shirts"
                className="inline-flex bg-white text-ink px-8 py-3.5 text-xs tracking-[0.18em] uppercase hover:bg-sand transition-colors"
              >
                Shop now
              </Link>
              <Link
                to="/contact"
                className="inline-flex border border-white/70 text-white px-8 py-3.5 text-xs tracking-[0.18em] uppercase hover:bg-white/10 transition-colors"
              >
                Talk to a stylist
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid sm:grid-cols-3 gap-10 text-center">
          {[
            { title: 'Thoughtful fit', text: 'Proportions refined for movement and presence.' },
            { title: 'Seasonless ease', text: 'Pieces designed to layer across the year.' },
            { title: 'Client first', text: 'Styling support whenever you need a second eye.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <h3 className="font-display text-2xl sm:text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
