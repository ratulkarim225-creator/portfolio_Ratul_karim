const fs = require('fs');

const worksData = JSON.parse(fs.readFileSync('all_works.json', 'utf8'));

let proofPage = fs.readFileSync('src/pages/ProofPage.tsx', 'utf8');

const fbAdsScreenshots = worksData.facebookAds.map(url => `{ url: "${url}", caption: "Facebook Ads Screenshot" }`).join(',\n          ');
const amazonBookScreenshots = worksData.amazonBook.map(url => `{ url: "${url}", caption: "Amazon Book Promotion" }`).join(',\n      ');
const chatbotScreenshots = worksData.chatbot.map(url => `{ url: "${url}", caption: "Chatbot Flow Screenshot" }`).join(',\n      ');
const gigBannerScreenshots = worksData.gigBanners.map(url => `{ url: "${url}", caption: "Professional Gig Banner" }`).join(',\n      ');

const regexFbAds = /(name:\s*"Facebook and Instagram Ads",\s*screenshots:\s*\[)[\s\S]*?(\])/;
proofPage = proofPage.replace(regexFbAds, `$1\n          ${fbAdsScreenshots}\n        $2`);

const regexAmazonBook = /("amazon-book":\s*{[\s\S]*?screenshots:\s*\[)[\s\S]*?(\]\s*\})/;
proofPage = proofPage.replace(regexAmazonBook, `$1\n      ${amazonBookScreenshots}\n    $2`);

const regexChatbot = /("facebook-chatbot":\s*{[\s\S]*?screenshots:\s*\[)[\s\S]*?(\]\s*\})/;
proofPage = proofPage.replace(regexChatbot, `$1\n      ${chatbotScreenshots}\n    $2`);

const regexGigBanners = /("gig-banners":\s*{[\s\S]*?screenshots:\s*\[)[\s\S]*?(\]\s*\})/;
proofPage = proofPage.replace(regexGigBanners, `$1\n      ${gigBannerScreenshots}\n    $2`);

fs.writeFileSync('src/pages/ProofPage.tsx', proofPage);
