export type ProductOption = { name: string; values: string[] };

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
export const shirtCollectionHandles = [
  "relaxed-fit-carpenter-trousers",
  "graphic-print-sweatshirt",
  "wide-fit-jogging-trousers",
  "racing-print-crew-neck-sweatshirt",
  "retro-trainers",
  "textured-crochet-shirt",
  "relaxed-fit-cotton-linen-trousers",
  "linen-viscose-bermuda-shorts",
  "textured-weave-quarter-zip-polo-shirt"
] as const;

export const products: Product[] = [
  {
    "id": 7711660540022,
    "title": "Relaxed Fit Carpenter Trousers",
    "handle": "relaxed-fit-carpenter-trousers",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "milano",
    "product_type": "",
    "tags": [
      "men"
    ],
    "options": [
      {
        "name": "Title",
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 42146491203702,
        "title": "Default Title",
        "price": "360.00",
        "compare_at_price": null,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": null
      }
    ],
    "images": [
      {
        "id": 33754291175542,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_9_4.webp?v=1744189978",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754291273846,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_9_1.webp?v=1744189978",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754291208310,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_9_2.webp?v=1744189978",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754291241078,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_9_3.webp?v=1744189978",
        "alt": null,
        "width": 900,
        "height": 1350
      }
    ]
  },
  {
    "id": 7711659917430,
    "title": "Graphic Print Sweatshirt",
    "handle": "graphic-print-sweatshirt",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "milano",
    "product_type": "",
    "tags": [
      "men"
    ],
    "options": [
      {
        "name": "Title",
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 42146486714486,
        "title": "Default Title",
        "price": "130.00",
        "compare_at_price": "150.00",
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": null
      }
    ],
    "images": [
      {
        "id": 33754278199414,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_8_1.webp?v=1744189809",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754278232182,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_8_3.webp?v=1744189815",
        "alt": null,
        "width": 900,
        "height": 1349
      },
      {
        "id": 33754278264950,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_8_2.webp?v=1744189815",
        "alt": null,
        "width": 900,
        "height": 1349
      },
      {
        "id": 33754278297718,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_8_4.webp?v=1744189809",
        "alt": null,
        "width": 900,
        "height": 1350
      }
    ]
  },
  {
    "id": 7711659065462,
    "title": "Wide Fit Jogging Trousers",
    "handle": "wide-fit-jogging-trousers",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "milano",
    "product_type": "",
    "tags": [
      "men"
    ],
    "options": [
      {
        "name": "Title",
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 42146481537142,
        "title": "Default Title",
        "price": "310.00",
        "compare_at_price": null,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": null
      }
    ],
    "images": [
      {
        "id": 33754264862838,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_7_1.webp?v=1744189595",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754264830070,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_7_3.webp?v=1744189682",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754264928374,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_7_2.webp?v=1744189682",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754264895606,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_7_4.webp?v=1744189595",
        "alt": null,
        "width": 900,
        "height": 1350
      }
    ]
  },
  {
    "id": 7711658213494,
    "title": "Racing Print Crew Neck Sweatshirt",
    "handle": "racing-print-crew-neck-sweatshirt",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "milano",
    "product_type": "",
    "tags": [
      "men"
    ],
    "options": [
      {
        "name": "Title",
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 42146472099958,
        "title": "Default Title",
        "price": "275.00",
        "compare_at_price": null,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": null
      }
    ],
    "images": [
      {
        "id": 33754253623414,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_6_1.webp?v=1744189355",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754253557878,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_6_2.webp?v=1744189355",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754253590646,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_6_3.webp?v=1744189355",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754253656182,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_6_4.webp?v=1744189355",
        "alt": null,
        "width": 900,
        "height": 1350
      }
    ]
  },
  {
    "id": 7711657721974,
    "title": "Retro Trainers",
    "handle": "retro-trainers",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "milano",
    "product_type": "",
    "tags": [
      "men"
    ],
    "options": [
      {
        "name": "Title",
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 42146470002806,
        "title": "Default Title",
        "price": "210.00",
        "compare_at_price": null,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": null
      }
    ],
    "images": [
      {
        "id": 33754243924086,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_5_1.webp?v=1744189243",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754243956854,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_5_2.webp?v=1744189243",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754243891318,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_5_3.webp?v=1744189243",
        "alt": null,
        "width": 900,
        "height": 1350
      }
    ]
  },
  {
    "id": 7711656771702,
    "title": "Textured Crochet Shirt",
    "handle": "textured-crochet-shirt",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "milano",
    "product_type": "",
    "tags": [
      "men"
    ],
    "options": [
      {
        "name": "Title",
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 42146465841270,
        "title": "Default Title",
        "price": "165.00",
        "compare_at_price": null,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": null
      }
    ],
    "images": [
      {
        "id": 33754232651894,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_4_1.webp?v=1744189014",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754232717430,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_4_2.webp?v=1744189014",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754232684662,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_4_3.webp?v=1744189014",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754232619126,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_4_4.webp?v=1744189014",
        "alt": null,
        "width": 900,
        "height": 1350
      }
    ]
  },
  {
    "id": 7711656509558,
    "title": "Relaxed Fit Cotton/linen Trousers",
    "handle": "relaxed-fit-cotton-linen-trousers",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "milano",
    "product_type": "",
    "tags": [
      "men"
    ],
    "options": [
      {
        "name": "Title",
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 42146465644662,
        "title": "Default Title",
        "price": "250.00",
        "compare_at_price": "300.00",
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": null
      }
    ],
    "images": [
      {
        "id": 33754226327670,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_3_1.webp?v=1744188853",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754226294902,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_3_2.webp?v=1744188853",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754226262134,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_3_3.webp?v=1744188853",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754226360438,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_3_4.webp?v=1744188853",
        "alt": null,
        "width": 900,
        "height": 1350
      }
    ]
  },
  {
    "id": 7711654772854,
    "title": "Linen - Viscose Bermuda Shorts",
    "handle": "linen-viscose-bermuda-shorts",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "milano",
    "product_type": "",
    "tags": [
      "men"
    ],
    "options": [
      {
        "name": "Title",
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 42146458206326,
        "title": "Default Title",
        "price": "180.00",
        "compare_at_price": null,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": null
      }
    ],
    "images": [
      {
        "id": 33754197852278,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_2_1.webp?v=1744188436",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754197885046,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_2_2.webp?v=1744188436",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754197917814,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_2_3.webp?v=1744188436",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754197819510,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_2_4.webp?v=1744188436",
        "alt": null,
        "width": 900,
        "height": 1350
      }
    ]
  },
  {
    "id": 7711653232758,
    "title": "Textured Weave Quarter-zip Polo Shirt",
    "handle": "textured-weave-quarter-zip-polo-shirt",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "milano",
    "product_type": "",
    "tags": [
      "men"
    ],
    "options": [
      {
        "name": "Title",
        "values": [
          "Default Title"
        ]
      }
    ],
    "variants": [
      {
        "id": 42146447949942,
        "title": "Default Title",
        "price": "155.00",
        "compare_at_price": null,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": null
      }
    ],
    "images": [
      {
        "id": 33754170163318,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_1_1.webp?v=1744188173",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754170097782,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_1_2.webp?v=1744188173",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754170196086,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_1_3.webp?v=1744188173",
        "alt": null,
        "width": 900,
        "height": 1350
      },
      {
        "id": 33754170130550,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/men_1_4.webp?v=1744188173",
        "alt": null,
        "width": 900,
        "height": 1350
      }
    ]
  },
  {
    "id": 7624770125942,
    "title": "High neck jumper",
    "handle": "high-neck-jumper",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black Stripes",
          "Classic Stripes"
        ]
      }
    ],
    "variants": [
      {
        "id": 41852616114294,
        "title": "M / Black Stripes",
        "price": "250.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Black Stripes",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512"
      },
      {
        "id": 41866773856374,
        "title": "M / Classic Stripes",
        "price": "250.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Classic Stripes",
        "option3": null,
        "available": false,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"
      },
      {
        "id": 41852616179830,
        "title": "L / Black Stripes",
        "price": "280.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Black Stripes",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512"
      },
      {
        "id": 41866773889142,
        "title": "L / Classic Stripes",
        "price": "250.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Classic Stripes",
        "option3": null,
        "available": false,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"
      },
      {
        "id": 41852616245366,
        "title": "XL / Black Stripes",
        "price": "300.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Black Stripes",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512"
      },
      {
        "id": 41866773921910,
        "title": "XL / Classic Stripes",
        "price": "250.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Classic Stripes",
        "option3": null,
        "available": false,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512"
      }
    ],
    "images": [
      {
        "id": 33619368935542,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619368902774,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_4_45faf918-dd6f-4e39-be59-dc66e7becead.webp?v=1742481531",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619369001078,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_2_8f94aee5-c3d4-4bb9-8d32-83c4bfc65afc.webp?v=1742481531",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619369132150,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_3_35fb3c75-1955-4d8a-9c8e-d34535ae118c.webp?v=1742481531",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619369033846,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619369099382,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_6_8dbb9870-1340-42ac-8a9d-39ae4c0bb8f7.webp?v=1742481512",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619368968310,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_7_3502b3a0-e1fd-4651-b5ad-bc6d0e5fcd2e.webp?v=1742481512",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619369066614,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/4_8_63c346fc-06a3-407a-8e57-f9d5aef67e16.webp?v=1742481512",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7631110078582,
    "title": "Basic blazer",
    "handle": "basic-blazer",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Navy",
          "White"
        ]
      }
    ],
    "variants": [
      {
        "id": 41870601912438,
        "title": "M / Navy",
        "price": "225.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Navy",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_1.webp?v=1752397915"
      },
      {
        "id": 41870601945206,
        "title": "M / White",
        "price": "225.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "White",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_5_269aa495-12a9-46de-9e89-d83e379fa809.webp?v=1752397915"
      },
      {
        "id": 41870601977974,
        "title": "L / Navy",
        "price": "245.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Navy",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_1.webp?v=1752397915"
      },
      {
        "id": 41870602010742,
        "title": "L / White",
        "price": "245.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "White",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_5_269aa495-12a9-46de-9e89-d83e379fa809.webp?v=1752397915"
      },
      {
        "id": 41870602043510,
        "title": "XL / Navy",
        "price": "265.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Navy",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_1.webp?v=1752397915"
      },
      {
        "id": 41870602076278,
        "title": "XL / White",
        "price": "265.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "White",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_5_269aa495-12a9-46de-9e89-d83e379fa809.webp?v=1752397915"
      }
    ],
    "images": [
      {
        "id": 33619215810678,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_1.webp?v=1752397915",
        "alt": null,
        "width": 714,
        "height": 1071
      },
      {
        "id": 33619215777910,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_3.webp?v=1752397915",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619215614070,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_2.webp?v=1752397915",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619215712374,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_4.webp?v=1752397915",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619215581302,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_5_269aa495-12a9-46de-9e89-d83e379fa809.webp?v=1752397915",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619215679606,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_6_046d2cba-7999-4946-b4e0-3165a1ce1f9e.webp?v=1752397915",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619215745142,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_7_c2d709e2-0277-4abf-b342-8bfe6cefb335.webp?v=1752397915",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619215646838,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/15_8_e8522446-034e-446c-89a4-c8b5906a0916.webp?v=1752397915",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7631099527286,
    "title": "Belted blazer dress",
    "handle": "belted-blazer-dress",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Dark Khaki"
        ]
      }
    ],
    "variants": [
      {
        "id": 41870483947638,
        "title": "M / Black",
        "price": "300.00",
        "compare_at_price": "350.00",
        "option1": "M",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315"
      },
      {
        "id": 41870483914870,
        "title": "M / Dark Khaki",
        "price": "300.00",
        "compare_at_price": "350.00",
        "option1": "M",
        "option2": "Dark Khaki",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_1_5644aee9-7e1a-4296-baac-e448257d812c.webp?v=1742479315"
      },
      {
        "id": 41870484013174,
        "title": "L / Black",
        "price": "320.00",
        "compare_at_price": "370.00",
        "option1": "L",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315"
      },
      {
        "id": 41870483980406,
        "title": "L / Dark Khaki",
        "price": "320.00",
        "compare_at_price": "370.00",
        "option1": "L",
        "option2": "Dark Khaki",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_1_5644aee9-7e1a-4296-baac-e448257d812c.webp?v=1742479315"
      },
      {
        "id": 41870484078710,
        "title": "XL / Black",
        "price": "340.00",
        "compare_at_price": "390.00",
        "option1": "XL",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315"
      },
      {
        "id": 41870484045942,
        "title": "XL / Dark Khaki",
        "price": "340.00",
        "compare_at_price": "390.00",
        "option1": "XL",
        "option2": "Dark Khaki",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_1_5644aee9-7e1a-4296-baac-e448257d812c.webp?v=1742479315"
      }
    ],
    "images": [
      {
        "id": 33619251855478,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619251724406,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_7_5b152aaa-fad5-4d7d-bfbe-3f498bd4fe67.webp?v=1742479315",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619251593334,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_1_5644aee9-7e1a-4296-baac-e448257d812c.webp?v=1742479315",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619251658870,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_2_24c259ab-0541-41fc-b861-1ea9bc822d37.webp?v=1742479315",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619251789942,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_3_925798ac-f94a-4cb3-9109-169923f1f442.webp?v=1742479315",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619251691638,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_4_f75e71ed-04b7-47bf-ae38-bb2f2f9a62e5.webp?v=1742479315",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619251757174,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_6_2e03ff71-76f3-4cc5-ba07-137a662a0c6b.webp?v=1742479315",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619251822710,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/13_8_b4384559-7f11-4c03-a851-c1b96d1ebe12.webp?v=1742479287",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7631048310902,
    "title": "Long belted sweater",
    "handle": "long-belted-sweater",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Dark Grey",
          "Beige"
        ]
      }
    ],
    "variants": [
      {
        "id": 41870354579574,
        "title": "M / Dark Grey",
        "price": "240.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Dark Grey",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_1_0e8a5236-cffc-4b58-954c-85aa7a471f4c.webp?v=1742459063"
      },
      {
        "id": 41870354612342,
        "title": "M / Beige",
        "price": "240.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Beige",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_5_a0a10670-d517-4d26-a95e-0f3025f10798.webp?v=1742459063"
      },
      {
        "id": 41870354645110,
        "title": "L / Dark Grey",
        "price": "250.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Dark Grey",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_1_0e8a5236-cffc-4b58-954c-85aa7a471f4c.webp?v=1742459063"
      },
      {
        "id": 41870354677878,
        "title": "L / Beige",
        "price": "250.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Beige",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_5_a0a10670-d517-4d26-a95e-0f3025f10798.webp?v=1742459063"
      },
      {
        "id": 41870354710646,
        "title": "XL / Dark Grey",
        "price": "260.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Dark Grey",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_1_0e8a5236-cffc-4b58-954c-85aa7a471f4c.webp?v=1742459063"
      },
      {
        "id": 41870354743414,
        "title": "XL / Beige",
        "price": "260.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Beige",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_5_a0a10670-d517-4d26-a95e-0f3025f10798.webp?v=1742459063"
      }
    ],
    "images": [
      {
        "id": 33617845518454,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_1_0e8a5236-cffc-4b58-954c-85aa7a471f4c.webp?v=1742459063",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33617845649526,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_3_40a7ed02-960b-474c-87f7-56c2903192b5.webp?v=1742459211",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33617845616758,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_4_43fec165-53e7-48db-b2de-9eb05fe7ed38.webp?v=1742459211",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33617845583990,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_2_c2ec3026-d05c-490a-8c4b-fd7a61db367f.webp?v=1742459211",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33617845452918,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_5_a0a10670-d517-4d26-a95e-0f3025f10798.webp?v=1742459063",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33617845551222,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_6_dfb2a7d1-b8e6-43ad-ba33-edb2bcab63fa.webp?v=1742459063",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33617845682294,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_7_115af971-a777-4d84-8b6f-2ea0aaf8f592.webp?v=1742459063",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33617845485686,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/9_8_86da7c29-6375-4d7c-8b6b-30abfa85a6aa.webp?v=1742459063",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7631094415478,
    "title": "Soft-touch vest sweater",
    "handle": "soft-touch-vest-sweater",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Light Beige",
          "Grey"
        ]
      }
    ],
    "variants": [
      {
        "id": 41870437122166,
        "title": "M / Light Beige",
        "price": "150.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Light Beige",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025"
      },
      {
        "id": 41870437154934,
        "title": "M / Grey",
        "price": "150.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Grey",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_1_788abbae-6203-42d2-9c0a-1e1bd7dcc57f.webp?v=1742480025"
      },
      {
        "id": 41870437187702,
        "title": "L / Light Beige",
        "price": "160.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Light Beige",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025"
      },
      {
        "id": 41870437220470,
        "title": "L / Grey",
        "price": "160.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Grey",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_1_788abbae-6203-42d2-9c0a-1e1bd7dcc57f.webp?v=1742480025"
      },
      {
        "id": 41870437253238,
        "title": "XL / Light Beige",
        "price": "170.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Light Beige",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025"
      },
      {
        "id": 41870437286006,
        "title": "XL / Grey",
        "price": "170.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Grey",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_1_788abbae-6203-42d2-9c0a-1e1bd7dcc57f.webp?v=1742480025"
      }
    ],
    "images": [
      {
        "id": 33619289342070,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619289440374,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_7_3c11b9b2-ae66-4200-ae52-57770538609b.webp?v=1742480025",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619289505910,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_6_5ece8ea8-b249-46d3-9dce-778c470645a9.webp?v=1742480025",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619289374838,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_8_5872622c-2e04-43b1-8aa9-e318ccac2576.webp?v=1742480025",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619289276534,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_1_788abbae-6203-42d2-9c0a-1e1bd7dcc57f.webp?v=1742480025",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619289473142,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_2_e800acd4-910b-4c8b-96f9-37b6acf94c2d.webp?v=1742480025",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619289407606,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_3_9c3d4938-dad7-4fb0-ab38-4de60976b48b.webp?v=1742480025",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619289309302,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/11_4_5f766d00-a9aa-4642-ae37-ce4a36bd2a24.webp?v=1742480025",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7631050834038,
    "title": "Faux fur gilet",
    "handle": "faux-fur-gilet",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Ecru"
        ]
      }
    ],
    "variants": [
      {
        "id": 41870355464310,
        "title": "M / Black",
        "price": "320.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250"
      },
      {
        "id": 41870355497078,
        "title": "M / Ecru",
        "price": "320.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Ecru",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_5_dfbfc146-f456-47d8-af6d-32d63ed7ac44.webp?v=1742480250"
      },
      {
        "id": 41870355529846,
        "title": "L / Black",
        "price": "350.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250"
      },
      {
        "id": 41870355562614,
        "title": "L / Ecru",
        "price": "350.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Ecru",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_5_dfbfc146-f456-47d8-af6d-32d63ed7ac44.webp?v=1742480250"
      },
      {
        "id": 41870355595382,
        "title": "XL / Black",
        "price": "380.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250"
      },
      {
        "id": 41870355628150,
        "title": "XL / Ecru",
        "price": "380.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Ecru",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_5_dfbfc146-f456-47d8-af6d-32d63ed7ac44.webp?v=1742480250"
      }
    ],
    "images": [
      {
        "id": 33619302482038,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619302350966,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_2_3b899dee-1542-43b9-ad45-a84cd00bf928.webp?v=1742480250",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619302383734,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_3_a15cf457-cf54-4262-94ea-6399fb0e059f.webp?v=1742480250",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619302514806,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_4_6666845c-8b13-4059-862f-48ed07cf4f37.webp?v=1742480250",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619302416502,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_5_dfbfc146-f456-47d8-af6d-32d63ed7ac44.webp?v=1742480250",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619302580342,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_6_e97abe47-7a14-4895-8557-ea99f981f9fe.webp?v=1742480250",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619302449270,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_7_a9934434-f994-413e-9446-fe5f8a8976eb.webp?v=1742480250",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619302547574,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/10_8_6c4cb96b-8e98-416a-8a6d-f2be1107ba60.webp?v=1742480250",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7631103033462,
    "title": "Waistcoat with pockets",
    "handle": "waistcoat-with-pockets",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black",
          "Ecru"
        ]
      }
    ],
    "variants": [
      {
        "id": 41870516846710,
        "title": "M / Black",
        "price": "270.00",
        "compare_at_price": "300.00",
        "option1": "M",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979"
      },
      {
        "id": 41870516813942,
        "title": "M / Ecru",
        "price": "270.00",
        "compare_at_price": "300.00",
        "option1": "M",
        "option2": "Ecru",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_5_0a387169-ee10-4173-a8ed-21f4f52a8442.webp?v=1742478979"
      },
      {
        "id": 41870516912246,
        "title": "L / Black",
        "price": "280.00",
        "compare_at_price": "310.00",
        "option1": "L",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979"
      },
      {
        "id": 41870516879478,
        "title": "L / Ecru",
        "price": "280.00",
        "compare_at_price": "310.00",
        "option1": "L",
        "option2": "Ecru",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_5_0a387169-ee10-4173-a8ed-21f4f52a8442.webp?v=1742478979"
      },
      {
        "id": 41870516977782,
        "title": "XL / Black",
        "price": "290.00",
        "compare_at_price": "320.00",
        "option1": "XL",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979"
      },
      {
        "id": 41870516945014,
        "title": "XL / Ecru",
        "price": "290.00",
        "compare_at_price": "320.00",
        "option1": "XL",
        "option2": "Ecru",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_5_0a387169-ee10-4173-a8ed-21f4f52a8442.webp?v=1742478979"
      }
    ],
    "images": [
      {
        "id": 33619236946038,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619237142646,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_3_f4e35f65-6d4b-49c0-b9bb-25af4d58e6fc.webp?v=1742479098",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619237044342,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_2_73f839e1-e42e-4b71-98fd-927174a52593.webp?v=1742479098",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619237077110,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_4_eab53cb8-4c3f-4cd6-8c9f-8273fce000c9.webp?v=1742478979",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619236913270,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_5_0a387169-ee10-4173-a8ed-21f4f52a8442.webp?v=1742478979",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619236978806,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_6_435b430d-c95e-4021-9432-54ab7e038471.webp?v=1742478979",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619237011574,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_7_e0abddbe-5c62-442f-8b49-b3834bb941f6.webp?v=1742478979",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619237109878,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/14_8_1d701d99-b095-4ac1-b55c-b3b8c81d0822.webp?v=1742478979",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7624781627510,
    "title": "Cropped denim shirt",
    "handle": "cropped-denim-shirt",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Dark Blue",
          "Faded Black"
        ]
      }
    ],
    "variants": [
      {
        "id": 41852618768502,
        "title": "M / Dark Blue",
        "price": "165.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Dark Blue",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311"
      },
      {
        "id": 41852618801270,
        "title": "M / Faded Black",
        "price": "165.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Faded Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_1_0e4a55ee-8d27-4e72-875c-0229bf520672.webp?v=1742481311"
      },
      {
        "id": 41852618834038,
        "title": "L / Dark Blue",
        "price": "175.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Dark Blue",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311"
      },
      {
        "id": 41852618866806,
        "title": "L / Faded Black",
        "price": "175.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Faded Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_1_0e4a55ee-8d27-4e72-875c-0229bf520672.webp?v=1742481311"
      },
      {
        "id": 41852618899574,
        "title": "XL / Dark Blue",
        "price": "185.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Dark Blue",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311"
      },
      {
        "id": 41852618932342,
        "title": "XL / Faded Black",
        "price": "185.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Faded Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_1_0e4a55ee-8d27-4e72-875c-0229bf520672.webp?v=1742481311"
      }
    ],
    "images": [
      {
        "id": 33619355664502,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619355500662,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_6_a2f0f353-dcce-40e2-844e-185d4d7c23b8.webp?v=1742481311",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619355467894,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_7_8d5d54b4-620c-4e91-adee-83669f2c30ba.webp?v=1742481311",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619355631734,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_8_d35459f6-bcdb-48b6-a782-9356537a037d.webp?v=1742481311",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619355697270,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_1_0e4a55ee-8d27-4e72-875c-0229bf520672.webp?v=1742481311",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619355598966,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_2_445b2029-7784-4c14-9b56-6ce52725a467.webp?v=1742481311",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619355533430,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_3_47400254-0582-4c90-9af1-ced229ab3941.webp?v=1742481311",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619355566198,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/2_4_ad08b31b-37a0-48ba-85ca-b5d43e493beb.webp?v=1742481311",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7629784154230,
    "title": "Soft tracksuit sweatshirt",
    "handle": "soft-tracksuit-sweatshirt",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Grey",
          "Black"
        ]
      }
    ],
    "variants": [
      {
        "id": 41866696196214,
        "title": "M / Grey",
        "price": "220.00",
        "compare_at_price": "160.00",
        "option1": "M",
        "option2": "Grey",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_1_69ccdae9-654a-4d42-b951-34c7656067e9.webp?v=1742481089"
      },
      {
        "id": 41866696163446,
        "title": "M / Black",
        "price": "220.00",
        "compare_at_price": "160.00",
        "option1": "M",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_5_b3aabf7b-90f7-41b9-aeaa-7998fd195c09.webp?v=1742481089"
      },
      {
        "id": 41866696261750,
        "title": "L / Grey",
        "price": "240.00",
        "compare_at_price": "180.00",
        "option1": "L",
        "option2": "Grey",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_1_69ccdae9-654a-4d42-b951-34c7656067e9.webp?v=1742481089"
      },
      {
        "id": 41866696228982,
        "title": "L / Black",
        "price": "240.00",
        "compare_at_price": "180.00",
        "option1": "L",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_5_b3aabf7b-90f7-41b9-aeaa-7998fd195c09.webp?v=1742481089"
      },
      {
        "id": 41866696327286,
        "title": "XL / Grey",
        "price": "260.00",
        "compare_at_price": "200.00",
        "option1": "XL",
        "option2": "Grey",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_1_69ccdae9-654a-4d42-b951-34c7656067e9.webp?v=1742481089"
      },
      {
        "id": 41866696294518,
        "title": "XL / Black",
        "price": "260.00",
        "compare_at_price": "200.00",
        "option1": "XL",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_5_b3aabf7b-90f7-41b9-aeaa-7998fd195c09.webp?v=1742481089"
      }
    ],
    "images": [
      {
        "id": 33619346489462,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_1_69ccdae9-654a-4d42-b951-34c7656067e9.webp?v=1742481089",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619346391158,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_3_451af927-1187-4d22-8701-b05d7218b62b.webp?v=1742481105",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619346423926,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_2_6a488879-e4cc-49ab-a91f-1c3e30c80ed4.webp?v=1742481105",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619346456694,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_4_941a58d6-b242-4ca2-8f83-e377d654bffc.webp?v=1742481089",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619346587766,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_5_b3aabf7b-90f7-41b9-aeaa-7998fd195c09.webp?v=1742481089",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619346554998,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_6_177b2834-5116-4fe7-bba6-2d2690e35d20.webp?v=1742481089",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619346358390,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_7_56180b5a-7761-40eb-a833-441e5a4a9fd7.webp?v=1742481089",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619346522230,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/1_8_6dc2fed5-d4d0-4bd6-8888-724ad4770785.webp?v=1742481089",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7624065843318,
    "title": "Zip neck jumper",
    "handle": "zip-neck-jumper",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blue",
          "Grey Marl"
        ]
      }
    ],
    "variants": [
      {
        "id": 41850366132342,
        "title": "M / Blue",
        "price": "200.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Blue",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673"
      },
      {
        "id": 41850366165110,
        "title": "M / Grey Marl",
        "price": "200.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Grey Marl",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_5_227d3051-829a-4ccf-8281-d96e0c31d539.webp?v=1742481673"
      },
      {
        "id": 41850366197878,
        "title": "L / Blue",
        "price": "200.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Blue",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673"
      },
      {
        "id": 41850366230646,
        "title": "L / Grey Marl",
        "price": "200.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Grey Marl",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_5_227d3051-829a-4ccf-8281-d96e0c31d539.webp?v=1742481673"
      },
      {
        "id": 41850366263414,
        "title": "XL / Blue",
        "price": "200.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Blue",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673"
      },
      {
        "id": 41850366296182,
        "title": "XL / Grey Marl",
        "price": "200.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Grey Marl",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_5_227d3051-829a-4ccf-8281-d96e0c31d539.webp?v=1742481673"
      }
    ],
    "images": [
      {
        "id": 33619379028086,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619379093622,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_3_9014796c-913f-44f8-b335-f81f00f0941a.webp?v=1742481723",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619379060854,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_2_156b1511-9402-42e7-92da-ac64c3f5583e.webp?v=1742481723",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619378929782,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_4_1543c382-589e-4daf-a962-eda31390e3cc.webp?v=1742481673",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619378995318,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_5_227d3051-829a-4ccf-8281-d96e0c31d539.webp?v=1742481673",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619379126390,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_6_fe2fb0b8-e224-417e-a4a7-cb99075724f1.webp?v=1742481673",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619378897014,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_7_fbbde2c0-72e4-4bbe-99f1-e21e72c281da.webp?v=1742481673",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619378962550,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/5_8_dc34afb7-d6b2-4449-93c2-e5625ac86fb7.webp?v=1742481673",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7630535491702,
    "title": "Flowing parka",
    "handle": "flowing-parka",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Khaki",
          "Beige"
        ]
      }
    ],
    "variants": [
      {
        "id": 41869111230582,
        "title": "M / Khaki",
        "price": "245.00",
        "compare_at_price": "275.00",
        "option1": "M",
        "option2": "Khaki",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_5.webp?v=1742480969"
      },
      {
        "id": 41869111197814,
        "title": "M / Beige",
        "price": "245.00",
        "compare_at_price": "275.00",
        "option1": "M",
        "option2": "Beige",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_1.webp?v=1742480969"
      },
      {
        "id": 41869111296118,
        "title": "L / Khaki",
        "price": "265.00",
        "compare_at_price": "295.00",
        "option1": "L",
        "option2": "Khaki",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_5.webp?v=1742480969"
      },
      {
        "id": 41869111263350,
        "title": "L / Beige",
        "price": "265.00",
        "compare_at_price": "295.00",
        "option1": "L",
        "option2": "Beige",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_1.webp?v=1742480969"
      },
      {
        "id": 41869111361654,
        "title": "XL / Khaki",
        "price": "285.00",
        "compare_at_price": "315.00",
        "option1": "XL",
        "option2": "Khaki",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_5.webp?v=1742480969"
      },
      {
        "id": 41869111328886,
        "title": "XL / Beige",
        "price": "285.00",
        "compare_at_price": "315.00",
        "option1": "XL",
        "option2": "Beige",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_1.webp?v=1742480969"
      }
    ],
    "images": [
      {
        "id": 33619338625142,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_5.webp?v=1742480969",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619338592374,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_7.webp?v=1742480969",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619338657910,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_6.webp?v=1742480969",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619338559606,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_8.webp?v=1742480969",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619338461302,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_1.webp?v=1742480969",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619338690678,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_2.webp?v=1742480969",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619338494070,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_3.webp?v=1742480969",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619338526838,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/6_4.webp?v=1742480969",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7630547058806,
    "title": "Oversized shirt",
    "handle": "oversized-shirt",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Ecru",
          "Black"
        ]
      }
    ],
    "variants": [
      {
        "id": 41869159563382,
        "title": "M / Ecru",
        "price": "120.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Ecru",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_1_5daebf3d-8d8a-44ef-ae84-a8ebbfbb39ec.webp?v=1742480430"
      },
      {
        "id": 41869159596150,
        "title": "M / Black",
        "price": "120.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_5_309d0409-6a8f-4b66-8547-2675fe0021aa.webp?v=1742480430"
      },
      {
        "id": 41869159628918,
        "title": "L / Ecru",
        "price": "130.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Ecru",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_1_5daebf3d-8d8a-44ef-ae84-a8ebbfbb39ec.webp?v=1742480430"
      },
      {
        "id": 41869159661686,
        "title": "L / Black",
        "price": "130.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_5_309d0409-6a8f-4b66-8547-2675fe0021aa.webp?v=1742480430"
      },
      {
        "id": 41869159694454,
        "title": "XL / Ecru",
        "price": "140.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Ecru",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_1_5daebf3d-8d8a-44ef-ae84-a8ebbfbb39ec.webp?v=1742480430"
      },
      {
        "id": 41869159727222,
        "title": "XL / Black",
        "price": "140.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_5_309d0409-6a8f-4b66-8547-2675fe0021aa.webp?v=1742480430"
      }
    ],
    "images": [
      {
        "id": 33619311460470,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_1_5daebf3d-8d8a-44ef-ae84-a8ebbfbb39ec.webp?v=1742480430",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619311657078,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_3_1ecaf6b1-7775-44b3-b4df-4e9e0ddedefb.webp?v=1742480444",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619311427702,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_2_8de38ada-8069-47a5-809d-74e2c5dabef5.webp?v=1742480444",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619311526006,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_4_224ecedc-dbc7-43ee-b87f-a030319f0648.webp?v=1742480430",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619311624310,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_5_309d0409-6a8f-4b66-8547-2675fe0021aa.webp?v=1742480430",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619311591542,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_7_3888bfdb-0c36-48a6-bad7-ebdcf86e4632.webp?v=1742480430",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619311558774,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/8_8_e5f61cb9-9987-4001-a3a5-d725eed3d328.webp?v=1742480430",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7630539554934,
    "title": "Poplin shirt",
    "handle": "poplin-shirt",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Lavender Gray",
          "Pastel Blue"
        ]
      }
    ],
    "variants": [
      {
        "id": 41869129711734,
        "title": "M / Lavender Gray",
        "price": "100.00",
        "compare_at_price": "120.00",
        "option1": "M",
        "option2": "Lavender Gray",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_1_7e834f3a-e126-4202-be49-729718203ffa.webp?v=1742480743"
      },
      {
        "id": 41869129744502,
        "title": "M / Pastel Blue",
        "price": "100.00",
        "compare_at_price": "120.00",
        "option1": "M",
        "option2": "Pastel Blue",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_5_444fe8d4-5178-475a-8e34-ce35e36f7c84.webp?v=1742480742"
      },
      {
        "id": 41869129777270,
        "title": "L / Lavender Gray",
        "price": "120.00",
        "compare_at_price": "140.00",
        "option1": "L",
        "option2": "Lavender Gray",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_1_7e834f3a-e126-4202-be49-729718203ffa.webp?v=1742480743"
      },
      {
        "id": 41869129810038,
        "title": "L / Pastel Blue",
        "price": "120.00",
        "compare_at_price": "140.00",
        "option1": "L",
        "option2": "Pastel Blue",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_5_444fe8d4-5178-475a-8e34-ce35e36f7c84.webp?v=1742480742"
      },
      {
        "id": 41869129842806,
        "title": "XL / Lavender Gray",
        "price": "140.00",
        "compare_at_price": "160.00",
        "option1": "XL",
        "option2": "Lavender Gray",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_1_7e834f3a-e126-4202-be49-729718203ffa.webp?v=1742480743"
      },
      {
        "id": 41869129875574,
        "title": "XL / Pastel Blue",
        "price": "140.00",
        "compare_at_price": "160.00",
        "option1": "XL",
        "option2": "Pastel Blue",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_5_444fe8d4-5178-475a-8e34-ce35e36f7c84.webp?v=1742480742"
      }
    ],
    "images": [
      {
        "id": 33619330269302,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_1_7e834f3a-e126-4202-be49-729718203ffa.webp?v=1742480743",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619330105462,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_3_b8f3bf27-9b7a-44d0-ae8a-033a20b04300.webp?v=1742480827",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619330138230,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_2_05cab529-4e14-4964-a8d7-ce4f56cf828f.webp?v=1742480827",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619330039926,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_4_80c505fd-2018-440f-acba-707291b133d7.webp?v=1742480742",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619330072694,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_5_444fe8d4-5178-475a-8e34-ce35e36f7c84.webp?v=1742480742",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619330170998,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_6_7cba1bdd-67cf-4442-8aaf-8566d8951c6c.webp?v=1742480742",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619330203766,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_7_b9c5651b-1ee2-43d2-8c1a-ed65d5e88b49.webp?v=1742480742",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619330236534,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/7_8_8adaa7e4-d966-49f3-b21f-cd4f433aec56.webp?v=1742480742",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7631096643702,
    "title": "Short sleeve T-shirt",
    "handle": "short-sleeve-t-shirt",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Faded Pink",
          "Pale Sand"
        ]
      }
    ],
    "variants": [
      {
        "id": 41870458093686,
        "title": "M / Faded Pink",
        "price": "125.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Faded Pink",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651"
      },
      {
        "id": 41870458126454,
        "title": "M / Pale Sand",
        "price": "125.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Pale Sand",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_6_ada259a9-91fa-4c1c-8b48-a5f3412e1442.webp?v=1742479651"
      },
      {
        "id": 41870458159222,
        "title": "L / Faded Pink",
        "price": "130.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Faded Pink",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651"
      },
      {
        "id": 41870458191990,
        "title": "L / Pale Sand",
        "price": "130.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Pale Sand",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_6_ada259a9-91fa-4c1c-8b48-a5f3412e1442.webp?v=1742479651"
      },
      {
        "id": 41870458224758,
        "title": "XL / Faded Pink",
        "price": "135.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Faded Pink",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651"
      },
      {
        "id": 41870458257526,
        "title": "XL / Pale Sand",
        "price": "135.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Pale Sand",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_6_ada259a9-91fa-4c1c-8b48-a5f3412e1442.webp?v=1742479651"
      }
    ],
    "images": [
      {
        "id": 33619268993142,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619269189750,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_3_7f93ef8d-e81d-4d11-a633-8a6fe87246f0.webp?v=1742479722",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619269091446,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_2_cb927d53-893e-478e-a097-4205654d8464.webp?v=1742479722",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619268960374,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_4_14971175-b86b-454e-8f54-5156e92e07b8.webp?v=1742479651",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619269124214,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_5_035f41a0-f613-4654-93d8-858cc8a2fa68.webp?v=1742479651",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619269025910,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_6_ada259a9-91fa-4c1c-8b48-a5f3412e1442.webp?v=1742479651",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619269058678,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_7_f3208820-9360-4af1-9ce1-cc2f8853680d.webp?v=1742479651",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619269156982,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/12_8_59dc339a-db9c-4e07-a031-311cf86b9239.webp?v=1742479651",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7624774221942,
    "title": "Stretch T-shirt with thin straps Pale Pink",
    "handle": "stretch-t-shirt-with-thin-straps",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "id": 41852617392246,
        "title": "M",
        "price": "140.00",
        "compare_at_price": "160.00",
        "option1": "M",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/3_1_98ff92ef-d5d3-4423-8a13-7bcf584b5c1b.webp?v=1742481425"
      },
      {
        "id": 41852617457782,
        "title": "L",
        "price": "160.00",
        "compare_at_price": "180.00",
        "option1": "L",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/3_1_98ff92ef-d5d3-4423-8a13-7bcf584b5c1b.webp?v=1742481425"
      },
      {
        "id": 41852617523318,
        "title": "XL",
        "price": "180.00",
        "compare_at_price": "200.00",
        "option1": "XL",
        "option2": null,
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/3_1_98ff92ef-d5d3-4423-8a13-7bcf584b5c1b.webp?v=1742481425"
      }
    ],
    "images": [
      {
        "id": 33619364315254,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/3_1_98ff92ef-d5d3-4423-8a13-7bcf584b5c1b.webp?v=1742481425",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619364348022,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/3_3_ddf73933-7ca8-4573-afc7-9be48de7c3e4.webp?v=1742481427",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619364249718,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/3_2_6b74e90d-8b14-47be-9295-ceab43a21959.webp?v=1742481427",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619364282486,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/3_4_0e1162e5-94a0-462b-bee3-d96972c37ab8.webp?v=1742481425",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  },
  {
    "id": 7631154118774,
    "title": "Short studded denim dress",
    "handle": "short-studded-denim-dress",
    "body_html": "<div>\n<p>Product are cut from ripstop that boasts a comfortable, stretchy quality and detailed with an oversized take on utility pockets.</p>\n<p><strong>Features Product:</strong></p>\n<ul>\n<li>Tonal stitching: 97% cotton, 3% elastane.</li>\n<li>Supple and stretch knit with a rich touch of wool.</li>\n<li>Model: Model is 6′1″, wearing a size S.</li>\n<li>Caring for your clothes is caring for the environment.</li>\n</ul>\n<p><strong>Care Instructions:</strong></p>\n<div style=\"text-align: start;\"><img src=\"https://cdn.shopify.com/s/files/1/0639/1401/6921/files/icon.jpg?v=1715757001\" alt=\"Short-Sleeved Thin Cotton T-shirt\" width=\"220\" height=\"34\" style=\"float: none;\"></div>\n<div style=\"text-align: start;\">\n<ul>\n<li><span>Machine wash in cold water at 30°C / 85 °F. </span></li>\n<li><span>Do not bleach. </span></li>\n<li><span>Do not tumble dry. </span></li>\n<li><span>Do not dry clean. Iron at low temperature.</span></li>\n</ul>\n<p><span>Product feature front slash pockets, oversized zipped utility-pockets and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop blended with stretch for optimal comfort.</span></p>\n</div>\n</div>",
    "vendor": "novy",
    "product_type": "",
    "tags": [
      "fashion"
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Indigo",
          "Black"
        ]
      }
    ],
    "variants": [
      {
        "id": 41870956757110,
        "title": "M / Indigo",
        "price": "400.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Indigo",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_1.webp?v=1742478341"
      },
      {
        "id": 41870956789878,
        "title": "M / Black",
        "price": "400.00",
        "compare_at_price": null,
        "option1": "M",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_5_6b97c023-c24b-42be-b677-bb9499dcb483.webp?v=1742478341"
      },
      {
        "id": 41870956822646,
        "title": "L / Indigo",
        "price": "420.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Indigo",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_1.webp?v=1742478341"
      },
      {
        "id": 41870956855414,
        "title": "L / Black",
        "price": "420.00",
        "compare_at_price": null,
        "option1": "L",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_5_6b97c023-c24b-42be-b677-bb9499dcb483.webp?v=1742478341"
      },
      {
        "id": 41870956888182,
        "title": "XL / Indigo",
        "price": "440.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Indigo",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_1.webp?v=1742478341"
      },
      {
        "id": 41870956920950,
        "title": "XL / Black",
        "price": "440.00",
        "compare_at_price": null,
        "option1": "XL",
        "option2": "Black",
        "option3": null,
        "available": true,
        "featured_image": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_5_6b97c023-c24b-42be-b677-bb9499dcb483.webp?v=1742478341"
      }
    ],
    "images": [
      {
        "id": 33619204341878,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_1.webp?v=1742478341",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619204243574,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_3.webp?v=1742478345",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619204472950,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_2.webp?v=1742478345",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619204309110,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_4.webp?v=1742478341",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619204374646,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_5_6b97c023-c24b-42be-b677-bb9499dcb483.webp?v=1742478341",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619204276342,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_6_d1784af0-53d5-45f1-b4f8-2cf9a816ab1f.webp?v=1742478341",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619204440182,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_7_2686f710-0e76-4277-920c-d091aa36f255.webp?v=1742478341",
        "alt": null,
        "width": 750,
        "height": 1125
      },
      {
        "id": 33619204407414,
        "src": "https://cdn.shopify.com/s/files/1/0600/9883/8646/files/16_8_e40d1105-46e6-45e5-b482-9d04bb4bcafc.webp?v=1742478341",
        "alt": null,
        "width": 750,
        "height": 1125
      }
    ]
  }
] as Product[];

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
