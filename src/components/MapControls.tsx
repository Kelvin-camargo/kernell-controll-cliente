"use client";

import { useBackboneStore } from "@/store/backboneStore";
import { Maximize2, Activity, Layers, Crosshair } from "lucide-react";
import { useState } from "react";

export type TileLayerKey = "dark" | "satellite" | "terrain";

export const tileLayers: Record<TileLayerKey, { url: string; label: string }> = {
  dark: {
    label: "Dark",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  },
  satellite: {
    label: "Satélite",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  },
  terrain: {
    label: "Mapa",
    url: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
  },
};

interface MapControlsProps {
  tileLayer: TileLayerKey;
  onTileChange: (k: TileLayerKey) => void;
  onFitAll: () => void;
}

export function MapControls({ tileLayer, onTileChange, onFitAll }: MapControlsProps) {
  const { simulationActive, toggleSimulation } = useBackboneStore();
  const [layersOpen, setLayersOpen] = useState(false);

  return (
    <div className="absolute top-4 right-4 z-[900] flex flex-col gap-2 items-end">
      {/* Main controls */}
      <div className="glass-panel flex flex-col divide-y divide-border-dim overflow-hidden">
        {/* Fit all */}
        <ControlBtn
          icon={<Maximize2 className="w-4 h-4" />}
          title="Ajustar ao mapa"
          onClick={onFitAll}
        />

        {/* Layers */}
        <div className="relative">
          <ControlBtn
            icon={<Layers className="w-4 h-4" />}
            title="Camadas"
            onClick={() => setLayersOpen((v) => !v)}
            active={layersOpen}
          />
          {layersOpen && (
            <div className="absolute right-full top-0 mr-2 glass-panel overflow-hidden animate-glow_in whitespace-nowrap">
              {(Object.keys(tileLayers) as TileLayerKey[]).map((k) => (
                <button
                  key={k}
                  onClick={() => { onTileChange(k); setLayersOpen(false); }}
                  className={`flex items-center gap-2 w-full px-3 py-2 text-left text-xs font-rajdhani font-600 tracking-wide transition-colors ${
                    tileLayer === k
                      ? "text-accent-green bg-accent-green/10"
                      : "text-text-muted hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  {tileLayer === k && <span className="text-accent-green">✓</span>}
                  {tileLayer !== k && <span className="w-3" />}
                  {tileLayers[k].label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Simulation toggle */}
        <ControlBtn
          icon={<Activity className="w-4 h-4" />}
          title={simulationActive ? "Parar simulação" : "Simular tráfego"}
          onClick={toggleSimulation}
          active={simulationActive}
          activeColor="text-accent-yellow"
        />
      </div>

      {/* Simulation badge */}
      {simulationActive && (
        <div className="glass-panel flex items-center gap-2 px-2.5 py-1.5 animate-glow_in border-accent-yellow/25">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-yellow animate-pulse_dot" />
          <span className="font-mono text-[9px] text-accent-yellow/80 tracking-widest">
            SIMULANDO TRÁFEGO
          </span>
        </div>
      )}
    </div>
  );
}

function ControlBtn({
  icon,
  title,
  onClick,
  active,
  activeColor = "text-accent-green",
}: {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  active?: boolean;
  activeColor?: string;
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`p-2.5 transition-colors ${
        active
          ? `${activeColor} bg-white/5`
          : "text-text-muted hover:text-accent-green hover:bg-accent-green/8"
      }`}
    >
      {icon}
    </button>
  );
}
