import React, { useState } from "react";
import { athletes, solanaProofDetails } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Wallet,
  Upload,
  Brain,
  Shield,
  CheckCircle2,
  Circle,
  Loader2,
  ExternalLink,
  Copy,
  Zap,
  FileCheck,
  Lock,
} from "lucide-react";
import AthleteSelector from "@/components/dashboard/AthleteSelector";

const steps = [
  { id: "wallet", label: "Connect Wallet", icon: Wallet },
  { id: "athlete", label: "Select Athlete", icon: CheckCircle2 },
  { id: "upload", label: "Upload Sensor CSV", icon: Upload },
  { id: "risk", label: "Generate AI Risk Score", icon: Brain },
  { id: "encrypt", label: "Encrypt & Store Offchain", icon: Lock },
  { id: "commit", label: "Commit Proof to Solana", icon: Shield },
];

export default function LiveDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [selectedAthlete, setSelectedAthlete] = useState(athletes[0]);
  const [uploaded, setUploaded] = useState(false);
  const [riskScore, setRiskScore] = useState(null);
  const [encrypted, setEncrypted] = useState(false);
  const [committed, setCommitted] = useState(false);
  const [processing, setProcessing] = useState(null);
  const { toast } = useToast();

  const advance = (id) => setActiveStep(steps.findIndex((s) => s.id === id) + 1);

  const handleConnect = () => {
    setProcessing("wallet");
    setTimeout(() => {
      setWalletConnected(true);
      setProcessing(null);
      advance("wallet");
      toast({ title: "Wallet Connected", description: "Phantom · 8xR4...vN7k" });
    }, 1200);
  };

  const handleUpload = () => {
    setProcessing("upload");
    setTimeout(() => {
      setUploaded(true);
      setProcessing(null);
      advance("upload");
      toast({ title: "Sensor file uploaded", description: "gait_session_20260510.csv · 2,400 rows" });
    }, 1500);
  };

  const handleRisk = () => {
    setProcessing("risk");
    setTimeout(() => {
      setRiskScore(72);
      setProcessing(null);
      advance("risk");
      toast({ title: "Risk score generated", description: "AI model: courtstep-risk-v1.4.2" });
    }, 2000);
  };

  const handleEncrypt = () => {
    setProcessing("encrypt");
    setTimeout(() => {
      setEncrypted(true);
      setProcessing(null);
      advance("encrypt");
      toast({ title: "Encrypted health data stored offchain", description: "AES-256-GCM · IPFS-pinned" });
    }, 1500);
  };

  const handleCommit = () => {
    setProcessing("commit");
    setTimeout(() => {
      setCommitted(true);
      setProcessing(null);
      advance("commit");
      toast({ title: "SHA-256 proof committed", description: "Solana tx confirmed" });
    }, 2200);
  };

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied to clipboard" });
  };

  const stepStatus = (idx) => {
    if (idx < activeStep) return "complete";
    if (idx === activeStep) return "current";
    return "pending";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Demo Version</span>
          </div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <Zap className="w-6 h-6 text-accent" />
            CourtStep AI — Demo Version Flow
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Try the full CourtStep workflow with safe sample data before using real uploads.
          </p>
        </div>
      </div>

      {/* Step tracker */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {steps.map((s, idx) => {
            const status = stepStatus(idx);
            return (
              <div
                key={s.id}
                className={`relative p-3 rounded-xl border ${
                  status === "complete"
                    ? "bg-accent/10 border-accent/30"
                    : status === "current"
                    ? "bg-primary/10 border-primary/40 ring-2 ring-primary/20"
                    : "bg-muted/20 border-border"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {status === "complete" ? (
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  ) : status === "current" ? (
                    <Circle className="w-4 h-4 text-primary animate-pulse" />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground" />
                  )}
                  <span className="text-[10px] font-mono text-muted-foreground">0{idx + 1}</span>
                </div>
                <p className="text-xs font-semibold leading-tight">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Wallet */}
        <ActionPanel
          step="01"
          title="Connect Wallet"
          desc="Connect a Solana wallet (Phantom, Solflare, Backpack)."
          icon={Wallet}
          color="primary"
          complete={walletConnected}
        >
          {!walletConnected ? (
            <Button onClick={handleConnect} disabled={processing === "wallet"} className="gap-2">
              {processing === "wallet" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wallet className="w-4 h-4" />}
              Connect Phantom
            </Button>
          ) : (
            <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-muted/30">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase">Connected</p>
                <p className="text-sm font-mono">{solanaProofDetails.walletAddress.slice(0, 8)}...{solanaProofDetails.walletAddress.slice(-6)}</p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>
          )}
        </ActionPanel>

        {/* 2. Athlete */}
        <ActionPanel
          step="02"
          title="Select Athlete"
          desc="Choose the athlete whose session data will be processed."
          icon={CheckCircle2}
          color="primary"
          complete={walletConnected}
          disabled={!walletConnected}
        >
          <AthleteSelector athletes={athletes} selected={selectedAthlete} onSelect={setSelectedAthlete} />
        </ActionPanel>

        {/* 3. Upload */}
        <ActionPanel
          step="03"
          title="Upload Sensor CSV"
          desc="Smart insole pressure, gait, and impact data from a recent session."
          icon={Upload}
          color="primary"
          complete={uploaded}
          disabled={!walletConnected}
        >
          {!uploaded ? (
            <Button onClick={handleUpload} disabled={processing === "upload" || !walletConnected} className="gap-2">
              {processing === "upload" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
              Upload gait_session.csv
            </Button>
          ) : (
            <StatusLine label="gait_session_20260510.csv" detail="2,400 rows · 30 min · ready" />
          )}
        </ActionPanel>

        {/* 4. Risk */}
        <ActionPanel
          step="04"
          title="Generate AI Risk Score"
          desc="Model: courtstep-risk-v1.4.2 — decision support, not medical diagnosis."
          icon={Brain}
          color="secondary"
          complete={riskScore !== null}
          disabled={!uploaded}
        >
          {riskScore === null ? (
            <Button onClick={handleRisk} disabled={processing === "risk" || !uploaded} className="gap-2">
              {processing === "risk" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Brain className="w-4 h-4" />}
              Run AI Risk Engine
            </Button>
          ) : (
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
              <div className="text-4xl font-bold font-mono text-secondary">{riskScore}</div>
              <div>
                <p className="text-xs font-semibold">Injury Risk Score (0–100)</p>
                <p className="text-[11px] text-muted-foreground">4 risk indicators detected · Achilles, asymmetry</p>
              </div>
            </div>
          )}
        </ActionPanel>

        {/* 5. Encrypt */}
        <ActionPanel
          step="05"
          title="Encrypt & Store Offchain"
          desc="AES-256-GCM encrypted health data pinned to offchain storage."
          icon={Lock}
          color="secondary"
          complete={encrypted}
          disabled={riskScore === null}
        >
          {!encrypted ? (
            <Button onClick={handleEncrypt} disabled={processing === "encrypt" || riskScore === null} className="gap-2">
              {processing === "encrypt" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
              Encrypt & Store
            </Button>
          ) : (
            <StatusLine label="Encrypted health data stored offchain" detail="AES-256-GCM · IPFS-pinned" />
          )}
        </ActionPanel>

        {/* 6. Commit */}
        <ActionPanel
          step="06"
          title="Commit Proof to Solana"
          desc="SHA-256 hash + consent scope + model version anchored on Solana."
          icon={Shield}
          color="accent"
          complete={committed}
          disabled={!encrypted}
        >
          {!committed ? (
            <Button onClick={handleCommit} disabled={processing === "commit" || !encrypted} className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              {processing === "commit" ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileCheck className="w-4 h-4" />}
              Commit Proof
            </Button>
          ) : (
            <StatusLine label="SHA-256 proof committed · Consent scope active · Revocation available" detail="Tx confirmed in 1 slot" />
          )}
        </ActionPanel>
      </div>

      {/* Proof result */}
      {committed && (
        <div className="bg-gradient-to-br from-card via-card to-accent/5 border border-accent/30 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <h2 className="text-base font-bold">Proof Successfully Committed</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <ProofRow label="Session ID" value={solanaProofDetails.sessionId} mono />
            <ProofRow label="Data Hash" value={solanaProofDetails.dataHash} mono copy onCopy={copy} />
            <ProofRow label="Model Version Hash" value={solanaProofDetails.modelHash} mono copy onCopy={copy} />
            <ProofRow label="Consent Scope" value={solanaProofDetails.consentScope} />
            <ProofRow label="Tx Signature" value={solanaProofDetails.txSignature} mono copy onCopy={copy} />
            <ProofRow label="Block Slot" value={solanaProofDetails.blockSlot.toLocaleString()} mono />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="gap-2" disabled>
              <ExternalLink className="w-3.5 h-3.5" /> View on Explorer
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              Revoke Access
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function ActionPanel({ step, title, desc, icon: Icon, color, complete, disabled, children }) {
  return (
    <div
      className={`bg-card border rounded-2xl p-6 transition-all ${
        complete ? "border-accent/30" : disabled ? "border-border opacity-60" : "border-border"
      }`}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl bg-${color}/10 border border-${color}/20 flex items-center justify-center shrink-0`}>
          <Icon className={`w-5 h-5 text-${color}`} />
        </div>
        <div>
          <p className="text-[10px] font-mono text-muted-foreground">{step}</p>
          <h3 className="text-sm font-bold">{title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function StatusLine({ label, detail }) {
  return (
    <div className="flex items-start gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20">
      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
      <div>
        <p className="text-xs font-semibold">{label}</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">{detail}</p>
      </div>
    </div>
  );
}

function ProofRow({ label, value, mono, copy, onCopy }) {
  return (
    <div>
      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
      <div className="flex items-center gap-2">
        <p className={`text-xs ${mono ? "font-mono" : ""} break-all flex-1`}>{value}</p>
        {copy && (
          <button onClick={() => onCopy(value)} className="text-muted-foreground hover:text-foreground">
            <Copy className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}