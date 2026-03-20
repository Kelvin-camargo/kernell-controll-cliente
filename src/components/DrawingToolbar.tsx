"use client";

import { useBackboneStore } from "@/store/backboneStore";
import { MapPin, Route, X, Check } from "lucide-react";

export function DrawingToolbar() {
  const { drawingMode, setDrawingMode, drawingWaypoints, resetDrawing } =
    useBackboneStore();

  const isDrawing = drawingMode !== "none";

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[900] flex items-center gap-2">
      {/* Main toolbar */}
      <div className="glass-panel flex items-center gap-1 p-1.5 animate-glow_in">
        <ToolButton
          icon={<MapPin className="w-4 h-4" />}
          label="Adicionar POP"
          active={drawingMode === "addPOP"}
          onClick={() =>
            setDrawingMode(drawingMode === "addPOP" ? "none" : "addPOP")
          }
          accent="green"
        />
        <div className="w-px h-6 bg-border-dim mx-0.5" />
        <ToolButton
          icon={<Route className="w-4 h-4" />}
          label="Desenhar Rota"
          active={drawingMode === "drawRoute"}
          onClick={() =>
            setDrawingMode(drawingMode === "drawRoute" ? "none" : "drawRoute")
          }
          accent="blue"
        />
      </div>

      {/* Drawing status overlay */}
      {isDrawing && (
        <div className="glass-panel flex items-center gap-3 px-3 py-2 animate-glow_in border-accent-green/25">
          <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse_dot" />
          <div className="flex flex-col">
            <span className="font-rajdhani font-600 text-xs text-accent-green tracking-wider">
              {drawingMode === "addPOP" ? "MODO: ADICIONAR POP" : "MODO: DESENHAR ROTA"}
            </span>
            <span className="font-mono text-[10px] text-text-muted">
              {drawingMode === "addPOP"
                ? "Clique no mapa para posicionar"
                : drawingWaypoints.length === 0
                ? "Clique para iniciar a rota"
                : `${drawingWaypoints.length} ponto${drawingWaypoints.length > 1 ? "s" : ""} — duplo clique para finalizar`}
            </span>
          </div>
          <button
            onClick={resetDrawing}
            className="p-1 rounded text-text-muted hover:text-accent-red hover:bg-accent-red/10 transition-colors ml-1"
            title="Cancelar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

function ToolButton({
  icon,
  label,
  active,
  onClick,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  accent: "green" | "blue";
}) {
  const accentStyles = {
    green: active
      ? "bg-accent-green/15 text-accent-green border border-accent-green/40 shadow-[0_0_12px_rgba(0,232,126,0.2)]"
      : "text-text-muted hover:text-accent-green hover:bg-accent-green/8",
    blue: active
      ? "bg-accent-blue/15 text-accent-blue border border-accent-blue/40 shadow-[0_0_12px_rgba(0,184,255,0.2)]"
      : "text-text-muted hover:text-accent-blue hover:bg-accent-blue/8",
  };

  return (
    <button
      onClick={onClick}
      title={label}
      className={`flex items-center gap-2 px-3 py-2 rounded text-xs font-rajdhani font-600 tracking-wide transition-all duration-200 ${accentStyles[accent]}`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
