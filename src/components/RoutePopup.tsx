"use client";

import type { BackboneRoute, NodeStatus } from "@/types";
import { useBackboneStore } from "@/store/backboneStore";
import { Route, Trash2, TrendingDown, TrendingUp } from "lucide-react";

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

export function RoutePopup({ route }: { route: BackboneRoute }) {
  const { deleteRoute, updateRoute } = useBackboneStore();

  const cycleStatus = () => {
    const next: Record<NodeStatus, NodeStatus> = {
      active: "alert",
      alert: "inactive",
      inactive: "active",
    };
    updateRoute(route.id, { status: next[route.status] });
  };

  return (
    <div className="w-60 font-rajdhani">
      {/* Header */}
      <div className="flex items-center justify-between px-3 pt-3 pb-2 border-b border-border-dim">
        <div className="flex items-center gap-2">
          <Route className="w-3.5 h-3.5 text-accent-blue" />
          <span className="font-600 text-sm text-text-primary tracking-wider">
            {route.name}
          </span>
        </div>
        <button
          onClick={cycleStatus}
          className={`text-[9px] font-mono px-1.5 py-0.5 rounded border tracking-wider cursor-pointer hover:opacity-70 transition-opacity ${statusColor[route.status]}`}
        >
          {statusLabel[route.status]}
        </button>
      </div>

      {/* Stats */}
      <div className="px-3 py-2.5 space-y-2">
        {/* Distance */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Distância</span>
          <span className="font-mono text-xs text-text-primary font-600">
            {route.distanceKm.toFixed(1)} km
          </span>
        </div>

        {/* Throughput */}
        {(route.downGbps || route.upGbps) && (
          <>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-text-muted">
                <TrendingDown className="w-3 h-3 text-accent-blue" />
                <span className="text-xs">Download</span>
              </div>
              <span className="font-mono text-xs text-accent-blue font-600">
                {(route.downGbps || 0).toFixed(2)} Gbps
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-text-muted">
                <TrendingUp className="w-3 h-3 text-accent-cyan" />
                <span className="text-xs">Upload</span>
              </div>
              <span className="font-mono text-xs text-accent-cyan font-600">
                {(route.upGbps || 0).toFixed(2)} Gbps
              </span>
            </div>
          </>
        )}

        {/* Points */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">Waypoints</span>
          <span className="font-mono text-xs text-text-muted">
            {route.waypoints.length} pontos
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 px-2 pb-2 border-t border-border-dim pt-2">
        <button
          onClick={cycleStatus}
          className="flex-1 py-1.5 rounded text-[11px] font-600 tracking-wide text-text-muted hover:text-accent-yellow hover:bg-accent-yellow/10 transition-colors"
        >
          Alterar Status
        </button>
        <div className="w-px h-5 bg-border-dim" />
        <button
          onClick={() => deleteRoute(route.id)}
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded text-[11px] font-600 tracking-wide text-text-muted hover:text-accent-red hover:bg-accent-red/10 transition-colors"
        >
          <Trash2 className="w-3 h-3" />
          Remover
        </button>
      </div>
    </div>
  );
}
