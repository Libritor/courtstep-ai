import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AthleteSelector({ athletes, selected, onSelect }) {
  return (
    <Select
      value={String(selected.id)}
      onValueChange={(val) => onSelect(athletes.find((a) => a.id === Number(val)))}
    >
      <SelectTrigger className="w-64 bg-card">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {athletes.map((a) => (
          <SelectItem key={a.id} value={String(a.id)}>
            <span className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                {a.avatar}
              </span>
              {a.name} — {a.position}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}