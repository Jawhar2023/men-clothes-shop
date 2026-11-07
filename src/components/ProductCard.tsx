import { Link } from 'react-router-dom';
import { formatPrice, getMinPrice, type Product } from '../data/products';
import { useCart } from '../context/CartContext';
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

type Props = {
  product: Product;
  showSwatches?: boolean;
};

export function ProductCard({ product, showSwatches = false }: Props) {
  const { openQuickView, addItem } = useCart();
  const primary = product.images[0]?.src;
  const secondary = product.images[1]?.src;
  const price = getMinPrice(product);
  const defaultVariant = product.variants.find((v) => v.available) ?? product.variants[0];
  const colorOpt = product.options.find((o) => o.name.toLowerCase() === 'color');
  const colors = colorOpt?.values ?? [];
  const maxPrice = Math.max(...product.variants.map((v) => parseFloat(v.price)));
  const hasRange = maxPrice > price + 0.01;

  return (
    <article className="group h-full">
      <div className="relative aspect-[2/3] overflow-hidden bg-sand">
        <Link to={`/products/${product.handle}`} className="block h-full w-full">
          {primary && (
            <img
              src={primary}
              alt={product.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
              loading="lazy"
              draggable={false}
            />
          )}
          {secondary && (
            <img
              src={secondary}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 scale-105 transition duration-700 group-hover:opacity-100 group-hover:scale-100"
              loading="lazy"
              draggable={false}
            />
          )}
        </Link>

        {product.variants.some((v) => v.available) === false && (
          <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] tracking-[0.14em] uppercase">
            Sold out
          </span>
        )}

        <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-2 transition-all duration-300 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
          <button
            type="button"
            onClick={() => openQuickView(product)}
            className="flex-1 bg-white/95 text-ink text-[11px] tracking-[0.12em] uppercase py-3 hover:bg-white shadow-sm"
          >
            Quick view
          </button>
          <button
            type="button"
            onClick={() => defaultVariant && addItem(product, defaultVariant)}
            className="flex-1 bg-ink text-white text-[11px] tracking-[0.12em] uppercase py-3 hover:bg-black"
          >
            Add
          </button>
        </div>
      </div>

      <div className="pt-4 text-center">
        <Link
          to={`/products/${product.handle}`}
          className="block text-[15px] tracking-wide hover:underline underline-offset-4"
        >
          {product.title}
        </Link>
        <p className="mt-1.5 text-sm text-muted">
          {hasRange ? `From ${formatPrice(price)}` : formatPrice(price)}
        </p>
        {showSwatches && colors.length > 0 && (
          <div className="mt-3 flex justify-center gap-1.5">
            {colors.slice(0, 6).map((c) => (
              <span
                key={c}
                title={c}
                className={cn(
                  'w-3.5 h-3.5 rounded-full border border-white',
                  'shadow-[0_0_0_1px_rgba(0,0,0,0.12)]',
                )}
                style={{ backgroundColor: COLOR_MAP[c] ?? '#c4b8a8' }}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
