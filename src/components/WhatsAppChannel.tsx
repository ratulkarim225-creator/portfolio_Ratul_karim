import { ArrowRight, ChevronLeft, Bell, MoreHorizontal } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppChannel() {
  return (
    <section
      className="py-16 sm:py-24 bg-[#F0F4FC] overflow-hidden"
      id="whatsapp"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#FFFBF4] rounded-[2.5rem] border border-[#F3EFE6] px-8 sm:px-16 lg:px-20 pt-16 lg:pt-20 pb-0 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8 shadow-xl relative overflow-hidden"
        >
          {/* WhatsApp Doodle Pattern Background */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'url("https://web.whatsapp.com/img/bg-chat-tile-light_04fcacde539c58cca6745483d4858c52.png")',
            }}
          />

          <div className="flex-1 relative z-10 text-balance pb-16 lg:pb-20 lg:pr-10 w-full">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-[#075E45]">
              Join Our WhatsApp Channel
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl font-light">
              Join our{" "}
              <span className="font-semibold text-black">privacy friendly</span>{" "}
              whatsapp channel and stay up to date with the latest news,
              updates, and exclusive offers. Join our community today!
            </p>
            <a
              className="inline-flex items-center text-[#075E45] font-medium gap-2 text-lg group cursor-pointer hover:underline"
              href="https://wa.me/message/TJGIJATFT7XNG1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Free Access{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className="relative z-10 w-full max-w-[280px] lg:max-w-[300px] flex-shrink-0 self-end">
            {/* Phone Mockup Frame */}
            <div className="bg-black p-[8px] rounded-t-[2.5rem] shadow-2xl relative w-full h-[470px] overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-[22px] bg-black rounded-full z-20 flex items-center justify-between px-2">
                <div className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
                <div className="w-2 h-2 rounded-full bg-[#1A1A1A]" />
              </div>

              {/* Screen Content */}
              <div className="bg-white h-full w-full rounded-t-[2rem] overflow-hidden flex flex-col relative pt-[26px]">
                {/* WhatsApp Channel Header */}
                <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-gray-100 shadow-sm z-10">
                  <div className="flex items-center gap-2">
                    <ChevronLeft
                      size={20}
                      strokeWidth={2.5}
                      className="text-gray-600"
                    />
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#fca311] flex items-center justify-center overflow-hidden">
                        <img
                          src="/r1.png"
                          alt="Profile"
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold leading-tight">
                          Ratul Karim
                        </span>
                        <span className="text-[10px] text-gray-500 leading-tight">
                          101 followers
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Bell size={18} strokeWidth={2} />
                    <MoreHorizontal size={20} strokeWidth={2.5} />
                  </div>
                </div>

                {/* WhatsApp Channel Chat Area */}
                <div className="flex-1 bg-[#EFE6DD] relative p-3 overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden">
                  <div
                    className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
                    style={{
                      backgroundImage:
                        'url("https://web.whatsapp.com/img/bg-chat-tile-light_04fcacde539c58cca6745483d4858c52.png")',
                      backgroundSize: "150px",
                    }}
                  />

                  {/* Chat Bubble */}
                  <div className="bg-white rounded-xl shadow-sm p-2 pb-1 relative z-10 text-xs">
                    <img
                      className="w-full aspect-video object-cover object-[center_30%] rounded-lg mb-2 border border-black/5"
                      src="/photo_2026-05-29_10-33-46.jpg"
                      alt="Business Post"
                      referrerPolicy="no-referrer"
                    />
                    <p className="font-semibold text-gray-800 mb-1 leading-snug">
                      🚀 Introducing Ratul Karim - Your Ultimate Business Growth
                      Hub! 💼✨
                    </p>
                    <p className="text-gray-600 leading-snug mb-2">
                      Join our exclusive WhatsApp channel to unlock expert
                      insights on entrepreneurship, automation, team building,
                      sales mastery, marketing strategies, and financial
                      success. Learn, network, and take your dhanda to the next
                      level - from Dhanda to a thriving Business!
                    </p>
                    <div className="flex justify-between items-end mt-1">
                      <div className="flex gap-1 bg-gray-50 rounded-full px-2 py-1 items-center border border-gray-100 shadow-sm">
                        <span className="text-[10px]">👍❤️ 7</span>
                        <span className="text-[10px] pl-1 border-l border-gray-200">
                          ↪
                        </span>
                      </div>
                      <span className="text-[9px] text-gray-400">5:20 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
