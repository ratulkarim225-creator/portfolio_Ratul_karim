import { Award } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Digital Marketing Certification 1",
      image: "/certificate/ChatGPT Image May 31, 2026, 08_18_04 PM.png",
    },
    {
      title: "Digital Marketing Certification 2",
      image: "/certificate/ChatGPT Image May 31, 2026, 08_25_17 PM.png",
    },
    {
      title: "Digital Marketing Certification 3",
      image: "/certificate/ChatGPT Image May 31, 2026, 08_27_28 PM.png",
    },
    {
      title: "Digital Marketing Certification 4",
      image: "/certificate/ChatGPT Image May 31, 2026, 08_27_37 PM.png",
    },
    {
      title: "Digital Marketing Certification 5",
      image: "/certificate/ChatGPT Image May 31, 2026, 08_28_17 PM.png",
    },
    {
      title: "Digital Marketing Certification 6",
      image: "/certificate/ChatGPT Image May 31, 2026, 08_35_41 PM.png",
    },
    {
      title: "Digital Marketing Certification 7",
      image: "/certificate/ChatGPT Image May 31, 2026, 08_43_34 PM.png",
    },
  ];

  return (
    <section
      className="py-24 bg-[#F0F4FC] overflow-hidden relative"
      id="certificates"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 text-primary">
          <Award size={32} />
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          Certifications & Recognitions
        </h2>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          Continuous learning and verified expertise in top digital marketing
          platforms.
        </p>
      </div>

      <div className="w-full relative flex flex-col gap-8 overflow-hidden mask-gradient-x">
        <style>{`
          .mask-gradient-x {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
          @keyframes marquee-cert {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 16px)); } /* -50% minus half gap */
          }
          .animate-marquee-cert {
            animation: marquee-cert 50s linear infinite;
          }
          .animate-marquee-cert:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex gap-8 w-max animate-marquee-cert pb-4 pt-2 px-4">
          {[
            ...certificates,
            ...certificates,
            ...certificates,
            ...certificates,
          ].map((cert, index) => (
            <div
              key={`cert-${index}`}
              className="bg-white rounded-[2rem] p-4 shadow-sm border border-outline-variant w-[300px] sm:w-[400px] shrink-0 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="rounded-xl overflow-hidden mb-4 bg-surface-container aspect-[4/3] border border-outline-variant/30 relative group">
                <img
                  src={encodeURI(cert.image)}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-lg text-center px-4 mb-2">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
