import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

type FormState = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  country: string;
  postal: string;
  phone: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
  notes: string;
};

const emptyForm: FormState = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  apartment: '',
  city: '',
  country: 'United States',
  postal: '',
  phone: '',
  cardName: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
  notes: '',
};

type Errors = Partial<Record<keyof FormState, string>>;

export function CheckoutPage() {
  const { items, subtotal, updateQty, removeItem, clearCart, closeCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [shipping, setShipping] = useState<'standard' | 'express'>('standard');
  const [placing, setPlacing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    closeCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [closeCart]);

  const shippingCost = shipping === 'express' ? 25 : subtotal >= 150 ? 0 : 12;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  const summaryItems = useMemo(() => items, [items]);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.firstName.trim()) next.firstName = 'Required';
    if (!form.lastName.trim()) next.lastName = 'Required';
    if (!form.address.trim()) next.address = 'Required';
    if (!form.city.trim()) next.city = 'Required';
    if (!form.postal.trim()) next.postal = 'Required';
    if (!form.phone.trim()) next.phone = 'Required';
    if (!form.cardName.trim()) next.cardName = 'Required';
    const digits = form.cardNumber.replace(/\s/g, '');
    if (digits.length < 12) next.cardNumber = 'Enter a card number';
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) next.expiry = 'Use MM/YY';
    if (!/^\d{3,4}$/.test(form.cvc)) next.cvc = 'Invalid CVC';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!items.length || !validate()) return;
    setPlacing(true);
    window.setTimeout(() => {
      const id = `ML-${Date.now().toString().slice(-8)}`;
      setOrderId(id);
      clearCart();
      setPlacing(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 900);
  }

  if (orderId) {
    return (
      <section className="bleed-shell py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted mb-4">Order confirmed</p>
          <h1 className="font-display text-5xl sm:text-6xl leading-none">Thank you</h1>
          <p className="mt-5 text-muted leading-relaxed">
            Your demo order <span className="text-ink font-medium">{orderId}</span> is placed.
            No real payment was processed — this checkout is for presentation only.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/collections/shirts"
              className="inline-flex bg-ink text-white px-8 py-3.5 text-xs tracking-[0.16em] uppercase hover:bg-black"
            >
              Continue shopping
            </Link>
            <Link
              to="/"
              className="inline-flex border border-line px-8 py-3.5 text-xs tracking-[0.16em] uppercase hover:bg-sand"
            >
              Back home
            </Link>
          </div>
        </motion.div>
      </section>
    );
  }

  if (!items.length) {
    return (
      <section className="bleed-shell py-24 text-center">
        <h1 className="font-display text-5xl mb-4">Your cart is empty</h1>
        <p className="text-muted mb-8">Add pieces from the shirts collection to checkout.</p>
        <Link
          to="/collections/shirts"
          className="inline-flex bg-ink text-white px-8 py-3.5 text-xs tracking-[0.16em] uppercase"
        >
          Shop shirts
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-line bg-[#efe9e0]">
        <div className="bleed-shell py-10 sm:py-14">
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted mb-3">
            <Link to="/" className="hover:text-ink">
              Home
            </Link>
            <span className="mx-2 opacity-40">/</span>
            Checkout
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-none">Checkout</h1>
          <p className="mt-3 text-muted max-w-xl">
            Secure demo checkout — complete your order details below. Payment is simulated only.
          </p>
        </div>
      </section>

      <section className="bleed-shell py-10 sm:py-16">
        <form
          onSubmit={onSubmit}
          noValidate
          className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 xl:gap-16 items-start"
        >
          <div className="space-y-10">
            <Block title="Contact">
              <Field
                label="Email"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(v) => setField('email', v)}
                placeholder="you@email.com"
              />
              <Field
                label="Phone"
                value={form.phone}
                error={errors.phone}
                onChange={(v) => setField('phone', v)}
                placeholder="+1 555 000 0000"
              />
            </Block>

            <Block title="Shipping address">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="First name"
                  value={form.firstName}
                  error={errors.firstName}
                  onChange={(v) => setField('firstName', v)}
                />
                <Field
                  label="Last name"
                  value={form.lastName}
                  error={errors.lastName}
                  onChange={(v) => setField('lastName', v)}
                />
              </div>
              <Field
                label="Address"
                value={form.address}
                error={errors.address}
                onChange={(v) => setField('address', v)}
              />
              <Field
                label="Apartment, suite (optional)"
                value={form.apartment}
                onChange={(v) => setField('apartment', v)}
              />
              <div className="grid sm:grid-cols-3 gap-4">
                <Field
                  label="City"
                  value={form.city}
                  error={errors.city}
                  onChange={(v) => setField('city', v)}
                />
                <Field
                  label="Postal code"
                  value={form.postal}
                  error={errors.postal}
                  onChange={(v) => setField('postal', v)}
                />
                <div>
                  <label className="block text-xs tracking-[0.14em] uppercase text-muted mb-2">
                    Country
                  </label>
                  <select
                    value={form.country}
                    onChange={(e) => setField('country', e.target.value)}
                    className="w-full border border-line bg-white px-3 py-3 text-sm outline-none focus:border-ink"
                  >
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Italy</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>
            </Block>

            <Block title="Shipping method">
              <div className="space-y-3">
                <ShippingOption
                  active={shipping === 'standard'}
                  onClick={() => setShipping('standard')}
                  title="Standard"
                  detail={subtotal >= 150 ? 'Free · 4–7 business days' : '$12 · 4–7 business days'}
                  price={subtotal >= 150 ? 'Free' : formatPrice(12)}
                />
                <ShippingOption
                  active={shipping === 'express'}
                  onClick={() => setShipping('express')}
                  title="Express"
                  detail="$25 · 1–3 business days"
                  price={formatPrice(25)}
                />
              </div>
            </Block>

            <Block title="Payment">
              <p className="text-xs text-muted -mt-2 mb-1">
                Demo only — any plausible card details will work.
              </p>
              <Field
                label="Name on card"
                value={form.cardName}
                error={errors.cardName}
                onChange={(v) => setField('cardName', v)}
              />
              <Field
                label="Card number"
                value={form.cardNumber}
                error={errors.cardNumber}
                onChange={(v) =>
                  setField(
                    'cardNumber',
                    v
                      .replace(/[^\d]/g, '')
                      .slice(0, 16)
                      .replace(/(\d{4})(?=\d)/g, '$1 ')
                      .trim(),
                  )
                }
                placeholder="4242 4242 4242 4242"
              />
              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Expiry"
                  value={form.expiry}
                  error={errors.expiry}
                  onChange={(v) => {
                    const digits = v.replace(/[^\d]/g, '').slice(0, 4);
                    setField(
                      'expiry',
                      digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits,
                    );
                  }}
                  placeholder="MM/YY"
                />
                <Field
                  label="CVC"
                  value={form.cvc}
                  error={errors.cvc}
                  onChange={(v) => setField('cvc', v.replace(/[^\d]/g, '').slice(0, 4))}
                  placeholder="123"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.14em] uppercase text-muted mb-2">
                  Order notes (optional)
                </label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setField('notes', e.target.value)}
                  className="w-full border border-line bg-white px-3 py-3 text-sm outline-none focus:border-ink resize-y"
                  placeholder="Delivery instructions, gift message…"
                />
              </div>
            </Block>

            <button
              type="submit"
              disabled={placing}
              className={cn(
                'w-full sm:w-auto min-w-[240px] bg-ink text-white px-10 py-4 text-xs tracking-[0.18em] uppercase transition-colors',
                placing ? 'opacity-70 cursor-wait' : 'hover:bg-black',
              )}
            >
              {placing ? 'Placing order…' : `Pay ${formatPrice(total)}`}
            </button>
          </div>

          <aside className="lg:sticky lg:top-28 border border-line bg-white/70 backdrop-blur-sm p-6 sm:p-8">
            <h2 className="font-display text-3xl mb-6">Order summary</h2>
            <div className="space-y-5 max-h-[420px] overflow-y-auto pr-1">
              {summaryItems.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <Link to={`/products/${item.handle}`} className="relative shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-28 object-cover bg-sand"
                    />
                    <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-ink text-white text-[10px] flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/products/${item.handle}`}
                      className="text-sm hover:underline underline-offset-4"
                    >
                      {item.title}
                    </Link>
                    <p className="text-xs text-muted mt-1">{item.variantTitle}</p>
                    <p className="text-sm mt-2">
                      {formatPrice(parseFloat(item.price) * item.quantity)}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          className="w-7 h-7"
                          onClick={() => updateQty(item.key, item.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-xs">{item.quantity}</span>
                        <button
                          type="button"
                          className="w-7 h-7"
                          onClick={() => updateQty(item.key, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-[11px] text-muted underline"
                        onClick={() => removeItem(item.key)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-line space-y-3 text-sm">
              <Row label="Subtotal" value={formatPrice(subtotal)} />
              <Row
                label="Shipping"
                value={shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}
              />
              <Row label="Estimated tax" value={formatPrice(tax)} />
              <div className="flex justify-between pt-3 border-t border-line text-base font-medium">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                closeCart();
                navigate('/collections/shirts');
              }}
              className="mt-6 w-full border border-line py-3 text-xs tracking-[0.14em] uppercase hover:bg-sand"
            >
              Continue shopping
            </button>
          </aside>
        </form>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-3xl">{title}</h2>
      {children}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs tracking-[0.14em] uppercase text-muted mb-2">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'w-full border bg-white px-3 py-3 text-sm outline-none focus:border-ink',
          error ? 'border-red-700' : 'border-line',
        )}
      />
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}

function ShippingOption({
  active,
  onClick,
  title,
  detail,
  price,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  detail: string;
  price: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'w-full flex items-center justify-between gap-4 border px-4 py-4 text-left transition-colors',
        active ? 'border-ink bg-sand/50' : 'border-line hover:border-ink/40',
      )}
    >
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted mt-1">{detail}</p>
      </div>
      <span className="text-sm shrink-0">{price}</span>
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted">
      <span>{label}</span>
      <span className="text-ink">{value}</span>
    </div>
  );
}
