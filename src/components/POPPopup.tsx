"use client";

import type { POP, NodeStatus } from "@/types";
import { useBackboneStore } from "@/store/backboneStore";
import { MapPin, Trash2, Edit3 } from "lucide-react";

const statusLabel: Record<NodeStatus, string> = {
  active: "ATIVO",
  alert: "ALERTA",
  inactive: "INATIVO",
};
const statusColor: Record<NodeStatus, string> = {
  active: "text-accent-green border-accent-green/30 bg-accent-green/10",
  alert: "text-accent-yellow border-accent-yellow/30 bg-accent-yellow/10",
  inactive: "text-accent-red border-accent-red/30 bg-accent-red/10",
};
const dotColor: Record<NodeStatus, string> = {
  active: "bg-accent-green shadow-[0_0_6px_rgba(0,232,126,0.6)]",
  alert: "bg-accent-yellow shadow-[0_0_6px_rgba(255,184,0,0.6)]",
  inactive: "bg-accent-red",
};

export function POPPopup({ pop }: { pop: POP }) {
  const { deletePOP, updatePOP } = useBackboneStore();

  const cycleStatus = () => {
    const next: Record<NodeStatus, NodeStatus> = {
      active: "alert",
      alert: "inactive",
      inactive: "active",
    };
    updatePOP(pop.id, { status: next[pop.status] });
  };

  return (
    <div className="w-56 font-rajdhani">
      {/* Header */}
      <div className="flex items-center justify-between px-3 pt-3 pb-2 border-b border-border-dim">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-accent-green" />
          <span className="font-600 text-sm text-text-primary tracking-wider">
            {pop.name}
          </span>
        </div>
        <button
          onClick={cycleStatus}
          className={`text-[9px] font-mono px-1.5 py-0.5 rounded border tracking-wider cursor-pointer transition-opacity hover:opacity-70 ${statusColor[pop.status]}`}
        >
          {statusLabel[pop.status]}
        </button>
      </div>

      {/* Body */}
      <div className="px-3 py-2.5 space-y-2">
        {pop.description && (
          <p className="text-xs text-text-muted">{pop.description}</p>
        )}
        {pop.address && (
          <div className="flex items-start gap-1.5">
            <span className="text-[10px] text-text-muted mt-0.5">📍</span>
            <span className="text-[11px] text-text-muted">{pop.address}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${dotColor[pop.status]}`} />
          <span className="text-[11px] font-mono text-text-muted">
            {pop.lat.toFixed(5)}, {pop.lng.toFixed(5)}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 px-2 pb-2 border-t border-border-dim pt-2">
        <button
          onClick={() =>
            updatePOP(pop.id, {
              status:
                pop.status === "active"
                  ? "inactive"
                  : pop.status === "inactive"
                  ? "alert"
                  : "active",
            })
          }
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded text-[11px] font-600 tracking-wide text-text-muted hover:text-accent-green hover:bg-accent-green/10 transition-colors"
        >
          <Edit3 className="w-3 h-3" />
          Editar Status
        </button>
        <div className="w-px h-5 bg-border-dim" />
        <button
          onClick={() => deletePOP(pop.id)}
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded text-[11px] font-600 tracking-wide text-text-muted hover:text-accent-red hover:bg-accent-red/10 transition-colors"
        >
          <Trash2 className="w-3 h-3" />
          Remover
        </button>
      </div>
    </div>
  );
}
