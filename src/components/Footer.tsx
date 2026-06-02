import { Globe, Mail, Phone, ArrowUpRight, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const sections = [
    {
      title: "Solutions",
      links: [
        { name: "Digital Marketing", href: "/#services" },
        { name: "SEO Services", href: "/#services" },
        { name: "Social Media", href: "/#services" },
        { name: "AI Automation", href: "/#strategy" }
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Me", href: "/#journey" },
        { name: "Working Proof", href: "/#results" },
        { name: "WhatsApp Channel", href: "/#whatsapp" },
        { name: "Blog", href: "/#blog" }
      ],
    },
  ];

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-3xl font-black text-primary mb-8 inline-block tracking-tighter">
              Ratul Karim
            </Link>
            <p className="text-on-surface-variant text-base leading-relaxed mb-10 max-w-xs">
              Transforming digital presence through systematic automation and data-led marketing strategies.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://www.facebook.com/ratulrs.karim/" icon={<Facebook size={20} />} />
              <SocialLink href="https://www.linkedin.com/in/ratul-karim-%F0%9F%A5%87-b59408200/" icon={<Linkedin size={20} />} />
              <SocialLink href="#" icon={<Globe size={20} />} />
              <SocialLink href="mailto:ratulkarim225@gmail.com" icon={<Mail size={20} />} />
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-mono text-xs font-bold text-primary mb-8 uppercase tracking-[0.2em]">{section.title}</h4>
              <ul className="space-y-5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-on-surface-variant hover:text-primary transition-all flex items-center gap-2 group text-base font-medium">
                      {link.name}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-mono text-xs font-bold text-primary mb-8 uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-6">
              <li>
                <a href="mailto:ratulkarim225@gmail.com" className="flex items-center gap-4 text-on-surface-variant group cursor-pointer hover:text-primary transition-colors">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant group-hover:bg-primary group-hover:text-on-primary transition-all">
                    <Mail size={18} />
                  </div>
                  <span className="font-semibold">ratulkarim225@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:01858536589" className="flex items-center gap-4 text-on-surface-variant group cursor-pointer hover:text-primary transition-colors">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-container-low flex items-center justify-center text-primary border border-outline-variant group-hover:bg-primary group-hover:text-on-primary transition-all">
                    <Phone size={18} />
                  </div>
                  <span className="font-semibold">01858536589</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-on-surface-variant/80 font-mono text-[10px] sm:text-xs font-medium uppercase tracking-widest leading-loose max-w-sm md:max-w-none">
            © 2018 - {new Date().getFullYear()} Ratul Karim. All Rights Reserved. Gratefully Supporting Ambitious Founders Worldwide.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-on-surface-variant/80 hover:text-primary transition-colors font-mono text-[10px] font-bold uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-on-surface-variant/80 hover:text-primary transition-colors font-mono text-[10px] font-bold uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-2xl border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-primary/5 transition-all transform hover:-translate-y-1 shadow-sm"
    >
      {icon}
    </a>
  );
}
