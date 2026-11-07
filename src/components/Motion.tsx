import { useRef, type ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Sticky scroll-runway parallax (Milano-style moving picture):
 * A tall section creates scroll distance. Inside, a sticky full-viewport
 * frame stays put while the oversized image pans upward — so every scroll
 * tick reveals a new detail of the photo.
 */
export function ParallaxBanner({
  src,
  children,
  scrollVh = 260,
}: {
  src: string;
  children?: ReactNode;
  scrollVh?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Image is ~180% of viewport height; pan from top crop → bottom crop
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['0%', '-44%'],
  );

  return (
    <section ref={ref} className="relative z-0" style={{ height: `${scrollVh}vh` }}>
      <div className="sticky top-0 h-[100svh] min-h-[560px] overflow-hidden bg-ink">
        <motion.div
          className="absolute left-0 top-0 w-full will-change-transform"
          style={{ y, height: '180%' }}
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover"
            draggable={false}
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/55" />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8">
          {children}
        </div>
      </div>
    </section>
  );
}

/** Mild parallax for shorter cards / overlays */
export function ParallaxImage({
  src,
  alt = '',
  className = '',
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['-20%', '20%'],
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="h-[145%] w-full object-cover -mt-[22%]"
        draggable={false}
      />
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-ink text-white py-4 sm:py-5">
      <div className="marquee-track flex gap-12 sm:gap-16 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-xs sm:text-sm tracking-[0.32em] uppercase opacity-90"
          >
            {item}
            <span className="mx-12 sm:mx-16 opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Infinite horizontal image marquee (Instagram strip) */
export function ImageMarquee({
  images,
  reverse = false,
  speed = 45,
}: {
  images: string[];
  reverse?: boolean;
  speed?: number;
}) {
  const loop = [...images, ...images];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-2 sm:gap-3 ${reverse ? 'image-marquee-track-reverse' : 'image-marquee-track'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {loop.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="shrink-0 w-[42vw] sm:w-[28vw] md:w-[22vw] lg:w-[16vw] max-w-[320px] aspect-square overflow-hidden bg-sand"
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
