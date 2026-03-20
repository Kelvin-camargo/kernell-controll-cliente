"use client";

import { useBackboneStore } from "@/store/backboneStore";
import { BarChart2 } from "lucide-react";

export function StatsPanel() {
  const getStats = useBackboneStore((s) => s.getStats);
  const stats = getStats();

  return (
    <div className="glass-panel w-56 overflow-hidden animate-glow_in">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border-dim">
        <BarChart2 className="w-3.5 h-3.5 text-accent-green" />
        <span className="font-rajdhani font-600 text-xs tracking-widest text-text-primary uppercase">
          Estatísticas
        </span>
      </div>

      <div className="px-3 py-2.5 space-y-2">
        {/* Total KM */}
        <StatRow
          icon="○"
          label="Total"
          value={`${stats.totalKm.toFixed(1)} km`}
          color="text-text-primary"
        />

        {/* Down */}
        <StatRow
          icon="↓"
          label="Down"
          value={`${stats.downGbps.toFixed(2)} Gbps`}
          color="text-accent-blue"
        />

        {/* Up */}
        <StatRow
          icon="↑"
          label="Up"
          value={`${stats.upGbps.toFixed(2)} Gbps`}
          color="text-accent-cyan"
        />

        <div className="border-t border-border-dim pt-2 mt-2 space-y-1.5">
          <StatusStatRow
            color="bg-accent-green"
            label="Ativos"
            value={stats.active}
            glowColor="shadow-[0_0_6px_rgba(0,232,126,0.5)]"
          />
          <StatusStatRow
            color="bg-accent-yellow"
            label="Alertas"
            value={stats.alerts}
            glowColor="shadow-[0_0_6px_rgba(255,184,0,0.5)]"
          />
          <StatusStatRow
            color="bg-accent-red"
            label="Inativos"
            value={stats.inactive}
            glowColor="shadow-[0_0_6px_rgba(255,59,92,0.4)]"
          />
        </div>
      </div>
    </div>
  );
}

function StatRow({
  icon,
  label,
  value,
  color,
}: {
  icon: string;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5 text-text-muted">
        <span className="font-mono text-xs w-3 text-center">{icon}</span>
        <span className="font-rajdhani text-xs">{label}</span>
      </div>
      <span className={`font-mono text-xs font-600 ${color}`}>{value}</span>
    </div>
  );
}

function StatusStatRow({
  color,
  glowColor,
  label,
  value,
}: {
  color: string;
  glowColor: string;
  label: string;
  value: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full ${color} ${glowColor} animate-pulse_dot`}
        />
        <span className="font-rajdhani text-xs text-text-muted">{label}</span>
      </div>
      <span className="font-mono text-xs text-text-primary font-600">
        {value}
      </span>
    </div>
  );
}
