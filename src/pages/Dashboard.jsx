import React, { useState } from "react";
import { athletes, dashboardCards } from "@/lib/mockData";
import MetricCard from "@/components/shared/MetricCard";
import RingProgress from "@/components/shared/RingProgress";
import StatusBadge from "@/components/shared/StatusBadge";
import AthleteSelector from "@/components/dashboard/AthleteSelector";
import AthleteHeader from "@/components/dashboard/AthleteHeader";
import { Activity, TrendingUp, Zap, AlertTriangle } from "lucide-react";

export default function Dashboard() {
  const [selectedAthlete, setSelectedAthlete] = useState(athletes[0]);

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Athlete Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Real-time biomechanical monitoring & risk assessment</p>
        </div>
        <AthleteSelector athletes={athletes} selected={selectedAthlete} onSelect={setSelectedAthlete} />
      </div>

      {/* Athlete header card */}
      <AthleteHeader athlete={selectedAthlete} />

      {/* Ring progress cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center">
          <RingProgress value={selectedAthlete.overallRisk} size={100} strokeWidth={8} color="destructive" />
          <p className="text-xs font-medium text-muted-foreground mt-3">Injury Risk Score</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center">
          <RingProgress value={selectedAthlete.rehabProgress} size={100} strokeWidth={8} color="accent" />
          <p className="text-xs font-medium text-muted-foreground mt-3">Rehab Progress</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center">
          <RingProgress value={selectedAthlete.trainingLoad} size={100} strokeWidth={8} color="primary" />
          <p className="text-xs font-medium text-muted-foreground mt-3">Training Load</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center">
          <RingProgress value={selectedAthlete.fatigueIndex} size={100} strokeWidth={8} color="yellow" />
          <p className="text-xs font-medium text-muted-foreground mt-3">Fatigue Index</p>
        </div>
      </div>

      {/* Risk overview */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Risk Breakdown</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Achilles Risk", value: selectedAthlete.achillesRisk, icon: AlertTriangle },
            { label: "Ankle Sprain Risk", value: selectedAthlete.ankleRisk, icon: Zap },
            { label: "Knee Overload Risk", value: selectedAthlete.kneeRisk, icon: TrendingUp },
          ].map((r) => (
            <div key={r.label} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
              <r.icon className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">{r.label}</p>
                <p className="text-sm font-bold">{r.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metric cards grid */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Biomechanical Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {dashboardCards.map((card) => (
            <MetricCard key={card.label} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}