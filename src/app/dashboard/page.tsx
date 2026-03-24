"use client";

import dynamic from "next/dynamic";
import { Topbar } from "@/components/Topbar";
import { SidePanel } from "@/components/SidePanel";
import { StatsPanel } from "@/components/StatsPanel";
import { AlertsPanel } from "@/components/AlertsPanel";
import { DrawingToolbar } from "@/components/DrawingToolbar";
import { CreateDialog } from "@/components/CreateDialog";
import { DetailPanel } from "@/components/DetailPanel";
import { useBackboneStore } from "@/store/backboneStore";

const BackboneMap = dynamic(() => import("@/components/BackboneMap"), {
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center bg-bg-primary">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-accent-green/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-green animate-spin" />
        </div>
        <span className="font-mono text-[11px] text-accent-green/60 tracking-widest animate-pulse">
          CARREGANDO MAPA...
        </span>
      </div>
    </div>
  ),
});

export default function Home() {
  const { sidebarOpen, selectedId } = useBackboneStore();

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-bg-primary">
      <Topbar />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <SidePanel />

        {/* Map Area */}
        <div className="flex-1 relative overflow-hidden">
          <BackboneMap />

          {/* Detail panel — slides in from right over the map */}
          <DetailPanel />

          {/* Drawing toolbar — bottom center */}
          <DrawingToolbar />

          {/* Stats panel — bottom right */}
          <div
            className="absolute bottom-6 z-[900] transition-all duration-300"
            style={{ right: selectedId ? "296px" : "16px" }}
          >
            <StatsPanel />
          </div>

          {/* Alerts panel — bottom left */}
          <div className="absolute bottom-6 left-4 z-[900]">
            <AlertsPanel />
          </div>
        </div>
      </div>

      {/* Create dialog */}
      <CreateDialog />
    </div>
  );
}
