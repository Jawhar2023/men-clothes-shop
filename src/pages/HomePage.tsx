import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  bestSellerHandles,
  brandLogos,
  categories,
  heroSlides,
  iconBoxes,
  marqueeItems,
  outfitIdeas,
  promoBanner,
  seasonalStories,
  selfExpression,
  trendingHandles,
} from '../data/home';
import { formatPrice, getMinPrice, getProductByHandle } from '../data/products';
import { ProductCarousel } from '../components/ProductCarousel';
import { Marquee, ParallaxBanner, Reveal } from '../components/Motion';

export function HomePage() {
  const [slide, setSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const current = heroSlides[slide];
  const outfitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProgress(0);
    const started = performance.now();
    const duration = 6500;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - started) / duration);
      setProgress(t);
      if (t >= 1) {
        setSlide((s) => (s + 1) % heroSlides.length);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [slide]);

  const bestSellers = bestSellerHandles
    .map((h) => getProductByHandle(h))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const trending = trendingHandles
    .map((h) => getProductByHandle(h))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  function scrollOutfits(dir: number) {
    const el = outfitRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: 'smooth' });
  }

  return (
    <>
      {/* Hero — edge-to-edge cinematic */}
      <section className="relative h-[100svh] min-h-[720px] overflow-hidden bg-ink text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={current.imageMobile} />
              <img
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover object-center"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 bleed-shell h-full flex items-end pb-24 lg:items-center lg:pb-0">
          <motion.div
            key={`copy-${current.id}`}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[11px] tracking-[0.36em] uppercase mb-6 text-white/75">
              Milano · Men&apos;s Luxury
            </p>
            <h1 className="font-display text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.9]">
              {current.title}
            </h1>
            <p className="mt-7 text-sm sm:text-base md:text-lg text-white/88 max-w-xl uppercase tracking-[0.14em]">
              {current.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to={current.href}
                className="inline-flex bg-white text-ink px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-sand transition-colors"
              >
                {current.cta}
              </Link>
              <Link
                to="/about"
                className="inline-flex border border-white/70 px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-ink transition-colors"
              >
                Our story
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 inset-x-0 z-10">
          <div className="bleed-shell pb-6 flex items-center gap-6">
            <div className="flex gap-2">
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`h-1 rounded-full transition-all ${
                    i === slide ? 'w-14 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            <div className="flex-1 h-px bg-white/25 overflow-hidden">
              <div
                className="h-full bg-white origin-left transition-none"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/70 tabular-nums">
              0{slide + 1} / 0{heroSlides.length}
            </p>
          </div>
        </div>
      </section>

      {/* Shop by category — full-bleed, oversized tiles */}
      <section className="pt-16 sm:pt-24 pb-6">
        <div className="bleed-shell mb-10 sm:mb-14 text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted mb-3">The edit</p>
            <h2 className="font-display text-[clamp(2.75rem,6vw,5rem)] leading-none">
              Shop By Category
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-1.5 sm:gap-2 px-1.5 sm:px-2">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04} className={i === 0 ? 'col-span-2 lg:col-span-1' : ''}>
              <Link
                to={c.href}
                className="group relative block overflow-hidden min-h-[52vw] sm:min-h-[46vw] lg:min-h-[72vh]"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p className="text-white font-display text-3xl sm:text-4xl lg:text-5xl">{c.title}</p>
                  <span className="mt-2 inline-block text-white/85 text-[11px] tracking-[0.2em] uppercase translate-y-2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    Explore →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* Missing seasonal stories strip — oversized */}
      <section className="py-4 sm:py-6">
        <div className="grid md:grid-cols-3 gap-1.5 sm:gap-2 px-1.5 sm:px-2">
          {seasonalStories.map((story, i) => (
            <Reveal key={story.title} delay={i * 0.07}>
              <Link
                to={story.href}
                className="group relative block min-h-[70vw] md:min-h-[78vh] overflow-hidden"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
                <div className="absolute inset-0 flex items-end p-7 sm:p-10">
                  <div>
                    <p className="text-white/70 text-[11px] tracking-[0.28em] uppercase mb-3">
                      Season story
                    </p>
                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white max-w-sm leading-[1.05]">
                      {story.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ProductCarousel
        title="Best Selling"
        subtitle="Handpicked essentials from the men's luxury edit"
        products={bestSellers}
      />

      {/* Self-expression — monumental split */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[100svh]">
          <div className="relative min-h-[65vh] lg:min-h-full overflow-hidden">
            <motion.img
              src={selfExpression.images[0]}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            />
          </div>
          <div className="relative flex items-center min-h-[65vh] lg:min-h-full overflow-hidden bg-[#0e0e0e] text-white">
            <img
              src={selfExpression.images[1]}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-30 scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
            <div className="relative z-10 px-8 sm:px-12 xl:px-20 py-20 max-w-2xl">
              <Reveal>
                <p className="text-[11px] tracking-[0.36em] uppercase text-white/65 mb-6">
                  {selfExpression.eyebrow}
                </p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.12]">
                  {selfExpression.title}
                </h2>
                <Link
                  to={selfExpression.href}
                  className="inline-flex mt-10 border border-white px-9 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-ink transition-colors"
                >
                  {selfExpression.cta}
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ProductCarousel
        title="Trending Outfits"
        subtitle="The looks driving the season forward"
        products={trending}
      />

      {/* Outfit ideas — wide horizontal runway with working scroll */}
      <section className="py-20 sm:py-28 bg-[#111] text-white overflow-hidden">
        <div className="bleed-shell mb-10 sm:mb-14 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/55 mb-3">Lookbook</p>
            <h2 className="font-display text-[clamp(2.75rem,6vw,5rem)] leading-none">
              Outfit Ideas
            </h2>
          </Reveal>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollOutfits(-1)}
              className="w-12 h-12 border border-white/30 hover:bg-white hover:text-ink transition-colors"
              aria-label="Previous looks"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollOutfits(1)}
              className="w-12 h-12 border border-white/30 hover:bg-white hover:text-ink transition-colors"
              aria-label="Next looks"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={outfitRef}
          className="carousel-scroll flex gap-4 sm:gap-6 overflow-x-auto px-[max(1rem,calc((100vw-1680px)/2+1rem))] pb-4"
        >
          {outfitIdeas.map((look, i) => {
            const products = look.productHandles
              .map((h) => getProductByHandle(h))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));
            return (
              <article
                key={look.id}
                className="shrink-0 w-[88vw] sm:w-[70vw] lg:w-[48vw] xl:w-[720px] group"
              >
                <Link
                  to={`/products/${products[0]?.handle ?? 'textured-crochet-shirt'}`}
                  className="relative block aspect-[4/5] overflow-hidden bg-ink"
                >
                  <img
                    src={look.image}
                    alt={look.label}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] tracking-[0.28em] uppercase text-white/70 mb-2">
                        {look.label}
                      </p>
                      <p className="font-display text-3xl sm:text-4xl">Shop the Look</p>
                    </div>
                    <span className="text-xs tracking-[0.18em] uppercase border border-white/50 px-4 py-2">
                      View
                    </span>
                  </div>
                </Link>
                <ul className="mt-5 space-y-3 border-t border-white/15 pt-5">
                  {products.map((p) => (
                    <li key={p.id}>
                      <Link
                        to={`/products/${p.handle}`}
                        className="flex items-center justify-between gap-4 text-sm hover:text-white/70"
                      >
                        <span className="truncate">{p.title}</span>
                        <span className="text-white/55 shrink-0">
                          {formatPrice(getMinPrice(p))}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* decorative index */}
                <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-white/35">
                  0{i + 1} — Milano Atelier
                </p>
              </article>
            );
          })}
          <div className="shrink-0 w-4" aria-hidden />
        </div>
      </section>

      {/* Brand logos — infinite marquee */}
      <section className="border-y border-line py-12 sm:py-16 overflow-hidden bg-paper">
        <div className="marquee-track flex items-center gap-16 sm:gap-24 w-max px-8 opacity-60 grayscale">
          {[...brandLogos, ...brandLogos, ...brandLogos].map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              className="h-12 sm:h-16 w-auto object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* Promo — sticky parallax runway */}
      <ParallaxBanner src={promoBanner.image} scrollVh={220}>
        <div className="max-w-3xl text-center text-white">
          <p className="text-[11px] tracking-[0.36em] uppercase text-white/75 mb-5">
            {promoBanner.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(3.5rem,9vw,7rem)] leading-[0.92]">
            {promoBanner.title}
          </h2>
          <p className="mt-6 text-lg text-white/90 max-w-md mx-auto">{promoBanner.subtitle}</p>
          <Link
            to={promoBanner.href}
            className="inline-flex mt-10 bg-white text-ink px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-sand transition-colors"
          >
            {promoBanner.cta}
          </Link>
        </div>
      </ParallaxBanner>

      {/* Icon boxes */}
      <section className="border-b border-line py-16 sm:py-20 bg-paper">
        <div className="bleed-shell grid sm:grid-cols-3 gap-12 text-center">
          {iconBoxes.map((box, i) => (
            <Reveal key={box.title} delay={i * 0.08}>
              <div className="mx-auto w-14 h-14 mb-5 border border-line flex items-center justify-center">
                <span className="text-xl">{i === 0 ? '⇢' : i === 1 ? '↺' : '✦'}</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl">{box.title}</h3>
              <p className="mt-3 text-sm text-muted max-w-xs mx-auto leading-relaxed">{box.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
