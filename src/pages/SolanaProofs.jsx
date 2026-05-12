import React, { useState } from "react";
import { solanaRecords, solanaProofDetails } from "@/lib/mockData";
import { Shield, Wallet, Link2, Award, FileCheck, UserCheck, Sparkles, Copy, ExternalLink, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { connectSolanaWallet, signProofMessage } from "@/lib/proofUtils";
import SolanaRecordRow from "@/components/solana/SolanaRecordRow";

export default function SolanaProofs() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [walletProvider, setWalletProvider] = useState(null);
  const [isRealWallet, setIsRealWallet] = useState(false);
  const [minting, setMinting] = useState(null);
  const [revoked, setRevoked] = useState(false);
  const { toast } = useToast();

  const handleConnect = async () => {
    const connection = await connectSolanaWallet();
    setWalletConnected(true);
    setWalletAddress(connection.address);
    setWalletProvider(connection.provider);
    setIsRealWallet(connection.isRealWallet);
    toast({
      title: connection.isRealWallet ? "Wallet Connected" : "Demo Wallet Loaded",
      description: connection.isRealWallet
        ? `${connection.address.slice(0, 4)}...${connection.address.slice(-4)}`
        : "Install Phantom or Solflare for real wallet signing.",
    });
  };

  const handleAction = async (action) => {
    setMinting(action);
    const message = `CourtStep AI ${action}\nWallet: ${walletAddress}\nHash: ${solanaProofDetails.dataHash}\nConsent: ${solanaProofDetails.consentScope}`;
    const signature = await signProofMessage(walletProvider, message);
    setMinting(null);
    toast({
      title: signature ? "Proof Signed" : "Demo Proof Generated",
      description: signature ? "Wallet signature captured for verification." : "Connect a real wallet to sign on Solana.",
    });
  };

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied to clipboard" });
  };

  const handleRevoke = () => {
    setRevoked(true);
    toast({ title: "Access Revoked", description: "Revocation event committed to Solana." });
  };

  const actions = [
    { id: "mint", label: "Mint Recovery Milestone Proof", icon: Award, color: "accent" },
    { id: "hash", label: "Store Gait Report Hash", icon: FileCheck, color: "primary" },
    { id: "auth", label: "Authorize Team Doctor Access", icon: UserCheck, color: "secondary" },
    { id: "training", label: "Generate Training Completion Record", icon: Sparkles, color: "yellow" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Shield className="w-6 h-6 text-accent" />
          Solana Proof Layer
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Privacy-preserving on-chain verification for athlete health events.
        </p>
      </div>

      {/* Principle banner */}
      <div className="bg-gradient-to-br from-card via-card to-accent/5 border border-accent/30 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
          <div>
            <h2 className="text-base font-bold mb-1">Do not store raw health data on Solana.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CourtStep AI stores only <strong className="text-foreground">hashes, consent metadata, and permission proofs</strong> on Solana.
              Raw biomechanical and medical data remain encrypted offchain, under athlete control.
            </p>
          </div>
        </div>
      </div>

      {/* Featured proof card */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] text-accent font-bold uppercase tracking-wider">Latest Committed Proof</p>
            <h2 className="text-base font-bold mt-0.5">Marcus Johnson — Session 2026-05-10</h2>
          </div>
          <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent uppercase">
            {revoked ? "Revoked" : "Active"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
          <ProofField label="Wallet Address" value={solanaProofDetails.walletAddress} mono onCopy={copy} />
          <ProofField label="Session ID" value={solanaProofDetails.sessionId} mono onCopy={copy} />
          <ProofField label="Data Hash (SHA-256)" value={solanaProofDetails.dataHash} mono onCopy={copy} />
          <ProofField label="Model Version Hash" value={solanaProofDetails.modelHash} mono onCopy={copy} />
          <ProofField label="Consent Scope" value={solanaProofDetails.consentScope} />
          <ProofField label="Timestamp (UTC)" value={solanaProofDetails.timestamp} mono />
          <ProofField label="Transaction Signature" value={solanaProofDetails.txSignature} mono onCopy={copy} />
          <ProofField label="Network" value={solanaProofDetails.network} />
        </div>

        <div className="mt-5 flex flex-wrap gap-3 pt-5 border-t border-border">
          <Button variant="outline" size="sm" className="gap-2" disabled>
            <ExternalLink className="w-3.5 h-3.5" /> View on Explorer
          </Button>
          {!revoked ? (
            <Button onClick={handleRevoke} variant="outline" size="sm" className="gap-2 text-destructive border-destructive/30 hover:bg-destructive/10">
              <XCircle className="w-3.5 h-3.5" /> Revoke Access
            </Button>
          ) : (
            <span className="px-3 py-1.5 rounded-lg bg-destructive/10 border border-destructive/20 text-xs font-semibold text-destructive">
              Access revoked · permission record updated
            </span>
          )}
        </div>
      </div>

      {/* How it works */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Link2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <h2 className="text-base font-semibold mb-2">How It Works</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Raw medical and biomechanical data is <strong className="text-foreground">never stored on-chain</strong>.
              Solana only stores verifiable hashes, permission records, and recovery proofs. Athletes maintain full
              control over their private health data while enabling transparent verification of rehabilitation
              milestones and consent.
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
              <p className="text-[10px] text-muted-foreground">{isRealWallet ? "Real wallet signing enabled" : "Demo mode — wallet extension not detected"}</p>
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
                className={`flex items-center gap-3 p-4 rounded-xl border border-${a.color}/20 bg-${a.color}/5 hover:bg-${a.color}/15 transition-all duration-200 ${
                  minting === a.label ? "opacity-50" : ""
                }`}
              >
                <a.icon className={`w-5 h-5 shrink-0 text-${a.color}`} />
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

function ProofField({ label, value, mono, onCopy }) {
  return (
    <div>
      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
      <div className="flex items-center gap-2">
        <p className={`text-xs ${mono ? "font-mono" : ""} break-all flex-1`}>{value}</p>
        {onCopy && (
          <button onClick={() => onCopy(value)} className="text-muted-foreground hover:text-foreground shrink-0">
            <Copy className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}