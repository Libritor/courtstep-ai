import React from "react";
import { Lock, Shield, EyeOff, UserCheck, KeyRound, Database, FileCheck, AlertTriangle } from "lucide-react";

const principles = [
  {
    icon: Lock,
    title: "Raw data stays encrypted offchain",
    desc: "Pressure, gait, and biomechanical readings are encrypted with AES-256-GCM and stored offchain. Solana never sees raw health data.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Solana stores verification proofs only",
    desc: "Only SHA-256 hashes, consent metadata, model versions, and permission proofs are committed on-chain.",
    color: "accent",
  },
  {
    icon: UserCheck,
    title: "Athletes control who can access data",
    desc: "Each athlete holds the keys. Team doctors, trainers, and clinics require explicit consent scopes to access encrypted data.",
    color: "secondary",
  },
  {
    icon: EyeOff,
    title: "Teams see risk insights, not raw data",
    desc: "Coaching and medical staff receive scored risk insights and recommendations — never unnecessary private raw biometric streams.",
    color: "yellow",
  },
  {
    icon: KeyRound,
    title: "Consent can be revoked",
    desc: "Athletes can revoke any access permission at any time. Revocation events are recorded on-chain for full auditability.",
    color: "primary",
  },
  {
    icon: FileCheck,
    title: "Built for sports-medicine workflows",
    desc: "Designed to align with privacy-preserving sports medicine — HIPAA-aware data flows, consent provenance, and reversible access.",
    color: "accent",
  },
];

export default function Privacy() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Lock className="w-6 h-6 text-secondary" />
          Privacy Architecture
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          How CourtStep AI protects athlete data while making proof verifiable on Solana.
        </p>
      </div>

      {/* Hero statement */}
      <div className="bg-gradient-to-br from-card via-card to-secondary/5 border border-secondary/20 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-lg md:text-2xl font-bold leading-relaxed max-w-3xl mx-auto">
          Raw health data stays{" "}
          <span className="text-primary">encrypted offchain</span>.{" "}
          <span className="text-accent">Hashes and consent proofs</span> go on Solana. Athletes hold the keys.
        </p>
      </div>

      {/* Six principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {principles.map((p) => (
          <div key={p.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
            <div className={`w-11 h-11 rounded-xl bg-${p.color}/10 border border-${p.color}/20 flex items-center justify-center mb-4`}>
              <p.icon className={`w-5 h-5 text-${p.color}`} />
            </div>
            <h3 className="text-sm font-bold mb-2">{p.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Data flow diagram */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <h2 className="text-base font-bold mb-5">Data Flow & Trust Boundary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Off-chain */}
          <div className="p-5 rounded-xl bg-muted/20 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-4 h-4 text-primary" />
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Offchain</p>
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• Raw sensor pressure streams (encrypted AES-256-GCM)</li>
              <li>• Gait time-series data</li>
              <li>• Risk model predictions</li>
              <li>• Medical notes &amp; rehabilitation history</li>
              <li>• Athlete identifiers (encrypted)</li>
            </ul>
          </div>
          {/* On-chain */}
          <div className="p-5 rounded-xl bg-accent/5 border border-accent/20">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-accent" />
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Onchain (Solana)</p>
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• SHA-256 data hash</li>
              <li>• Model version hash</li>
              <li>• Consent scope &amp; expiry</li>
              <li>• Permission grants &amp; revocations</li>
              <li>• Recovery milestone proofs</li>
              <li>• Payment / access receipts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Threat model */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
          <div>
            <h2 className="text-base font-bold">Threat Model & Audit Readiness</h2>
            <p className="text-xs text-muted-foreground mt-1">Clear smart-contract boundary designed for security review.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { t: "Replay attacks", m: "Each proof includes a unique session ID + timestamp + slot reference." },
            { t: "Consent forgery", m: "Consent grants are signed by the athlete's wallet only; revocation events emit on-chain." },
            { t: "Data linkability", m: "Salted hashes prevent cross-session correlation of raw data." },
            { t: "Unauthorized access", m: "Decryption keys are sharded; access requires both athlete + counterparty signatures." },
            { t: "Indexer trust", m: "All proof events are publicly indexable (Dune / Covalent / GoldRush) for independent verification." },
            { t: "Payment leakage", m: "Stablecoin payments are routed via standard SPL Token program; PII never touches payment flow." },
          ].map((r) => (
            <div key={r.t} className="p-4 rounded-lg bg-muted/20 border border-border">
              <p className="text-xs font-bold mb-1">{r.t}</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{r.m}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}