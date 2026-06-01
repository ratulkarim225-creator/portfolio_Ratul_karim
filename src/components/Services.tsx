import { ArrowRight, TrendingUp, Group, ChevronRight, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
// @ts-ignore
import youtubeSeoImg from "../assets/images/regenerated_image_1780271278226.png";

export default function Services() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 flex flex-col items-center">
          <p className="font-sans text-sm font-semibold text-[#4285F4] mb-4 tracking-[0.15em] uppercase">
            Welcome to the favfly universe
          </p>
          <h2 className="text-4xl sm:text-[2.75rem] font-extrabold tracking-tight text-black leading-snug">
            We have Solutions for every <br className="hidden sm:block" /> Digital Challenge
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* YouTube SEO Service Card */}
          <div className="lg:col-span-12 bg-[#F1F6FF] py-12 px-8 sm:p-16 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-20">
            <div className="md:w-[45%]">
               <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black mb-6">YouTube SEO Service</h3>
               <p className="text-on-surface-variant text-base sm:text-lg mb-10 leading-relaxed text-gray-700">
                 Grow your channel with our YouTube SEO service. Elevate your video rankings, capture a wider audience, and maximize your views with our data-driven strategies designed exclusively for YouTube. Let your content reach its full potential.
               </p>
               <a href="#" className="inline-flex items-center text-[#4285F4] font-semibold gap-2 text-base group/link hover:underline">
                 View services <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
               </a>
            </div>
            <div className="md:w-[55%] flex justify-center relative mt-8 md:mt-0">
               <div className="relative w-full max-w-lg">
                 {/* Decorative colorful corners */}
                 <div className="absolute -top-4 -left-4 w-8 h-8 border-t-8 border-l-8 border-[#34A853] rounded-tl-sm" />
                 <div className="absolute -top-4 -right-4 w-8 h-8 border-t-8 border-r-8 border-[#EA4335] rounded-tr-sm" />
                 <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-8 border-l-8 border-[#4285F4] rounded-bl-sm" />
                 <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-8 border-r-8 border-[#FBBC05] rounded-br-sm" />
                 
                 <div className="bg-[#0B0C10] rounded-t-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(195,12,12,0.35)] hover:shadow-[0_30px_70px_rgba(50,111,250,0.4)] border border-[#232635] hover:border-[#4285F4]/50 relative w-full group/browser transition-all duration-700">
                    {/* Browser Header */}
                    <div className="bg-[#12131A] px-4 py-3.5 flex items-center gap-3 border-b border-[#232635] backdrop-blur-md">
                      <div className="flex gap-1.5 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-90 transition-all duration-300 hover:scale-110" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-90 transition-all duration-300 hover:scale-110" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-90 transition-all duration-300 hover:scale-110" />
                      </div>
                      <div className="flex-1 bg-[#191B24] rounded-lg flex items-center h-7 px-3 ml-2 border border-[#2C2E42] shadow-inner relative hover:border-[#4285F4]/30 transition-colors">
                         <Youtube size={13} className="text-[#E60023] absolute left-3 animate-pulse" />
                         <span className="text-[10.5px] font-mono tracking-wider font-semibold text-gray-400 mx-auto select-none pl-4">youtube.com/favfly-seo</span>
                      </div>
                    </div>
                    {/* Browser Content */}
                    <div className="relative overflow-hidden w-full bg-black">
                      <img 
                         src={youtubeSeoImg} 
                         alt="YouTube SEO" 
                         className="w-full h-auto object-cover transition-all duration-1000 ease-out group-hover/browser:scale-105 filter brightness-100 group-hover/browser:brightness-[1.12] contrast-[1.05]" 
                      />
                      {/* Futuristic gradient shadow overlays to match the poster's cyber-glow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-blue-600/10 opacity-0 group-hover/browser:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Main Focused Card: Digital Marketing */}
          <div className="lg:col-span-6 bg-[#FCF6EA] p-8 sm:p-14 rounded-[2.5rem] flex flex-col justify-between group transition-all duration-500 hover:shadow-xl border border-transparent hover:border-[#DED5C5]">
            <div>
              <h3 className="text-[35px] font-extrabold text-black mb-10 tracking-tight leading-tight">Digital Marketing</h3>
              <p className="text-on-surface-variant text-[15px] mb-12 leading-relaxed max-w-lg">
                Elevate your online presence with our expert digital marketing solutions. From SEO precision to lucrative social media strategy, we amplify your online presence, making sure your business thrives in the ever-evolving digital landscape.
              </p>
              <a href="#" className="inline-flex items-center text-primary font-bold gap-2 text-lg hover:translate-x-2 transition-transform group/link">
                View services <ChevronRight size={24} className="group-hover/link:translate-x-1" />
              </a>
            </div>

            <div className="mt-20 flex flex-col items-center gap-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-8 bg-white/50 p-5 rounded-3xl backdrop-blur-md self-center border border-white/60 shadow-lg shadow-black/[0.03]"
              >
                {/* Pinterest Logo */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.18, 
                    rotate: -3,
                    filter: "drop-shadow(0 10px 15px rgba(230,0,35,0.35))"
                  }}
                  className="cursor-pointer transition-all duration-300"
                  title="Pinterest Marketing"
                >
                  <svg viewBox="0 0 24 24" className="w-12 h-12">
                    <circle cx="12" cy="12" r="12" fill="#e60023"/>
                    <path d="M12.24 2a10 10 0 0 0-3.56 19.35c-.09-.81-.17-2.07.03-2.96.18-.8 1.18-5.06 1.18-5.06s-.3-.6-.3-1.48c0-1.4.81-2.43 1.82-2.43.86 0 1.27.65 1.27 1.42 0 .86-.55 2.15-.83 3.34-.24 1 .5 1.82 1.49 1.82 1.78 0 3.16-1.88 3.16-4.6 0-2.41-1.74-4.1-4.2-4.1-2.87 0-4.55 2.15-4.55 4.38 0 .87.33 1.8.75 2.3.08.1.1.18.07.28-.08.33-.26 1.07-.3 1.22-.05.21-.16.25-.37.15-1.4-.65-2.27-2.7-2.27-4.34 0-3.53 2.57-6.78 7.4-6.78 3.88 0 6.9 2.76 6.9 6.47 0 3.86-2.43 6.96-5.8 6.96-1.13 0-2.2-.59-2.57-1.28l-.7 2.67c-.25.96-.93 2.16-1.39 2.9A10 10 0 1 0 12.24 2z" fill="#ffffff"/>
                  </svg>
                </motion.div>

                {/* HubSpot Logo */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    delay: 1.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.18, 
                    rotate: 3,
                    filter: "drop-shadow(0 10px 15px rgba(255,122,89,0.35))"
                  }}
                  className="cursor-pointer transition-all duration-300"
                  title="HubSpot CRM & Inbound"
                >
                  <svg viewBox="0 0 24 24" className="w-12 h-12">
                    <rect x="0" y="0" width="24" height="24" rx="6" fill="#ff7a59" />
                    <circle cx="11.5" cy="13.5" r="3.5" fill="none" stroke="#ffffff" strokeWidth="1.8" />
                    <line x1="11.5" y1="10" x2="11.5" y2="5.5" stroke="#ffffff" strokeWidth="1.8" />
                    <circle cx="11.5" cy="4.5" r="1.5" fill="#ffffff" />
                    <line x1="9.3" y1="14.8" x2="5.3" y2="17" stroke="#ffffff" strokeWidth="1.8" />
                    <circle cx="4.3" cy="17.6" r="1.5" fill="#ffffff" />
                    <line x1="9.3" y1="12" x2="5.3" y2="9.8" stroke="#ffffff" strokeWidth="1.8" />
                    <circle cx="4.3" cy="9.2" r="1.5" fill="#ffffff" />
                  </svg>
                </motion.div>

                {/* Google Logo */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    delay: 2.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.18, 
                    rotate: -2,
                    filter: "drop-shadow(0 10px 15px rgba(66,133,244,0.35))"
                  }}
                  className="cursor-pointer transition-all duration-300"
                  title="Google Marketing Platform"
                >
                  <svg viewBox="0 0 24 24" className="w-12 h-12 bg-white p-2 rounded-xl border border-gray-100/50">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </motion.div>
              </motion.div>
              <div className="flex items-center gap-3">
                <div className="grid grid-cols-2 gap-1">
                   <div className="w-3 h-3 bg-[#EB5A3C] rounded-sm" />
                   <div className="w-3 h-3 bg-[#4285F4] rounded-sm" />
                   <div className="w-3 h-3 bg-[#34A853] rounded-sm" />
                   <div className="w-3 h-3 bg-[#FBBC05] rounded-sm" />
                </div>
                <span className="font-display font-black text-2xl tracking-tighter text-black">FavFly</span>
              </div>
            </div>
          </div>

          {/* Right Side Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FeatureCard 
              title="SEO"
              desc="Boost your website's visibility, drive organic traffic, and dominate google rankings."
              bg="bg-[#EEFCFD]"
              linkText="View service"
            />
            <FeatureCard 
              title="SMM"
              desc="From compelling ads to growing your followers organically – we've got it all."
              bg="#F1F4F9" // using custom hex if needed or tailwind
              className="bg-[#F1F4F9]"
              linkText="View service"
            />
            <FeatureCard 
              title="PPC"
              desc="Drive growth with Google Ads – precise advertising, maximum results, and unmatched expertise."
              bg="bg-[#F4FCE3]"
              linkText="Get a quote"
            />
            <FeatureCard 
              title="Multimedia"
              desc="Create a wow moment with our impactful graphics & compelling videos."
              bg="bg-[#F9F1F1]"
              linkText="View services"
            />
          </div>

          {/* Automation Bottom Card */}
          <div className="lg:col-span-12 bg-ink-dark text-on-primary p-10 sm:p-16 rounded-[2.5rem] mt-4 flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden relative group">
             <div className="relative z-10">
                <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full mb-6 inline-block uppercase tracking-widest">Automation</span>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">Scale with systematic efficiency</h3>
                <p className="text-surface-variant/70 text-lg max-w-xl">
                  Amp up your productivity with AI Automation. Save time and boost accuracy up to 99.99%.
                </p>
             </div>
             <button className="bg-white text-ink-dark font-bold px-10 py-4 rounded-xl hover:bg-brand-yellow transition-colors relative z-10 shrink-0">
               Explore Automation
             </button>
             <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 bg-gradient-to-l from-primary/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, bg, className, linkText }: { title: string, desc: string, bg?: string, className?: string, linkText: string }) {
  return (
    <div className={cn(
      "p-8 sm:p-10 rounded-[2rem] flex flex-col justify-between group transition-all duration-300 hover:shadow-lg border border-transparent hover:border-black/5",
      bg,
      className
    )}>
      <div>
        <h3 className="text-[35px] font-extrabold tracking-tight text-black mb-8 leading-[1.2]">{title}</h3>
        <p className="text-on-surface-variant text-[15px] mb-10 leading-relaxed">
          {desc}
        </p>
      </div>
      <a href="#" className="inline-flex items-center text-primary font-bold gap-2 group/link">
        {linkText} <ChevronRight size={20} className="group-hover/link:translate-x-1" />
      </a>
    </div>
  );
}
