import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Folder, Image as ImageIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

type Screenshot = { url: string; caption: string };
type FolderType = { name: string; screenshots: Screenshot[] };
type WorkData = {
  category: string;
  title: string;
  desc: string;
  metrics: string[];
  image: string;
  screenshots?: Screenshot[];
  folders?: FolderType[];
};

const worksData: Record<string, WorkData> = {
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
    "folders": [
      {
        "name": "Channel Creation",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Channel Creation/youtube channel create_2.png",
            "caption": "Channel Creation 1"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Channel Creation/youtube channel create_3.png",
            "caption": "Channel Creation 2"
          }
        ]
      },
      {
        "name": "Video SEO",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/YouTube Promotion_2.png",
            "caption": "Video SEO 1"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-16-42.jpg",
            "caption": "Video SEO 2"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-16-50.jpg",
            "caption": "Video SEO 3"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-16-53.jpg",
            "caption": "Video SEO 4"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-17-00.jpg",
            "caption": "Video SEO 5"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-17-03.jpg",
            "caption": "Video SEO 6"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-17-05.jpg",
            "caption": "Video SEO 7"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-17-08.jpg",
            "caption": "Video SEO 8"
          }
        ]
      },
      {
        "name": "Video Promotion",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video Promotion/Video Promotion Sheet.png",
            "caption": "Promotion 1"
          }
        ]
      },
      {
        "name": "Monetization",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/After finished work channel analytics.png",
            "caption": "Monetization 1"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/YouTube Promotion_3.png",
            "caption": "Monetization 2"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-16-55.jpg",
            "caption": "Monetization 3"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-16-58.jpg",
            "caption": "Monetization 4"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-17-10.jpg",
            "caption": "Monetization 5"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-17-13.jpg",
            "caption": "Monetization 6"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-17-26.jpg",
            "caption": "Monetization 7"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-17-29.jpg",
            "caption": "Monetization 8"
          }
        ]
      }
    ]
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
    "screenshots": [
      {
        "url": "/Digital Marketing All Portfolio/Google Ads/Google ads.png",
        "caption": "Google Ads 1"
      },
      {
        "url": "/Digital Marketing All Portfolio/Google Ads/image_2021_08_25T10_19_11_035Z.png",
        "caption": "Google Ads 2"
      },
      {
        "url": "/Digital Marketing All Portfolio/Google Ads/image_2021_08_25T10_20_53_449Z.png",
        "caption": "Google Ads 3"
      }
    ]
  },
  "facebook-portfolio": {
    "category": "Facebook Ecosystem",
    "title": "Ads, Page & Promotion",
    "desc": "Comprehensive Facebook marketing including page setup, organic promotion, and high-ROI ad campaigns.",
    "metrics": [
      "High ROAS",
      "Increased Reach",
      "Targeted Audience"
    ],
    "image": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_18.jpg",
    "folders": [
      {
        "name": "Facebook and Instagram Ads",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/1 - Copy.png",
            "caption": "Ads Screenshot 1"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/1.png",
            "caption": "Ads Screenshot 2"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/1265233-FACEBOOK-ADSSOCIAL-MEDIA-MARKETING-2 - Copy.png",
            "caption": "Ads Screenshot 3"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/1265233-FACEBOOK-ADSSOCIAL-MEDIA-MARKETING-2.png",
            "caption": "Ads Screenshot 4"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/1669227222476.jpeg",
            "caption": "Ads Screenshot 5"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/180965101_514537533038118_1796863314300553047_n - Copy.png",
            "caption": "Ads Screenshot 6"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/180965101_514537533038118_1796863314300553047_n.png",
            "caption": "Ads Screenshot 7"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/188162772_197322395574452_945186613312780688_n - Copy.png",
            "caption": "Ads Screenshot 8"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/188162772_197322395574452_945186613312780688_n.png",
            "caption": "Ads Screenshot 9"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/190888065_1462327990766018_5903446203662152443_n - Copy.png",
            "caption": "Ads Screenshot 10"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/190888065_1462327990766018_5903446203662152443_n.png",
            "caption": "Ads Screenshot 11"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/2 - Copy.png",
            "caption": "Ads Screenshot 12"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/2.png",
            "caption": "Ads Screenshot 13"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/23a37b - Copy.jpg",
            "caption": "Ads Screenshot 14"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/23a37b.jpg",
            "caption": "Ads Screenshot 15"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/32c284.jpg",
            "caption": "Ads Screenshot 16"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/4 - Copy.png",
            "caption": "Ads Screenshot 17"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/4.png",
            "caption": "Ads Screenshot 18"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/5 - Copy.png",
            "caption": "Ads Screenshot 19"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/5.png",
            "caption": "Ads Screenshot 20"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/5ed8164d53a1e9830a35cf5b__bAzNohOUezvGg_8664CU9_Zq1YpRszxfGHd_Ygfrw5AulHcoi16FWblfsvM_kM1sNoFJaRyS4gYkJumC5_CgwhzjTt9Zlekoso82A82t0-AvXVmempEVrHh3K7f_6IR-_nOoF7V - Copy.png",
            "caption": "Ads Screenshot 21"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/5ed8164d53a1e9830a35cf5b__bAzNohOUezvGg_8664CU9_Zq1YpRszxfGHd_Ygfrw5AulHcoi16FWblfsvM_kM1sNoFJaRyS4gYkJumC5_CgwhzjTt9Zlekoso82A82t0-AvXVmempEVrHh3K7f_6IR-_nOoF7V.png",
            "caption": "Ads Screenshot 22"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/760_change_best-1600x900 - Copy.png",
            "caption": "Ads Screenshot 23"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/760_change_best-1600x900.png",
            "caption": "Ads Screenshot 24"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/8-1-facebook-ad-results (1).png",
            "caption": "Ads Screenshot 25"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/8.png",
            "caption": "Ads Screenshot 26"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/9.png",
            "caption": "Ads Screenshot 27"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Ads Campaign Results.png",
            "caption": "Ads Screenshot 28"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Facebook+Ads+Manager+$30,000+Spent - Copy.jpg",
            "caption": "Ads Screenshot 29"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Facebook+Ads+Manager+$30,000+Spent.jpg",
            "caption": "Ads Screenshot 30"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Haidishi LTD SS2.jpg",
            "caption": "Ads Screenshot 31"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/InkedRunFaster-Intro-BA-to-funnel-25x-ROAS_LI.jpg",
            "caption": "Ads Screenshot 32"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/LLLLLLLt_3 - Copy.jpg",
            "caption": "Ads Screenshot 33"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/LLLLLLLt_3.jpg",
            "caption": "Ads Screenshot 34"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screen Shot 2019-03-12 at 3.28.22 PM - Copy.png",
            "caption": "Ads Screenshot 35"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screen Shot 2019-03-12 at 3.28.22 PM.png",
            "caption": "Ads Screenshot 36"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screen-Shot-2019-03-19-at-3.34.13-PM-1-1024x493.png",
            "caption": "Ads Screenshot 37"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_1 - Copy.png",
            "caption": "Ads Screenshot 38"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_1.png",
            "caption": "Ads Screenshot 39"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_14.png",
            "caption": "Ads Screenshot 40"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_18.jpg",
            "caption": "Ads Screenshot 41"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_2 - Copy.png",
            "caption": "Ads Screenshot 42"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_2.png",
            "caption": "Ads Screenshot 43"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_22.jpg",
            "caption": "Ads Screenshot 44"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_23.jpg",
            "caption": "Ads Screenshot 45"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_3.png",
            "caption": "Ads Screenshot 46"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_38.jpg",
            "caption": "Ads Screenshot 47"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_39.jpg",
            "caption": "Ads Screenshot 48"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_42.jpg",
            "caption": "Ads Screenshot 49"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_5.jpg",
            "caption": "Ads Screenshot 50"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/VBM Spending.png",
            "caption": "Ads Screenshot 51"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/ads result - Copy.png",
            "caption": "Ads Screenshot 52"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/ads result.png",
            "caption": "Ads Screenshot 53"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/f5de58 - Copy.jpg",
            "caption": "Ads Screenshot 54"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/f5de58.jpg",
            "caption": "Ads Screenshot 55"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/fa192c - Copy.jpg",
            "caption": "Ads Screenshot 56"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/fa192c.jpg",
            "caption": "Ads Screenshot 57"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (1) - Copy.png",
            "caption": "Ads Screenshot 58"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (1).png",
            "caption": "Ads Screenshot 59"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (2) - Copy.png",
            "caption": "Ads Screenshot 60"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (2).png",
            "caption": "Ads Screenshot 61"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (3) - Copy.png",
            "caption": "Ads Screenshot 62"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (3).png",
            "caption": "Ads Screenshot 63"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (4) - Copy.png",
            "caption": "Ads Screenshot 64"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (4).png",
            "caption": "Ads Screenshot 65"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (5) - Copy.png",
            "caption": "Ads Screenshot 66"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (5).png",
            "caption": "Ads Screenshot 67"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (6) - Copy.png",
            "caption": "Ads Screenshot 68"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (6).png",
            "caption": "Ads Screenshot 69"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (7) - Copy.png",
            "caption": "Ads Screenshot 70"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (7).png",
            "caption": "Ads Screenshot 71"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (8) - Copy.png",
            "caption": "Ads Screenshot 72"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image (8).png",
            "caption": "Ads Screenshot 73"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image - Copy.png",
            "caption": "Ads Screenshot 74"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image.png",
            "caption": "Ads Screenshot 75"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_01_27T16_27_35_795Z-1 - Copy.png",
            "caption": "Ads Screenshot 76"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_01_27T16_27_35_795Z-1.png",
            "caption": "Ads Screenshot 77"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_03_31T01_57_55_512Z.png",
            "caption": "Ads Screenshot 78"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_04_17T13_35_42_685Z.png",
            "caption": "Ads Screenshot 79"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_04_21T15_03_06_662Z.png",
            "caption": "Ads Screenshot 80"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_04_23T04_56_53_115Z.png",
            "caption": "Ads Screenshot 81"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_07_23T14_16_59_972Z.png",
            "caption": "Ads Screenshot 82"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_08_09T12_43_47_859Z.png",
            "caption": "Ads Screenshot 83"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_08_25T10_22_33_055Z.png",
            "caption": "Ads Screenshot 84"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_08_25T10_23_21_503Z.png",
            "caption": "Ads Screenshot 85"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_08_25T10_23_42_067Z.png",
            "caption": "Ads Screenshot 86"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_08_25T10_24_46_312Z - Copy.png",
            "caption": "Ads Screenshot 87"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_08_25T10_24_46_312Z.png",
            "caption": "Ads Screenshot 88"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_08_25T10_25_26_164Z - Copy.png",
            "caption": "Ads Screenshot 89"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_08_25T10_25_26_164Z.png",
            "caption": "Ads Screenshot 90"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_08_25T10_26_01_713Z - Copy.png",
            "caption": "Ads Screenshot 91"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/image_2021_08_25T10_26_01_713Z.png",
            "caption": "Ads Screenshot 92"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/received_4038725716158720 - Copy.gif",
            "caption": "Ads Screenshot 93"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/received_4038725716158720.gif",
            "caption": "Ads Screenshot 94"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/received_884812345420526 - Copy.jpeg",
            "caption": "Ads Screenshot 95"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/received_884812345420526.jpeg",
            "caption": "Ads Screenshot 96"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/scaling-fb-ads-Broad-Example-2 (1) - Copy.png",
            "caption": "Ads Screenshot 97"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/scaling-fb-ads-Broad-Example-2 (1).png",
            "caption": "Ads Screenshot 98"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/screen_shot_2020_03_31_at_1.38.41_pm_w720 - Copy.png",
            "caption": "Ads Screenshot 99"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/screen_shot_2020_03_31_at_1.38.41_pm_w720.png",
            "caption": "Ads Screenshot 100"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/shopping ads.png",
            "caption": "Ads Screenshot 101"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/verified.jpg",
            "caption": "Ads Screenshot 102"
          }
        ]
      }
    ]
  },
  "amazon-book": {
    "category": "Amazon Book Promotion",
    "title": "Viral Book Marketing",
    "desc": "Promoted Amazon Kindle books using targeted social media campaigns, mockups, and influencer outreach.",
    "metrics": [
      "Increased Downloads",
      "Viral Social Reach",
      "High Conversion"
    ],
    "image": "/Digital Marketing All Portfolio/Amazon Book Promotin/Mokeup Book Cover.png",
    "screenshots": [
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/How to reply and post in twitter.png",
        "caption": "Amazon Book Work 2"
      },
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Mokeup Book Cover.png",
        "caption": "Amazon Book Work 3"
      },
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Post Sample1.jpeg",
        "caption": "Amazon Book Work 4"
      },
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Post Sample2.jpeg",
        "caption": "Amazon Book Work 5"
      },
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_10.png",
        "caption": "Amazon Book Work 6"
      },
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_11.png",
        "caption": "Amazon Book Work 7"
      },
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_12.png",
        "caption": "Amazon Book Work 8"
      },
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_13.png",
        "caption": "Amazon Book Work 9"
      },
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_14.png",
        "caption": "Amazon Book Work 10"
      },
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_15.png",
        "caption": "Amazon Book Work 11"
      },
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_9.png",
        "caption": "Amazon Book Work 12"
      },
      {
        "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Work Proof Sheet.png",
        "caption": "Amazon Book Work 13"
      }
    ]
  },
  "facebook-chatbot": {
    "category": "Facebook Chatbot",
    "title": "Automated Messaging Flows",
    "desc": "Developed engaging chatbots for Facebook pages to automate lead generation and customer support.",
    "metrics": [
      "99% Response Rate",
      "Automated Lead Gen",
      "24/7 Availability"
    ],
    "image": "/Digital Marketing All Portfolio/Chatbot Create/Sample/Facebook chatbot_2.png",
    "folders": [
      {
        "name": "Chatbot Samples",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Chatbot Create/Sample/Facebook chatbot_2.png",
            "caption": "Chatbot Flow 1"
          },
          {
            "url": "/Digital Marketing All Portfolio/Chatbot Create/Sample/Facebook chatbot_3.png",
            "caption": "Chatbot Flow 2"
          }
        ]
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
    "image": "/Digital Marketing All Portfolio/Gig banner/Amazon Book Promotion.jpg",
    "screenshots": [
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/1647701341117.jpg",
        "caption": "Gig Banner 1"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/1647867491607.jpg",
        "caption": "Gig Banner 2"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/20220326_114643.jpg",
        "caption": "Gig Banner 3"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/Amazon Book Promotion.jpg",
        "caption": "Gig Banner 4"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/Facebook Chatbot.png",
        "caption": "Gig Banner 5"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/Facebook Page Creation.png",
        "caption": "Gig Banner 6"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/Facebook Promotion.png",
        "caption": "Gig Banner 7"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/Facebook ads campaign.jpg",
        "caption": "Gig Banner 8"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/Facebook marketing gig.jpg",
        "caption": "Gig Banner 9"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/LinkedIn digital marketing cover.jpg",
        "caption": "Gig Banner 10"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/Screenshot_2022-03-26-11-30-55-697_com.instagram.android~2.jpg",
        "caption": "Gig Banner 11"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/Screenshot_2022-03-26-11-31-21-877_com.instagram.android~2.jpg",
        "caption": "Gig Banner 12"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/YouTube Promotion.png",
        "caption": "Gig Banner 13"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/YouTube video SEO and organic promotion.jpg",
        "caption": "Gig Banner 14"
      },
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/youtube channel create.png",
        "caption": "Gig Banner 15"
      }
    ]
  }
};

export default function ProofPage() {
  const { id } = useParams<{ id: string }>();
  const work = id ? worksData[id] : null;
  const [activeFolderIndex, setActiveFolderIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!work) {
    return (
      <div className="min-h-screen bg-surface flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline flex items-center gap-2">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const screenshotsToDisplay = work.folders && activeFolderIndex !== null 
    ? work.folders[activeFolderIndex].screenshots 
    : work.screenshots || [];

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 flex flex-col pt-24 pb-24"
      >
        {/* Header Section */}
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-16">
          <Link to="/#results" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-medium mb-10 bg-white px-4 py-2 rounded-full shadow-sm border border-outline-variant/50 w-fit">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
          
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-outline-variant/30 flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <p className="font-mono text-sm font-bold text-primary mb-4 tracking-widest uppercase">{work.category}</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-tight text-black">{work.title}</h1>
              <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed">
                {work.desc}
              </p>
            </div>
            {work.metrics && (
              <div className="bg-surface-container-low p-8 rounded-[1.5rem] w-full lg:w-72 flex-shrink-0">
                <p className="font-bold text-black mb-4 uppercase tracking-widest text-sm">Key Wins</p>
                <div className="space-y-4">
                  {work.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-primary" />
                      <span className="font-medium text-gray-800">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Folders Section (if applicable) */}
        {work.folders && (
          <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-16">
             <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">Project Activity Folders</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Explore different stages of this comprehensive project by opening the folders below.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {work.folders.map((folder, idx) => {
                const isActive = activeFolderIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveFolderIndex(isActive ? null : idx)}
                    className={`flex flex-col items-center justify-center gap-3 p-6 sm:p-8 rounded-[2rem] border transition-all duration-300 shadow-sm ${
                      isActive 
                        ? 'bg-primary/5 border-primary/40 ring-1 ring-primary/20 scale-105' 
                        : 'bg-white border-outline-variant/30 hover:border-primary/30 hover:bg-surface-container-low hover:-translate-y-1'
                    }`}
                  >
                    <Folder 
                      size={48} 
                      fill={isActive ? "currentColor" : "none"}
                      className={isActive ? "text-primary" : "text-gray-400"} 
                      strokeWidth={isActive ? 1.5 : 1}
                    />
                    <div className="text-center space-y-1">
                      <p className={`font-bold text-sm sm:text-base leading-tight ${isActive ? 'text-primary' : 'text-gray-800'}`}>
                        {folder.name}
                      </p>
                      <p className="text-xs text-on-surface-variant flex items-center justify-center gap-1">
                        <ImageIcon size={12} /> {folder.screenshots.length} assets
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {activeFolderIndex === null && (
               <div className="mt-12 bg-surface-container-low border border-dashed border-outline-variant rounded-[2rem] p-12 text-center flex flex-col items-center">
                  <Folder className="text-gray-300 mb-4" size={48} />
                  <p className="text-on-surface-variant text-lg">Select a folder above to view the associated screenshots and proof of work.</p>
               </div>
            )}
          </div>
        )}

        {/* Gallery Section */}
        {screenshotsToDisplay.length > 0 && (
          <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-black mb-4">
                {work.folders && activeFolderIndex !== null 
                  ? `${work.folders[activeFolderIndex].name} Proofs` 
                  : `Project Proofs & Results`
                }
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Verified screenshots demonstrating our strategic impact and growth metrics.</p>
            </div>
            
            <div className="grid gap-20">
              {screenshotsToDisplay.map((screenshot, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                  key={idx} 
                  className="flex flex-col items-center group"
                >
                  
                  {/* Mockup Presentation Container */}
                  <div className="w-full bg-gradient-to-tr from-surface-variant/40 to-primary/5 rounded-[2.5rem] p-4 sm:p-8 md:p-12 shadow-inner border border-outline-variant/50">
                    
                    {/* Browser Window App */}
                    <div className="w-full mx-auto shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden bg-white border border-outline-variant/50 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                      
                      {/* Browser Top Bar */}
                      <div className="bg-surface-container-low px-4 py-3 flex items-center border-b border-outline-variant/50 relative">
                        <div className="flex gap-2 relative z-10">
                          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/30 shadow-sm"></div>
                          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/30 shadow-sm"></div>
                          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/30 shadow-sm"></div>
                        </div>
                        
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                          <div className="bg-white/80 px-6 py-1.5 rounded-lg text-xs font-semibold text-gray-500 font-mono shadow-sm border border-outline-variant/30 hidden sm:block truncate max-w-xs">
                            {screenshot.caption.toLowerCase().replace(/\s+/g, '-')}
                          </div>
                        </div>
                      </div>
                      
                      {/* Inner Image Content */}
                      <div className="bg-surface relative w-full overflow-hidden">
                        <img 
                          src={encodeURI(screenshot.url)} 
                          alt={screenshot.caption} 
                          className="w-full h-auto object-cover object-top transform transition-transform duration-1000 group-hover:scale-[1.01]"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Clean Descriptive Caption */}
                  <div className="mt-8 text-center px-4 max-w-2xl mx-auto">
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">{screenshot.caption}</h3>
                    <div className="h-1 w-12 bg-primary/20 rounded-full mx-auto mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.main>
      <Footer />
    </div>
  );
}
