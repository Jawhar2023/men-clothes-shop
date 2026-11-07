import { useCallback, useEffect, useRef, useState } from 'react';
import type { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { cn } from '../lib/utils';

type Props = {
  title: string;
  products: Product[];
  subtitle?: string;
};

export function ProductCarousel({ title, products, subtitle }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);
  const drag = useRef<{
    active: boolean;
    moved: boolean;
    startX: number;
    scrollLeft: number;
  }>({
    active: false,
    moved: false,
    startX: 0,
    scrollLeft: 0,
  });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = Math.max(1, el.scrollWidth - el.clientWidth);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    setProgress(Math.min(1, el.scrollLeft / max));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update, products]);

  function scroll(dir: number) {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-carousel-card]');
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }

  function scrubTo(clientX: number) {
    const el = ref.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: ratio * max, behavior: 'smooth' });
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.button !== 0) return;
    drag.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
    el.classList.add('is-dragging');
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.scrollLeft - dx;
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    drag.current.active = false;
    el?.releasePointerCapture(e.pointerId);
    el?.classList.remove('is-dragging');
  }

  function onClickCapture(e: React.MouseEvent) {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  }

  return (
    <section className="py-20 sm:py-28">
      <div className="bleed-shell mb-10 sm:mb-14">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-muted text-base sm:text-lg max-w-xl">{subtitle}</p>
            )}
          </div>
          <div className="hidden sm:flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              className={cn(
                'w-12 h-12 border border-line text-xl transition-colors',
                canPrev ? 'hover:bg-ink hover:text-white' : 'opacity-30 cursor-not-allowed',
              )}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              disabled={!canNext}
              className={cn(
                'w-12 h-12 border border-line text-xl transition-colors',
                canNext ? 'hover:bg-ink hover:text-white' : 'opacity-30 cursor-not-allowed',
              )}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
        className="carousel-scroll flex gap-5 sm:gap-7 overflow-x-auto overscroll-x-contain px-[max(1rem,calc((100vw-1680px)/2+1rem))] pb-2 cursor-grab select-none"
      >
        {products.map((p) => (
          <div
            key={p.id}
            data-carousel-card
            className="shrink-0 w-[82vw] min-[480px]:w-[48vw] sm:w-[40vw] md:w-[32vw] lg:w-[26vw] xl:w-[420px]"
          >
            <ProductCard product={p} />
          </div>
        ))}
        <div className="shrink-0 w-4" aria-hidden />
      </div>

      {/* Custom scrubber scrollbar — always visible & clickable */}
      <div className="bleed-shell mt-8 sm:mt-10">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="sm:hidden w-10 h-10 border border-line disabled:opacity-30"
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label="Previous"
          >
            ‹
          </button>
          <div
            ref={trackRef}
            role="scrollbar"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onClick={(e) => scrubTo(e.clientX)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') scroll(1);
              if (e.key === 'ArrowLeft') scroll(-1);
            }}
            className="relative flex-1 h-1.5 bg-stone/70 cursor-pointer group"
          >
            <div
              className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-150"
              style={{ width: `${Math.max(12, progress * 100)}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-ink rounded-full shadow-sm border-2 border-paper transition-transform group-hover:scale-110"
              style={{ left: `calc(${progress * 100}% - 8px)` }}
            />
          </div>
          <button
            type="button"
            className="sm:hidden w-10 h-10 border border-line disabled:opacity-30"
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label="Next"
          >
            ›
          </button>
          <div className="hidden sm:flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              className={cn(
                'w-10 h-10 border border-line',
                !canPrev && 'opacity-30 cursor-not-allowed',
              )}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              disabled={!canNext}
              className={cn(
                'w-10 h-10 border border-line',
                !canNext && 'opacity-30 cursor-not-allowed',
              )}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
