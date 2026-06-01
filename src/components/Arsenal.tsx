import {
  BookOpen,
  Server,
  Youtube,
  Instagram,
  Search,
  Scissors,
  Linkedin,
  Figma,
  Share2,
  Lightbulb,
  UserCheck,
  Cpu,
  Target,
  Megaphone,
} from "lucide-react";

export default function Arsenal() {
  const tools = [
    { name: "Notion", icon: BookOpen },
    { name: "Hostinger", icon: Server },
    { name: "YouTube", icon: Youtube },
    { name: "Instagram", icon: Instagram },
    { name: "Google Search Console", icon: Search },
    { name: "CapCut", icon: Scissors },
    { name: "LinkedIn", icon: Linkedin },
    { name: "Figma", icon: Figma },
  ];

  const concepts = [
    { name: "Marketing Projects", icon: Share2 },
    { name: "Creative Campaigns", icon: Lightbulb },
    { name: "Personal Branding", icon: UserCheck },
    { name: "AI Tools", icon: Cpu },
    { name: "SEO Practice", icon: Search },
    { name: "Content Strategy", icon: Target },
    { name: "Digital Branding", icon: Megaphone },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white flex flex-col items-center justify-center text-center">
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-surface-container-low"
        style={{ opacity: 0.8 }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-primary tracking-[0.2em] font-bold text-xs sm:text-sm uppercase mb-4">
          My Arsenal
        </h4>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-8 text-on-surface">
          Tools, Platforms &amp;{" "}
          <span className="text-primary">Future Collaborations</span>
        </h2>

        <div className="inline-block bg-white border border-outline-variant rounded-2xl px-6 py-4 mb-20 shadow-xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-24 h-[4px] bg-primary rounded-full" />
          <p className="text-on-surface-variant text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Technologies, platforms, and industries I'm learning and exploring
            as part of my digital marketing journey.
          </p>
        </div>

        {/* Scrolling rows container */}
        <div className="w-full relative flex flex-col gap-6 overflow-hidden mask-gradient-x">
          <style>{`
  .mask-gradient-x {
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  }
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 12px)); } /* -50% of the total width minus padding */
  }
  .animate-marquee {
    animation: marquee 40s linear infinite;
  }
  .animate-marquee-reverse {
    animation: marquee 45s linear infinite reverse;
  }
`}</style>

          {/* Row 1 */}
          <div className="flex gap-6 w-max animate-marquee">
            {[...tools, ...tools, ...tools, ...tools].map((item, index) => (
              <div
                key={`tool-${index}`}
                className="flex items-center gap-3 bg-surface border border-outline-variant rounded-full px-6 py-3 shrink-0 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-default"
              >
                <item.icon className="text-primary w-5 h-5 shrink-0" />
                <span className="text-on-surface font-bold whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-6 w-max animate-marquee-reverse">
            {[...concepts, ...concepts, ...concepts, ...concepts].map(
              (item, index) => (
                <div
                  key={`concept-${index}`}
                  className="flex items-center gap-3 bg-surface border border-outline-variant rounded-full px-6 py-3 shrink-0 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-default"
                >
                  <item.icon className="text-primary w-5 h-5 shrink-0" />
                  <span className="text-on-surface font-bold whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
