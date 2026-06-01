import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const subject = `Contact Form Submission from ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    window.location.href = `mailto:ratulkarim225@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Navbar />
      <main className="py-24 sm:py-32 bg-surface text-on-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
              Get in touch with us today! Whether you have questions or need expert digital solutions, our team is here to help you grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/30">
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-2">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-2">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="01858536589" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                  <textarea id="message" name="message" required rows={5} className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-on-primary font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-10">
              <div>
                <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Direct Contact</h3>
                <div className="text-2xl sm:text-3xl font-extrabold leading-tight">
                  <span className="block text-on-surface-variant line-through decoration-primary/30 decoration-4 mb-2">Confusion</span>
                  <span className="block">Clarity.</span>
                </div>
                <p className="mt-6 text-on-surface-variant text-lg">
                  We'd love to hear from you. Our friendly team is always here to chat.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-on-surface-variant font-medium">ratulkarim225@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-on-surface-variant font-medium">01858536589</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Location</h4>
                    <p className="text-on-surface-variant font-medium">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
