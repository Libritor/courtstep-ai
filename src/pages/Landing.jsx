import React from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  Shield,
  Brain,
  HeartPulse,
  Zap,
  ArrowRight,
  ChevronRight,
  Footprints,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Injury Prevention",
    desc: "Detect abnormal foot-loading patterns and biomechanical risk indicators before injuries occur.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Activity,
    title: "Movement Correction",
    desc: "Real-time gait analysis and AI-powered feedback to correct risky movement mechanics.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: HeartPulse,
    title: "Post-Surgery Rehab",
    desc: "Guided rehabilitation protocols with progress tracking and adaptive exercise recommendations.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Shield,
    title: "Privacy-Preserving Proofs",
    desc: "Solana stores only verifiable hashes and permission records. Raw medical data stays private.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
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
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">AI-Powered Smart Insole Platform</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              AI Smart Insoles for{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Basketball Injury Prevention
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Detect abnormal foot-loading patterns, correct risky movement mechanics, and guide athlete
              rehabilitation with privacy-preserving on-chain proofs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="h-12 px-8 text-sm font-semibold gap-2">
                  View Athlete Dashboard <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/upload">
                <Button variant="outline" size="lg" className="h-12 px-8 text-sm font-semibold gap-2">
                  Upload Gait Data <Footprints className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-5`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visual Card */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">How CourtStep AI Works</h2>
                <div className="space-y-4">
                  {[
                    { step: "01", label: "Smart Insole Sensors", desc: "High-density pressure sensors capture real-time foot-loading data during training and games." },
                    { step: "02", label: "AI Gait Analysis", desc: "Machine learning models analyze gait symmetry, landing impact, and cutting mechanics." },
                    { step: "03", label: "Risk Detection", desc: "Early biomechanical risk indicators are flagged before injuries develop." },
                    { step: "04", label: "On-Chain Proofs", desc: "Recovery milestones and consent records are stored as Solana-verified proofs." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <span className="text-xs font-bold text-primary font-mono mt-1">{s.step}</span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{s.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Footprints, label: "Smart Insoles", val: "256 sensors", color: "primary" },
                  { icon: Brain, label: "AI Analysis", val: "Real-time", color: "secondary" },
                  { icon: Activity, label: "Risk Score", val: "72 / 100", color: "destructive" },
                  { icon: Shield, label: "Solana Proof", val: "Verified", color: "accent" },
                ].map((c) => (
                  <div key={c.label} className="bg-background/60 border border-border rounded-xl p-4 text-center">
                    <c.icon className={`w-6 h-6 mx-auto mb-2 text-${c.color}`} />
                    <p className="text-xs font-semibold">{c.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 font-mono">{c.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed italic">
            "CourtStep AI combines smart insoles, AI gait analytics, and Solana-based privacy-preserving
            proofs to help professional basketball teams reduce injury risk, correct movement mechanics,
            and guide safe return-to-play rehabilitation."
          </p>
          <div className="mt-8">
            <Link to="/dashboard">
              <Button variant="outline" className="gap-2">
                Explore the Platform <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}