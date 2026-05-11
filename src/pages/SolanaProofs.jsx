import React, { useState } from "react";
import { solanaRecords } from "@/lib/mockData";
import { Shield, Wallet, Link2, Award, FileCheck, UserCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import SolanaRecordRow from "@/components/solana/SolanaRecordRow";

export default function SolanaProofs() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [minting, setMinting] = useState(null);
  const { toast } = useToast();

  const handleConnect = () => {
    setWalletConnected(true);
    setWalletAddress("8xR4mN7kP2vQ5tLw9jB3cF6gH1dS0aY4uE8iO7nK");
    toast({ title: "Wallet Connected", description: "Phantom wallet connected successfully." });
  };

  const handleAction = (action) => {
    setMinting(action);
    setTimeout(() => {
      setMinting(null);
      toast({ title: "Transaction Complete", description: `${action} has been submitted to Solana.` });
    }, 2000);
  };

  const actions = [
    { id: "mint", label: "Mint Recovery Milestone Proof", icon: Award, color: "bg-accent/15 text-accent hover:bg-accent/25" },
    { id: "hash", label: "Store Gait Report Hash", icon: FileCheck, color: "bg-primary/15 text-primary hover:bg-primary/25" },
    { id: "auth", label: "Authorize Team Doctor Access", icon: UserCheck, color: "bg-secondary/15 text-secondary hover:bg-secondary/25" },
    { id: "training", label: "Generate Training Completion Record", icon: Sparkles, color: "bg-yellow-400/15 text-yellow-400 hover:bg-yellow-400/25" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Shield className="w-6 h-6 text-yellow-400" />
          Solana Proof Layer
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Privacy-preserving on-chain verification for athlete data</p>
      </div>

      {/* Explainer */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Link2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <h2 className="text-base font-semibold mb-2">How It Works</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Raw medical and biomechanical data is <strong className="text-foreground">never stored on-chain</strong>. 
              Solana only stores verifiable hashes, permission records, and recovery proofs. This ensures 
              athletes maintain full control over their private health data while enabling transparent 
              verification of rehabilitation milestones and team access consent.
            </p>
          </div>
        </div>
      </div>

      {/* Wallet */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Wallet Connection</h2>
        {!walletConnected ? (
          <Button onClick={handleConnect} className="gap-2">
            <Wallet className="w-4 h-4" /> Connect Solana Wallet
          </Button>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <Wallet className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Connected Wallet</p>
              <p className="text-sm font-mono font-medium">{walletAddress.slice(0, 8)}...{walletAddress.slice(-6)}</p>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      {walletConnected && (
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">On-Chain Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {actions.map((a) => (
              <button
                key={a.id}
                onClick={() => handleAction(a.label)}
                disabled={minting !== null}
                className={`flex items-center gap-3 p-4 rounded-xl border border-border transition-all duration-200 ${a.color} ${minting === a.label ? "opacity-50" : ""}`}
              >
                <a.icon className="w-5 h-5 shrink-0" />
                <span className="text-sm font-medium text-left">
                  {minting === a.label ? "Processing..." : a.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Records table */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">On-Chain Records</h2>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Hash</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Timestamp</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Wallet</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Consent</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Milestone</th>
                </tr>
              </thead>
              <tbody>
                {solanaRecords.map((r, i) => (
                  <SolanaRecordRow key={i} record={r} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}