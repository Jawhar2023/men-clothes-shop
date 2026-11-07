import fs from 'node:fs';

const html = fs.readFileSync(`${process.env.TEMP}/milano-men-luxury.html`, 'utf8');

// Extract banner content blocks near h2 titles
for (const title of ['Spring Tweed', 'Cut for Comfort']) {
  const idx = html.indexOf(`>${title}<`) >= 0 ? html.indexOf(`>${title}<`) : html.indexOf(title);
  const chunk = html.slice(idx - 200, idx + 2500);
  console.log('\n====', title, '====');
  const texts = [...chunk.matchAll(/>([^<]{2,100})</g)]
    .map((m) => m[1].replace(/\s+/g, ' ').trim())
    .filter((t) => t && !/cdn|shopify|width|height|loading|function|null|true|false|aspect|overlay|banner__/i.test(t));
  console.log([...new Set(texts)].slice(0, 25));
}

// multi content structure
const mStart = html.indexOf('multi_content_WPJTeQ');
const multi = html.slice(mStart, mStart + 20000);
console.log('\n==== MULTI RAW TEXT ====');
console.log(
  [...multi.matchAll(/class="[^"]*(?:heading|title|subheading|description|button)[^"]*"[^>]*>([\s\S]*?)</gi)]
    .map((m) => m[1].replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .slice(0, 30),
);

// Find SELF-EXPRESSION context
const se = html.indexOf('SELF-EXPRESSION');
console.log('\n==== SELF-EXPRESSION CONTEXT ====');
console.log(
  html
    .slice(se - 500, se + 1500)
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 800),
);
