import React from "react";
import { TrendingUp, Clock } from "lucide-react";

export default function WeeklyGoalCard({ goal }) {
  const isBehind = goal.status === "behind";

  return (
    <div className={`bg-card border rounded-xl p-5 ${isBehind ? "border-yellow-500/30" : "border-border"}`}>
      <div className="flex items-start justify-between mb-2">
        <p className="text-sm font-semibold">{goal.goal}</p>
        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
          isBehind ? "bg-yellow-500/15 text-yellow-400" : "bg-primary/15 text-primary"
        }`}>
          {goal.status === "in-progress" ? "In Progress" : "Behind"}
        </span>
      </div>
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3" />Target: {goal.target}</span>
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />Current: {goal.current}</span>
      </div>
    </div>
  );
}