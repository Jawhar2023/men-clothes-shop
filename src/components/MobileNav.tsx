import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const items = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/collections/shirts', label: 'Shop', icon: ShopIcon },
  { to: '/about', label: 'About', icon: AboutIcon },
  { to: '/contact', label: 'Contact', icon: ContactIcon },
];

export function MobileNav() {
  const { openCart, count } = useCart();

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-[color:var(--color-line)] bg-[color:var(--color-paper)]/95 backdrop-blur">
      <ul className="grid grid-cols-5 text-[10px] tracking-wide uppercase">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center gap-1 py-2.5 text-muted',
                  isActive && 'text-ink',
                )
              }
            >
              <item.icon />
              {item.label}
            </NavLink>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={openCart}
            className="w-full flex flex-col items-center gap-1 py-2.5 text-muted relative"
          >
            <BagIcon />
            Cart
            {count > 0 && (
              <span className="absolute top-1 right-[28%] min-w-4 h-4 px-1 rounded-full bg-ink text-white text-[9px] flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z" />
    </svg>
  );
}
function ShopIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="7" width="16" height="13" rx="1" />
      <path d="M8 7V5a4 4 0 018 0v2" />
    </svg>
  );
}
function AboutIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
    </svg>
  );
}
function ContactIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V7a3 3 0 016 0v1" />
    </svg>
  );
}
