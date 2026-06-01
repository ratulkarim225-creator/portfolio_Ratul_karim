import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export default function Journey() {
  return (
    <section className="py-16 sm:py-24 bg-surface overflow-hidden" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative group">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-primary-container rounded-[2.5rem] overflow-hidden aspect-[4/5] sm:aspect-square relative z-10"
            >
              <img 
                alt="Ratul Karim" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-110" 
                src="/r1.png" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Decorative background blobs */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-outline-variant z-20 hidden sm:block max-w-[280px]"
            >
              <p className="font-display font-black text-primary text-2xl mb-2 tracking-tight uppercase">FOUNDER'S NOTE</p>
              <p className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">A Personal Commitment</p>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">
                {"A Journey from Personal to "} 
                <span className="bg-secondary-container px-3 rounded-2xl inline-block mt-2 sm:mt-0">Professional One</span>
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  This journey started with a simple yet audacious vision – a world where every business owner, regardless of size or scale, could navigate the digital landscape with confidence. I am led by the belief that the unconventional path often leads to the greatest rewards.
                </p>
                <p>
                  As a personal consultant, I bring the same systematic rigor used by major agencies to founders who need individual attention and breakthrough results.
                </p>
              </div>
              
              <div className="mt-10 space-y-5">
                <BenefitItem text="A Strategic Partner that continues to push boundaries." />
                <BenefitItem text="Direct transparency and ownership in every project." />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24 sm:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center bg-surface-container-low p-10 sm:p-16 rounded-[2.5rem] border border-outline-variant"
        >
          <StatItem value="790+" label="Successful Projects" />
          <StatItem value="450+" label="Happy Clients" border />
          <StatItem value="460%" label="Return On Investment" />
        </motion.div>
      </div>
    </section>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">
        <CheckCircle2 className="text-primary fill-primary-container/20" size={24} />
      </div>
      <span className="font-semibold text-on-surface text-lg">{text}</span>
    </div>
  );
}

function StatItem({ value, label, border }: { value: string, label: string, border?: boolean }) {
  return (
    <div className={cn(
      "flex flex-col gap-2 py-4",
      border && "border-y md:border-y-0 md:border-x border-outline-variant"
    )}>
      <p className="font-display text-5xl sm:text-6xl font-black text-primary tracking-tighter">{value}</p>
      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant/80">{label}</p>
    </div>
  );
}
