import { CheckCircle2, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Hotline() {
  return (
    <section className="py-16 sm:py-24 bg-primary overflow-hidden relative">
      {/* Decorative background intensity */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-container opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-ink-dark rounded-[3rem] p-8 sm:p-16 lg:p-20 flex flex-col lg:flex-row items-center gap-12 sm:gap-20 relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5"
        >
          <div className="flex-1 text-on-primary">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 leading-[1.1] tracking-tight">
              Ratul's Hotline: A place where you get to talk to someone about your marketing goals freely.
            </h2>
            <Link to="/contact" className="inline-flex bg-secondary-container text-on-secondary-container font-black px-10 py-5 rounded-2xl hover:scale-105 transition-all mb-10 shadow-2xl active:scale-95 text-lg items-center gap-3 w-fit">
              <PhoneCall /> Contact Us / Get a Quote
            </Link>
            <div className="flex flex-wrap gap-10 text-base font-medium text-surface-variant/70">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary-fixed" size={24} />
                No spam ever
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-secondary-fixed" size={24} />
                No salespeople
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 relative group">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden border-[6px] border-primary/30 bg-primary-container shadow-2xl transform lg:rotate-3 group-hover:rotate-0 transition-transform duration-700">
              <img 
                alt="Ratul Karim Consultation" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="/r1.png" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 sm:-left-10 bg-white px-8 py-5 rounded-[1.5rem] shadow-2xl text-ink-dark border border-outline-variant z-20"
            >
              <p className="font-display font-black text-xl tracking-tight leading-none mb-1">Ratul Karim</p>
              <p className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Founder & Consultant</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
