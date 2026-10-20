import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../App";

export default function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      data-testid="sticky-whatsapp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-[0_18px_40px_-12px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-white/40 pulse-ring" />
        <MessageCircle size={18} />
      </span>
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
