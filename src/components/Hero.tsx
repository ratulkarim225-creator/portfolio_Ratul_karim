import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="bg-white pt-12 pb-24 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            <div className="mb-8 font-mono text-[10px] sm:text-xs font-bold text-on-surface-variant/70 uppercase tracking-[0.3em]">
              DHAKA, BANGLADESH — WORKING GLOBALLY
            </div>
            
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold mb-10 leading-[1] text-on-surface">
              I'm your <br />
              partner <br />
              in <span className="font-serif italic text-dark-green-brand font-medium">Growth</span>
            </h1>

            <p className="text-lg sm:text-xl text-on-surface-variant/80 mb-12 max-w-xl leading-relaxed text-justify">
              Driving exponential growth for businesses in Bangladesh and across the globe. Specialized in YouTube SEO, Google Ads, Facebook Ads, SEO, TikTok Ads, and data-driven marketing strategies that deliver measurable impact
            </p>

            <div className="flex flex-wrap items-center gap-8 sm:gap-10">
              <button className="bg-dark-green-brand text-white font-bold px-4 py-2 pr-6 rounded-full flex items-center gap-3 hover:opacity-95 transition-all shadow-xl active:scale-95 group">
                <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden bg-white/10 p-0.5">
                   <img 
                    src="/r1.png"
                    alt="Founder"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                   />
                </div>
                <span className="text-xs sm:text-sm tracking-wider uppercase">GET A FREE AUDIT</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="flex items-center gap-3 text-on-surface font-bold text-xs sm:text-sm tracking-wider uppercase hover:text-primary transition-colors group">
                WATCH OUR STORY
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] sm:aspect-square rounded-[2rem] overflow-hidden bg-brand-yellow relative shadow-2xl">
              <img 
                alt="Ratul Karim" 
                className="w-full h-full object-cover object-center translate-y-8" 
                src="/r1.png" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Background elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
          </motion.div>
        </div>

        <div className="mt-24">
          <FeaturedIn />
        </div>
      </div>
    </section>
  );
}

function FeaturedIn() {
  const brands = [
    { name: "Mohona TV", src: "/logos/mohona.png" },
    { name: "BetaList", src: "/logos/betalist.png" },
    { name: "Communi", src: "/logos/communi.png" },
    { name: "AdStorm", src: "/logos/adstorm.png" },
    { name: "SuperAffiliatesAI", src: "/logos/superaffiliatesai.png" },
    { name: "VydoraAI", src: "/logos/vydoraai.png" },
    { name: "KidzStudio", src: "/logos/kidzstudio.png" },
    { name: "ReelApps", src: "/logos/reelapps.png" },
    { name: "Biogen", src: "/logos/biogen.png" },
  ];

  // Increase the number of loops for a longer track
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="bg-surface-container-low/50 py-8 border-y border-outline-variant/30 flex items-center overflow-hidden">
      <div className="flex items-center gap-3 px-10 border-r border-outline-variant/50 flex-shrink-0 bg-surface-container-low z-20 shadow-[20px_0_40px_-20px_rgba(0,0,0,0.05)]">
        <span className="text-2xl">📢</span>
        <span className="font-serif italic font-bold text-on-surface text-xl whitespace-nowrap">Work with</span>
      </div>
      
      <div className="relative flex-1 overflow-hidden">
        <motion.div 
          className="flex items-center gap-20 px-10 transition-transform duration-0 ease-linear"
          animate={{ x: [0, -3500] }}
          transition={{ 
            x: {
              repeat: Infinity,
              duration: 50,
              ease: "linear"
            }
          }}
        >
          {duplicatedBrands.map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="flex-shrink-0 flex items-center justify-center w-36 h-12">
              <img 
                alt={brand.name} 
                className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110" 
                src={brand.src}
              />
            </div>
          ))}
        </motion.div>
        
        {/* Fading Mask */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-low to-transparent z-10" />
      </div>
    </div>
  );
}
