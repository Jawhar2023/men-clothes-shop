import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../data/home';

export function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail('');
  }

  return (
    <footer className="mt-20 border-t border-[color:var(--color-line)] bg-[#f0ebe3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1 space-y-4">
          <img src={brand.logo} alt={brand.name} className="h-9 w-auto" />
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            Men&apos;s luxury essentials — sharp shirts, easy layers, and elevated everyday style.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl mb-4">Our Company</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link to="/about" className="hover:text-ink">About us</Link></li>
            <li><Link to="/contact" className="hover:text-ink">Contact</Link></li>
            <li><Link to="/collections/shirts" className="hover:text-ink">Shop shirts</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl mb-4">Quick links</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link to="/" className="hover:text-ink">Home</Link></li>
            <li><Link to="/collections/shirts" className="hover:text-ink">Collections</Link></li>
            <li><a href="#newsletter" className="hover:text-ink">Newsletter</a></li>
          </ul>
        </div>

        <div id="newsletter">
          <h3 className="font-display text-xl mb-4">Sign Up to Newsletter</h3>
          <p className="text-sm text-muted mb-4">Be first to know about new drops and private offers.</p>
          {done ? (
            <p className="text-sm text-accent">Thanks — you&apos;re on the list.</p>
          ) : (
            <form onSubmit={onSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-white border border-[color:var(--color-line)] px-3 py-2.5 text-sm outline-none focus:border-ink"
              />
              <button
                type="submit"
                className="bg-ink text-white px-4 py-2.5 text-xs tracking-[0.14em] uppercase"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="border-t border-[color:var(--color-line)] py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} Milano. Demo storefront — cart is local only.
      </div>
    </footer>
  );
}
