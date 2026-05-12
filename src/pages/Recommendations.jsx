import React from "react";
import { aiRecommendations } from "@/lib/mockData";
import { Activity, Info, TrendingDown, AlertTriangle, RotateCcw, UserCheck, Trophy } from "lucide-react";
import RecommendationCard from "@/components/risk/RecommendationCard";

const summary = [
  { icon: TrendingDown, label: "Reduce Landing Load", value: "-12%", desc: "Recommended over next 48h", color: "destructive" },
  { icon: AlertTriangle, label: "Flag Asymmetry", value: "6%", desc: "Above 5% threshold", color: "yellow" },
  { icon: RotateCcw, label: "Recovery Session", value: "Today", desc: "Active recovery suggested", color: "accent" },
  { icon: UserCheck, label: "Trainer Review", value: "Required", desc: "Schedule check-in", color: "secondary" },
  { icon: Trophy, label: "Return-to-Play Score", value: "64 / 100", desc: "Phase 3 of 4", color: "primary" },
];

export default function Recommendations() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Activity className="w-6 h-6 text-accent" />
          AI Recommendations
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Decision support for athletes, trainers, and medical staff — not a medical diagnosis.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 flex items-start gap-3">
        <Info className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-xs font-bold text-yellow-400 mb-1">AI gives decision support, not medical diagnosis.</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            All recommendations should be reviewed by qualified medical professionals before clinical application.
          </p>
        </div>
      </div>

      {/* Top summary */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {summary.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4">
            <div className={`w-9 h-9 rounded-lg bg-${s.color}/10 flex items-center justify-center mb-3`}>
              <s.icon className={`w-4 h-4 text-${s.color}`} />
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{s.label}</p>
            <p className="text-lg font-bold font-mono">{s.value}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Detailed recommendations */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Detailed Recommendations</h2>
        <div className="space-y-3">
          {aiRecommendations.map((r) => (
            <RecommendationCard key={r.id} recommendation={r} />
          ))}
        </div>
      </div>

      {/* Return-to-play */}
      <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
            <Trophy className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-2">Return-to-Play Readiness</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Current score: <span className="font-mono font-bold text-primary">64 / 100</span> — Phase 3 of 4 in
              post-surgery progression. Recommended action: continue current rehab loading protocol, defer
              high-impact drills, and re-evaluate in 7 days.
            </p>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: "64%" }} />
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-muted-foreground uppercase tracking-wider">
              <span>Phase 1 · Acute</span>
              <span>Phase 2 · Sub-acute</span>
              <span className="text-primary font-bold">Phase 3 · Loading</span>
              <span>Phase 4 · Return</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}