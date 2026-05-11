import React from "react";
import StatusBadge from "./StatusBadge";

export default function MetricCard({ label, value, status, detail, icon: Icon }) {
  const borderColors = {
    ok: "border-l-accent",
    warning: "border-l-yellow-500",
    danger: "border-l-destructive",
  };

  return (
    <div className={`bg-card rounded-xl border border-border p-5 border-l-4 ${borderColors[status] || "border-l-primary"} hover:bg-muted/30 transition-colors duration-200`}>
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</p>
        {Icon && <Icon className="w-4 h-4 text-muted-foreground" />}
      </div>
      <p className="text-2xl font-bold text-foreground mb-2 font-mono">{value}</p>
      <div className="flex items-center gap-2">
        <StatusBadge status={status}>{status === "ok" ? "Normal" : status === "warning" ? "Watch" : "Alert"}</StatusBadge>
        <span className="text-xs text-muted-foreground">{detail}</span>
      </div>
    </div>
  );
}