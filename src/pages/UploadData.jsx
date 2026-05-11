import React, { useState } from "react";
import { Upload, FileText, Play, CheckCircle2, AlertTriangle, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import UploadResults from "@/components/upload/UploadResults";

const sampleFields = [
  "timestamp", "left_forefoot_pressure", "right_forefoot_pressure",
  "left_heel_pressure", "right_heel_pressure", "acceleration",
  "landing_force", "ankle_angle", "gait_phase",
];

export default function UploadData() {
  const [uploaded, setUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleUpload = () => {
    setUploaded(true);
    setResults(null);
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResults({
        summary: "Analysis complete. 2,400 data points processed across 30-minute training session.",
        risks: [
          { label: "Right forefoot overload detected", severity: "high" },
          { label: "Gait asymmetry above threshold after fatigue", severity: "high" },
          { label: "Landing impact within normal range", severity: "low" },
          { label: "Ankle inversion angle approaching risk zone", severity: "medium" },
        ],
        metrics: {
          symmetry: "82%",
          peakForce: "4.2g",
          avgPressure: "48%",
          fatigueOnset: "18 min",
        },
      });
    }, 3000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Upload className="w-6 h-6 text-primary" />
          Upload Gait Data
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Import smart insole data for AI-powered analysis</p>
      </div>

      {/* Upload area */}
      <div
        onClick={handleUpload}
        className="bg-card border-2 border-dashed border-border rounded-2xl p-12 text-center cursor-pointer hover:border-primary/50 transition-colors duration-200"
      >
        <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
          {uploaded ? <CheckCircle2 className="w-7 h-7 text-accent" /> : <Upload className="w-7 h-7 text-primary" />}
        </div>
        <p className="text-sm font-semibold mb-1">
          {uploaded ? "gait_session_20260510.csv uploaded" : "Click to upload CSV file"}
        </p>
        <p className="text-xs text-muted-foreground">
          {uploaded ? "2,400 rows · 30 min session · Ready for analysis" : "Accepts .csv files with smart insole sensor data"}
        </p>
      </div>

      {/* Expected format */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
          <FileText className="w-4 h-4" /> Expected Data Format
        </h2>
        <div className="flex flex-wrap gap-2">
          {sampleFields.map((f) => (
            <span key={f} className="px-3 py-1.5 rounded-lg bg-muted text-xs font-mono text-muted-foreground">
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Analyze button */}
      {uploaded && !results && (
        <Button
          onClick={handleAnalyze}
          disabled={analyzing}
          size="lg"
          className="gap-2"
        >
          {analyzing ? (
            <>
              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              Running AI Analysis...
            </>
          ) : (
            <>
              <Brain className="w-4 h-4" /> Run AI Gait Analysis
            </>
          )}
        </Button>
      )}

      {/* Results */}
      {results && <UploadResults results={results} />}
    </div>
  );
}