import { ZoomIn, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

export default function Results() {
  const works = [
  {
    "id": "youtube-portfolio",
    "category": "YouTube Channel Management",
    "title": "From Channel Creation to Monetization & SEO",
    "desc": "Complete YouTube channel management including creation, video promotion, SEO optimization, and hitting monetization metrics.",
    "image": "/portfolio/youtube_channel/video_seo/youtube_promotion_2.png"
  },
  {
    "id": "google-ads",
    "category": "Google Ads",
    "title": "High-Intent Search Campaigns",
    "desc": "Strategic keyword bidding and structured ad copy that drastically lowered CPC while increasing high-intent leads.",
    "image": "/portfolio/google_ads/google_ads.png"
  },
  {
    "id": "facebook-portfolio",
    "category": "Facebook Ecosystem",
    "title": "Ads, Page & Promotion",
    "desc": "Comprehensive Facebook marketing including page setup, organic promotion, and high-ROI ad campaigns.",
    "image": "/portfolio/facebook_and_instagram_ads/screenshot_18.jpg"
  },
  {
    "id": "amazon-book",
    "category": "Amazon Book Promotion",
    "title": "Viral Book Marketing",
    "desc": "Promoted Amazon Kindle books using targeted social media campaigns, mockups, and influencer outreach.",
    "image": "/portfolio/amazon_book_promotin/mokeup_book_cover.png"
  },
  {
    "id": "facebook-chatbot",
    "category": "Facebook Chatbot",
    "title": "Automated Messaging Flows",
    "desc": "Developed engaging chatbots for Facebook pages to automate lead generation and customer support.",
    "image": "/portfolio/chatbot_create/sample/facebook_chatbot_2.png"
  },
  {
    "id": "gig-banners",
    "category": "Graphic Design",
    "title": "Professional Service Banners",
    "desc": "Designed highly-converting professional gig banners across multiple digital marketing service categories.",
    "image": "/portfolio/gig_banner/amazon_book_promotion.jpg"
  }
];

  return (
    <section className="py-16 sm:py-24 bg-surface-sage/20 relative" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-mono text-xs font-bold text-primary mb-3 tracking-widest uppercase">My Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Working Proof & Success Stories</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Click on any project to view detailed screenshots and proof of our successful campaigns. You can easily update these thumbnail images later.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10">
          {works.map((work) => (
             <Link to={`/proof/${work.id}`} key={work.id} id={work.id} className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-outline-variant/30 group hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden isolate">
               
               {/* Background Glow Effect */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

               <div className="relative w-full aspect-[4/3] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden mb-5 bg-surface-container-lowest border border-outline-variant/10 shadow-inner">
                 <img src={work.image} alt={work.title} referrerPolicy="no-referrer" className="w-full h-full object-cover object-top filter contrast-[0.95] group-hover:contrast-100 transition-all duration-700 ease-out group-hover:scale-105" loading="lazy" />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                     <span className="inline-flex items-center gap-2 bg-white/95 text-black px-4 py-2 rounded-full font-bold text-sm w-fit shadow-lg shadow-black/20">
                       <ZoomIn size={16} className="text-primary" /> View Full Gallery
                     </span>
                   </div>
                 </div>
               </div>
               
               <div className="px-3 pb-3 flex flex-col flex-1 justify-between z-10">
                 <div>
                   <p className="text-xs font-bold text-primary mb-2 tracking-widest uppercase">{work.category}</p>
                   <h3 className="text-xl sm:text-2xl font-extrabold mb-3 leading-tight text-gray-900 group-hover:text-primary transition-colors">{work.title}</h3>
                   <p className="text-gray-600 line-clamp-2 text-sm sm:text-base leading-relaxed">{work.desc}</p>
                 </div>
                 <div className="flex items-center text-primary font-bold text-sm mt-6 group/btn w-fit transition-colors">
                   View Case Study
                   <ArrowUpRight size={16} className="ml-1 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                 </div>
               </div>
             </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
