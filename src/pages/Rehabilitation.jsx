import React from "react";
import { rehabExercises, weeklyGoals } from "@/lib/mockData";
import WeeklyGoalCard from "@/components/rehab/WeeklyGoalCard";
import ExerciseCard from "@/components/rehab/ExerciseCard";
import { HeartPulse, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Rehabilitation() {
  const completedCount = rehabExercises.filter((e) => e.completed).length;
  const totalCount = rehabExercises.length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <HeartPulse className="w-6 h-6 text-accent" />
          Rehabilitation Guidance
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Post-surgery recovery program — Marcus Johnson</p>
      </div>

      {/* Phase card */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider">Recovery Phase</p>
            <h2 className="text-lg font-bold mt-1">Phase 3 — Return to Controlled Court Movement</h2>
            <p className="text-sm text-muted-foreground mt-1">Week 12 of 18 · Left Achilles tendon repair</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold font-mono text-accent">64%</p>
            <p className="text-xs text-muted-foreground">Overall Progress</p>
          </div>
        </div>
        <Progress value={64} className="h-2" />
      </div>

      {/* Weekly goals */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
          <Target className="w-4 h-4" /> Weekly Goals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {weeklyGoals.map((g) => (
            <WeeklyGoalCard key={g.goal} goal={g} />
          ))}
        </div>
      </div>

      {/* Exercise list */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Exercise Program ({completedCount}/{totalCount} completed)
          </h2>
        </div>
        <div className="space-y-3">
          {rehabExercises.map((ex) => (
            <ExerciseCard key={ex.id} exercise={ex} />
          ))}
        </div>
      </div>
    </div>
  );
}