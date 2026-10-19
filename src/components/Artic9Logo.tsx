import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  /** Background the logo sits on: light (white), dark (charcoal) or yellow (brand). */
  theme?: "light" | "dark" | "yellow";
}

// Logo artwork cut from the Artic9 2025 brochure (616 × 252 px, transparent PNG).
const SOURCES = {
  light: "/images/brand/artic9-logo-dark.png",
  dark: "/images/brand/artic9-logo-light.png",
  yellow: "/images/brand/artic9-logo-original.png"
};

const HEIGHTS = { sm: 36, md: 48, lg: 66 };
const RATIO = 616 / 252;

export default function Artic9Logo({ size = "md", theme = "light" }: LogoProps) {
  const height = HEIGHTS[size];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={SOURCES[theme]}
      alt="Artic9 Creative Agency"
      width={Math.round(height * RATIO)}
      height={height}
      style={{ display: "block", height, width: "auto" }}
    />
  );
}
