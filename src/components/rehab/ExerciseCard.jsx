import React from "react";
import { CheckCircle2, Circle, Brain } from "lucide-react";
import StatusBadge from "@/components/shared/StatusBadge";

export default function ExerciseCard({ exercise }) {
  const { name, completed, riskLevel, reps, feedback } = exercise;

  const riskStatus = riskLevel === "Low" ? "ok" : riskLevel === "Medium" ? "warning" : "danger";

  return (
    <div className={`bg-card border border-border rounded-xl p-5 ${completed ? "opacity-75" : ""}`}>
      <div className="flex items-start gap-4">
        <div className="mt-0.5">
          {completed ? (
            <CheckCircle2 className="w-5 h-5 text-accent" />
          ) : (
            <Circle className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className={`text-sm font-semibold ${completed ? "line-through text-muted-foreground" : ""}`}>
              {name}
            </h3>
            <StatusBadge status={riskStatus}>{riskLevel} Risk</StatusBadge>
          </div>
          <p className="text-xs text-muted-foreground mb-3">Recommended: {reps}</p>
          <div className="bg-muted/30 rounded-lg p-3 flex items-start gap-2">
            <Brain className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">{feedback}</p>
          </div>
        </div>
      </div>
    </div>
  );
}