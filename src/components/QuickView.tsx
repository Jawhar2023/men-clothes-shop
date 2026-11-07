import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice, type Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export function QuickView() {
  const { quickViewProduct, closeQuickView, addItem } = useCart();
  const product = quickViewProduct;

  const [size, setSize] = useState<string>('');
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    if (!product) return;
    const sizeOpt = product.options.find((o) => o.name.toLowerCase() === 'size');
    const colorOpt = product.options.find((o) => o.name.toLowerCase() === 'color');
    setSize(sizeOpt?.values[0] ?? product.variants[0]?.option1 ?? '');
    setColor(colorOpt?.values[0] ?? product.variants[0]?.option2 ?? '');
  }, [product]);

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

  if (!product || !variant) return null;

  const sizeOpt = product.options.find((o) => o.name.toLowerCase() === 'size');
  const colorOpt = product.options.find((o) => o.name.toLowerCase() === 'color');
  const image = variant.featured_image || product.images[0]?.src;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button type="button" className="absolute inset-0 bg-black/50" aria-label="Close" onClick={closeQuickView} />
      <div className="relative z-10 w-full max-w-3xl bg-[color:var(--color-paper)] grid md:grid-cols-2 overflow-hidden max-h-[90vh]">
        <div className="bg-sand aspect-[3/4] md:aspect-auto">
          {image && <img src={image} alt={product.title} className="h-full w-full object-cover" />}
        </div>
        <div className="p-6 sm:p-8 overflow-y-auto">
          <button type="button" onClick={closeQuickView} className="absolute top-4 right-4 text-sm text-muted uppercase tracking-wide">
            Close
          </button>
          <h2 className="font-display text-3xl pr-10">{product.title}</h2>
          <p className="mt-2 text-muted">{formatPrice(variant.price)}</p>

          {sizeOpt && (
            <div className="mt-6">
              <p className="text-xs tracking-[0.14em] uppercase text-muted mb-2">Size</p>
              <div className="flex flex-wrap gap-2">
                {sizeOpt.values.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setSize(v)}
                    className={cn(
                      'min-w-10 px-3 py-2 border text-sm',
                      size === v ? 'border-ink bg-ink text-white' : 'border-[color:var(--color-line)]',
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}

          {colorOpt && (
            <div className="mt-5">
              <p className="text-xs tracking-[0.14em] uppercase text-muted mb-2">Color</p>
              <div className="flex flex-wrap gap-2">
                {colorOpt.values.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setColor(v)}
                    className={cn(
                      'px-3 py-2 border text-sm',
                      color === v ? 'border-ink bg-ink text-white' : 'border-[color:var(--color-line)]',
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            className="mt-8 w-full bg-ink text-white py-3.5 text-xs tracking-[0.16em] uppercase"
            onClick={() => addItem(product, variant)}
          >
            Add to cart
          </button>
          <Link
            to={`/products/${product.handle}`}
            onClick={closeQuickView}
            className="mt-3 block text-center text-sm underline underline-offset-4 text-muted hover:text-ink"
          >
            View full details
          </Link>
        </div>
      </div>
    </div>
  );
}

export function findVariant(product: Product, size: string, color: string) {
  return (
    product.variants.find(
      (v) =>
        (!size || v.option1 === size) &&
        (!color || !v.option2 || v.option2 === color),
    ) ?? product.variants[0]
  );
}
