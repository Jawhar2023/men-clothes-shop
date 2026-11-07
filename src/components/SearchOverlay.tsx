import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice, getMinPrice, products } from '../data/products';
import { useCart } from '../context/CartContext';

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useCart();
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return products.slice(0, 6);
    return products.filter((p) => p.title.toLowerCase().includes(query)).slice(0, 8);
  }, [q]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button type="button" className="absolute inset-0 bg-black/40" onClick={() => setSearchOpen(false)} aria-label="Close search" />
      <div className="relative mx-auto mt-10 sm:mt-16 max-w-2xl bg-[color:var(--color-paper)] p-5 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-2xl">Search Our Site</h2>
          <button type="button" className="text-sm uppercase tracking-wide text-muted" onClick={() => setSearchOpen(false)}>
            Close
          </button>
        </div>
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products…"
          className="w-full border-b border-[color:var(--color-line)] bg-transparent py-3 text-lg outline-none focus:border-ink"
        />
        <p className="mt-3 text-xs tracking-[0.14em] uppercase text-muted">Trending Search</p>
        <div className="mt-4 space-y-3 max-h-[50vh] overflow-y-auto">
          {results.map((p) => (
            <Link
              key={p.id}
              to={`/products/${p.handle}`}
              onClick={() => setSearchOpen(false)}
              className="flex gap-3 items-center hover:bg-sand/60 p-2 -mx-2"
            >
              <img src={p.images[0]?.src} alt="" className="w-14 h-16 object-cover bg-sand" />
              <div>
                <p className="text-sm">{p.title}</p>
                <p className="text-xs text-muted">{formatPrice(getMinPrice(p))}</p>
              </div>
            </Link>
          ))}
          {results.length === 0 && <p className="text-sm text-muted py-6">No products found.</p>}
        </div>
      </div>
    </div>
  );
}
