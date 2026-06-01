const fs = require('fs');

const file = fs.readFileSync('src/pages/ProofPage.tsx', 'utf8');

const updated = file.replace(
  /"4x Conversion Rate",\n      "\{\n  "youtube-portfolio"[\s\S]*?\n};\n/,
  `"4x Conversion Rate",
      "$10k+ Ad Spend Managed"
    ],
    "image": "/Digital Marketing All Portfolio/Google Ads/Google ads.png",
    "screenshots": [
      {
        "url": "/Digital Marketing All Portfolio/Google Ads/Google ads.png",
        "caption": "Google ads"
      },
      {
        "url": "/Digital Marketing All Portfolio/Google Ads/image_2021_08_25T10_19_11_035Z.png",
        "caption": "image_2021_08_25T10_19_11_035Z"
      },
      {
        "url": "/Digital Marketing All Portfolio/Google Ads/image_2021_08_25T10_20_53_449Z.png",
        "caption": "image_2021_08_25T10_20_53_449Z"
      }
    ]
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
    "screenshots": [
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/youtube channel create.png",
        "caption": "youtube channel create"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/YouTube video SEO and organic promotion.jpg",
        "caption": "YouTube video SEO and organic promotion"
      }
    ]
  },
  "facebook-ads": {
    "category": "Facebook Ecosystem",
    "title": "Ads, Page & Promotion",
    "desc": "Comprehensive Facebook marketing including page setup, organic promotion, and high-ROI ad campaigns.",
    "metrics": [
      "High ROI",
      "Scale & Growth",
      "$30k+ Spend"
    ],
    "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "screenshots": []
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
    "image": "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?auto=format&fit=crop&q=80&w=1000",
    "screenshots": []
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
    "image": "https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?auto=format&fit=crop&q=80&w=1000",
    "screenshots": []
  }
};
`
);

fs.writeFileSync('src/pages/ProofPage.tsx', updated);
console.log('Fixed ProofPage');
