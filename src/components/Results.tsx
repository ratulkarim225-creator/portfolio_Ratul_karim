import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

export default function Results() {
  const works = [
    {
        "id": "youtube-portfolio",
        "category": "YouTube Channel Management",
        "title": "From Channel Creation to Monetization & SEO",
        "desc": "Complete YouTube channel management including creation, video promotion, SEO optimization, and hitting monetization metrics.",
        "image": "/Digital Marketing All Portfolio/Youtube Channel/Video SEO/YouTube Promotion_2.png"
    },
    {
        "id": "google-ads",
        "category": "Google Ads",
        "title": "High-Intent Search Campaigns",
        "desc": "Strategic keyword bidding and structured ad copy that drastically lowered CPC while increasing high-intent leads.",
        "image": "/Digital Marketing All Portfolio/Google Ads/Google ads.png"
    },
    {
        "id": "facebook-ads",
        "category": "Facebook Ecosystem",
        "title": "Ads, Page & Promotion",
        "desc": "Comprehensive Facebook marketing including page setup, organic promotion, and high-ROI ad campaigns.",
        "image": "/Digital Marketing All Portfolio/Facebook and Instagram Ads/Screenshot_3.png"
    },
    {
        "id": "amazon-book",
        "category": "Amazon Book Promotion",
        "title": "Viral Book Marketing",
        "desc": "Promoted Amazon Kindle books using targeted social media campaigns, mockups, and influencer outreach.",
        "image": "/Digital Marketing All Portfolio/Amazon Book Promotin/amazon_book.jpg"
    },
    {
        "id": "facebook-chatbot",
        "category": "Facebook Chatbot",
        "title": "Automated Messaging Flows",
        "desc": "Developed engaging chatbots for Facebook pages to automate lead generation and customer support.",
        "image": "/Digital Marketing All Portfolio/Gig banner/Facebook Chatbot.png"
    },
    {
        "id": "gig-banners",
        "category": "Graphic Design",
        "title": "Professional Service Banners",
        "desc": "Designed highly-converting professional gig banners across multiple digital marketing service categories.",
        "image": "/Digital Marketing All Portfolio/Gig banner/YouTube video SEO and organic promotion.jpg"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-8">
          {works.map((work) => (
             <Link to={`/proof/${work.id}`} key={work.id} className="bg-white rounded-[2rem] p-5 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group border border-gray-100/50">
               <div className="w-full aspect-[1.4/1] rounded-[1.5rem] overflow-hidden mb-6 bg-surface-container-low border border-outline-variant/5">
                 <img src={encodeURI(work.image)} alt={work.title} referrerPolicy="no-referrer" className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" loading="lazy" />
               </div>
               
               <div className="flex flex-col flex-1 px-1">
                 <p className="text-[10px] sm:text-[11px] font-bold text-primary mb-2.5 tracking-widest uppercase">{work.category}</p>
                 <h3 className="text-[1.1rem] sm:text-xl font-extrabold mb-3 leading-snug text-gray-900">{work.title}</h3>
                 <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed mb-6 flex-1 line-clamp-3">{work.desc}</p>
                 
                 <div className="flex items-center text-primary font-bold text-[13px] sm:text-sm group/btn w-fit mt-auto shrink-0 mb-1">
                   View Case Study
                   <ArrowUpRight size={15} className="ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                 </div>
               </div>
             </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
