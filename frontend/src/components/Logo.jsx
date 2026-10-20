import React from "react";

export const Logo = ({ className = "h-8 sm:h-9" }) => (
  <img
    src="/logo-wordmark.png"
    alt="Carrier Pro"
    className={`${className} w-auto select-none object-contain`}
    draggable={false}
  />
);

export default Logo;
