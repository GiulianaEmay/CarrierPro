import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import HowItWorks from "./components/HowItWorks";
import StationsMap from "./components/StationsMap";
import Benefits from "./components/Benefits";
import Plans from "./components/Plans";
import Future from "./components/Future";
import CorporateModal from "./components/CorporateModal";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import LeadModal from "./components/LeadModal";
import StickyWhatsApp from "./components/StickyWhatsApp";

export const WHATSAPP_NUMBER = "51973982417";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Carrier Pro, quiero activar mi membresía. Les enviaré mi placa para empezar."
)}`;

export default function App() {
  const [corporateType, setCorporateType] = useState(null);
  const [leadOpen, setLeadOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  // Cursor glow effect on hero
  useEffect(() => {
    const handle = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", handle, { passive: true });
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  const openLead = (plan = "") => {
    setSelectedPlan(typeof plan === "string" ? plan : "");
    setLeadOpen(true);
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden" data-testid="app-root">
      <Navbar onActivar={openLead} />
      <main>
        <Hero onActivar={openLead} />
        <Trust />
        <HowItWorks onActivar={openLead} />
        <StationsMap />
        <Benefits />
        <Plans onActivar={openLead} />
        <Future />
        <FAQ />
        <FinalCTA onActivar={openLead} />
      </main>
      <Footer onOpenCorporate={setCorporateType} />
      {corporateType && <CorporateModal key={corporateType} type={corporateType} onClose={() => setCorporateType(null)} />}
      <StickyWhatsApp />
      <LeadModal key={String(leadOpen) + selectedPlan} selectedPlan={selectedPlan} open={leadOpen} onClose={() => setLeadOpen(false)} />
    </div>
  );
}
