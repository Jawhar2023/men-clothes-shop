import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { shopFile } from '../lib/utils';
import { Reveal } from '../components/Motion';

const heroImage = shopFile('men_4.webp', 1600);

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.subject.trim()) next.subject = 'Add a subject';
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  }

  return (
    <>
      <section className="relative min-h-[58vh] overflow-hidden">
        <motion.img
          src={heroImage}
          alt=""
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 min-h-[58vh] flex items-end pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white max-w-xl"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase text-white/75 mb-3">Get in touch</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">Contact</h1>
            <p className="mt-4 max-w-md text-white/90 text-lg">
              Questions about fit, orders, or styling? Our team is here for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[color:var(--color-line)] bg-[#efe9e0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 grid sm:grid-cols-3 gap-6 text-center sm:text-left">
          {[
            { label: 'Email', value: 'hello@fashionmilano.demo', href: 'mailto:hello@fashionmilano.demo' },
            { label: 'Phone', value: '+39 02 1234 5678', href: 'tel:+390212345678' },
            { label: 'Boutique', value: 'Via Monte Napoleone 12, Milano', href: undefined },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-1">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-sm sm:text-base hover:underline underline-offset-4">
                  {item.value}
                </a>
              ) : (
                <p className="text-sm sm:text-base">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Visit &amp; reach us</h2>
          <div className="space-y-7 text-sm">
            <div>
              <p className="text-xs tracking-[0.14em] uppercase text-muted mb-1">Boutique</p>
              <p className="leading-relaxed">
                Via Monte Napoleone 12
                <br />
                20121 Milano, Italy
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.14em] uppercase text-muted mb-1">Hours</p>
              <p className="leading-relaxed">
                Mon–Sat 10:00 – 19:00
                <br />
                Sunday by appointment
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.14em] uppercase text-muted mb-1">Styling desk</p>
              <p className="text-muted leading-relaxed max-w-sm">
                Book a complimentary virtual consult for shirts, fit advice, and outfit building.
              </p>
              <Link
                to="/collections/shirts"
                className="inline-flex mt-4 text-xs tracking-[0.16em] uppercase underline underline-offset-4"
              >
                Browse shirts first
              </Link>
            </div>
          </div>

          <div className="mt-10 overflow-hidden border border-[color:var(--color-line)] min-h-[260px] bg-[#e8e2d8]">
            <iframe
              title="Milano boutique map"
              className="w-full h-[260px] grayscale opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Via%20Monte%20Napoleone%2012%20Milano&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">Send a message</h2>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-[color:var(--color-line)] bg-[#efe9e0] p-8 sm:p-10"
            >
              <p className="font-display text-3xl">Thank you</p>
              <p className="mt-3 text-muted text-sm leading-relaxed max-w-md">
                Your message has been received. A stylist will get back to you shortly — usually within
                one business day.
              </p>
              <button
                type="button"
                className="mt-7 text-xs tracking-[0.14em] uppercase underline underline-offset-4"
                onClick={() => setSent(false)}
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  error={errors.name}
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                />
                <Field
                  label="Email"
                  type="email"
                  error={errors.email}
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                />
              </div>
              <Field
                label="Subject"
                error={errors.subject}
                value={form.subject}
                onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
              />
              <div>
                <label className="block text-xs tracking-[0.14em] uppercase text-muted mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell us about fit, sizing, or what you are looking for..."
                  className="w-full border border-[color:var(--color-line)] bg-white px-3 py-3 text-sm outline-none focus:border-ink resize-y placeholder:text-muted/70"
                />
                {errors.message && <p className="mt-1 text-xs text-red-700">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="bg-ink text-white px-8 py-3.5 text-xs tracking-[0.16em] uppercase hover:bg-black transition-colors"
              >
                Send message
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs tracking-[0.14em] uppercase text-muted mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-[color:var(--color-line)] bg-white px-3 py-3 text-sm outline-none focus:border-ink"
      />
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}
