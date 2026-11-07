import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal, count } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[color:var(--color-paper)] shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[color:var(--color-line)]">
          <h2 className="font-display text-2xl">Cart ({count})</h2>
          <button type="button" onClick={closeCart} className="text-sm tracking-wide uppercase text-muted hover:text-ink">
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {items.length === 0 ? (
            <div className="text-center py-16 text-muted">
              <p className="mb-4">Your cart is empty.</p>
              <Link
                to="/collections/shirts"
                onClick={closeCart}
                className="inline-block bg-ink text-white px-5 py-3 text-xs tracking-[0.14em] uppercase"
              >
                Continue shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.key} className="flex gap-4">
                <Link to={`/products/${item.handle}`} onClick={closeCart} className="shrink-0">
                  <img src={item.image} alt={item.title} className="w-20 h-28 object-cover bg-sand" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/products/${item.handle}`} onClick={closeCart} className="text-sm font-medium hover:underline">
                    {item.title}
                  </Link>
                  <p className="text-xs text-muted mt-1">{item.variantTitle}</p>
                  <p className="text-sm mt-2">{formatPrice(item.price)}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="inline-flex items-center border border-[color:var(--color-line)]">
                      <button
                        type="button"
                        className="w-8 h-8"
                        onClick={() => updateQty(item.key, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        className="w-8 h-8"
                        onClick={() => updateQty(item.key, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-xs text-muted underline"
                      onClick={() => removeItem(item.key)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[color:var(--color-line)] p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted">
              Shipping &amp; taxes calculated at checkout.
            </p>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="block w-full text-center bg-ink text-white py-3.5 text-xs tracking-[0.16em] uppercase hover:bg-black transition-colors"
            >
              Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
