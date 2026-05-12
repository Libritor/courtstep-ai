import React from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  Shield,
  Brain,
  ArrowRight,
  Footprints,
  Zap,
  Wallet,
  Upload,
  FileCheck,
  Sparkles,
  Lock,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { stackBadges } from "@/lib/mockData";

const featureCards = [
  {
    icon: Footprints,
    title: "Smart Insoles",
    desc: "Pressure, gait, impact, and load symmetry captured by 256 high-density sensors per insole.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Brain,
    title: "AI Risk Engine",
    desc: "Injury risk, fatigue, landing instability, and recovery readiness scored in real time.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
  },
  {
    icon: Shield,
    title: "Solana Proof Layer",
    desc: "Encrypted health data offchain. Hashes, consent, and revocation proofs onchain.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
];

const ctas = [
  { label: "Launch Demo", to: "/demo", icon: Zap, primary: true },
  { label: "Connect Wallet", to: "/demo", icon: Wallet },
  { label: "Upload Sensor Data", to: "/upload", icon: Upload },
  { label: "Generate Risk Report", to: "/risk-report", icon: Brain },
  { label: "Commit Proof to Solana", to: "/solana-proofs", icon: FileCheck },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium text-accent">Solana Frontier Hackathon · Live dApp Demo</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6">
              CourtStep AI
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-foreground max-w-3xl mx-auto mb-4">
              AI-powered smart insoles for{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                injury prevention, recovery, and performance.
              </span>
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Pressure sensors and movement AI detect risk before injury happens, while Solana records
              privacy-preserving proofs of training, recovery, and consent.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {ctas.map((cta) => (
                <Link key={cta.label} to={cta.to}>
                  <Button
                    size="lg"
                    variant={cta.primary ? "default" : "outline"}
                    className="h-11 px-5 text-sm font-semibold gap-2"
                  >
                    <cta.icon className="w-4 h-4" />
                    {cta.label}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three feature cards */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {featureCards.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`group bg-card border rounded-2xl p-7 hover:border-primary/30 transition-all duration-300 ${f.border}`}
            >
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-5`}>
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core message */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-2xl p-8 md:p-12 text-center">
          <p className="text-base md:text-xl text-foreground leading-relaxed font-medium">
            CourtStep AI is not just an injury dashboard. It is a{" "}
            <span className="text-accent">privacy-preserving sports-health data layer</span> where{" "}
            athletes control access, teams get actionable risk insights, and{" "}
            <span className="text-primary">Solana verifies consent, provenance, and payments.</span>
          </p>
        </div>
      </section>

      {/* Architecture flow */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Technical Architecture</h2>
            <p className="text-sm text-muted-foreground">From foot to Solana, in milliseconds.</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 overflow-x-auto">
            <div className="flex items-center justify-between gap-2 min-w-[800px]">
              {[
                { label: "Smart Insole", icon: Footprints, color: "primary" },
                { label: "Sensor Upload", icon: Upload, color: "primary" },
                { label: "AI Risk Engine", icon: Brain, color: "secondary" },
                { label: "Encrypted Storage", icon: Lock, color: "secondary" },
                { label: "Hash + Consent", icon: FileCheck, color: "accent" },
                { label: "Solana", icon: Shield, color: "accent" },
                { label: "Team Dashboard", icon: TrendingUp, color: "yellow-400" },
              ].map((node, idx, arr) => (
                <React.Fragment key={node.label}>
                  <div className="flex flex-col items-center text-center gap-2 flex-1 min-w-[90px]">
                    <div className={`w-12 h-12 rounded-xl bg-${node.color}/10 border border-${node.color}/20 flex items-center justify-center`}>
                      <node.icon className={`w-5 h-5 text-${node.color}`} />
                    </div>
                    <span className="text-[11px] font-semibold leading-tight">{node.label}</span>
                  </div>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Stack badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {stackBadges.map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-lg bg-muted/40 border border-border text-[11px] font-mono font-medium text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See it live.</h2>
          <p className="text-base text-muted-foreground mb-8">
            Launch the demo, connect a wallet, and commit your first proof to Solana.
          </p>
          <Link to="/demo">
            <Button size="lg" className="h-12 px-8 gap-2 text-sm font-semibold">
              <Zap className="w-4 h-4" /> Launch Demo <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}