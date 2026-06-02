import { useState, useMemo } from "react";
import { ArrowUpRight, Filter, Maximize2, X, ChevronLeft, ChevronRight, Search, Image as ImageIcon, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
// @ts-ignore
import amazonBookRegeneratedImage from "../assets/images/regenerated_image_1780403022717.webp";
// @ts-ignore
import youtubeRegeneratedImage from "../assets/images/regenerated_image_1780407515901.jpg";
import { allScreenshots, screenshotCategories, ScreenshotItem } from "../data/screenshotsData";

export default function Results() {
  const [activeTab, setActiveTab] = useState<"cases" | "gallery">("cases");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const works = [
    {
      "id": "youtube-portfolio",
      "category": "YouTube Channel Management",
      "title": "From Channel Creation to Monetization & SEO",
      "desc": "Complete YouTube channel management including creation, video promotion, SEO optimization, and hitting monetization metrics.",
      "image": youtubeRegeneratedImage
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
      "image": amazonBookRegeneratedImage
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

  // Filter gallery items
  const filteredGallery = useMemo(() => {
    return allScreenshots.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch = item.caption.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (item.subcategory && item.subcategory.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Lightbox navigation helpers
  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 sm:py-24 bg-surface-sage/20 relative" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-mono text-xs font-bold text-primary mb-3 tracking-widest uppercase">My Live Work Proof</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-gray-900">Working Proof & Success Stories</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg mb-8">
            Browse structured strategic summaries, or dig directly into our complete folders of screenshots showing verified dashboards and client feedback.
          </p>

          {/* Toggle Tab Switcher */}
          <div className="inline-flex p-1.5 bg-gray-100 rounded-[2rem] border border-outline-variant/30 shadow-inner max-w-lg mb-8">
            <button
              onClick={() => setActiveTab("cases")}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2",
                activeTab === "cases"
                  ? "bg-white text-primary shadow-sm scale-100"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              <ExternalLink size={16} />
              Featured Campaigns
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2",
                activeTab === "gallery"
                  ? "bg-white text-primary shadow-sm scale-100"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              <ImageIcon size={16} />
              Interactive Proof Gallery
            </button>
          </div>
        </div>

        {/* TAB 1: Featured Case Studies Link Cards */}
        {activeTab === "cases" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mt-4 animate-fade-in">
            {works.map((work) => (
              <Link
                to={`/proof/${work.id}`}
                key={work.id}
                className="bg-white rounded-[2rem] p-5 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group border border-gray-100/50"
              >
                <div className="w-full aspect-[1.4/1] rounded-[1.5rem] overflow-hidden mb-6 bg-surface-container-low border border-outline-variant/5">
                  <img
                    src={encodeURI(work.image)}
                    alt={work.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col flex-1 px-1">
                  <p className="text-[10px] sm:text-[11px] font-bold text-primary mb-2.5 tracking-widest uppercase">
                    {work.category}
                  </p>
                  <h3 className="text-[1.1rem] sm:text-xl font-extrabold mb-3 leading-snug text-gray-900">
                    {work.title}
                  </h3>
                  <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {work.desc}
                  </p>

                  <div className="flex items-center text-primary font-bold text-[13px] sm:text-sm group/btn w-fit mt-auto shrink-0 mb-1">
                    View Entire Folder File Structure
                    <ArrowUpRight size={15} className="ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* TAB 2: Interactive Screenshots Proof Gallery */}
        {activeTab === "gallery" && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Filter controls panel */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-outline-variant/30 flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Dropdown / Tag filter scroll */}
              <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
                <span className="text-xs font-bold text-gray-400 uppercase font-mono mr-2 flex items-center gap-1.5 hidden lg:inline-flex">
                  <Filter size={14} /> Filter:
                </span>
                <div className="flex flex-wrap gap-2">
                  {screenshotCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        "px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300",
                        selectedCategory === category.id
                          ? "bg-primary text-white shadow-sm"
                          : "bg-surface-container hover:bg-gray-100 text-gray-600 font-medium"
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-64">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search screenshots..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface-container pl-10 pr-4 py-2 text-sm rounded-full border border-transparent focus:bg-white focus:border-primary/20 focus:outline-none transition-all placeholder:text-gray-400 font-medium text-gray-800"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Screenshots grid & thumbnail display */}
            {filteredGallery.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-4">
                {filteredGallery.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setLightboxIndex(index)}
                    className="group bg-white rounded-[1.5rem] overflow-hidden shadow-sm border border-outline-variant/30 hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col text-left cursor-zoom-in"
                  >
                    {/* Thumbnail box */}
                    <div className="w-full aspect-video bg-surface-container-low border-b border-outline-variant/10 relative overflow-hidden flex items-center justify-center">
                      <img
                        src={encodeURI(item.url)}
                        alt={item.caption}
                        referrerPolicy="no-referrer"
                        className="max-full max-h-full object-contain p-1 group-hover:scale-[1.04] transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white/90 p-2 rounded-full shadow text-primary">
                          <Maximize2 size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Metadata summary info below thumbnail */}
                    <div className="p-3.5 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-bold text-primary font-mono bg-primary/5 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {item.subcategory || item.category}
                        </span>
                      </div>
                      <p className="text-gray-700 font-extrabold text-xs leading-snug line-clamp-2 h-8">
                        {item.caption}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-[2.5rem] border border-dashed border-outline-variant/50 max-w-xl mx-auto">
                <ImageIcon className="text-gray-300 mx-auto mb-4" size={48} />
                <h3 className="font-bold text-lg text-black mb-2">No Screenshots Found</h3>
                <p className="text-on-surface-variant text-sm">
                  We couldn't find any screenshots matching your keyword search. Try searching for "YouTube", "ROAS", "Feedback" or select another category.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Lightbox Modal Window */}
        {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
          <div
            className="fixed inset-0 z-[1000] bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-md animate-fade-in"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between text-white w-full max-w-7xl mx-auto relative z-10 py-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-[#81A8A2] uppercase">
                  {filteredGallery[lightboxIndex].category.toUpperCase()} / {filteredGallery[lightboxIndex].subcategory || "Proof"}
                </span>
                <span className="text-sm font-bold max-w-xl hidden sm:block">
                  {filteredGallery[lightboxIndex].caption}
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono font-bold bg-white/10 px-3.5 py-1.5 rounded-full text-gray-300">
                  {lightboxIndex + 1} of {filteredGallery.length}
                </span>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white cursor-pointer"
                  title="Close (Esc)"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Interactive Zoom Scene */}
            <div className="flex-1 flex items-center justify-center relative w-full my-4">
              {/* Left Action Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-black/40 border border-white/5 hover:bg-black/80 hover:scale-105 text-white transition-all cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Image Renderer */}
              <div
                className="max-w-5xl max-h-[75vh] w-full flex items-center justify-center p-2 relative text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={encodeURI(filteredGallery[lightboxIndex].url)}
                  alt={filteredGallery[lightboxIndex].caption}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl select-none"
                  loading="eager"
                />
              </div>

              {/* Right Action Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-black/40 border border-white/5 hover:bg-black/80 hover:scale-105 text-white transition-all cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Panel Description (on mobile) & Navigation Thumbnails */}
            <div className="w-full max-w-5xl mx-auto py-2 flex flex-col items-center gap-3 relative z-10 text-center">
              <span className="text-xs text-gray-300 font-semibold sm:hidden px-4">
                {filteredGallery[lightboxIndex].caption}
              </span>

              {/* Dynamic scrollable thumbnail indexer strip */}
              <div 
                className="flex gap-2 overflow-x-auto max-w-full py-1.5 px-4 scrollbar-thin scrollbar-thumb-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredGallery.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className={cn(
                      "w-12 h-9 rounded bg-white/5 overflow-hidden flex-shrink-0 border-2 transition-all duration-200",
                      lightboxIndex === idx ? "border-primary scale-110" : "border-transparent opacity-40 hover:opacity-100"
                    )}
                  >
                    <img src={encodeURI(thumb.url)} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}

