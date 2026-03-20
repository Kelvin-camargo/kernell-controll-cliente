"use client";

import { useBackboneStore } from "@/store/backboneStore";
import { Network, Search, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";

export function Topbar() {
  const { searchQuery, setSearchQuery, toggleSidebar, sidebarOpen } =
    useBackboneStore();
  const [focused, setFocused] = useState(false);

  return (
    <header className="relative z-[1000] h-14 flex items-center px-4 gap-4 border-b border-border-dim bg-bg-panel backdrop-blur-xl">
      {/* Logo */}
      <div className="flex items-center gap-2.5 min-w-0 shrink-0">
        <div className="w-8 h-8 rounded flex items-center justify-center bg-accent-green/10 border border-border-glow">
          <Network className="w-4 h-4 text-accent-green" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-rajdhani font-700 text-text-primary text-base tracking-wider">
            KERNELL <span className="text-accent-green">CONTROLL</span>
          </span>
          <span className="font-mono text-[9px] text-text-muted tracking-widest">
            MAPA DE BACKBONE
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-border-dim mx-1" />

      {/* Toggle sidebar */}
      <button
        onClick={toggleSidebar}
        className="p-1.5 rounded text-text-muted hover:text-accent-green hover:bg-accent-green/10 transition-colors"
        title={sidebarOpen ? "Fechar painel" : "Abrir painel"}
      >
        {sidebarOpen ? (
          <PanelLeftClose className="w-4 h-4" />
        ) : (
          <PanelLeftOpen className="w-4 h-4" />
        )}
      </button>

      {/* Search */}
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded border transition-all duration-200 ml-auto w-72 ${
          focused
            ? "border-border-glow bg-accent-green/5"
            : "border-border-dim bg-bg-secondary/50"
        }`}
      >
        <Search className="w-3.5 h-3.5 text-text-muted shrink-0" />
        <input
          type="text"
          placeholder="Buscar rotas e POPs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="bg-transparent text-text-primary font-rajdhani text-sm placeholder:text-text-muted outline-none w-full"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-text-muted hover:text-accent-green text-xs transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Live indicator */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse_dot" />
        <span className="font-mono text-[10px] text-accent-green/70 tracking-widest">
          AO VIVO
        </span>
      </div>
    </header>
  );
}
