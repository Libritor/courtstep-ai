import React from "react";
import { riskFindings, aiRecommendations } from "@/lib/mockData";
import RiskFindingCard from "@/components/risk/RiskFindingCard";
import RecommendationCard from "@/components/risk/RecommendationCard";
import { Brain, AlertTriangle, Info } from "lucide-react";

export default function RiskReport() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Brain className="w-6 h-6 text-secondary" />
          AI Risk Report
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Biomechanical risk analysis for Marcus Johnson — Generated May 10, 2026</p>
      </div>

      {/* Summary */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
          <div>
            <h2 className="text-base font-semibold mb-2">Risk Summary</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Analysis of 48 hours of smart insole data detected <strong className="text-foreground">4 biomechanical risk indicators</strong> associated 
              with increased injury probability. Primary concerns include right forefoot overloading during landing phases and 
              fatigue-induced gait asymmetry. The athlete's post-surgery rehabilitation side (left) shows below-target loading 
              patterns, indicating compensatory movement mechanics.
            </p>
          </div>
        </div>
      </div>

      {/* Key Findings */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Key Findings</h2>
        <div className="space-y-3">
          {riskFindings.map((f) => (
            <RiskFindingCard key={f.id} finding={f} />
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">AI Recommendations</h2>
        <div className="space-y-3">
          {aiRecommendations.map((r) => (
            <RecommendationCard key={r.id} recommendation={r} />
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-muted/30 border border-border rounded-xl p-5 flex items-start gap-3">
        <Info className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Disclaimer</p>
          <p className="text-sm text-muted-foreground">
            This tool provides decision support and does not replace medical diagnosis. All findings and recommendations 
            should be reviewed by qualified medical professionals before clinical application.
          </p>
        </div>
      </div>
    </div>
  );
}