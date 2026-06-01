const fs = require('fs');

// Updates for ProofPage.tsx
let proofCode = fs.readFileSync('src/pages/ProofPage.tsx', 'utf8');

const updatedProof = proofCode.replace(
  /"facebook-ads": \{\s*"category": "Facebook Ecosystem",\s*"title": "Ads, Page & Promotion",\s*"desc": "Comprehensive Facebook marketing including page setup, organic promotion, and high-ROI ad campaigns.",\s*"metrics": \[\s*"High ROI",\s*"Scale & Growth",\s*"\$30k\+ Spend"\s*\],\s*"image": "[^"]*",\s*"screenshots": \[[\s\S]*?\]\s*\},/,
  `"facebook-ads": {
    "category": "Facebook Ecosystem",
    "title": "Ads, Page & Promotion",
    "desc": "Comprehensive Facebook marketing including page setup, organic promotion, and high-ROI ad campaigns.",
    "metrics": [
      "High ROI",
      "Scale & Growth",
      "$30k+ Spend"
    ],
    "image": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/fb_ads.png",
    "screenshots": [
      {
        "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/fb_ads.png",
        "caption": "Dashboard View"
      }
    ]
  },`
).replace(
  /"amazon-book": \{\s*"category": "Amazon Book Promotion",\s*"title": "Viral Book Marketing",\s*"desc": "Promoted Amazon Kindle books using targeted social media campaigns, mockups, and influencer outreach.",\s*"metrics": \[\s*"Targeted Reach",\s*"Sales Boost",\s*"Organic Engagement"\s*\],\s*"image": "[^"]*",\s*"screenshots": \[[\s\S]*?\]\s*\},/,
  `"amazon-book": {
    "category": "Amazon Book Promotion",
    "title": "Viral Book Marketing",
    "desc": "Promoted Amazon Kindle books using targeted social media campaigns, mockups, and influencer outreach.",
    "metrics": [
      "Targeted Reach",
      "Sales Boost",
      "Organic Engagement"
    ],
    "image": "/Digital Marketing All Portfolio/Amazon Book Promotin/amazon_book.jpg",
    "screenshots": [
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/amazon_book.jpg",
        "caption": "Book Promotion"
      }
    ]
  },`
).replace(
  /"facebook-chatbot": \{\s*"category": "Facebook Chatbot",\s*"title": "Automated Messaging Flows",\s*"desc": "Developed engaging chatbots for Facebook pages to automate lead generation and customer support.",\s*"metrics": \[\s*"Higher Reply Rate",\s*"Lead Gen",\s*"24\/7 Availability"\s*\],\s*"image": "[^"]*",\s*"screenshots": \[[\s\S]*?\]\s*\}/,
  `"facebook-chatbot": {
    "category": "Facebook Chatbot",
    "title": "Automated Messaging Flows",
    "desc": "Developed engaging chatbots for Facebook pages to automate lead generation and customer support.",
    "metrics": [
      "Higher Reply Rate",
      "Lead Gen",
      "24/7 Availability"
    ],
    "image": "/Digital Marketing All Portfolio/Chatbot Create/sample/chatbot.png",
    "screenshots": [
      {
        "url": "/Digital Marketing All Portfolio/Chatbot Create/sample/chatbot.png",
        "caption": "Chatbot Flow"
      }
    ]
  }`
);

fs.writeFileSync('src/pages/ProofPage.tsx', updatedProof);


// Updates for Results.tsx
let resultsCode = fs.readFileSync('src/components/Results.tsx', 'utf8');

const updatedResults = resultsCode.replace(
  /"id": "facebook-ads",\s*"category": "Facebook Ecosystem",\s*"title": "Ads, Page & Promotion",\s*"desc": "Comprehensive Facebook marketing including page setup, organic promotion, and high-ROI ad campaigns.",\s*"image": "[^"]*"/,
  `"id": "facebook-ads",
        "category": "Facebook Ecosystem",
        "title": "Ads, Page & Promotion",
        "desc": "Comprehensive Facebook marketing including page setup, organic promotion, and high-ROI ad campaigns.",
        "image": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/fb_ads.png"`
).replace(
  /"id": "amazon-book",\s*"category": "Amazon Book Promotion",\s*"title": "Viral Book Marketing",\s*"desc": "Promoted Amazon Kindle books using targeted social media campaigns, mockups, and influencer outreach.",\s*"image": "[^"]*"/,
  `"id": "amazon-book",
        "category": "Amazon Book Promotion",
        "title": "Viral Book Marketing",
        "desc": "Promoted Amazon Kindle books using targeted social media campaigns, mockups, and influencer outreach.",
        "image": "/Digital Marketing All Portfolio/Amazon Book Promotin/amazon_book.jpg"`
).replace(
  /"id": "facebook-chatbot",\s*"category": "Facebook Chatbot",\s*"title": "Automated Messaging Flows",\s*"desc": "Developed engaging chatbots for Facebook pages to automate lead generation and customer support.",\s*"image": "[^"]*"/,
  `"id": "facebook-chatbot",
        "category": "Facebook Chatbot",
        "title": "Automated Messaging Flows",
        "desc": "Developed engaging chatbots for Facebook pages to automate lead generation and customer support.",
        "image": "/Digital Marketing All Portfolio/Chatbot Create/sample/chatbot.png"`
);

fs.writeFileSync('src/components/Results.tsx', updatedResults);
console.log("Updated both files!");
