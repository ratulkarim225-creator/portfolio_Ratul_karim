/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AIStrategy from "./components/AIStrategy";
import Journey from "./components/Journey";
import Results from "./components/Results";
import Hotline from "./components/Hotline";
import Blog from "./components/Blog";
import WhatsAppChannel from "./components/WhatsAppChannel";
import Arsenal from "./components/Arsenal";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import ProofPage from "./pages/ProofPage";
import ContactPage from "./pages/ContactPage";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIStrategy />
        <Journey />
        <Results />
        <Hotline />
        <Blog />
        <WhatsAppChannel />
        <Arsenal />
        <Certificates />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proof/:id" element={<ProofPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
