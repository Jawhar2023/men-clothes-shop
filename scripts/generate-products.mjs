import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function readJson(file) {
  let raw = fs.readFileSync(path.join(__dirname, file), 'utf8');
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
  return JSON.parse(raw);
}

const shirts = readJson('shirts-products.json').products;
const catalog = readJson('products-page1.json').products;

const homeHandles = [
  'high-neck-jumper',
  'basic-blazer',
  'belted-blazer-dress',
  'long-belted-sweater',
  'soft-touch-vest-sweater',
  'faux-fur-gilet',
  'waistcoat-with-pockets',
  'cropped-denim-shirt',
  'soft-tracksuit-sweatshirt',
  'zip-neck-jumper',
  'flowing-parka',
  'oversized-shirt',
  'poplin-shirt',
  'short-sleeve-t-shirt',
  'stretch-t-shirt-with-thin-straps',
  'short-studded-denim-dress',
];

const byHandle = new Map();
for (const p of catalog) byHandle.set(p.handle, p);
for (const p of shirts) byHandle.set(p.handle, p);

const shirtHandles = shirts.map((p) => p.handle);
const orderedHandles = [
  ...shirtHandles,
  ...homeHandles.filter((h) => !shirtHandles.includes(h) && byHandle.has(h)),
];

// Prefer shirts first, then remaining home products that exist in catalog
const selected = orderedHandles.map((h) => byHandle.get(h)).filter(Boolean);

// If some home handles missing from catalog page, keep going with what we have
const missing = homeHandles.filter((h) => !byHandle.has(h));
console.log('selected', selected.length);
console.log('shirt handles', shirtHandles);
console.log('missing home handles', missing);

function normalize(p) {
  return {
    id: p.id,
    title: p.title,
    handle: p.handle,
    body_html: p.body_html || '',
    vendor: p.vendor || '',
    product_type: p.product_type || '',
    tags: p.tags || [],
    options: (p.options || []).map((o) => ({
      name: o.name,
      values: o.values,
    })),
    variants: (p.variants || []).map((v) => ({
      id: v.id,
      title: v.title,
      price: v.price,
      compare_at_price: v.compare_at_price ?? null,
      option1: v.option1 ?? null,
      option2: v.option2 ?? null,
      option3: v.option3 ?? null,
      available: Boolean(v.available),
      featured_image:
        typeof v.featured_image === 'string'
          ? v.featured_image
          : v.featured_image?.src ?? null,
    })),
    images: (p.images || []).map((img) => ({
      id: img.id,
      src: img.src,
      alt: img.alt ?? null,
      width: img.width,
      height: img.height,
    })),
  };
}

const products = selected.map(normalize);

const header = `export type ProductOption = { name: string; values: string[] };

export type ProductVariant = {
  id: number;
  title: string;
  price: string;
  compare_at_price: string | null;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  available: boolean;
  featured_image: string | null;
};

export type ProductImage = {
  id: number;
  src: string;
  alt?: string | null;
  width: number;
  height: number;
};

export type Product = {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  vendor: string;
  product_type: string;
  tags: string[];
  options: ProductOption[];
  variants: ProductVariant[];
  images: ProductImage[];
};

/** Handles shown on the Shirts collection page */
export const shirtCollectionHandles = ${JSON.stringify(shirtHandles, null, 2)} as const;

export const products: Product[] = `;

const footer = ` as Product[];

export function getProductByHandle(handle: string) {
  return products.find((p) => p.handle === handle);
}

export function getCollectionProducts() {
  return shirtCollectionHandles
    .map((h) => getProductByHandle(h))
    .filter((p): p is Product => Boolean(p));
}

export function getMinPrice(product: Product) {
  return Math.min(...product.variants.map((v) => parseFloat(v.price)));
}

export function formatPrice(price: number | string) {
  const n = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
}
`;

const out = header + JSON.stringify(products, null, 2) + footer;
fs.writeFileSync(path.join(root, 'src', 'data', 'products.ts'), out, 'utf8');
console.log('wrote src/data/products.ts');
