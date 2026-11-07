import fs from 'node:fs';

const html = fs.readFileSync(`${process.env.TEMP}/milano-men-luxury.html`, 'utf8');
const collIdx = html.indexOf('collection_list_VmEYkJ');
const end = html.indexOf('scrolling_text_f8eVGC');
const chunk = html.slice(collIdx, end);

fs.writeFileSync(`${process.env.TEMP}/milano-men-coll.html`, chunk);
console.log('chunk len', chunk.length);

// alt attributes
console.log('\n=== ALTS ===');
for (const m of chunk.matchAll(/alt="([^"]*)"/g)) console.log(m[1]);

// collection links
console.log('\n=== COLLECTION LINKS ===');
for (const m of chunk.matchAll(/\/collections\/([a-z0-9-]+)[^"]*"/g)) console.log(m[1]);

// data attributes / titles
console.log('\n=== data-title / aria ===');
for (const m of chunk.matchAll(/(?:data-title|aria-label|title)="([^"]+)"/g)) console.log(m[1]);

// Look for visible collection names in media blocks
console.log('\n=== NEAR men_clt FILES ===');
for (const f of ['men_clt1', 'men_clt2', 'men_clt3', 'men_clt4', 'men_clt5']) {
  const i = chunk.indexOf(f);
  const slice = chunk.slice(i, i + 1800);
  const alts = [...slice.matchAll(/alt="([^"]*)"/g)].map((m) => m[1]);
  const hrefs = [...slice.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  const words = [...slice.matchAll(/>([A-Z][A-Za-z &-]{2,30})</g)].map((m) => m[1]);
  console.log(f, { alts, hrefs: hrefs.slice(0, 5), words: words.slice(0, 10) });
}

// slideshow full text around Spring Tweed
const sIdx = html.indexOf('Spring Tweed');
console.log('\n=== AROUND Spring Tweed ===');
console.log(html.slice(sIdx - 800, sIdx + 1200).replace(/<script[\s\S]*?<\/script>/g, '').replace(/\s+/g, ' ').slice(0, 1500));

const cIdx = html.indexOf('Cut for Comfort');
console.log('\n=== AROUND Cut for Comfort ===');
console.log(html.slice(cIdx - 800, cIdx + 1200).replace(/<script[\s\S]*?<\/script>/g, '').replace(/\s+/g, ' ').slice(0, 1500));

// multi content section between carousels
const mStart = html.indexOf('multi_content_WPJTeQ');
const mEnd = html.indexOf('products_carousel_BrKFhr');
const multi = html.slice(mStart, mEnd);
console.log('\n=== MULTI SECTION TEXT ===');
console.log(
  [...multi.matchAll(/>([^<]{3,140})</g)]
    .map((m) => m[1].replace(/\s+/g, ' ').trim())
    .filter((t) => /[A-Za-z]/.test(t) && t.length < 140 && !/loading|wishlist|Compare|Regular|Add to|Quick|null|function|shopify/i.test(t))
    .slice(0, 40),
);

// outfit section text
const oStart = html.indexOf('outfit_idea_9Md3hr');
const oEnd = html.indexOf('brand_logo_8q4xUh');
const outfit = html.slice(oStart, oEnd);
console.log('\n=== OUTFIT TEXT ===');
console.log(
  [...outfit.matchAll(/>([^<]{3,140})</g)]
    .map((m) => m[1].replace(/\s+/g, ' ').trim())
    .filter((t) => /[A-Za-z]/.test(t) && t.length < 140 && !/loading|wishlist|Compare|Regular|Add to|Quick|null|function|shopify|View Products/i.test(t))
    .slice(0, 40),
);
