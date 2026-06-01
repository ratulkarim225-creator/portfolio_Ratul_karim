import { Building2, Target, Sparkles, Loader2, Rocket, Mail } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";

export default function AIStrategy() {
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<string | null>(null);
  const [shippedEmail, setShippedEmail] = useState(false);
  const [form, setForm] = useState({ businessDetails: "", goals: "" });

  const getMailtoUrl = () => {
    const subject = "Business Marketing Strategy Inquiry";
    const body = `Hi Ratul,\n\nI would love to get your expert feedback on my marketing strategy goals.\n\n--- BUSINESS DETAILS ---\n${form.businessDetails}\n\n--- MARKETING GOALS ---\n${form.goals}\n\nLooking forward to hearing back from you!\n\nBest regards,`;
    return `mailto:ratulkarim225@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.businessDetails || !form.goals) return;

    setLoading(true);
    setShippedEmail(true);

    try {
      // Trigger the default mail client with pre-filled details
      window.location.href = getMailtoUrl();

      const res = await fetch("/api/strategy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStrategy(data.strategy);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      id: 1,
      title: "Share Business Details",
      desc: "Share your target audience and current challenges.",
      icon: <Building2 className="text-primary" size={32} />,
      bg: "bg-primary/5",
      badge: "bg-primary-fixed text-primary",
    },
    {
      id: 2,
      title: "Share Your Marketing Goals",
      desc: "Tell us what are you aiming to achieve in Business.",
      icon: <Target className="text-secondary" size={32} />,
      bg: "bg-secondary/5",
      badge: "bg-secondary-container text-on-secondary-container",
    },
    {
      id: 3,
      title: "Get Personalised Plan",
      desc: "Get personalized marketing plan tailored just for you.",
      icon: <Sparkles className="text-primary-container" size={32} />,
      bg: "bg-primary-container/5",
      badge: "bg-primary-container text-on-primary-container",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" id="strategy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 text-balance">
          <p className="font-mono text-xs font-bold text-primary mb-3 tracking-widest uppercase">Try our AI Assistant</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Get Marketing Strategy for Free 🚀</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Fill out the details below and let our AI-powered consultant draft a roadmap for your next growth phase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-[2rem] border border-outline-variant text-left relative overflow-hidden group shadow-sm">
              <div className="absolute top-8 right-8 opacity-20 transform group-hover:scale-125 transition-transform duration-500">
                {step.icon}
              </div>
              <span className={`inline-block px-4 py-1.5 rounded-lg font-bold mb-6 text-sm ${step.badge}`}>
                {step.id}
              </span>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-[2.5rem] border border-outline-variant shadow-xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-primary">Business Details</label>
              <textarea 
                className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 min-h-[120px] focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                placeholder="What do you sell? Who is your audience? What are your biggest hurdles right now?"
                value={form.businessDetails}
                onChange={(e) => setForm({ ...form, businessDetails: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-primary">Marketing Goals</label>
              <textarea 
                className="w-full bg-surface-container-low border border-outline-variant rounded-2xl p-4 min-h-[100px] focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                placeholder="E.g., Double leads in 3 months, expand to new markets, improve brand authority."
                value={form.goals}
                onChange={(e) => setForm({ ...form, goals: e.target.value })}
              />
            </div>
            <button 
              disabled={loading}
              className="w-full bg-primary text-on-primary font-bold px-8 py-5 rounded-xl hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 group active:scale-[0.98]"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" /> Analyzing your vision...
                </>
              ) : (
                <>
                  <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                  Create my marketing strategy
                </>
              )}
            </button>
          </form>

          <AnimatePresence>
            {shippedEmail && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: 10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                className="mt-6 p-5 bg-[#EB5A3C]/5 border border-[#EB5A3C]/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-hidden text-left"
              >
                <div className="flex gap-3">
                  <div className="p-2.5 bg-[#EB5A3C]/10 rounded-xl text-[#EB5A3C] shrink-0">
                    <Mail size={20} className="animate-pulse" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-gray-900">Email Ready to Send!</h5>
                    <p className="text-xs text-gray-500 mt-0.5 max-w-md leading-relaxed">
                      Your goal details have been formatted for <strong className="text-gray-950 font-semibold">ratulkarim225@gmail.com</strong>. If your email app hasn't popped up automatically, click the button on the right to send manually.
                    </p>
                  </div>
                </div>
                <a
                  href={getMailtoUrl()}
                  className="bg-[#EB5A3C] hover:opacity-95 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shrink-0 flex items-center gap-1.5 active:scale-95"
                >
                  <Mail size={14} /> Send Manually
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {strategy && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 p-8 bg-surface-container border border-primary/20 rounded-2xl relative"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Sparkles className="text-secondary" /> Your Strategy 
                  </h3>
                  <button 
                    onClick={() => setStrategy(null)}
                    className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
                  >
                    Clear
                  </button>
                </div>
                <div className="prose prose-sm sm:prose-base prose-headings:font-display prose-headings:text-primary prose-p:text-on-surface-variant max-w-none prose-ul:list-disc prose-li:text-on-surface-variant">
                  <ReactMarkdown>{strategy}</ReactMarkdown>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
