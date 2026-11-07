import { shopFile } from '../lib/utils';

export const brand = {
  name: 'Milano',
  tagline: "Men's Luxury",
  logo: shopFile('logo.png', 330),
  favicon: shopFile('Favicon.svg', 32),
};

export const heroSlides = [
  {
    id: 1,
    title: 'Spring Tweed',
    subtitle: 'The point shirt in burgundy linen tweed',
    cta: 'Shop Collection',
    href: '/collections/shirts',
    image: shopFile('men_s1.webp', 2880),
    imageMobile: shopFile('men_ms1.webp', 900),
  },
  {
    id: 2,
    title: 'Cut for Comfort',
    subtitle: 'The après short — easy tailoring for warmer days',
    cta: 'Shop Collection',
    href: '/collections/shirts',
    image: shopFile('men_s2.webp', 2880),
    imageMobile: shopFile('men_ms2.webp', 900),
  },
];

export const categories = [
  { title: 'Trousers', image: shopFile('men_clt1.webp', 1400), href: '/collections/shirts' },
  { title: 'Polo Shirts', image: shopFile('men_clt2.webp', 1400), href: '/collections/shirts' },
  { title: 'Shorts', image: shopFile('men_clt3.webp', 1400), href: '/collections/shirts' },
  { title: 'Jackets', image: shopFile('men_clt4.webp', 1400), href: '/collections/shirts' },
  { title: 'Shirts', image: shopFile('men_clt5.webp', 1400), href: '/collections/shirts' },
];

export const marqueeItems = [
  'Exclusive Seasonal Picks',
  'Express Your True Self',
  'Curated Winter Wonders',
  "Men's Luxury Edit",
  'Free Shipping Over $150',
];

export const seasonalStories = [
  {
    title: 'Exclusive Seasonal Picks',
    image: shopFile('men_sr_1.jpg', 1600),
    href: '/collections/shirts',
  },
  {
    title: 'Express Your True Self',
    image: shopFile('men_sr_2.jpg', 1600),
    href: '/collections/shirts',
  },
  {
    title: 'Curated Winter Wonders',
    image: shopFile('men_sr_3.jpg', 1600),
    href: '/collections/shirts',
  },
];

export const bestSellerHandles = [
  'relaxed-fit-carpenter-trousers',
  'graphic-print-sweatshirt',
  'wide-fit-jogging-trousers',
  'racing-print-crew-neck-sweatshirt',
  'textured-crochet-shirt',
  'textured-weave-quarter-zip-polo-shirt',
  'relaxed-fit-cotton-linen-trousers',
  'linen-viscose-bermuda-shorts',
  'retro-trainers',
];

export const trendingHandles = [
  'linen-viscose-bermuda-shorts',
  'textured-weave-quarter-zip-polo-shirt',
  'racing-print-crew-neck-sweatshirt',
  'relaxed-fit-carpenter-trousers',
  'graphic-print-sweatshirt',
  'retro-trainers',
  'textured-crochet-shirt',
  'wide-fit-jogging-trousers',
  'relaxed-fit-cotton-linen-trousers',
];

export const selfExpression = {
  eyebrow: 'Self-expression',
  title:
    'Elevate your wardrobe with handpicked collections that celebrate individuality, quality, and the art of self-expression through fashion.',
  cta: 'Shop the collection',
  href: '/collections/shirts',
  images: [shopFile('men_1.webp', 2000), shopFile('men_2.webp', 2000)],
};

export const outfitIdeas = [
  {
    id: 1,
    label: 'Look 01',
    image: shopFile('men_2.webp', 1800),
    productHandles: ['textured-crochet-shirt', 'linen-viscose-bermuda-shorts'],
  },
  {
    id: 2,
    label: 'Look 02',
    image: shopFile('men_4.webp', 1800),
    productHandles: [
      'textured-weave-quarter-zip-polo-shirt',
      'relaxed-fit-cotton-linen-trousers',
      'retro-trainers',
    ],
  },
  {
    id: 3,
    label: 'Look 03',
    image: shopFile('men_3.webp', 1800),
    productHandles: [
      'textured-weave-quarter-zip-polo-shirt',
      'relaxed-fit-carpenter-trousers',
    ],
  },
];

export const brandLogos = [
  shopFile('men_brand1.webp', 480),
  shopFile('men_brand2.webp', 480),
  shopFile('men_brand3.webp', 480),
  shopFile('men_brand4.webp', 480),
  shopFile('men_brand5.webp', 480),
];

export const promoBanner = {
  eyebrow: 'Black Friday Sale',
  title: 'Up to 30% off',
  subtitle: 'Discounts of up to 50% on select styles.',
  cta: 'Shop Sale',
  href: '/collections/shirts',
  image: shopFile('men_5.webp', 2800),
  imageMobile: shopFile('men_ms5.webp', 1200),
};

export const iconBoxes = [
  {
    title: 'Free Shipping',
    text: 'Enjoy free worldwide shipping and returns, with customs and duties taxes included.',
  },
  {
    title: 'Free Returns',
    text: 'Free returns within 15 days — please make sure items are undamaged.',
  },
  {
    title: 'Support Online',
    text: 'We support customers 24/7. Send questions and we will solve them immediately.',
  },
];

export const collectionBanner =
  'https://demo-milano.myshopify.com/cdn/shop/files/Shirts.jpg?v=1744619148&width=1920';
