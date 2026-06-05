import React from "react";

export const Logo = ({ className = "h-8", showText = true }) => (
  <div className={`inline-flex items-center gap-2 ${className}`} aria-label="Carrier Pro">
    <span className="font-display text-xl sm:text-2xl tracking-tight text-white leading-none">
      Carrier
    </span>
    <span className="inline-flex items-center justify-center rounded-md bg-[#f5961d] px-2 py-1 font-display text-xl sm:text-2xl leading-none text-black">
      Pro
    </span>
  </div>
);

export default Logo;
