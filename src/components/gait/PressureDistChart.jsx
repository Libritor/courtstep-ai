import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function PressureDistChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} barGap={4}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 16%)" />
        <XAxis dataKey="zone" stroke="hsl(215 20% 55%)" fontSize={11} />
        <YAxis stroke="hsl(215 20% 55%)" fontSize={11} unit="%" />
        <Tooltip
          contentStyle={{
            background: "hsl(222 44% 8%)",
            border: "1px solid hsl(222 30% 16%)",
            borderRadius: "8px",
            fontSize: "12px",
          }}
        />
        <Legend wrapperStyle={{ fontSize: "12px" }} />
        <Bar dataKey="left" name="Left Foot" fill="hsl(217 91% 60%)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="right" name="Right Foot" fill="hsl(270 60% 55%)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}