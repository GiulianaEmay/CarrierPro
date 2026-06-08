import React from "react";

export const Logo = ({ className = "h-12 sm:h-14" }) => (
  <img
    src="/logo.png"
    alt="Carrier Pro"
    className={`${className} w-auto select-none object-contain`}
    draggable={false}
  />
);

export default Logo;
