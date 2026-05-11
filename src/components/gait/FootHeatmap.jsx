import React from "react";
import { footPressureZones } from "@/lib/mockData";

const getColor = (pressure, status) => {
  if (status === "danger") return "#ef4444";
  if (status === "warning") return "#f59e0b";
  if (status === "low") return "#6366f1";
  if (pressure > 45) return "#f59e0b";
  if (pressure > 35) return "#3b82f6";
  return "#22c55e";
};

const getOpacity = (pressure) => {
  return 0.3 + (pressure / 100) * 0.7;
};

function FootOutline({ zones, label }) {
  const zonePositions = [
    { key: "bigToe", cx: 62, cy: 28, r: 14, name: "Big Toe" },
    { key: "toes", cx: 38, cy: 35, r: 12, name: "Toes" },
    { key: "innerForefoot", cx: 60, cy: 58, r: 16, name: "Inner Forefoot" },
    { key: "outerForefoot", cx: 35, cy: 62, r: 14, name: "Outer Forefoot" },
    { key: "midfoot", cx: 50, cy: 100, r: 15, name: "Midfoot" },
    { key: "innerHeel", cx: 55, cy: 145, r: 15, name: "Inner Heel" },
    { key: "outerHeel", cx: 40, cy: 148, r: 13, name: "Outer Heel" },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
      <svg viewBox="0 0 100 180" className="w-32 md:w-40 h-auto">
        {/* Foot outline */}
        <ellipse cx="50" cy="90" rx="30" ry="80" fill="none" stroke="hsl(222 30% 20%)" strokeWidth="1.5" />

        {/* Pressure zones */}
        {zonePositions.map((z) => {
          const zone = zones[z.key];
          if (!zone) return null;
          const color = getColor(zone.pressure, zone.status);
          const opacity = getOpacity(zone.pressure);
          return (
            <g key={z.key}>
              <circle
                cx={z.cx}
                cy={z.cy}
                r={z.r}
                fill={color}
                opacity={opacity}
                className={zone.status === "danger" ? "animate-pulse-glow" : ""}
              />
              <text
                x={z.cx}
                y={z.cy + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="7"
                fontWeight="bold"
                fontFamily="var(--font-mono)"
              >
                {zone.pressure}%
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend items */}
      <div className="space-y-1">
        {zonePositions.map((z) => {
          const zone = zones[z.key];
          if (!zone) return null;
          return (
            <div key={z.key} className="flex items-center gap-2 text-[10px]">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: getColor(zone.pressure, zone.status) }}
              />
              <span className="text-muted-foreground">{z.name}: {zone.pressure}%</span>
              {zone.status !== "normal" && (
                <span className={`font-semibold ${
                  zone.status === "danger" ? "text-destructive" :
                  zone.status === "warning" ? "text-yellow-400" :
                  "text-primary"
                }`}>
                  {zone.status === "danger" ? "HIGH" : zone.status === "warning" ? "ELEVATED" : "LOW"}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FootHeatmap() {
  return (
    <div className="flex justify-around items-start gap-4">
      <FootOutline zones={footPressureZones.left} label="Left Foot" />
      <FootOutline zones={footPressureZones.right} label="Right Foot" />
    </div>
  );
}