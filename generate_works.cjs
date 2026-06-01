const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
         results = results.concat(getFiles(filePath));
      } else if (file.match(/\.(png|jpe?g|webp)$/i)) {
         // ensure forward slashes
         results.push(filePath.replace(/^public/, '').replace(/\\/g, '/'));
      }
    });
  } catch (e) {}
  return results;
}

const facebookAds = getFiles('public/facebook_etc/Facebook_Ads');
const chatbot = getFiles('public/chatbot');
const amazonBook = getFiles('public/amazon_book');
const gigBanners = getFiles('public/gig_banners');

console.log(JSON.stringify({ facebookAds, chatbot, amazonBook, gigBanners }, null, 2));
