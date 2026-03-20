"use client";

import { useState, useEffect } from "react";
import { useBackboneStore, calcDistanceKm } from "@/store/backboneStore";
import type { NodeStatus } from "@/types";
import { X, MapPin, Route, Check } from "lucide-react";

export function CreateDialog() {
  const {
    createDialogOpen,
    setCreateDialogOpen,
    pendingCoord,
    drawingWaypoints,
    addPOP,
    addRoute,
    resetDrawing,
  } = useBackboneStore();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState<NodeStatus>("active");
  const [downGbps, setDownGbps] = useState("");
  const [upGbps, setUpGbps] = useState("");

  useEffect(() => {
    if (createDialogOpen) {
      setName("");
      setDescription("");
      setAddress("");
      setStatus("active");
      setDownGbps("");
      setUpGbps("");
    }
  }, [createDialogOpen]);

  if (!createDialogOpen) return null;

  const isPOP = createDialogOpen === "pop";
  const isRoute = createDialogOpen === "route";
  const distKm = isRoute ? calcDistanceKm(drawingWaypoints) : 0;

  const handleSubmit = () => {
    if (!name.trim()) return;

    if (isPOP && pendingCoord) {
      addPOP({
        id: `pop-${Date.now()}`,
        name: name.trim().toUpperCase(),
        lat: pendingCoord[0],
        lng: pendingCoord[1],
        status,
        description: description || undefined,
        address: address || undefined,
      });
      resetDrawing();
      setCreateDialogOpen(null);
    }

    if (isRoute && drawingWaypoints.length >= 2) {
      addRoute({
        id: `route-${Date.now()}`,
        name: name.trim().toUpperCase(),
        waypoints: drawingWaypoints,
        status,
        distanceKm: distKm,
        downGbps: downGbps ? parseFloat(downGbps) : undefined,
        upGbps: upGbps ? parseFloat(upGbps) : undefined,
      });
      resetDrawing();
      setCreateDialogOpen(null);
    }
  };

  const handleCancel = () => {
    setCreateDialogOpen(null);
    resetDrawing();
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleCancel}
      />

      {/* Dialog */}
      <div className="relative glass-panel w-[420px] overflow-hidden animate-glow_in border-border-glow/30 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border-dim">
          <div className="flex items-center gap-2.5">
            {isPOP ? (
              <MapPin className="w-4 h-4 text-accent-green" />
            ) : (
              <Route className="w-4 h-4 text-accent-blue" />
            )}
            <div>
              <span className="font-rajdhani font-700 text-sm text-text-primary tracking-wider">
                {isPOP ? "NOVO POP" : "NOVA ROTA"}
              </span>
              {isRoute && (
                <p className="font-mono text-[10px] text-text-muted mt-0.5">
                  {drawingWaypoints.length} pontos · {distKm.toFixed(2)} km
                </p>
              )}
              {isPOP && pendingCoord && (
                <p className="font-mono text-[10px] text-text-muted mt-0.5">
                  {pendingCoord[0].toFixed(5)}, {pendingCoord[1].toFixed(5)}
                </p>
              )}
            </div>
          </div>
          <button
            onClick={handleCancel}
            className="p-1.5 rounded text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <div className="px-5 py-4 space-y-4">
          {/* Name */}
          <div>
            <label className="block font-rajdhani text-xs text-text-muted tracking-wider mb-1.5 uppercase">
              Nome *
            </label>
            <input
              type="text"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder={isPOP ? "POP CENTRO" : "BACKBONE NORTE"}
              className="w-full px-3 py-2.5 rounded bg-bg-secondary border border-border-dim text-text-primary font-rajdhani text-sm placeholder:text-text-muted focus:outline-none focus:border-border-glow focus:bg-accent-green/5 transition-all"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-rajdhani text-xs text-text-muted tracking-wider mb-1.5 uppercase">
              Descrição
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrição opcional..."
              className="w-full px-3 py-2.5 rounded bg-bg-secondary border border-border-dim text-text-primary font-rajdhani text-sm placeholder:text-text-muted focus:outline-none focus:border-border-glow focus:bg-accent-green/5 transition-all"
            />
          </div>

          {/* Address (POP only) */}
          {isPOP && (
            <div>
              <label className="block font-rajdhani text-xs text-text-muted tracking-wider mb-1.5 uppercase">
                Endereço
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Rua, Bairro, Cidade"
                className="w-full px-3 py-2.5 rounded bg-bg-secondary border border-border-dim text-text-primary font-rajdhani text-sm placeholder:text-text-muted focus:outline-none focus:border-border-glow focus:bg-accent-green/5 transition-all"
              />
            </div>
          )}

          {/* Throughput (Route only) */}
          {isRoute && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-rajdhani text-xs text-text-muted tracking-wider mb-1.5 uppercase">
                  Download (Gbps)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={downGbps}
                  onChange={(e) => setDownGbps(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-3 py-2.5 rounded bg-bg-secondary border border-border-dim text-text-primary font-mono text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-blue/50 focus:bg-accent-blue/5 transition-all"
                />
              </div>
              <div>
                <label className="block font-rajdhani text-xs text-text-muted tracking-wider mb-1.5 uppercase">
                  Upload (Gbps)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={upGbps}
                  onChange={(e) => setUpGbps(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-3 py-2.5 rounded bg-bg-secondary border border-border-dim text-text-primary font-mono text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/50 focus:bg-accent-cyan/5 transition-all"
                />
              </div>
            </div>
          )}

          {/* Status */}
          <div>
            <label className="block font-rajdhani text-xs text-text-muted tracking-wider mb-2 uppercase">
              Status
            </label>
            <div className="flex gap-2">
              {(["active", "alert", "inactive"] as NodeStatus[]).map((s) => {
                const labels = {
                  active: "Ativo",
                  alert: "Alerta",
                  inactive: "Inativo",
                };
                const colors = {
                  active: {
                    on: "border-accent-green/60 bg-accent-green/15 text-accent-green",
                    off: "border-border-dim text-text-muted hover:border-accent-green/30",
                  },
                  alert: {
                    on: "border-accent-yellow/60 bg-accent-yellow/15 text-accent-yellow",
                    off: "border-border-dim text-text-muted hover:border-accent-yellow/30",
                  },
                  inactive: {
                    on: "border-accent-red/60 bg-accent-red/15 text-accent-red",
                    off: "border-border-dim text-text-muted hover:border-accent-red/30",
                  },
                };
                return (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className={`flex-1 py-2 rounded border font-rajdhani font-600 text-xs tracking-wider transition-all ${
                      status === s ? colors[s].on : colors[s].off
                    }`}
                  >
                    {labels[s]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 px-5 py-4 border-t border-border-dim">
          <button
            onClick={handleCancel}
            className="flex-1 py-2.5 rounded border border-border-dim text-text-muted font-rajdhani font-600 text-sm tracking-wider hover:bg-white/5 hover:text-text-primary transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded bg-accent-green/20 border border-accent-green/50 text-accent-green font-rajdhani font-700 text-sm tracking-wider hover:bg-accent-green/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(0,232,126,0.15)]"
          >
            <Check className="w-4 h-4" />
            {isPOP ? "Criar POP" : "Salvar Rota"}
          </button>
        </div>
      </div>
    </div>
  );
}
