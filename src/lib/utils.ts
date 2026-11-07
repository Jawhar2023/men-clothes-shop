export const CDN = 'https://demo-milano.myshopify.com/cdn/shop/files';

export function shopFile(file: string, width = 1200) {
  const versions: Record<string, string> = {
    'logo.png': '1742650856',
    'Favicon.svg': '1742963246',
    'men_s1.webp': '1744099383',
    'men_s2.webp': '1744271615',
    'men_ms1.webp': '1744271636',
    'men_ms2.webp': '1744271637',
    'men_clt1.webp': '1744106903',
    'men_clt2.webp': '1744272099',
    'men_clt3.webp': '1744272033',
    'men_clt4.webp': '1744106903',
    'men_clt5.webp': '1744106903',
    'men_1.webp': '1744170340',
    'men_2.webp': '1744169753',
    'men_3.webp': '1744169753',
    'men_4.webp': '1744169753',
    'men_5.webp': '1744195025',
    'men_ms5.webp': '1744271636',
    'men_sr_1.jpg': '1744259596',
    'men_sr_2.jpg': '1744259595',
    'men_sr_3.jpg': '1744259596',
    'men_brand1.webp': '1744193929',
    'men_brand2.webp': '1744193929',
    'men_brand3.webp': '1744193928',
    'men_brand4.webp': '1744193929',
    'men_brand5.webp': '1744193929',
    'Shirts.jpg': '1744619148',
    'fs_new_hero.webp': '1748226426',
    'fs_new_1.webp': '1756355292',
    'fs_new_2.webp': '1756355292',
    'fs_new_3.webp': '1756356567',
    'fs_new_4.webp': '1756356567',
  };
  const v = versions[file] ?? '1';
  return `${CDN}/${file}?v=${v}&width=${width}`;
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
