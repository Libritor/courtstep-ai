import React from "react";
import { AlertTriangle, AlertCircle, CheckCircle2, Activity } from "lucide-react";

const severityConfig = {
  high: { icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/10" },
  medium: { icon: AlertCircle, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  low: { icon: CheckCircle2, color: "text-accent", bg: "bg-accent/10" },
};

export default function UploadResults({ results }) {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Activity className="w-5 h-5 text-accent mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold mb-1">Analysis Summary</h3>
            <p className="text-sm text-muted-foreground">{results.summary}</p>
          </div>
        </div>
      </div>

      {/* Quick metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Gait Symmetry", value: results.metrics.symmetry },
          { label: "Peak Landing Force", value: results.metrics.peakForce },
          { label: "Avg Forefoot Pressure", value: results.metrics.avgPressure },
          { label: "Fatigue Onset", value: results.metrics.fatigueOnset },
        ].map((m) => (
          <div key={m.label} className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-xl font-bold font-mono">{m.value}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Risk findings */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Detected Risk Indicators</h3>
        <div className="space-y-3">
          {results.risks.map((r, i) => {
            const config = severityConfig[r.severity];
            return (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center shrink-0`}>
                  <config.icon className={`w-4 h-4 ${config.color}`} />
                </div>
                <span className="text-sm">{r.label}</span>
                <span className={`ml-auto text-[10px] font-bold uppercase ${config.color}`}>{r.severity}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}