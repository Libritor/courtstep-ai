import React from "react";
import { paymentPlans } from "@/lib/mockData";
import { CreditCard, Check, Wallet, Coins, Building2, User, HeartPulse, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const iconMap = {
  team: Building2,
  athlete: User,
  rehab: HeartPulse,
  research: FlaskConical,
};

export default function Payments() {
  const { toast } = useToast();

  const handlePay = (plan) => {
    toast({
      title: "Stablecoin payment initiated",
      description: `${plan.price} ${plan.currency} for ${plan.title}`,
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <CreditCard className="w-6 h-6 text-primary" />
          Payments & Access
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Teams, clinics, and trainers pay for athlete care in stablecoins on Solana.
        </p>
      </div>

      {/* Stablecoin info */}
      <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
            <Coins className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-1">Stablecoin-Native Healthcare Payments</h2>
            <p className="text-sm text-muted-foreground">
              All access plans are settled in USDC, USDT, or Solana-native stablecoins. Receipts are
              issued as on-chain proofs tied to consent scopes — no PII ever touches the payment rail.
            </p>
          </div>
          <div className="flex gap-2">
            {["USDC", "USDT", "PYUSD"].map((c) => (
              <span key={c} className="px-3 py-1.5 rounded-lg bg-muted/40 border border-border text-xs font-mono font-semibold">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {paymentPlans.map((plan) => {
          const Icon = iconMap[plan.id];
          return (
            <div
              key={plan.id}
              className={`bg-card border-2 rounded-2xl p-6 hover:border-${plan.accent}/40 transition-all duration-200 border-${plan.accent}/20`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl bg-${plan.accent}/10 flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 text-${plan.accent}`} />
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold font-mono">{plan.price}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{plan.currency} / {plan.period}</p>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1">{plan.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">{plan.desc}</p>

              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs">
                    <Check className={`w-3.5 h-3.5 text-${plan.accent}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handlePay(plan)}
                className="w-full gap-2"
                variant={plan.accent === "primary" ? "default" : "outline"}
              >
                <Wallet className="w-4 h-4" /> Pay {plan.price} {plan.currency}
              </Button>
            </div>
          );
        })}
      </div>

      {/* Use cases */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-base font-bold mb-4">Who Pays for What</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {[
            { who: "Pro Teams", what: "Roster-wide injury monitoring & medical dashboard access." },
            { who: "Clinics & Physical Therapists", what: "Rehabilitation programs with milestone proofs tied to insurance." },
            { who: "Sports Researchers", what: "Anonymized, consent-verified data licenses for biomechanics studies." },
          ].map((u) => (
            <div key={u.who} className="p-4 rounded-lg bg-muted/20 border border-border">
              <p className="font-bold mb-1">{u.who}</p>
              <p className="text-muted-foreground">{u.what}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}