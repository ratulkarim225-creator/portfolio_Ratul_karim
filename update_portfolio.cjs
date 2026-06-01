const fs = require('fs');
const path = require('path');

function getImages(dirPath) {
  try {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    const images = [];
    for (const file of files) {
      if (file.isDirectory()) {
        images.push(...getImages(path.join(dirPath, file.name)));
      } else if (file.name.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
        images.push(path.join(dirPath, file.name).replace(/\\/g, '/'));
      }
    }
    return images;
  } catch (e) {
    return [];
  }
}

const fbAdsImgs = getImages('public/Digital Marketing All Portfolio/Facebook and Instagram Ads').map(f => '/' + f.replace(/^public\//, ''));
const amazonImgs = getImages('public/Digital Marketing All Portfolio/Amazon Book Promotin').map(f => '/' + f.replace(/^public\//, ''));
const chatbotImgs = getImages('public/Digital Marketing All Portfolio/Chatbot Create').map(f => '/' + f.replace(/^public\//, ''));

const worksDataAdd = {
  "facebook-ads": {
    "category": "Facebook Ecosystem",
    "title": "Ads, Page & Promotion",
    "desc": "Comprehensive Facebook marketing including page setup, organic promotion, and high-ROI ad campaigns.",
    "metrics": [
      "High ROI",
      "Scale & Growth",
      "$30k+ Spend"
    ],
    "image": fbAdsImgs[0] || "",
    "screenshots": fbAdsImgs.map(url => ({ url, caption: path.basename(url, path.extname(url)) }))
  },
  "amazon-book": {
    "category": "Amazon Book Promotion",
    "title": "Viral Book Marketing",
    "desc": "Promoted Amazon Kindle books using targeted social media campaigns, mockups, and influencer outreach.",
    "metrics": [
      "Targeted Reach",
      "Sales Boost",
      "Organic Engagement"
    ],
    "image": amazonImgs[0] || "",
    "screenshots": amazonImgs.map(url => ({ url, caption: path.basename(url, path.extname(url)) }))
  },
  "facebook-chatbot": {
    "category": "Facebook Chatbot",
    "title": "Automated Messaging Flows",
    "desc": "Developed engaging chatbots for Facebook pages to automate lead generation and customer support.",
    "metrics": [
      "Higher Reply Rate",
      "Lead Gen",
      "24/7 Availability"
    ],
    "image": chatbotImgs[0] || "",
    "screenshots": chatbotImgs.map(url => ({ url, caption: path.basename(url, path.extname(url)) }))
  }
};

let proofCode = fs.readFileSync('src/pages/ProofPage.tsx', 'utf8');
const objRegex = /const worksData: Record<string, WorkData> = (\{[^]*?\n\});\n/;
const match = proofCode.match(objRegex);
if (match) {
  const currentWorks = JSON.parse(match[1]);
  Object.assign(currentWorks, worksDataAdd);
  proofCode = proofCode.replace(objRegex, `const worksData: Record<string, WorkData> = ${JSON.stringify(currentWorks, null, 2)};\n`);
  fs.writeFileSync('src/pages/ProofPage.tsx', proofCode);
} else {
  console.log("Could not match worksData in ProofPage");
}

let resultsCode = fs.readFileSync('src/components/Results.tsx', 'utf8');
const resRegex = /const works = (\[[^]*?^  \]);/m;
const match2 = resultsCode.match(resRegex);
if (match2) {
  const currentResults = JSON.parse(match2[1]);
  
  // check if exist
  for (const newKey of Object.keys(worksDataAdd)) {
    if (!currentResults.find(r => r.id === newKey)) {
        currentResults.push({
          id: newKey,
          category: worksDataAdd[newKey].category,
          title: worksDataAdd[newKey].title,
          desc: worksDataAdd[newKey].desc,
          image: worksDataAdd[newKey].image
        });
    }
  }

  resultsCode = resultsCode.replace(resRegex, `const works = ${JSON.stringify(currentResults, null, 4)};`);
  fs.writeFileSync('src/components/Results.tsx', resultsCode);
} else {
  console.log("Could not match works array in Results");
}

console.log('Update finished.');
