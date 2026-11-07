import { Link, NavLink } from 'react-router-dom';
import { brand } from '../data/home';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const links = [
  { to: '/', label: 'Home' },
  { to: '/collections/shirts', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const { count, openCart, setSearchOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--color-paper)]/90 backdrop-blur-md border-b border-[color:var(--color-line)]">
      <div className="bg-ink text-white text-[11px] tracking-[0.18em] uppercase text-center py-2 px-4">
        Free shipping on orders over $150 — Men&apos;s Luxury edit now online
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          <button
            type="button"
            className="md:hidden p-2 -ml-2"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon />
          </button>

          <nav className="hidden md:flex items-center gap-7 text-[13px] tracking-[0.12em] uppercase text-muted">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    'hover:text-ink transition-colors',
                    isActive && 'text-ink',
                  )
                }
                end={l.to === '/'}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-1 sm:gap-2 ml-auto md:ml-0">
            <button
              type="button"
              className="hidden md:inline-flex p-2"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              className="relative p-2"
              aria-label="Open cart"
              onClick={openCart}
            >
              <BagIcon />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 rounded-full bg-ink text-white text-[10px] flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V7a3 3 0 016 0v1" />
    </svg>
  );
}
