import fs from 'node:fs';

const html = fs.readFileSync(`${process.env.TEMP}/milano-men-luxury.html`, 'utf8');

function near(file, radius = 1200) {
  const idx = html.indexOf(file);
  if (idx < 0) return null;
  return html.slice(Math.max(0, idx - radius), idx + radius);
}

function texts(chunk) {
  if (!chunk) return [];
  return [
    ...new Set(
      [...chunk.matchAll(/>([^<]{2,120})</g)]
        .map((m) => m[1].replace(/\s+/g, ' ').trim())
        .filter((t) => /[A-Za-z]/.test(t) && !/[{}=]|shopify|function|loading|Regular|Compare|wishlist|null|true|false/i.test(t)),
    ),
  ];
}

console.log('=== HERO CONTEXT men_s1 ===');
console.log(texts(near('men_s1.webp', 2500)).slice(0, 40));
console.log('\n=== HERO CONTEXT men_s2 ===');
console.log(texts(near('men_s2.webp', 2500)).slice(0, 40));

for (const f of ['men_clt1.webp', 'men_clt2.webp', 'men_clt3.webp', 'men_clt4.webp', 'men_clt5.webp']) {
  console.log(`\n=== ${f} ===`);
  console.log(texts(near(f, 900)).slice(0, 20));
}

console.log('\n=== men_1.webp multi ===');
console.log(texts(near('men_1.webp', 2000)).slice(0, 30));
console.log('\n=== men_2.webp ===');
console.log(texts(near('men_2.webp', 2000)).slice(0, 30));

console.log('\n=== men_5.webp overlay ===');
console.log(texts(near('men_5.webp', 2500)).slice(0, 40));

console.log('\n=== VERSIONS for key files ===');
const files = [
  'men_s1.webp',
  'men_s2.webp',
  'men_ms1.webp',
  'men_ms2.webp',
  'men_clt1.webp',
  'men_clt2.webp',
  'men_clt3.webp',
  'men_clt4.webp',
  'men_clt5.webp',
  'men_1.webp',
  'men_2.webp',
  'men_3.webp',
  'men_4.webp',
  'men_5.webp',
  'men_ms5.webp',
  'men_sr_1.jpg',
  'men_sr_2.jpg',
  'men_sr_3.jpg',
  'men_brand1.webp',
  'men_brand2.webp',
  'men_brand3.webp',
  'men_brand4.webp',
  'men_brand5.webp',
];
for (const f of files) {
  const m = html.match(new RegExp(`${f.replace('.', '\\.')}[^\"']*v=(\\d+)`));
  console.log(f, m?.[1] ?? 'MISSING');
}

// Extract JSON settings if present in sections
const settings = [...html.matchAll(/"heading":"([^"]+)"/g)].map((m) => m[1]);
console.log('\n=== JSON headings ===', [...new Set(settings)].slice(0, 40));
const subheadings = [...html.matchAll(/"subheading":"([^"]+)"/g)].map((m) => m[1]);
console.log('=== JSON subheadings ===', [...new Set(subheadings)].slice(0, 40));
const buttons = [...html.matchAll(/"button_label":"([^"]+)"/g)].map((m) => m[1]);
console.log('=== JSON buttons ===', [...new Set(buttons)].slice(0, 40));
const titles = [...html.matchAll(/"title":"([^"]+)"/g)].map((m) => m[1]);
console.log('=== JSON titles ===', [...new Set(titles)].slice(0, 50));
