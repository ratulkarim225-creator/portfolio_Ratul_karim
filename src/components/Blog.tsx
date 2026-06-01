import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Blog() {
  const posts = [
    {
      title: "Social Media for Interior Design: Pinterest Vs Instagram Tips",
      excerpt: "Master the visual platforms that drive the highest value leads for interior designers.",
      date: "11 Mar, 2026",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBufovlxAXky2l5N0VFUavwSTEEneso1N9hjxm27vNLRfL13yVMcFOiBEB9I25zNTALlUjbxG9sMcqwq0oUxOnenr461KNDgQGB6v8N81V_dy6BU8IO-ZPCujjjmRE9KlxjpIqTox17ou0he1TXr4J2Sb4TyUe7jAh7SNQHc0GdaAah-bdNpHfCoNJd4GrqgeMDRoI2aKGtdsB_AuXoA_mD1xIjFtPH1Gb4ndzYtbVht9Ym9xdoY10RvuTBMqZaAf16dlISs4SiSkA"
    },
    {
      title: "Topical Authority in SEO: Build Authority for Higher Ranking",
      excerpt: "Why depth of content beats volume in the age of AI-driven search algorithms.",
      date: "07 Mar, 2026",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHs8o7Fl5v_PjLtG_Us6wcYxmhOpdKMdXkE7cP8325r9Ysqwqg2M7fVx2oKL82W-Fj6e-h-gDlr16AUiU-gIKtf6XGsC78uWsjAHm1Uflzrqna8EZ2oMIOV0Fn68uBJJx7v7Bk2cGRJ6wGezIPa8FVHR9AtaKpqWWA6R1TxPgj_lKJPCSdCzOVcO_oFMlSv6zAq_PbeXoI4WTnAxTxI5MkPke9cOooWMxgr8c4o2lz0rbsTqrKoQwlXU-3ks-Ll2wG1j2SgYLdzBQ"
    },
    {
      title: "How to Get Cited in AI Search Results | AI SEO Guide",
      excerpt: "Strategies for making your content the primary source for LLMs and AI agents.",
      date: "04 Mar, 2026",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYBSiLsXhXjqA4rkYAUAw7WhMXenRGmtlKsUNx2rZR8wBjFc8iNHKa0rthEirrNk1ycYw3EaEMlbPMhackMdyThHs_--T7ouY-4pztwl0F4iHZLRVJJ22NB3xxq46WkZ80rkjJhk-APl9wm4DXHHvPGJhHGZJ8QPbpcaZE1qFgoCYJzPgPdXHmMEWkO3-KgM116inzV4eX760SAnCqBbk54qMp2UM-ZstaTWW-leBpQTG09_gP8t3pEeGhD_9l4HYYWHnN-5iBHzs"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <div>
            <p className="font-mono text-xs font-bold text-primary mb-3 tracking-widest uppercase">LATEST ARTICLES</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Curated for <span className="bg-secondary-container px-3 rounded-xl italic sm:not-italic">Business Growth</span></h2>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:translate-x-1 transition-transform cursor-pointer group">
            View all articles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-2xl sm:rounded-[2rem] overflow-hidden mb-8 border border-outline-variant shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img 
                  alt={post.title} 
                  className="w-full aspect-[16/10] object-cover group-hover:scale-110 transition-all duration-700" 
                  src={encodeURI(post.image)} 
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
              <p className="text-on-surface-variant text-base mb-6 leading-relaxed line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] font-bold text-outline-variant uppercase tracking-widest">{post.date}</p>
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
