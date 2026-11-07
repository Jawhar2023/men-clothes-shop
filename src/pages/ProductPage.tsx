import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  formatPrice,
  getCollectionProducts,
  getProductByHandle,
  products,
} from '../data/products';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { cn } from '../lib/utils';

const COLOR_MAP: Record<string, string> = {
  'Dark Grey': '#4a4a4a',
  Beige: '#d4c4a8',
  Black: '#1a1a1a',
  White: '#f5f5f5',
  'Pale Pink': '#f0c9d0',
  Indigo: '#3d4f6f',
  'Dark Blue': '#1e3a5f',
  Navy: '#1b2a4a',
  Brown: '#6b4a32',
  Cream: '#f0e6d8',
  Grey: '#8a8a8a',
  Red: '#a33a3a',
  Green: '#4a6b4a',
};

export function ProductPage() {
  const { handle } = useParams();
  const navigate = useNavigate();
  const product = getProductByHandle(handle ?? '');
  const { addItem } = useCart();

  const [imageIndex, setImageIndex] = useState(0);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [qty, setQty] = useState(1);
  const [addedFlash, setAddedFlash] = useState(false);
  const [openInfo, setOpenInfo] = useState<'details' | 'care' | 'shipping' | null>('details');

  const sizeOpt = product?.options.find(
    (o) => o.name.toLowerCase() === 'size' && !o.values.every((v) => v === 'Default Title'),
  );
  const colorOpt = product?.options.find(
    (o) => o.name.toLowerCase() === 'color' && !o.values.every((v) => v === 'Default Title'),
  );

  useEffect(() => {
    if (!product) return;
    setImageIndex(0);
    setQty(1);
    setSize(sizeOpt?.values[0] ?? product.variants[0]?.option1 ?? '');
    setColor(colorOpt?.values[0] ?? product.variants[0]?.option2 ?? '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product?.id]);

  const variant = useMemo(() => {
    if (!product) return null;
    return (
      product.variants.find(
        (v) =>
          (!size || v.option1 === size) &&
          (!color || !v.option2 || v.option2 === color),
      ) ?? product.variants[0]
    );
  }, [product, size, color]);

  // Sync gallery when color changes to variant image
  useEffect(() => {
    if (!product || !variant?.featured_image) return;
    const idx = product.images.findIndex((img) => img.src === variant.featured_image);
    if (idx >= 0) setImageIndex(idx);
  }, [variant?.id]);

  if (!product || !variant) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl mb-4">Product not found</h1>
        <Link to="/collections/shirts" className="underline">
          Back to collection
        </Link>
      </div>
    );
  }

  const activeImage =
    product.images[imageIndex]?.src ||
    variant.featured_image ||
    product.images[0]?.src;

  const inShirts = getCollectionProducts().some((p) => p.id === product.id);
  const relatedPool = inShirts ? getCollectionProducts() : products;
  const related = relatedPool.filter((p) => p.id !== product.id).slice(0, 4);

  function handleAdd() {
    addItem(product!, variant!, qty);
    setAddedFlash(true);
    setTimeout(() => setAddedFlash(false), 1600);
  }

  return (
    <>
      <section className="section-shell py-8 sm:py-12 lg:py-16">
        <p className="text-[11px] tracking-[0.16em] uppercase text-muted mb-8">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link to="/collections/shirts" className="hover:text-ink">Shirts</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-ink">{product.title}</span>
        </p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
          {/* Gallery */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[2/3] overflow-hidden bg-sand mb-3">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt={product.title}
                  initial={{ opacity: 0.4, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {product.images.slice(0, 5).map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setImageIndex(i)}
                  className={cn(
                    'aspect-[2/3] overflow-hidden border-2 transition-colors',
                    imageIndex === i ? 'border-ink' : 'border-transparent opacity-70 hover:opacity-100',
                  )}
                >
                  <img src={img.src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-2">{product.vendor}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.05]">
              {product.title}
            </h1>
            <p className="mt-4 text-xl">{formatPrice(variant.price)}</p>
            <p className="mt-2 text-sm text-muted">
              {variant.available ? 'In stock — ships within 2–4 days' : 'Currently unavailable'}
            </p>

            {sizeOpt && (
              <div className="mt-9">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs tracking-[0.14em] uppercase text-muted">Size</p>
                  <button type="button" className="text-xs text-muted underline underline-offset-2">
                    Size guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizeOpt.values.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setSize(v)}
                      className={cn(
                        'min-w-12 px-4 py-3 border text-sm transition-colors',
                        size === v ? 'border-ink bg-ink text-white' : 'border-line hover:border-ink',
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {colorOpt && (
              <div className="mt-7">
                <p className="text-xs tracking-[0.14em] uppercase text-muted mb-3">
                  Color — <span className="text-ink normal-case tracking-normal">{color}</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {colorOpt.values.map((v) => (
                    <button
                      key={v}
                      type="button"
                      title={v}
                      onClick={() => setColor(v)}
                      className={cn(
                        'w-9 h-9 rounded-full border-2 transition-transform',
                        color === v ? 'border-ink scale-110 ring-2 ring-ink/15' : 'border-white shadow-[0_0_0_1px_#d9d2c8]',
                      )}
                      style={{ backgroundColor: COLOR_MAP[v] ?? '#c4b8a8' }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center border border-line">
                <button type="button" className="w-11 h-12" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  −
                </button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button type="button" className="w-11 h-12" onClick={() => setQty((q) => q + 1)}>
                  +
                </button>
              </div>
              <button
                type="button"
                disabled={!variant.available}
                onClick={handleAdd}
                className={cn(
                  'flex-1 min-w-[200px] py-3.5 text-xs tracking-[0.16em] uppercase transition-colors',
                  variant.available
                    ? 'bg-ink text-white hover:bg-black'
                    : 'bg-stone text-muted cursor-not-allowed',
                )}
              >
                {addedFlash ? 'Added to cart ✓' : 'Add to cart'}
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                handleAdd();
                navigate('/checkout');
              }}
              className="mt-3 w-full border border-ink py-3.5 text-xs tracking-[0.16em] uppercase hover:bg-sand transition-colors"
            >
              Buy now
            </button>

            <div className="mt-10 border-t border-line">
              <Accordion
                title="Product details"
                open={openInfo === 'details'}
                onToggle={() => setOpenInfo(openInfo === 'details' ? null : 'details')}
              >
                <div
                  className="prose-product text-sm"
                  dangerouslySetInnerHTML={{ __html: product.body_html }}
                />
              </Accordion>
              <Accordion
                title="Care"
                open={openInfo === 'care'}
                onToggle={() => setOpenInfo(openInfo === 'care' ? null : 'care')}
              >
                <ul className="text-sm text-muted space-y-1.5 list-disc pl-4">
                  <li>Machine wash cold at 30°C</li>
                  <li>Do not bleach or tumble dry</li>
                  <li>Iron at low temperature</li>
                  <li>Do not dry clean</li>
                </ul>
              </Accordion>
              <Accordion
                title="Shipping & returns"
                open={openInfo === 'shipping'}
                onToggle={() => setOpenInfo(openInfo === 'shipping' ? null : 'shipping')}
              >
                <p className="text-sm text-muted leading-relaxed">
                  Free shipping on orders over $150. Easy returns within 30 days.
                  Demo store — cart is local only.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-24">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <h2 className="font-display text-3xl sm:text-4xl">You may also like</h2>
          <Link to="/collections/shirts" className="text-xs tracking-[0.14em] uppercase text-muted hover:text-ink">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} showSwatches />
          ))}
        </div>
      </section>
    </>
  );
}

function Accordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wide">{title}</span>
        <span className="text-muted">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="pb-5">{children}</div>}
    </div>
  );
}
