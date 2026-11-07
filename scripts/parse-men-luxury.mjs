import fs from 'node:fs';

const html = fs.readFileSync(`${process.env.TEMP}/milano-men-luxury.html`, 'utf8');

function strip(htmlStr) {
  return htmlStr.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

console.log('=== SECTIONS ===');
for (const m of html.matchAll(/id="shopify-section-([^"]+)"/g)) console.log(m[1]);

console.log('\n=== ALL H1/H2/H3 ===');
for (const m of html.matchAll(/<h([123])[^>]*>([\s\S]*?)<\/h\1>/g)) {
  const t = strip(m[2]);
  if (t && t.length < 160) console.log(`h${m[1]}: ${t}`);
}

console.log('\n=== SLIDESHOW BLOCK SNIPPETS ===');
const slideshowIdx = html.indexOf('slideshow_8KKtNU');
const slideshowChunk = html.slice(slideshowIdx, slideshowIdx + 25000);
const slideImgs = [...slideshowChunk.matchAll(/cdn\/shop\/files\/([^"?]+)\?[^"]*width=(\d+)/g)];
console.log('slide images:');
for (const m of slideImgs.slice(0, 20)) console.log(`  ${m[1]} w=${m[2]}`);
const slideTexts = [...slideshowChunk.matchAll(/>([A-Za-z][^<]{2,80})</g)]
  .map((m) => m[1].trim())
  .filter((t) => !/shopify|script|function|var |const |let |null|true|false|undefined|https?/i.test(t));
console.log('slide text candidates:', [...new Set(slideTexts)].slice(0, 40));

console.log('\n=== COLLECTION LIST ===');
const collIdx = html.indexOf('collection_list_VmEYkJ');
const collChunk = html.slice(collIdx, collIdx + 30000);
const collImgs = [...collChunk.matchAll(/cdn\/shop\/files\/([^"?]+)/g)].map((m) => m[1]);
console.log('images', [...new Set(collImgs)].slice(0, 20));
const collTexts = [...collChunk.matchAll(/>([A-Za-z][^<]{2,40})</g)]
  .map((m) => m[1].trim())
  .filter((t) => t.length < 40);
console.log('texts', [...new Set(collTexts)].slice(0, 40));

console.log('\n=== SCROLLING TEXT ===');
const scrollIdx = html.indexOf('scrolling_text_f8eVGC');
const scrollChunk = html.slice(scrollIdx, scrollIdx + 8000);
console.log(
  [...new Set([...scrollChunk.matchAll(/>([^<]{3,60})</g)].map((m) => m[1].trim()))]
    .filter((t) => /[A-Za-z]/.test(t) && !/[{}]/.test(t))
    .slice(0, 30),
);

console.log('\n=== MULTI CONTENT ===');
const multiIdx = html.indexOf('multi_content_WPJTeQ');
const multiChunk = html.slice(multiIdx, multiIdx + 25000);
console.log('images', [...new Set([...multiChunk.matchAll(/cdn\/shop\/files\/([^"?]+)/g)].map((m) => m[1]))].slice(0, 15));
console.log(
  'texts',
  [...new Set([...multiChunk.matchAll(/>([A-Za-z][^<]{2,100})</g)].map((m) => m[1].trim()))]
    .filter((t) => t.length < 100)
    .slice(0, 30),
);

console.log('\n=== OUTFIT IDEA ===');
const outfitIdx = html.indexOf('outfit_idea_9Md3hr');
const outfitChunk = html.slice(outfitIdx, outfitIdx + 30000);
console.log('images', [...new Set([...outfitChunk.matchAll(/cdn\/shop\/files\/([^"?]+)/g)].map((m) => m[1]))].slice(0, 20));
console.log('products', [...new Set([...outfitChunk.matchAll(/\/products\/([a-z0-9-]+)/g)].map((m) => m[1]))]);

console.log('\n=== BRAND LOGO ===');
const brandIdx = html.indexOf('brand_logo_8q4xUh');
const brandChunk = html.slice(brandIdx, brandIdx + 15000);
console.log('images', [...new Set([...brandChunk.matchAll(/cdn\/shop\/files\/([^"?]+)/g)].map((m) => m[1]))].slice(0, 20));

console.log('\n=== IMAGE WITH TEXT OVERLAY ===');
const iwtIdx = html.indexOf('image_with_text_overlay_DEjdmR');
const iwtChunk = html.slice(iwtIdx, iwtIdx + 20000);
console.log('images', [...new Set([...iwtChunk.matchAll(/cdn\/shop\/files\/([^"?]+)/g)].map((m) => m[1]))].slice(0, 10));
console.log(
  'texts',
  [...new Set([...iwtChunk.matchAll(/>([A-Za-z0-9][^<]{2,120})</g)].map((m) => m[1].trim()))]
    .filter((t) => t.length < 120)
    .slice(0, 25),
);

console.log('\n=== PRODUCTS CAROUSEL 1 ===');
const car1 = html.slice(html.indexOf('products_carousel_AdKeFt'), html.indexOf('products_carousel_AdKeFt') + 40000);
console.log('products', [...new Set([...car1.matchAll(/\/products\/([a-z0-9-]+)/g)].map((m) => m[1]))].slice(0, 15));
const car1Head = [...car1.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => strip(m[1]));
console.log('heads', car1Head);

console.log('\n=== PRODUCTS CAROUSEL 2 ===');
const car2 = html.slice(html.indexOf('products_carousel_BrKFhr'), html.indexOf('products_carousel_BrKFhr') + 40000);
console.log('products', [...new Set([...car2.matchAll(/\/products\/([a-z0-9-]+)/g)].map((m) => m[1]))].slice(0, 15));
console.log('heads', [...car2.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => strip(m[1])));

console.log('\n=== ICON BOX ===');
const icon = html.slice(html.indexOf('icon_box_TRwJBD'), html.indexOf('icon_box_TRwJBD') + 12000);
console.log(
  [...new Set([...icon.matchAll(/>([A-Za-z][^<]{2,80})</g)].map((m) => m[1].trim()))]
    .filter((t) => t.length < 80)
    .slice(0, 20),
);
