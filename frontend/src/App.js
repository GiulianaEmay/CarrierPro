import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import HowItWorks from "./components/HowItWorks";
import StationsMap from "./components/StationsMap";
import Benefits from "./components/Benefits";
import Future from "./components/Future";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import LeadModal from "./components/LeadModal";
import StickyWhatsApp from "./components/StickyWhatsApp";

export const WHATSAPP_NUMBER = "51973982417";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Carrier Pro, quiero más información sobre la afiliación de mi unidad."
)}`;

export default function App() {
  const [leadOpen, setLeadOpen] = useState(false);

  // Cursor glow effect on hero
  useEffect(() => {
    const handle = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", handle, { passive: true });
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  const openLead = () => setLeadOpen(true);

  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden" data-testid="app-root">
      <Navbar onActivar={openLead} />
      <main>
        <Hero onActivar={openLead} />
        <Trust />
        <HowItWorks onActivar={openLead} />
        <StationsMap />
        <Benefits />
        <Future />
        <Testimonials />
        <FAQ />
        <FinalCTA onActivar={openLead} />
      </main>
      <Footer />
      <StickyWhatsApp />
      <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} />
    </div>
  );
}
