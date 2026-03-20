"use client";

import { useBackboneStore } from "@/store/backboneStore";
import type { NodeStatus } from "@/types";
import {
  X,
  MapPin,
  Route,
  TrendingDown,
  TrendingUp,
  Edit3,
  Trash2,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";

const statusIcons = {
  active: <CheckCircle className="w-3.5 h-3.5 text-accent-green" />,
  alert: <AlertTriangle className="w-3.5 h-3.5 text-accent-yellow" />,
  inactive: <XCircle className="w-3.5 h-3.5 text-accent-red" />,
};

const statusLabels: Record<NodeStatus, string> = {
  active: "Ativo",
  alert: "Alerta",
  inactive: "Inativo",
};

const statusCycle: Record<NodeStatus, NodeStatus> = {
  active: "alert",
  alert: "inactive",
  inactive: "active",
};

export function DetailPanel() {
  const {
    selectedId,
    pops,
    routes,
    setSelected,
    updatePOP,
    updateRoute,
    deletePOP,
    deleteRoute,
  } = useBackboneStore();

  const pop = pops.find((p) => p.id === selectedId);
  const route = routes.find((r) => r.id === selectedId);
  const item = pop || route;
  const isOpen = !!item;

  return (
    <div
      className={`absolute top-0 right-0 h-full w-72 z-[850] transition-transform duration-300 ease-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full glass-panel border-l border-border-dim flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border-dim shrink-0">
          <div className="flex items-center gap-2">
            {pop ? (
              <MapPin className="w-4 h-4 text-accent-green" />
            ) : (
              <Route className="w-4 h-4 text-accent-blue" />
            )}
            <span className="font-rajdhani font-700 text-sm text-text-primary tracking-wider truncate max-w-[170px]">
              {item?.name || ""}
            </span>
          </div>
          <button
            onClick={() => setSelected(null)}
            className="p-1 rounded text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
          {/* Status */}
          {item && (
            <Section title="Status">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {statusIcons[item.status]}
                  <span
                    className={`font-rajdhani font-600 text-sm ${
                      item.status === "active"
                        ? "text-accent-green"
                        : item.status === "alert"
                        ? "text-accent-yellow"
                        : "text-accent-red"
                    }`}
                  >
                    {statusLabels[item.status]}
                  </span>
                </div>
                <button
                  onClick={() => {
                    const next = statusCycle[item.status];
                    if (pop) updatePOP(pop.id, { status: next });
                    if (route) updateRoute(route.id, { status: next });
                  }}
                  className="text-[10px] font-mono px-2 py-1 rounded border border-border-dim text-text-muted hover:border-border-glow hover:text-accent-green transition-colors"
                >
                  Alterar
                </button>
              </div>
            </Section>
          )}

          {/* POP specific */}
          {pop && (
            <>
              {pop.description && (
                <Section title="Descrição">
                  <p className="text-xs text-text-muted leading-relaxed">
                    {pop.description}
                  </p>
                </Section>
              )}

              {pop.address && (
                <Section title="Endereço">
                  <p className="text-xs text-text-muted">{pop.address}</p>
                </Section>
              )}

              <Section title="Coordenadas">
                <div className="font-mono text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Lat</span>
                    <span className="text-text-primary">{pop.lat.toFixed(6)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Lng</span>
                    <span className="text-text-primary">{pop.lng.toFixed(6)}</span>
                  </div>
                </div>
              </Section>
            </>
          )}

          {/* Route specific */}
          {route && (
            <>
              <Section title="Métricas de Rede">
                <div className="space-y-3">
                  <MetricRow
                    icon={<TrendingDown className="w-3.5 h-3.5 text-accent-blue" />}
                    label="Download"
                    value={`${(route.downGbps || 0).toFixed(2)} Gbps`}
                    color="text-accent-blue"
                    bar={(route.downGbps || 0) / 10}
                    barColor="bg-accent-blue"
                  />
                  <MetricRow
                    icon={<TrendingUp className="w-3.5 h-3.5 text-accent-cyan" />}
                    label="Upload"
                    value={`${(route.upGbps || 0).toFixed(2)} Gbps`}
                    color="text-accent-cyan"
                    bar={(route.upGbps || 0) / 10}
                    barColor="bg-accent-cyan"
                  />
                </div>
              </Section>

              <Section title="Informações da Rota">
                <div className="font-mono text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Distância</span>
                    <span className="text-text-primary font-600">
                      {route.distanceKm.toFixed(2)} km
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Waypoints</span>
                    <span className="text-text-primary">{route.waypoints.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">ID</span>
                    <span className="text-text-muted text-[10px]">{route.id}</span>
                  </div>
                </div>
              </Section>
            </>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-4 py-3 border-t border-border-dim shrink-0 flex gap-2">
          <button
            onClick={() => {
              if (pop) deletePOP(pop.id);
              if (route) deleteRoute(route.id);
              setSelected(null);
            }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded border border-accent-red/30 text-accent-red/70 hover:text-accent-red hover:bg-accent-red/10 hover:border-accent-red/50 transition-colors text-xs font-rajdhani font-600 tracking-wide"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-rajdhani text-[10px] text-text-muted tracking-widest uppercase mb-2 border-b border-border-dim pb-1">
        {title}
      </p>
      {children}
    </div>
  );
}

function MetricRow({
  icon,
  label,
  value,
  color,
  bar,
  barColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
  bar: number;
  barColor: string;
}) {
  const pct = Math.min(100, Math.max(0, bar * 100));
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5 text-text-muted">
          {icon}
          <span className="text-xs font-rajdhani">{label}</span>
        </div>
        <span className={`font-mono text-xs font-600 ${color}`}>{value}</span>
      </div>
      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${barColor}`}
          style={{ width: `${pct}%`, opacity: 0.7 }}
        />
      </div>
    </div>
  );
}
