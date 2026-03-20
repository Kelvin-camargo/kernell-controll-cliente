"use client";

import { useBackboneStore } from "@/store/backboneStore";
import type { NodeStatus } from "@/types";
import { MapPin, Route, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function StatusDot({ status }: { status: NodeStatus }) {
  const colors = {
    active: "bg-accent-green shadow-[0_0_6px_rgba(0,232,126,0.6)]",
    alert: "bg-accent-yellow shadow-[0_0_6px_rgba(255,184,0,0.6)]",
    inactive: "bg-accent-red shadow-[0_0_6px_rgba(255,59,92,0.5)]",
  };
  return (
    <span className={`inline-block w-2 h-2 rounded-full shrink-0 ${colors[status]}`} />
  );
}

function StatusBadge({ status }: { status: NodeStatus }) {
  const styles = {
    active: "text-accent-green border-accent-green/30 bg-accent-green/8",
    alert: "text-accent-yellow border-accent-yellow/30 bg-accent-yellow/8",
    inactive: "text-accent-red border-accent-red/30 bg-accent-red/8",
  };
  const labels = { active: "ATIVO", alert: "ALERTA", inactive: "INATIVO" };
  return (
    <span
      className={`font-mono text-[9px] px-1.5 py-0.5 rounded border tracking-wider ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

export function SidePanel() {
  const {
    pops,
    routes,
    selectedId,
    selectAndFly,
    deletePOP,
    deleteRoute,
    searchQuery,
    sidebarOpen,
  } = useBackboneStore();

  const [popsExpanded, setPopsExpanded] = useState(true);
  const [routesExpanded, setRoutesExpanded] = useState(true);

  const q = searchQuery.toLowerCase();
  const filteredPOPs = pops.filter(
    (p) =>
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q)
  );
  const filteredRoutes = routes.filter(
    (r) => !q || r.name.toLowerCase().includes(q)
  );

  if (!sidebarOpen) return null;

  return (
    <aside className="w-[270px] h-full bg-bg-panel border-r border-border-dim flex flex-col z-[900] overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border-dim">
        <span className="font-rajdhani font-600 text-xs text-text-muted tracking-widest uppercase">
          Infraestrutura
        </span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* POPs Section */}
        <div>
          <button
            className="w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-white/3 transition-colors"
            onClick={() => setPopsExpanded((v) => !v)}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-accent-green" />
              <span className="font-rajdhani font-600 text-xs tracking-widest text-text-primary uppercase">
                POPs
              </span>
              <span className="font-mono text-[10px] text-text-muted bg-white/5 px-1.5 py-0.5 rounded">
                {filteredPOPs.length}
              </span>
            </div>
            {popsExpanded ? (
              <ChevronUp className="w-3 h-3 text-text-muted" />
            ) : (
              <ChevronDown className="w-3 h-3 text-text-muted" />
            )}
          </button>

          {popsExpanded && (
            <div className="pb-1">
              {filteredPOPs.map((pop) => (
                <div
                  key={pop.id}
                  onClick={() => selectAndFly(pop.id === selectedId ? "" : pop.id)}
                  className={`flex items-start gap-2.5 px-4 py-2 cursor-pointer transition-all group ${
                    selectedId === pop.id
                      ? "bg-accent-green/10 border-l-2 border-accent-green"
                      : "hover:bg-white/3 border-l-2 border-transparent"
                  }`}
                >
                  <StatusDot status={pop.status} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-rajdhani font-600 text-xs text-text-primary truncate">
                        {pop.name}
                      </span>
                      <StatusBadge status={pop.status} />
                    </div>
                    {pop.description && (
                      <p className="text-[10px] text-text-muted truncate mt-0.5">
                        {pop.description}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deletePOP(pop.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 text-text-muted hover:text-accent-red transition-all shrink-0"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
              {filteredPOPs.length === 0 && (
                <p className="px-4 py-2 text-[11px] text-text-muted">
                  Nenhum POP encontrado
                </p>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-border-dim" />

        {/* Routes Section */}
        <div>
          <button
            className="w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-white/3 transition-colors"
            onClick={() => setRoutesExpanded((v) => !v)}
          >
            <div className="flex items-center gap-2">
              <Route className="w-3.5 h-3.5 text-accent-blue" />
              <span className="font-rajdhani font-600 text-xs tracking-widest text-text-primary uppercase">
                Rotas
              </span>
              <span className="font-mono text-[10px] text-text-muted bg-white/5 px-1.5 py-0.5 rounded">
                {filteredRoutes.length}
              </span>
            </div>
            {routesExpanded ? (
              <ChevronUp className="w-3 h-3 text-text-muted" />
            ) : (
              <ChevronDown className="w-3 h-3 text-text-muted" />
            )}
          </button>

          {routesExpanded && (
            <div className="pb-2">
              {filteredRoutes.map((route) => (
                <div
                  key={route.id}
                  onClick={() =>
                    selectAndFly(route.id === selectedId ? "" : route.id)
                  }
                  className={`flex items-start gap-2.5 px-4 py-2 cursor-pointer transition-all group ${
                    selectedId === route.id
                      ? "bg-accent-blue/10 border-l-2 border-accent-blue"
                      : "hover:bg-white/3 border-l-2 border-transparent"
                  }`}
                >
                  <StatusDot status={route.status} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-rajdhani font-600 text-xs text-text-primary truncate">
                        {route.name}
                      </span>
                      <StatusBadge status={route.status} />
                    </div>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="font-mono text-[10px] text-text-muted">
                        {route.distanceKm.toFixed(1)} km
                      </span>
                      {route.downGbps ? (
                        <span className="font-mono text-[10px] text-accent-blue/70">
                          ↓{route.downGbps.toFixed(1)}G
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteRoute(route.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 text-text-muted hover:text-accent-red transition-all shrink-0"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
              {filteredRoutes.length === 0 && (
                <p className="px-4 py-2 text-[11px] text-text-muted">
                  Nenhuma rota encontrada
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-border-dim">
        <div className="flex items-center gap-4 text-[10px] font-mono text-text-muted">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green inline-block" />
            {pops.filter((p) => p.status === "active").length + routes.filter((r) => r.status === "active").length} ativos
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow inline-block" />
            {pops.filter((p) => p.status === "alert").length + routes.filter((r) => r.status === "alert").length} alertas
          </span>
        </div>
      </div>
    </aside>
  );
}
