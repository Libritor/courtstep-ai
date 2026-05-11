import React from "react";
import { gaitTimeSeriesData, pressureDistribution, movementProfile } from "@/lib/mockData";
import PressureTimeline from "@/components/gait/PressureTimeline";
import PressureDistChart from "@/components/gait/PressureDistChart";
import MovementRadar from "@/components/gait/MovementRadar";
import FootHeatmap from "@/components/gait/FootHeatmap";
import { Footprints } from "lucide-react";

export default function GaitAnalysis() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Footprints className="w-6 h-6 text-primary" />
          Gait Analysis
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Interactive biomechanical visualization & pressure mapping</p>
      </div>

      {/* Charts row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Left vs Right Foot Pressure Over Time</h3>
          <PressureTimeline data={gaitTimeSeriesData} />
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Pressure Distribution by Zone</h3>
          <PressureDistChart data={pressureDistribution} />
        </div>
      </div>

      {/* Charts row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Movement Profile Radar</h3>
          <MovementRadar data={movementProfile} />
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Smart Insole Pressure Heatmap</h3>
          <FootHeatmap />
        </div>
      </div>
    </div>
  );
}