import React from "react";
import { hackathonTracks, stackBadges } from "@/lib/mockData";
import {
  Award, Flag, Lock, EyeOff, BarChart, Database, Zap, Sparkles, UserCheck,
  CreditCard, ShieldCheck, Footprints, Brain, Shield, Upload, FileCheck, TrendingUp,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

const iconMap = {
  flag: Flag,
  lock: Lock,
  "eye-off": EyeOff,
  "bar-chart": BarChart,
  database: Database,
  zap: Zap,
  sparkles: Sparkles,
  "user-check": UserCheck,
  "credit-card": CreditCard,
  "shield-check": ShieldCheck,
};

export default function HackathonFit() {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-2">
          <Sparkles className="w-3 h-3 text-yellow-400" />
          <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider">Solana Frontier Hackathon</span>
        </div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Award className="w-6 h-6 text-yellow-400" />
          Hackathon Fit
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          How CourtStep AI maps to Frontier / Superteam sidetracks.
        </p>
      </div>

      {/* Positioning */}
      <div className="bg-gradient-to-br from-card via-card to-yellow-400/5 border border-yellow-400/20 rounded-2xl p-8 text-center">
        <p className="text-base md:text-xl font-bold leading-relaxed max-w-3xl mx-auto">
          CourtStep AI turns foot-level biomechanical data into{" "}
          <span className="text-primary">injury-risk scores</span>,{" "}
          <span className="text-accent">recovery insights</span>, and{" "}
          <span className="text-secondary">privacy-preserving proofs</span> of athlete health events on Solana.
        </p>
        <p className="text-xs text-muted-foreground mt-4 italic">
          Athlete health · proof of recovery · team operations · privacy-preserving data access.
          <br />
          Not betting · not gambling · not prediction markets.
        </p>
      </div>

      {/* Track cards */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Sidetrack Alignment ({hackathonTracks.length} tracks)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hackathonTracks.map((t) => {
            const Icon = iconMap[t.icon] || Award;
            return (
              <div
                key={t.id}
                className={`bg-card border rounded-2xl p-5 hover:border-${t.color}/40 transition-all duration-200 border-${t.color}/20`}
              >
                <div className={`w-11 h-11 rounded-xl bg-${t.color}/10 flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 text-${t.color}`} />
                </div>
                <h3 className="text-sm font-bold mb-1.5">{t.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stack */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-sm font-bold mb-4">Technical Stack</h2>
        <div className="flex flex-wrap gap-2">
          {stackBadges.map((b) => (
            <span
              key={b}
              className="px-3 py-1.5 rounded-lg bg-muted/40 border border-border text-xs font-mono font-medium"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Architecture diagram */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <h2 className="text-sm font-bold mb-5">Technical Architecture</h2>
        <div className="overflow-x-auto">
          <div className="flex items-center justify-between gap-2 min-w-[800px]">
            {[
              { label: "Smart Insole", icon: Footprints, color: "primary" },
              { label: "Sensor Upload", icon: Upload, color: "primary" },
              { label: "AI Risk Engine", icon: Brain, color: "secondary" },
              { label: "Encrypted Storage", icon: Lock, color: "secondary" },
              { label: "Hash + Consent", icon: FileCheck, color: "accent" },
              { label: "Solana", icon: Shield, color: "accent" },
              { label: "Team Dashboard", icon: TrendingUp, color: "yellow-400" },
            ].map((node, idx, arr) => (
              <React.Fragment key={node.label}>
                <div className="flex flex-col items-center text-center gap-2 flex-1 min-w-[90px]">
                  <div className={`w-12 h-12 rounded-xl bg-${node.color}/10 border border-${node.color}/20 flex items-center justify-center`}>
                    <node.icon className={`w-5 h-5 text-${node.color}`} />
                  </div>
                  <span className="text-[11px] font-semibold leading-tight">{node.label}</span>
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Key facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Built In", value: "Toronto, Canada" },
          { label: "Team", value: "Superteam Canada eligible" },
          { label: "Status", value: "Live dApp demo on Devnet" },
        ].map((k) => (
          <div key={k.label} className="bg-card border border-border rounded-xl p-5">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{k.label}</p>
            <p className="text-sm font-bold">{k.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}