import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Services", href: isHome ? "#services" : "/#services" },
    { name: "AI Strategy", href: isHome ? "#strategy" : "/#strategy" },
    { name: "Journey", href: isHome ? "#journey" : "/#journey" },
    { 
      name: "Working Proofs", 
      href: isHome ? "#results" : "/#results",
      subItems: [
        { name: "YouTube Channel Management", href: "/proof/youtube-portfolio" },
        { name: "Google Ads", href: "/proof/google-ads" },
        { name: "Facebook Ecosystem", href: "/proof/facebook-portfolio" },
        { name: "Amazon Book Promotion", href: "/proof/amazon-book" },
        { name: "Facebook Chatbot", href: "/proof/facebook-chatbot" },
        { name: "Graphic Design", href: "/proof/gig-banners" }
      ]
    },
    { name: "Blog", href: isHome ? "#blog" : "/#blog" },
  ];

  return (
    <header id="navbar" className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <Link to="/" className="font-display text-2xl font-extrabold text-primary tracking-tight">
          Ratul Karim
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            link.subItems ? (
              <div key={link.name} className="relative group">
                <a href={link.href} className="text-on-surface-variant hover:text-primary transition-colors font-medium text-sm flex items-center gap-1">
                  {link.name}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white border border-outline-variant rounded-2xl shadow-xl p-2 flex flex-col gap-1 relative text-center">
                     <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-outline-variant rotate-45"></div>
                    {link.subItems.map(subItem => (
                      <Link key={subItem.name} to={subItem.href} className="relative z-10 px-4 py-2.5 text-sm font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-xl transition-colors">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:block bg-dark-green-brand text-white font-bold px-6 py-2 rounded-full hover:opacity-90 transition-all text-xs tracking-wider uppercase">
            Get a Quote
          </Link>
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-outline-variant overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.subItems ? (
                    <>
                      <a
                        href={link.href}
                        className="text-on-surface-variant hover:text-primary transition-colors font-medium text-lg py-2 border-b border-outline-variant/30 flex items-center justify-between"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                      <div className="flex flex-col pl-4 mt-2 gap-2 border-b border-outline-variant/30 pb-2">
                        {link.subItems.map(subItem => (
                          <Link key={subItem.name} to={subItem.href} className="text-gray-600 hover:text-primary text-base py-1" onClick={() => setIsOpen(false)}>
                             {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="text-on-surface-variant hover:text-primary transition-colors font-medium text-lg py-2 border-b border-outline-variant/30"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-dark-green-brand text-white font-bold px-6 py-4 rounded-full hover:opacity-90 transition-all text-center mt-4 text-sm tracking-wider uppercase block">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
