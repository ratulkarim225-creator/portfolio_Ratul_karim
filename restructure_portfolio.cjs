const fs = require('fs');

const lines = fs.readFileSync('available_images.txt', 'utf8').trim().split('\n');

const works = {
  "youtube-portfolio": {
    "category": "YouTube Channel Management",
    "title": "From Channel Creation to Monetization & SEO",
    "desc": "Complete YouTube channel management including creation, video promotion, SEO optimization, and hitting monetization metrics.",
    "metrics": [
      "80.1/100 SEO Score",
      "Monetized Channel",
      "Fast Subscriber Growth"
    ],
    "image": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/YouTube Promotion_2.png",
    "folders": []
  },
  "google-ads": {
    "category": "Google Ads",
    "title": "High-Intent Search Campaigns",
    "desc": "Strategic keyword bidding and structured ad copy that drastically lowered CPC while increasing high-intent leads.",
    "metrics": [
      "45% Lower CPC",
      "4x Conversion Rate",
      "$10k+ Ad Spend Managed"
    ],
    "image": "/Digital Marketing All Portfolio/Google Ads/Google ads.png",
    "screenshots": []
  },
  "gig-banners": {
    "category": "Graphic Design",
    "title": "Professional Service Banners",
    "desc": "Designed highly-converting professional gig banners across multiple digital marketing service categories.",
    "metrics": [
      "High CTR Designs",
      "Professional Branding",
      "Custom Illustrations"
    ],
    "image": "/Digital Marketing All Portfolio/Gig banner/YouTube video SEO and organic promotion.jpg",
    "screenshots": []
  }
};

const ytFolders = {};

for (const line of lines) {
  const localURL = '/' + line.replace(/^public\//, '');
  // Skip if empty line
  if (!line) continue;
  
  if (line.includes('Gig banner')) {
    works['gig-banners'].screenshots.push({ url: localURL, caption: line.split('/').pop().replace(/\.\w+$/, '') });
  } else if (line.includes('Google Ads')) {
    works['google-ads'].screenshots.push({ url: localURL, caption: line.split('/').pop().replace(/\.\w+$/, '') });
  } else if (line.includes('Youtube Channel')) {
    const parts = line.split('/');
    const folderName = parts[parts.length - 2];
    if (!ytFolders[folderName]) ytFolders[folderName] = { name: folderName, screenshots: [] };
    ytFolders[folderName].screenshots.push({ url: localURL, caption: line.split('/').pop().replace(/\.\w+$/, '') });
  }
}

works['youtube-portfolio'].folders = Object.values(ytFolders);

// Update ProofPage.tsx
let proofCode = fs.readFileSync('src/pages/ProofPage.tsx', 'utf8');
const objRegex = /const worksData: Record<string, WorkData> = \{[\s\S]*?\n};\n/m;
proofCode = proofCode.replace(objRegex, `const worksData: Record<string, WorkData> = ${JSON.stringify(works, null, 2)};\n`);

// Ensure the view logic is object-cover full width
proofCode = proofCode.replace(
  /className="w-full h-auto object-contain/g,
  'className="w-full h-auto object-cover'
);
proofCode = proofCode.replace(
  /<div className="bg-surface relative w-full overflow-hidden p-[^>]*>/g,
  '<div className="bg-surface relative w-full overflow-hidden">'
);

fs.writeFileSync('src/pages/ProofPage.tsx', proofCode);

// Update Results.tsx
let resultsCode = fs.readFileSync('src/components/Results.tsx', 'utf8');
const resultsArrStr = Object.keys(works).map(k => ({
  id: k,
  category: works[k].category,
  title: works[k].title,
  desc: works[k].desc,
  image: works[k].image
}));
const resRegex = /const works = \[[\s\S]*?^  \];/m;
resultsCode = resultsCode.replace(resRegex, `const works = ${JSON.stringify(resultsArrStr, null, 4)};`);
fs.writeFileSync('src/components/Results.tsx', resultsCode);

console.log('Done mapping.');
