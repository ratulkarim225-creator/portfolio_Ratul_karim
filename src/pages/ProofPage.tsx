import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Folder, Image as ImageIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
// @ts-ignore
import amazonBookRegeneratedImage from "../assets/images/regenerated_image_1780403022717.webp";

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
            "caption": "youtube channel create_2"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Channel Creation/youtube channel create_3.png",
            "caption": "youtube channel create_3"
          }
        ]
      },
      {
        "name": "Monetization",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/After finished work channel analytics.png",
            "caption": "After finished work channel analytics"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-16-55.jpg",
            "caption": "photo_2023-02-03_18-16-55"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-16-58.jpg",
            "caption": "photo_2023-02-03_18-16-58"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-17-10.jpg",
            "caption": "photo_2023-02-03_18-17-10"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-17-13.jpg",
            "caption": "photo_2023-02-03_18-17-13"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-17-26.jpg",
            "caption": "photo_2023-02-03_18-17-26"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/photo_2023-02-03_18-17-29.jpg",
            "caption": "photo_2023-02-03_18-17-29"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Monetization/YouTube Promotion_3.png",
            "caption": "YouTube Promotion_3"
          }
        ]
      },
      {
        "name": "Video Promotion",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video Promotion/Video Promotion Sheet.png",
            "caption": "Video Promotion Sheet"
          }
        ]
      },
      {
        "name": "Video SEO",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-16-42.jpg",
            "caption": "photo_2023-02-03_18-16-42"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-16-50.jpg",
            "caption": "photo_2023-02-03_18-16-50"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-16-53.jpg",
            "caption": "photo_2023-02-03_18-16-53"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-17-00.jpg",
            "caption": "photo_2023-02-03_18-17-00"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-17-03.jpg",
            "caption": "photo_2023-02-03_18-17-03"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-17-05.jpg",
            "caption": "photo_2023-02-03_18-17-05"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/photo_2023-02-03_18-17-08.jpg",
            "caption": "photo_2023-02-03_18-17-08"
          },
          {
            "url": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/YouTube Promotion_2.png",
            "caption": "YouTube Promotion_2"
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
    "image": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_3.png",
    "folders": [
      {
        "name": "Campaign Dashboards",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_3.png",
            "caption": "Dashboard Overview"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_14.png",
            "caption": "Active Campaigns"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/shopping ads.png",
            "caption": "Shopping Ads"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/verified.jpg",
            "caption": "Verified Page"
          }
        ]
      },
      {
        "name": "Ad Results",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_2.png",
            "caption": "Ad Result Breakdown"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_18.jpg",
            "caption": "Campaign Results Overview"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_22.jpg",
            "caption": "Traffic Results"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_23.jpg",
            "caption": "Engagement Results"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_38.jpg",
            "caption": "Conversion Rates"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_39.jpg",
            "caption": "ROAS Breakdown"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_42.jpg",
            "caption": "Sales Performance"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_5.jpg",
            "caption": "Impressions & Reach"
          }
        ]
      },
      {
        "name": "Budget & Spend Proof",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/VBM Spending.png",
            "caption": "Budget Breakdown"
          },
          {
            "url": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screen-Shot-2019-03-19-at-3.34.13-PM-1-1024x493.png",
            "caption": "Scaling Campaigns"
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
      "Targeted Reach",
      "Sales Boost",
      "Organic Engagement"
    ],
    "image": amazonBookRegeneratedImage,
    "folders": [
      {
        "name": "Book Covers & Mockups",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Before Book Cover.webp",
            "caption": "Before Book Cover"
          },
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Mokeup Book Cover.png",
            "caption": "Mockup Book Cover"
          },
          {
            "url": amazonBookRegeneratedImage,
            "caption": "Book Promotion Overview"
          }
        ]
      },
      {
        "name": "Social Media Posts",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/How to reply and post in twitter.png",
            "caption": "Twitter Post & Reply Strategy"
          },
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Post Sample1.jpeg",
            "caption": "Social Post Sample 1"
          },
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Post Sample2.jpeg",
            "caption": "Social Post Sample 2"
          }
        ]
      },
      {
        "name": "Work Proof & Analytics",
        "screenshots": [
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Work Proof Sheet.png",
            "caption": "Work Proof Sheet"
          },
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_9.png",
            "caption": "Promotion Proof 9"
          },
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_10.png",
            "caption": "Promotion Proof 10"
          },
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_11.png",
            "caption": "Promotion Proof 11"
          },
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_12.png",
            "caption": "Promotion Proof 12"
          },
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_13.png",
            "caption": "Promotion Proof 13"
          },
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_14.png",
            "caption": "Promotion Proof 14"
          },
          {
            "url": "/Digital Marketing All Portfolio/Amazon Book Promotin/Screenshot_15.png",
            "caption": "Promotion Proof 15"
          }
        ]
      }
    ]
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
    "image": "/Digital Marketing All Portfolio/Gig banner/Facebook Chatbot.png",
    "screenshots": [
      {
        "url": "/Digital Marketing All Portfolio/Gig banner/Facebook Chatbot.png",
        "caption": "Chatbot Marketing Overview"
      },
      {
        "url": "/Digital Marketing All Portfolio/Chatbot Create/Sample/Facebook chatbot_2.png",
        "caption": "Facebook Chatbot 2"
      },
      {
        "url": "/Digital Marketing All Portfolio/Chatbot Create/Sample/Facebook chatbot_3.png",
        "caption": "Facebook Chatbot 3"
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
                  
                  {/* Image Presentation */}
                  <div className="w-full mx-auto rounded-2xl overflow-hidden bg-white shadow-xl border border-outline-variant/50 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    <img 
                      src={encodeURI(screenshot.url)} 
                      alt={screenshot.caption} 
                      className="w-full h-auto"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
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
