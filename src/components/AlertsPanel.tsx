"use client";

import { useBackboneStore } from "@/store/backboneStore";
import type { NodeStatus } from "@/types";
import { AlertTriangle } from "lucide-react";

export function AlertsPanel() {
  const pops = useBackboneStore((s) => s.pops);
  const routes = useBackboneStore((s) => s.routes);

  const alertPOPs = pops.filter((p) => p.status !== "active");
  const alertRoutes = routes.filter((r) => r.status !== "active");
  const allAlerts = [...alertPOPs, ...alertRoutes];

  if (allAlerts.length === 0) return null;

  return (
    <div className="glass-panel w-52 overflow-hidden animate-glow_in">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border-dim">
        <AlertTriangle className="w-3.5 h-3.5 text-accent-yellow" />
        <span className="font-rajdhani font-600 text-xs tracking-widest text-text-primary uppercase">
          Itens Offline ({allAlerts.length})
        </span>
      </div>
      <div className="max-h-36 overflow-y-auto">
        {alertPOPs.map((pop) => (
          <AlertItem
            key={pop.id}
            type="pop"
            name={pop.name}
            status={pop.status}
            detail={pop.description}
          />
        ))}
        {alertRoutes.map((route) => (
          <AlertItem
            key={route.id}
            type="route"
            name={route.name}
            status={route.status}
            detail={`${route.distanceKm.toFixed(1)} km`}
          />
        ))}
      </div>
    </div>
  );
}

function AlertItem({
  type,
  name,
  status,
  detail,
}: {
  type: "pop" | "route";
  name: string;
  status: NodeStatus;
  detail?: string;
}) {
  const dotColors: Record<NodeStatus, string> = {
    active: "bg-accent-green shadow-[0_0_6px_rgba(0,232,126,0.6)]",
    alert: "bg-accent-yellow shadow-[0_0_6px_rgba(255,184,0,0.5)]",
    inactive: "bg-accent-red shadow-[0_0_6px_rgba(255,59,92,0.4)]",
  };
  const typeIcon = type === "pop" ? "●" : "━";

  return (
    <div className="flex items-start gap-2 px-3 py-2 border-b border-border-dim/50 last:border-0">
      <span
        className={`w-2 h-2 rounded-full mt-1 shrink-0 ${dotColors[status]}`}
      />
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[9px] text-text-muted">{typeIcon}</span>
          <span className="font-rajdhani text-xs font-600 text-text-primary truncate">
            {name}
          </span>
        </div>
        {detail && (
          <p className="text-[10px] text-text-muted truncate mt-0.5">{detail}</p>
        )}
      </div>
    </div>
  );
}
