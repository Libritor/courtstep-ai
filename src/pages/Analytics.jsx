import React from "react";
import { riskTrend, teamReadiness, recoveryProgress, marketStats, proofEvents } from "@/lib/mockData";
import { BarChart3, TrendingUp, Users, HeartPulse, Globe, Shield, Key, X, CheckCircle2 } from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const tooltipStyle = {
  background: "hsl(222 44% 8%)",
  border: "1px solid hsl(222 30% 16%)",
  borderRadius: "8px",
  fontSize: "12px",
};

const proofIconMap = {
  shield: Shield,
  key: Key,
  x: X,
  check: CheckCircle2,
};

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          Analytics & Market
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Team traction, athlete health trends, and market opportunity overview.
        </p>
      </div>

      {/* Dune-ready public event counters */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-sm font-bold flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent" /> Public Solana Events (Dune-ready)
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Anonymized indexable proof events — no raw biometric data exposed.
            </p>
          </div>
          <span className="text-[10px] font-mono px-2 py-1 bg-accent/10 text-accent rounded">live · devnet</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {proofEvents.map((e) => {
            const Icon = proofIconMap[e.icon];
            return (
              <div key={e.type} className="p-4 rounded-xl bg-muted/20 border border-border">
                <Icon className="w-4 h-4 text-accent mb-3" />
                <p className="text-2xl font-bold font-mono">{e.count.toLocaleString()}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{e.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Risk trend */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" /> Injury Risk Trend (12 Weeks)
        </h2>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={riskTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 16%)" />
            <XAxis dataKey="week" stroke="hsl(215 20% 55%)" fontSize={11} />
            <YAxis stroke="hsl(215 20% 55%)" fontSize={11} domain={[0, 100]} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Line type="monotone" dataKey="marcus" name="Marcus J." stroke="hsl(217 91% 60%)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="daniel" name="Daniel C." stroke="hsl(270 60% 55%)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="evan" name="Evan B." stroke="hsl(142 71% 45%)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Two charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
            <Users className="w-4 h-4" /> Team Readiness vs Load
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={teamReadiness}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 16%)" />
              <XAxis dataKey="player" stroke="hsl(215 20% 55%)" fontSize={11} />
              <YAxis stroke="hsl(215 20% 55%)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="readiness" name="Readiness" fill="hsl(142 71% 45%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="load" name="Training Load" fill="hsl(217 91% 60%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
            <HeartPulse className="w-4 h-4" /> Recovery Progress vs Target
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={recoveryProgress}>
              <defs>
                <linearGradient id="actualGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(142 71% 45%)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="hsl(142 71% 45%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="targetGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 16%)" />
              <XAxis dataKey="week" stroke="hsl(215 20% 55%)" fontSize={11} />
              <YAxis stroke="hsl(215 20% 55%)" fontSize={11} unit="%" />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Area type="monotone" dataKey="target" name="Target" stroke="hsl(217 91% 60%)" fill="url(#targetGrad)" strokeWidth={2} />
              <Area type="monotone" dataKey="actual" name="Actual" stroke="hsl(142 71% 45%)" fill="url(#actualGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market opportunity */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-base font-bold mb-1">Market Opportunity</h2>
        <p className="text-xs text-muted-foreground mb-5">
          Sports analytics + wearable health intersect with privacy-preserving on-chain consent.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketStats.map((s) => (
            <div key={s.label} className="p-4 rounded-xl bg-muted/20 border border-border">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">{s.label}</p>
              <p className="text-lg font-bold mb-2">{s.value}</p>
              <p className="text-[10px] text-muted-foreground italic leading-relaxed">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}