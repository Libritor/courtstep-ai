import React from "react";
import StatusBadge from "@/components/shared/StatusBadge";
import { User, MapPin, Calendar, Weight } from "lucide-react";

export default function AthleteHeader({ athlete }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xl font-bold text-primary shrink-0">
          {athlete.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-xl font-bold">{athlete.name}</h2>
            <StatusBadge status={athlete.status.includes("rehab") ? "warning" : "ok"}>
              {athlete.status}
            </StatusBadge>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{athlete.team}</span>
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{athlete.position} · {athlete.height} · {athlete.weight}</span>
            {athlete.surgeryDate && (
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />Surgery: {athlete.surgeryDate}</span>
            )}
          </div>
          {athlete.injury !== "N/A" && (
            <p className="text-xs text-muted-foreground mt-1.5">Injury: {athlete.injury}</p>
          )}
        </div>
      </div>
    </div>
  );
}