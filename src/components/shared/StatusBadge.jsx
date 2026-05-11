import React from "react";

const variants = {
  ok: "bg-accent/15 text-accent border-accent/20",
  warning: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  danger: "bg-destructive/15 text-destructive border-destructive/20",
  info: "bg-primary/15 text-primary border-primary/20",
  purple: "bg-secondary/15 text-secondary border-secondary/20",
  neutral: "bg-muted text-muted-foreground border-border",
};

export default function StatusBadge({ status = "neutral", children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${variants[status] || variants.neutral} ${className}`}
    >
      {children}
    </span>
  );
}