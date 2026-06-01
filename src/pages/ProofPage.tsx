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
    "image": "/portfolio/youtube_channel/video_seo/youtube_promotion_2.png",
    "folders": [
      {
        "name": "Channel Creation",
        "screenshots": [
          {
            "url": "/portfolio/youtube_channel/channel_creation/youtube_channel_create_2.png",
            "caption": "Channel Creation 1"
          },
          {
            "url": "/portfolio/youtube_channel/channel_creation/youtube_channel_create_3.png",
            "caption": "Channel Creation 2"
          }
        ]
      },
      {
        "name": "Video SEO",
        "screenshots": [
          {
            "url": "/portfolio/youtube_channel/video_seo/youtube_promotion_2.png",
            "caption": "Video SEO 1"
          },
          {
            "url": "/portfolio/youtube_channel/video_seo/photo_2023-02-03_18-16-42.jpg",
            "caption": "Video SEO 2"
          },
          {
            "url": "/portfolio/youtube_channel/video_seo/photo_2023-02-03_18-16-50.jpg",
            "caption": "Video SEO 3"
          },
          {
            "url": "/portfolio/youtube_channel/video_seo/photo_2023-02-03_18-16-53.jpg",
            "caption": "Video SEO 4"
          },
          {
            "url": "/portfolio/youtube_channel/video_seo/photo_2023-02-03_18-17-00.jpg",
            "caption": "Video SEO 5"
          },
          {
            "url": "/portfolio/youtube_channel/video_seo/photo_2023-02-03_18-17-03.jpg",
            "caption": "Video SEO 6"
          },
          {
            "url": "/portfolio/youtube_channel/video_seo/photo_2023-02-03_18-17-05.jpg",
            "caption": "Video SEO 7"
          },
          {
            "url": "/portfolio/youtube_channel/video_seo/photo_2023-02-03_18-17-08.jpg",
            "caption": "Video SEO 8"
          }
        ]
      },
      {
        "name": "Video Promotion",
        "screenshots": [
          {
            "url": "/portfolio/youtube_channel/video_promotion/video_promotion_sheet.png",
            "caption": "Promotion 1"
          }
        ]
      },
      {
        "name": "Monetization",
        "screenshots": [
          {
            "url": "/portfolio/youtube_channel/monetization/after_finished_work_channel_analytics.png",
            "caption": "Monetization 1"
          },
          {
            "url": "/portfolio/youtube_channel/monetization/youtube_promotion_3.png",
            "caption": "Monetization 2"
          },
          {
            "url": "/portfolio/youtube_channel/monetization/photo_2023-02-03_18-16-55.jpg",
            "caption": "Monetization 3"
          },
          {
            "url": "/portfolio/youtube_channel/monetization/photo_2023-02-03_18-16-58.jpg",
            "caption": "Monetization 4"
          },
          {
            "url": "/portfolio/youtube_channel/monetization/photo_2023-02-03_18-17-10.jpg",
            "caption": "Monetization 5"
          },
          {
            "url": "/portfolio/youtube_channel/monetization/photo_2023-02-03_18-17-13.jpg",
            "caption": "Monetization 6"
          },
          {
            "url": "/portfolio/youtube_channel/monetization/photo_2023-02-03_18-17-26.jpg",
            "caption": "Monetization 7"
          },
          {
            "url": "/portfolio/youtube_channel/monetization/photo_2023-02-03_18-17-29.jpg",
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
    "image": "/portfolio/google_ads/google_ads.png",
    "screenshots": [
      {
        "url": "/portfolio/google_ads/google_ads.png",
        "caption": "Google Ads 1"
      },
      {
        "url": "/portfolio/google_ads/image_2021_08_25t10_19_11_035z.png",
        "caption": "Google Ads 2"
      },
      {
        "url": "/portfolio/google_ads/image_2021_08_25t10_20_53_449z.png",
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
    "image": "/portfolio/facebook_and_instagram_ads/screenshot_18.jpg",
    "folders": [
      {
        "name": "Ads & Campaigns Part 1",
        "screenshots": [
          {
            "url": "/portfolio/facebook_and_instagram_ads/1_-_copy.png",
            "caption": "Ads Screenshot 1"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/1.png",
            "caption": "Ads Screenshot 2"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/1265233-facebook-adssocial-media-marketing-2_-_copy.png",
            "caption": "Ads Screenshot 3"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/1265233-facebook-adssocial-media-marketing-2.png",
            "caption": "Ads Screenshot 4"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/1669227222476.jpeg",
            "caption": "Ads Screenshot 5"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/180965101_514537533038118_1796863314300553047_n_-_copy.png",
            "caption": "Ads Screenshot 6"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/180965101_514537533038118_1796863314300553047_n.png",
            "caption": "Ads Screenshot 7"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/188162772_197322395574452_945186613312780688_n_-_copy.png",
            "caption": "Ads Screenshot 8"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/188162772_197322395574452_945186613312780688_n.png",
            "caption": "Ads Screenshot 9"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/190888065_1462327990766018_5903446203662152443_n_-_copy.png",
            "caption": "Ads Screenshot 10"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/190888065_1462327990766018_5903446203662152443_n.png",
            "caption": "Ads Screenshot 11"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/2_-_copy.png",
            "caption": "Ads Screenshot 12"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/2.png",
            "caption": "Ads Screenshot 13"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/23a37b_-_copy.jpg",
            "caption": "Ads Screenshot 14"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/23a37b.jpg",
            "caption": "Ads Screenshot 15"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/32c284.jpg",
            "caption": "Ads Screenshot 16"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/4_-_copy.png",
            "caption": "Ads Screenshot 17"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/4.png",
            "caption": "Ads Screenshot 18"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/5_-_copy.png",
            "caption": "Ads Screenshot 19"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/5.png",
            "caption": "Ads Screenshot 20"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/5ed8164d53a1e9830a35cf5b_baznohouezvgg_8664cu9_zq1yprszxfghd_ygfrw5aulhcoi16fwblfsvm_km1snofjarys4gykjumc5_cgwhzjtt9zlekoso82a82t0-avxvmempevrhh3k7f_6ir-_noof7v_-_copy.png",
            "caption": "Ads Screenshot 21"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/5ed8164d53a1e9830a35cf5b_baznohouezvgg_8664cu9_zq1yprszxfghd_ygfrw5aulhcoi16fwblfsvm_km1snofjarys4gykjumc5_cgwhzjtt9zlekoso82a82t0-avxvmempevrhh3k7f_6ir-_noof7v.png",
            "caption": "Ads Screenshot 22"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/760_change_best-1600x900_-_copy.png",
            "caption": "Ads Screenshot 23"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/760_change_best-1600x900.png",
            "caption": "Ads Screenshot 24"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/8-1-facebook-ad-results_1_.png",
            "caption": "Ads Screenshot 25"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/8.png",
            "caption": "Ads Screenshot 26"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/9.png",
            "caption": "Ads Screenshot 27"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/ads_campaign_results.png",
            "caption": "Ads Screenshot 28"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/facebook_ads_manager_30_000_spent_-_copy.jpg",
            "caption": "Ads Screenshot 29"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/facebook_ads_manager_30_000_spent.jpg",
            "caption": "Ads Screenshot 30"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/haidishi_ltd_ss2.jpg",
            "caption": "Ads Screenshot 31"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/inkedrunfaster-intro-ba-to-funnel-25x-roas_li.jpg",
            "caption": "Ads Screenshot 32"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/lllllllt_3_-_copy.jpg",
            "caption": "Ads Screenshot 33"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/lllllllt_3.jpg",
            "caption": "Ads Screenshot 34"
          }
        ]
      },
      {
        "name": "Ads & Campaigns Part 2",
        "screenshots": [
          {
            "url": "/portfolio/facebook_and_instagram_ads/screen_shot_2019-03-12_at_3.28.22_pm_-_copy.png",
            "caption": "Ads Screenshot 35"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screen_shot_2019-03-12_at_3.28.22_pm.png",
            "caption": "Ads Screenshot 36"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screen-shot-2019-03-19-at-3.34.13-pm-1-1024x493.png",
            "caption": "Ads Screenshot 37"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_1_-_copy.png",
            "caption": "Ads Screenshot 38"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_1.png",
            "caption": "Ads Screenshot 39"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_14.png",
            "caption": "Ads Screenshot 40"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_18.jpg",
            "caption": "Ads Screenshot 41"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_2_-_copy.png",
            "caption": "Ads Screenshot 42"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_2.png",
            "caption": "Ads Screenshot 43"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_22.jpg",
            "caption": "Ads Screenshot 44"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_23.jpg",
            "caption": "Ads Screenshot 45"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_3.png",
            "caption": "Ads Screenshot 46"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_38.jpg",
            "caption": "Ads Screenshot 47"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_39.jpg",
            "caption": "Ads Screenshot 48"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_42.jpg",
            "caption": "Ads Screenshot 49"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screenshot_5.jpg",
            "caption": "Ads Screenshot 50"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/vbm_spending.png",
            "caption": "Ads Screenshot 51"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/ads_result_-_copy.png",
            "caption": "Ads Screenshot 52"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/ads_result.png",
            "caption": "Ads Screenshot 53"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/f5de58_-_copy.jpg",
            "caption": "Ads Screenshot 54"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/f5de58.jpg",
            "caption": "Ads Screenshot 55"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/fa192c_-_copy.jpg",
            "caption": "Ads Screenshot 56"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/fa192c.jpg",
            "caption": "Ads Screenshot 57"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_1_-_copy.png",
            "caption": "Ads Screenshot 58"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_1_.png",
            "caption": "Ads Screenshot 59"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2_-_copy.png",
            "caption": "Ads Screenshot 60"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2_.png",
            "caption": "Ads Screenshot 61"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_3_-_copy.png",
            "caption": "Ads Screenshot 62"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_3_.png",
            "caption": "Ads Screenshot 63"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_4_-_copy.png",
            "caption": "Ads Screenshot 64"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_4_.png",
            "caption": "Ads Screenshot 65"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_5_-_copy.png",
            "caption": "Ads Screenshot 66"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_5_.png",
            "caption": "Ads Screenshot 67"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_6_-_copy.png",
            "caption": "Ads Screenshot 68"
          }
        ]
      },
      {
        "name": "Ads & Campaigns Part 3",
        "screenshots": [
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_6_.png",
            "caption": "Ads Screenshot 69"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_7_-_copy.png",
            "caption": "Ads Screenshot 70"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_7_.png",
            "caption": "Ads Screenshot 71"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_8_-_copy.png",
            "caption": "Ads Screenshot 72"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_8_.png",
            "caption": "Ads Screenshot 73"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_-_copy.png",
            "caption": "Ads Screenshot 74"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image.png",
            "caption": "Ads Screenshot 75"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_01_27t16_27_35_795z-1_-_copy.png",
            "caption": "Ads Screenshot 76"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_01_27t16_27_35_795z-1.png",
            "caption": "Ads Screenshot 77"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_03_31t01_57_55_512z.png",
            "caption": "Ads Screenshot 78"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_04_17t13_35_42_685z.png",
            "caption": "Ads Screenshot 79"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_04_21t15_03_06_662z.png",
            "caption": "Ads Screenshot 80"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_04_23t04_56_53_115z.png",
            "caption": "Ads Screenshot 81"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_07_23t14_16_59_972z.png",
            "caption": "Ads Screenshot 82"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_08_09t12_43_47_859z.png",
            "caption": "Ads Screenshot 83"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_08_25t10_22_33_055z.png",
            "caption": "Ads Screenshot 84"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_08_25t10_23_21_503z.png",
            "caption": "Ads Screenshot 85"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_08_25t10_23_42_067z.png",
            "caption": "Ads Screenshot 86"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_08_25t10_24_46_312z_-_copy.png",
            "caption": "Ads Screenshot 87"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_08_25t10_24_46_312z.png",
            "caption": "Ads Screenshot 88"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_08_25t10_25_26_164z_-_copy.png",
            "caption": "Ads Screenshot 89"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_08_25t10_25_26_164z.png",
            "caption": "Ads Screenshot 90"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_08_25t10_26_01_713z_-_copy.png",
            "caption": "Ads Screenshot 91"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/image_2021_08_25t10_26_01_713z.png",
            "caption": "Ads Screenshot 92"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/received_4038725716158720_-_copy.gif",
            "caption": "Ads Screenshot 93"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/received_4038725716158720.gif",
            "caption": "Ads Screenshot 94"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/received_884812345420526_-_copy.jpeg",
            "caption": "Ads Screenshot 95"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/received_884812345420526.jpeg",
            "caption": "Ads Screenshot 96"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/scaling-fb-ads-broad-example-2_1_-_copy.png",
            "caption": "Ads Screenshot 97"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/scaling-fb-ads-broad-example-2_1_.png",
            "caption": "Ads Screenshot 98"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screen_shot_2020_03_31_at_1.38.41_pm_w720_-_copy.png",
            "caption": "Ads Screenshot 99"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/screen_shot_2020_03_31_at_1.38.41_pm_w720.png",
            "caption": "Ads Screenshot 100"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/shopping_ads.png",
            "caption": "Ads Screenshot 101"
          },
          {
            "url": "/portfolio/facebook_and_instagram_ads/verified.jpg",
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
    "image": "/portfolio/amazon_book_promotin/mokeup_book_cover.png",
    "screenshots": [
      {
        "url": "/portfolio/amazon_book_promotin/how_to_reply_and_post_in_twitter.png",
        "caption": "Amazon Book Work 2"
      },
      {
        "url": "/portfolio/amazon_book_promotin/mokeup_book_cover.png",
        "caption": "Amazon Book Work 3"
      },
      {
        "url": "/portfolio/amazon_book_promotin/post_sample1.jpeg",
        "caption": "Amazon Book Work 4"
      },
      {
        "url": "/portfolio/amazon_book_promotin/post_sample2.jpeg",
        "caption": "Amazon Book Work 5"
      },
      {
        "url": "/portfolio/amazon_book_promotin/screenshot_10.png",
        "caption": "Amazon Book Work 6"
      },
      {
        "url": "/portfolio/amazon_book_promotin/screenshot_11.png",
        "caption": "Amazon Book Work 7"
      },
      {
        "url": "/portfolio/amazon_book_promotin/screenshot_12.png",
        "caption": "Amazon Book Work 8"
      },
      {
        "url": "/portfolio/amazon_book_promotin/screenshot_13.png",
        "caption": "Amazon Book Work 9"
      },
      {
        "url": "/portfolio/amazon_book_promotin/screenshot_14.png",
        "caption": "Amazon Book Work 10"
      },
      {
        "url": "/portfolio/amazon_book_promotin/screenshot_15.png",
        "caption": "Amazon Book Work 11"
      },
      {
        "url": "/portfolio/amazon_book_promotin/screenshot_9.png",
        "caption": "Amazon Book Work 12"
      },
      {
        "url": "/portfolio/amazon_book_promotin/work_proof_sheet.png",
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
    "image": "/portfolio/chatbot_create/sample/facebook_chatbot_2.png",
    "folders": [
      {
        "name": "Chatbot Samples",
        "screenshots": [
          {
            "url": "/portfolio/chatbot_create/sample/facebook_chatbot_2.png",
            "caption": "Chatbot Flow 1"
          },
          {
            "url": "/portfolio/chatbot_create/sample/facebook_chatbot_3.png",
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
    "image": "/portfolio/gig_banner/amazon_book_promotion.jpg",
    "screenshots": [
      {
        "url": "/portfolio/gig_banner/1647701341117.jpg",
        "caption": "Gig Banner 1"
      },
      {
        "url": "/portfolio/gig_banner/1647867491607.jpg",
        "caption": "Gig Banner 2"
      },
      {
        "url": "/portfolio/gig_banner/20220326_114643.jpg",
        "caption": "Gig Banner 3"
      },
      {
        "url": "/portfolio/gig_banner/amazon_book_promotion.jpg",
        "caption": "Gig Banner 4"
      },
      {
        "url": "/portfolio/gig_banner/facebook_chatbot.png",
        "caption": "Gig Banner 5"
      },
      {
        "url": "/portfolio/gig_banner/facebook_page_creation.png",
        "caption": "Gig Banner 6"
      },
      {
        "url": "/portfolio/gig_banner/facebook_promotion.png",
        "caption": "Gig Banner 7"
      },
      {
        "url": "/portfolio/gig_banner/facebook_ads_campaign.jpg",
        "caption": "Gig Banner 8"
      },
      {
        "url": "/portfolio/gig_banner/facebook_marketing_gig.jpg",
        "caption": "Gig Banner 9"
      },
      {
        "url": "/portfolio/gig_banner/linkedin_digital_marketing_cover.jpg",
        "caption": "Gig Banner 10"
      },
      {
        "url": "/portfolio/gig_banner/screenshot_2022-03-26-11-30-55-697_com.instagram.android_2.jpg",
        "caption": "Gig Banner 11"
      },
      {
        "url": "/portfolio/gig_banner/screenshot_2022-03-26-11-31-21-877_com.instagram.android_2.jpg",
        "caption": "Gig Banner 12"
      },
      {
        "url": "/portfolio/gig_banner/youtube_promotion.png",
        "caption": "Gig Banner 13"
      },
      {
        "url": "/portfolio/gig_banner/youtube_video_seo_and_organic_promotion.jpg",
        "caption": "Gig Banner 14"
      },
      {
        "url": "/portfolio/gig_banner/youtube_channel_create.png",
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
