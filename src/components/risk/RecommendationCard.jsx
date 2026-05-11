import React from "react";
import { Lightbulb } from "lucide-react";

const priorityColors = {
  critical: "bg-destructive/15 text-destructive border-destructive/20",
  high: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  medium: "bg-primary/15 text-primary border-primary/20",
};

export default function RecommendationCard({ recommendation }) {
  const { priority, text, detail } = recommendation;

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-accent mt-0.5 shrink-0" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-sm font-semibold">{text}</h3>
            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${priorityColors[priority]}`}>
              {priority}
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
        </div>
      </div>
    </div>
  );
}