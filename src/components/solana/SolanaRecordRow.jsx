import React from "react";

export default function SolanaRecordRow({ record }) {
  return (
    <tr className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
      <td className="px-4 py-3 text-xs font-medium">{record.type}</td>
      <td className="px-4 py-3 text-xs font-mono text-primary">{record.hash}</td>
      <td className="px-4 py-3 text-xs text-muted-foreground">{record.timestamp}</td>
      <td className="px-4 py-3 text-xs font-mono text-muted-foreground">{record.wallet}</td>
      <td className="px-4 py-3">
        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-accent/15 text-accent">
          {record.consent}
        </span>
      </td>
      <td className="px-4 py-3 text-xs text-muted-foreground">{record.milestone}</td>
    </tr>
  );
}