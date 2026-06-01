const fs = require('fs');
fs.copyFileSync(
  "public/Digital Marketing All Portfolio/Gig banner/YouTube video SEO and organic promotion.jpg",
  "public/Digital Marketing All Portfolio/Amazon Book Promotin/amazon_book.jpg"
);
fs.copyFileSync(
  "public/Digital Marketing All Portfolio/Gig banner/youtube channel create.png",
  "public/Digital Marketing All Portfolio/Chatbot Create/sample/chatbot.png"
);
fs.mkdirSync("public/Digital Marketing All Portfolio/Facebook and Instagram Ads", {recursive: true});
fs.copyFileSync(
  "public/Digital Marketing All Portfolio/Google Ads/Google ads.png",
  "public/Digital Marketing All Portfolio/Facebook and Instagram Ads/fb_ads.png"
);
console.log("Copied images");
