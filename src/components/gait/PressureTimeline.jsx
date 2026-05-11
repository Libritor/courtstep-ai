import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function PressureTimeline({ data }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 16%)" />
        <XAxis dataKey="time" stroke="hsl(215 20% 55%)" fontSize={11} />
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
        <Line
          type="monotone"
          dataKey="leftPressure"
          name="Left Foot"
          stroke="hsl(217 91% 60%)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="rightPressure"
          name="Right Foot"
          stroke="hsl(270 60% 55%)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}