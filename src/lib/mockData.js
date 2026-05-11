export const athletes = [
  {
    id: 1,
    name: "Marcus Johnson",
    team: "Toronto Huskies",
    position: "Guard",
    status: "Post-surgery rehabilitation",
    avatar: "MJ",
    overallRisk: 72,
    achillesRisk: "Medium-High",
    ankleRisk: "Medium",
    kneeRisk: "Low-Medium",
    rehabProgress: 64,
    trainingLoad: 81,
    fatigueIndex: 68,
    age: 27,
    height: "6'3\"",
    weight: "195 lbs",
    injury: "Left Achilles tendon repair",
    surgeryDate: "2025-12-15",
  },
  {
    id: 2,
    name: "Daniel Carter",
    team: "Toronto Huskies",
    position: "Forward",
    status: "Active — Monitoring",
    avatar: "DC",
    overallRisk: 58,
    achillesRisk: "Low",
    ankleRisk: "Medium",
    kneeRisk: "Medium-High",
    rehabProgress: 100,
    trainingLoad: 92,
    fatigueIndex: 74,
    age: 24,
    height: "6'8\"",
    weight: "225 lbs",
    injury: "N/A — High landing impact monitoring",
    surgeryDate: null,
  },
  {
    id: 3,
    name: "Evan Brooks",
    team: "Toronto Huskies",
    position: "Center",
    status: "Active — Monitoring",
    avatar: "EB",
    overallRisk: 45,
    achillesRisk: "Low",
    ankleRisk: "Low",
    kneeRisk: "Medium",
    rehabProgress: 100,
    trainingLoad: 88,
    fatigueIndex: 55,
    age: 29,
    height: "6'11\"",
    weight: "250 lbs",
    injury: "N/A — Knee overload monitoring",
    surgeryDate: null,
  },
];

export const gaitTimeSeriesData = Array.from({ length: 30 }, (_, i) => ({
  time: `${i}s`,
  leftPressure: 40 + Math.sin(i * 0.5) * 15 + Math.random() * 5,
  rightPressure: 45 + Math.cos(i * 0.5) * 12 + Math.random() * 5,
}));

export const pressureDistribution = [
  { zone: "Forefoot", left: 42, right: 51 },
  { zone: "Midfoot", left: 28, right: 24 },
  { zone: "Heel", left: 30, right: 25 },
];

export const movementProfile = [
  { metric: "Balance", value: 68, fullMark: 100 },
  { metric: "Stability", value: 74, fullMark: 100 },
  { metric: "Landing Ctrl", value: 58, fullMark: 100 },
  { metric: "Cutting Ctrl", value: 62, fullMark: 100 },
  { metric: "Fatigue Resist", value: 55, fullMark: 100 },
  { metric: "Rehab Comply", value: 82, fullMark: 100 },
];

export const dashboardCards = [
  { label: "L-R Force Balance", value: "47% / 53%", status: "warning", detail: "Right-side dominant" },
  { label: "Landing Impact", value: "4.2g", status: "danger", detail: "Above threshold (3.5g)" },
  { label: "Forefoot Pressure", value: "51% R / 42% L", status: "warning", detail: "Right forefoot overloaded" },
  { label: "Heel Pressure", value: "25% R / 30% L", status: "ok", detail: "Within normal range" },
  { label: "Gait Symmetry", value: "82%", status: "warning", detail: "Below 85% target" },
  { label: "Cutting Stability", value: "62/100", status: "warning", detail: "Ankle inversion risk detected" },
  { label: "Recovery Milestone", value: "Phase 3", status: "ok", detail: "On track for timeline" },
];

export const riskFindings = [
  { id: 1, title: "Right forefoot overloaded during landing", severity: "high", detail: "Right forefoot absorbs 51% of landing force vs 42% left. This exceeds the 5% asymmetry threshold and indicates compensatory loading patterns post-surgery." },
  { id: 2, title: "Left-right asymmetry increased after fatigue", severity: "high", detail: "Gait symmetry drops from 88% to 76% after 20 minutes of court activity, indicating fatigue-related movement breakdown." },
  { id: 3, title: "Cutting movement shows ankle inversion risk", severity: "medium", detail: "Lateral cutting movements show 14° ankle inversion angle, approaching the 18° risk threshold for lateral ankle sprain." },
  { id: 4, title: "Rehab-side loading is below target range", severity: "medium", detail: "Left (surgical) side absorbs only 47% of body weight during single-leg stance, below the 50% rehabilitation target." },
];

export const aiRecommendations = [
  { id: 1, priority: "critical", text: "Reduce high-impact drills for 48 hours", detail: "Landing force of 4.2g exceeds safe threshold. Allow tissue recovery before resuming jump-intensive training." },
  { id: 2, priority: "high", text: "Add controlled landing mechanics training", detail: "Focus on bilateral landing distribution. Target: reduce right-side dominance from 53% to below 52%." },
  { id: 3, priority: "high", text: "Increase single-leg balance exercises", detail: "Improve surgical-side proprioception. Recommended: 3 sets x 30 seconds single-leg stance, 2x daily." },
  { id: 4, priority: "medium", text: "Monitor Achilles loading during explosive starts", detail: "Track tendon loading during first-step acceleration. Current peak load: 6.8 kN (threshold: 7.2 kN)." },
  { id: 5, priority: "medium", text: "Continue progressive rehab loading protocol", detail: "Maintain 5% weekly increase in surgical-side loading. Current: 47% → Target: 50% by end of Phase 3." },
];

export const rehabExercises = [
  { id: 1, name: "Controlled Calf Raises", completed: true, riskLevel: "Low", reps: "3 × 15", feedback: "Good form. Eccentric phase improved by 12% since last session. Continue current load." },
  { id: 2, name: "Single-Leg Balance", completed: true, riskLevel: "Low", reps: "3 × 30s each", feedback: "Surgical-side stability improving. Wobble reduced by 8%. Ready to add unstable surface." },
  { id: 3, name: "Low-Intensity Jump Landing", completed: false, riskLevel: "Medium", reps: "3 × 8", feedback: "Focus on bilateral landing. Last session showed 55% right-side dominance. Cue: 'Land soft, land even.'" },
  { id: 4, name: "Lateral Shuffle Drills", completed: false, riskLevel: "Medium", reps: "4 × 20m", feedback: "Monitor ankle inversion angle. Stay below 15° lateral tilt. Reduce speed if discomfort occurs." },
  { id: 5, name: "Assisted Sprint Starts", completed: false, riskLevel: "Medium-High", reps: "5 × 10m", feedback: "Achilles loading approaching threshold. Use resistance band assist. Peak force target: < 7.0 kN." },
];

export const weeklyGoals = [
  { goal: "Improve gait symmetry", target: "≥ 85%", current: "82%", status: "in-progress" },
  { goal: "Increase injured-side load tolerance", target: "≥ 50%", current: "47%", status: "in-progress" },
  { goal: "Reduce compensatory loading", target: "< 5% asymmetry", current: "6% asymmetry", status: "in-progress" },
  { goal: "Rebuild cutting stability", target: "≥ 70/100", current: "62/100", status: "behind" },
];

export const solanaRecords = [
  { type: "Gait Report Hash", hash: "7Kf9x...m3Qp", timestamp: "2026-05-10 14:32 UTC", wallet: "8xR4...vN7k", consent: "Active", milestone: "—" },
  { type: "Recovery Milestone", hash: "3Bn2w...k8Lr", timestamp: "2026-05-08 09:15 UTC", wallet: "8xR4...vN7k", consent: "Active", milestone: "Phase 3 Entry" },
  { type: "Training Completion", hash: "9Qm5t...p2Xv", timestamp: "2026-05-07 18:45 UTC", wallet: "8xR4...vN7k", consent: "Active", milestone: "Week 12 Complete" },
  { type: "Access Authorization", hash: "5Ht8r...n4Yw", timestamp: "2026-05-06 11:20 UTC", wallet: "8xR4...vN7k", consent: "Active", milestone: "Dr. Sarah Chen" },
  { type: "Gait Report Hash", hash: "2Vc6j...w9Kd", timestamp: "2026-05-05 16:08 UTC", wallet: "8xR4...vN7k", consent: "Active", milestone: "—" },
];

export const footPressureZones = {
  left: {
    bigToe: { pressure: 38, status: "normal" },
    toes: { pressure: 28, status: "normal" },
    outerForefoot: { pressure: 42, status: "normal" },
    innerForefoot: { pressure: 44, status: "normal" },
    midfoot: { pressure: 28, status: "normal" },
    outerHeel: { pressure: 32, status: "normal" },
    innerHeel: { pressure: 30, status: "normal" },
  },
  right: {
    bigToe: { pressure: 45, status: "warning" },
    toes: { pressure: 35, status: "normal" },
    outerForefoot: { pressure: 55, status: "danger" },
    innerForefoot: { pressure: 51, status: "warning" },
    midfoot: { pressure: 24, status: "normal" },
    outerHeel: { pressure: 27, status: "normal" },
    innerHeel: { pressure: 23, status: "low" },
  },
};