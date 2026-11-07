import { useMemo, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { collectionBanner } from '../data/home';
import {
  formatPrice,
  getCollectionProducts,
  getMinPrice,
  getProductByHandle,
  type Product,
} from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { cn } from '../lib/utils';

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'title' | 'title-desc';
type ViewMode = 'grid' | 'list';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Shirts', value: 'shirts' },
  { label: 'Trousers', value: 'trousers' },
  { label: 'Sweatshirts', value: 'sweatshirts' },
  { label: 'Shorts', value: 'shorts' },
  { label: 'Shoes', value: 'shoes' },
];

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

function getColors(product: Product) {
  const opt = product.options.find((o) => o.name.toLowerCase() === 'color');
  return opt?.values ?? [];
}

function colorHex(name: string) {
  return COLOR_MAP[name] ?? '#c4b8a8';
}

export function CollectionPage() {
  const [availability, setAvailability] = useState<'all' | 'in' | 'out'>('all');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(500);
  const [colors, setColors] = useState<string[]>([]);
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState<SortKey>('featured');
  const [view, setView] = useState<ViewMode>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [openBlocks, setOpenBlocks] = useState({
    category: true,
    availability: true,
    price: true,
    color: true,
    featured: true,
  });

  const collectionProducts = useMemo(() => getCollectionProducts(), []);

  const allColors = useMemo(() => {
    const set = new Set<string>();
    collectionProducts.forEach((p) => getColors(p).forEach((c) => set.add(c)));
    return [...set].sort();
  }, [collectionProducts]);

  const featured =
    getProductByHandle('textured-weave-quarter-zip-polo-shirt') ?? collectionProducts[0];

  const filtered = useMemo(() => {
    let list = [...collectionProducts];

    list = list.filter((p) => {
      const price = getMinPrice(p);
      if (price < priceMin || price > priceMax) return false;
      const available = p.variants.some((v) => v.available);
      if (availability === 'in' && !available) return false;
      if (availability === 'out' && available) return false;
      if (colors.length) {
        const pcs = getColors(p);
        if (!pcs.some((c) => colors.includes(c))) return false;
      }
      if (category !== 'all') {
        const t = p.title.toLowerCase();
        if (category === 'shirts' && !t.includes('shirt') && !t.includes('polo')) return false;
        if (category === 'trousers' && !t.includes('trousers') && !t.includes('trouser')) return false;
        if (category === 'sweatshirts' && !t.includes('sweatshirt') && !t.includes('crew')) return false;
        if (category === 'shorts' && !t.includes('shorts') && !t.includes('bermuda')) return false;
        if (category === 'shoes' && !t.includes('trainer') && !t.includes('shoe')) return false;
      }
      return true;
    });

    if (sort === 'price-asc') list.sort((a, b) => getMinPrice(a) - getMinPrice(b));
    if (sort === 'price-desc') list.sort((a, b) => getMinPrice(b) - getMinPrice(a));
    if (sort === 'title') list.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'title-desc') list.sort((a, b) => b.title.localeCompare(a.title));

    return list;
  }, [collectionProducts, availability, priceMin, priceMax, colors, sort, category]);

  const activeFilterCount =
    (availability !== 'all' ? 1 : 0) +
    (colors.length ? 1 : 0) +
    (priceMin > 0 || priceMax < 500 ? 1 : 0) +
    (category !== 'all' ? 1 : 0);

  function toggleColor(c: string) {
    setColors((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  }

  function clearFilters() {
    setAvailability('all');
    setPriceMin(0);
    setPriceMax(500);
    setColors([]);
    setCategory('all');
  }

  function toggleBlock(key: keyof typeof openBlocks) {
    setOpenBlocks((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const Filters = (
    <div className="space-y-0">
      {/* Products Category */}
      <FilterBlock
        title="Products Category"
        open={openBlocks.category}
        onToggle={() => toggleBlock('category')}
      >
        <ul className="space-y-2.5">
          {CATEGORIES.map((c) => (
            <li key={c.value}>
              <button
                type="button"
                onClick={() => setCategory(c.value)}
                className={cn(
                  'text-sm transition-colors hover:text-ink',
                  category === c.value ? 'text-ink font-medium underline underline-offset-4' : 'text-muted',
                )}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </FilterBlock>

      {/* Availability */}
      <FilterBlock
        title="Availability"
        open={openBlocks.availability}
        onToggle={() => toggleBlock('availability')}
      >
        <div className="space-y-2.5 text-sm">
          {(
            [
              ['all', 'All'],
              ['in', 'In stock'],
              ['out', 'Out of stock'],
            ] as const
          ).map(([value, label]) => (
            <label key={value} className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'w-4 h-4 rounded-full border flex items-center justify-center transition-colors',
                  availability === value ? 'border-ink bg-ink' : 'border-stone group-hover:border-ink',
                )}
              >
                {availability === value && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </span>
              <button type="button" onClick={() => setAvailability(value)} className="text-left">
                {label}
              </button>
            </label>
          ))}
        </div>
      </FilterBlock>

      {/* Price */}
      <FilterBlock title="Price" open={openBlocks.price} onToggle={() => toggleBlock('price')}>
        <div className="space-y-4">
          <input
            type="range"
            min={0}
            max={500}
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            className="w-full accent-ink"
          />
          <div className="flex items-center gap-2 text-sm">
            <div className="flex-1 border border-line bg-white px-3 py-2">
              <span className="text-[10px] uppercase tracking-wider text-muted block">From</span>
              ${priceMin}
            </div>
            <span className="text-muted">—</span>
            <div className="flex-1 border border-line bg-white px-3 py-2">
              <span className="text-[10px] uppercase tracking-wider text-muted block">To</span>
              <input
                type="number"
                min={0}
                max={500}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value) || 0)}
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </FilterBlock>

      {/* Color */}
      <FilterBlock title="Color" open={openBlocks.color} onToggle={() => toggleBlock('color')}>
        <div className="flex flex-wrap gap-2.5">
          {allColors.map((c) => {
            const active = colors.includes(c);
            return (
              <button
                key={c}
                type="button"
                title={c}
                onClick={() => toggleColor(c)}
                className={cn(
                  'w-8 h-8 rounded-full border-2 transition-transform hover:scale-110',
                  active ? 'border-ink scale-110 ring-2 ring-ink/20' : 'border-white shadow-[0_0_0_1px_#d9d2c8]',
                )}
                style={{ backgroundColor: colorHex(c) }}
                aria-label={c}
              />
            );
          })}
        </div>
        {colors.length > 0 && (
          <p className="mt-3 text-xs text-muted">{colors.join(', ')}</p>
        )}
      </FilterBlock>

      {/* Featured product */}
      {featured && (
        <FilterBlock
          title="Featured product"
          open={openBlocks.featured}
          onToggle={() => toggleBlock('featured')}
        >
          <Link to={`/products/${featured.handle}`} className="flex gap-3 group">
            <img
              src={featured.images[0]?.src}
              alt={featured.title}
              className="w-20 h-[7.5rem] object-cover bg-sand shrink-0"
            />
            <div className="min-w-0">
              <p className="text-sm group-hover:underline underline-offset-4 leading-snug">
                {featured.title}
              </p>
              <p className="mt-2 text-sm text-muted">{formatPrice(getMinPrice(featured))}</p>
            </div>
          </Link>
        </FilterBlock>
      )}

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearFilters}
          className="mt-6 w-full border border-line py-3 text-xs tracking-[0.14em] uppercase hover:bg-ink hover:text-white transition-colors"
        >
          Clear all ({activeFilterCount})
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Compact Milano-style banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={collectionBanner}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 py-16 sm:py-20 lg:py-24 text-center text-white">
          <nav className="text-[11px] tracking-[0.18em] uppercase text-white/75 mb-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2 opacity-50">·</span>
            <span>Shirts</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl">Shirts</h1>
          <p className="mt-3 text-white/85 text-sm sm:text-base">
            Sharp layers and easy everyday essentials.
          </p>
        </div>
      </section>

      {/* Category chips */}
      <div className="border-b border-line bg-paper/80 backdrop-blur sticky top-[4.5rem] sm:top-[5.5rem] z-30">
        <div className="section-shell py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => setCategory(c.value)}
              className={cn(
                'shrink-0 px-4 py-2 text-xs tracking-[0.12em] uppercase border transition-colors',
                category === c.value
                  ? 'bg-ink text-white border-ink'
                  : 'bg-transparent border-line text-muted hover:border-ink hover:text-ink',
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <section className="section-shell py-10 sm:py-14 lg:py-16">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-line">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="lg:hidden inline-flex items-center gap-2 border border-line px-4 py-2.5 text-xs tracking-[0.14em] uppercase"
              onClick={() => setFiltersOpen(true)}
            >
              Filter
              {activeFilterCount > 0 && (
                <span className="min-w-5 h-5 px-1 rounded-full bg-ink text-white text-[10px] flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <p className="text-sm text-muted">
              Showing <span className="text-ink font-medium">{filtered.length}</span> products
            </p>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden sm:flex border border-line">
              <button
                type="button"
                aria-label="Grid view"
                onClick={() => setView('grid')}
                className={cn('w-10 h-10 flex items-center justify-center', view === 'grid' && 'bg-ink text-white')}
              >
                <GridIcon />
              </button>
              <button
                type="button"
                aria-label="List view"
                onClick={() => setView('list')}
                className={cn('w-10 h-10 flex items-center justify-center', view === 'list' && 'bg-ink text-white')}
              >
                <ListIcon />
              </button>
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="border border-line bg-white px-3 py-2.5 text-sm min-w-[160px]"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title">Name: A–Z</option>
              <option value="title-desc">Name: Z–A</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 xl:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-36 border border-line bg-white/60 backdrop-blur-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-display text-2xl">Filter</h2>
                {activeFilterCount > 0 && (
                  <span className="text-xs text-muted">{activeFilterCount} active</span>
                )}
              </div>
              {Filters}
            </div>
          </aside>

          <div>
            {filtered.length === 0 ? (
              <div className="text-center py-24 border border-dashed border-line">
                <p className="font-display text-3xl mb-3">No matches</p>
                <p className="text-muted text-sm mb-6">Try adjusting filters to see more pieces.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="bg-ink text-white px-6 py-3 text-xs tracking-[0.14em] uppercase"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`${view}-${sort}-${category}-${colors.join()}-${availability}-${priceMax}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className={cn(
                    view === 'grid'
                      ? 'grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10'
                      : 'flex flex-col gap-6',
                  )}
                >
                  {filtered.map((p, i) =>
                    view === 'list' ? (
                      <ListProductRow key={p.id} product={p} index={i} />
                    ) : (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(i * 0.04, 0.4), duration: 0.4 }}
                      >
                        <ProductCard product={p} showSwatches />
                      </motion.div>
                    ),
                  )}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filters drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden ${filtersOpen ? '' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${filtersOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setFiltersOpen(false)}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-[88%] max-w-sm bg-paper shadow-2xl transition-transform overflow-y-auto ${
            filtersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="sticky top-0 bg-paper z-10 flex justify-between items-center px-5 py-4 border-b border-line">
            <h2 className="font-display text-2xl">Filter</h2>
            <button type="button" onClick={() => setFiltersOpen(false)} className="text-sm uppercase tracking-wide">
              Close
            </button>
          </div>
          <div className="p-5">{Filters}</div>
        </aside>
      </div>
    </>
  );
}

function FilterBlock({
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
    <div className="border-b border-line py-4">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-1"
      >
        <span className="text-[13px] tracking-[0.08em] uppercase">{title}</span>
        <span className="text-lg leading-none text-muted">{open ? '−' : '+'}</span>
      </button>
      <div className={cn('pt-3 overflow-hidden transition-all', open ? 'block' : 'hidden')}>
        {children}
      </div>
    </div>
  );
}

function ListProductRow({ product, index }: { product: Product; index: number }) {
  const price = getMinPrice(product);
  const colors = getColors(product);
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.3) }}
      className="grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr_auto] gap-4 sm:gap-6 items-center border-b border-line pb-6"
    >
      <Link to={`/products/${product.handle}`} className="aspect-[2/3] overflow-hidden bg-sand">
        <img src={product.images[0]?.src} alt={product.title} className="h-full w-full object-cover" />
      </Link>
      <div>
        <Link to={`/products/${product.handle}`} className="font-display text-xl sm:text-2xl hover:underline underline-offset-4">
          {product.title}
        </Link>
        <p className="mt-1 text-sm text-muted">{formatPrice(price)}</p>
        {colors.length > 0 && (
          <div className="mt-3 flex gap-1.5">
            {colors.slice(0, 5).map((c) => (
              <span
                key={c}
                title={c}
                className="w-4 h-4 rounded-full border border-white shadow-[0_0_0_1px_#ddd]"
                style={{ backgroundColor: colorHex(c) }}
              />
            ))}
          </div>
        )}
      </div>
      <Link
        to={`/products/${product.handle}`}
        className="hidden sm:inline-flex border border-ink px-5 py-2.5 text-xs tracking-[0.14em] uppercase hover:bg-ink hover:text-white transition-colors"
      >
        View
      </Link>
    </motion.article>
  );
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="1" width="6" height="6" />
      <rect x="9" y="1" width="6" height="6" />
      <rect x="1" y="9" width="6" height="6" />
      <rect x="9" y="9" width="6" height="6" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="2" width="14" height="2" />
      <rect x="1" y="7" width="14" height="2" />
      <rect x="1" y="12" width="14" height="2" />
    </svg>
  );
}
