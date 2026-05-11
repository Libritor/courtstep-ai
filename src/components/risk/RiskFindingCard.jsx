import React from "react";
import { AlertTriangle, AlertCircle } from "lucide-react";

export default function RiskFindingCard({ finding }) {
  const isHigh = finding.severity === "high";

  return (
    <div className={`bg-card border rounded-xl p-5 ${isHigh ? "border-destructive/30" : "border-yellow-500/30"}`}>
      <div className="flex items-start gap-3">
        {isHigh ? (
          <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
        )}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-semibold">{finding.title}</h3>
            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
              isHigh ? "bg-destructive/15 text-destructive" : "bg-yellow-500/15 text-yellow-400"
            }`}>
              {finding.severity}
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{finding.detail}</p>
        </div>
      </div>
    </div>
  );
}