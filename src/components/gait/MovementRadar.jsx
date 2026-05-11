import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function MovementRadar({ data }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data} outerRadius="75%">
        <PolarGrid stroke="hsl(222 30% 16%)" />
        <PolarAngleAxis
          dataKey="metric"
          stroke="hsl(215 20% 55%)"
          fontSize={11}
          tick={{ fill: "hsl(215 20% 55%)" }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 100]}
          stroke="hsl(222 30% 16%)"
          fontSize={10}
          tick={{ fill: "hsl(215 20% 55%)" }}
        />
        <Radar
          name="Score"
          dataKey="value"
          stroke="hsl(142 71% 45%)"
          fill="hsl(142 71% 45%)"
          fillOpacity={0.15}
          strokeWidth={2}
        />
        <Tooltip
          contentStyle={{
            background: "hsl(222 44% 8%)",
            border: "1px solid hsl(222 30% 16%)",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}