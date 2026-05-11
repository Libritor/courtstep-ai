import React from "react";

export default function GlowCard({ children, className = "", glowColor = "primary" }) {
  const glowMap = {
    primary: "shadow-primary/5 hover:shadow-primary/10",
    secondary: "shadow-secondary/5 hover:shadow-secondary/10",
    accent: "shadow-accent/5 hover:shadow-accent/10",
  };

  return (
    <div className={`bg-card rounded-xl border border-border p-6 shadow-lg ${glowMap[glowColor] || glowMap.primary} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}