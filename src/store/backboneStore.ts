import { create } from "zustand";
import type { POP, BackboneRoute, DrawingMode, MapStats } from "@/types";
import { initialPOPs, initialRoutes } from "@/data/sampleData";

export type FlyTarget =
  | { type: "point"; lat: number; lng: number; zoom?: number }
  | { type: "bounds"; waypoints: [number, number][] }
  | null;

interface BackboneStore {
  pops: POP[];
  routes: BackboneRoute[];
  selectedId: string | null;
  drawingMode: DrawingMode;
  drawingWaypoints: [number, number][];
  mousePos: [number, number] | null;
  searchQuery: string;
  sidebarOpen: boolean;
  createDialogOpen: "pop" | "route" | null;
  pendingCoord: [number, number] | null;
  flyTarget: FlyTarget;
  simulationActive: boolean;

  // Actions
  addPOP: (pop: POP) => void;
  updatePOP: (id: string, updates: Partial<POP>) => void;
  deletePOP: (id: string) => void;
  addRoute: (route: BackboneRoute) => void;
  updateRoute: (id: string, updates: Partial<BackboneRoute>) => void;
  deleteRoute: (id: string) => void;
  setSelected: (id: string | null) => void;
  selectAndFly: (id: string) => void;
  setDrawingMode: (mode: DrawingMode) => void;
  addDrawingWaypoint: (wp: [number, number]) => void;
  resetDrawing: () => void;
  setMousePos: (pos: [number, number] | null) => void;
  setSearchQuery: (q: string) => void;
  toggleSidebar: () => void;
  setCreateDialogOpen: (v: "pop" | "route" | null) => void;
  setPendingCoord: (coord: [number, number] | null) => void;
  setFlyTarget: (t: FlyTarget) => void;
  toggleSimulation: () => void;
  getStats: () => MapStats;
}

function calcDistanceKm(waypoints: [number, number][]): number {
  if (waypoints.length < 2) return 0;
  let total = 0;
  for (let i = 1; i < waypoints.length; i++) {
    const [lat1, lng1] = waypoints[i - 1];
    const [lat2, lng2] = waypoints[i];
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2;
    total += R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  return Math.round(total * 10) / 10;
}

export const useBackboneStore = create<BackboneStore>((set, get) => ({
  pops: initialPOPs,
  routes: initialRoutes,
  selectedId: null,
  drawingMode: "none",
  drawingWaypoints: [],
  mousePos: null,
  searchQuery: "",
  sidebarOpen: true,
  createDialogOpen: null,
  pendingCoord: null,
  flyTarget: null,
  simulationActive: false,

  addPOP: (pop) => set((s) => ({ pops: [...s.pops, pop] })),
  updatePOP: (id, updates) =>
    set((s) => ({
      pops: s.pops.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    })),
  deletePOP: (id) =>
    set((s) => ({ pops: s.pops.filter((p) => p.id !== id) })),

  addRoute: (route) => set((s) => ({ routes: [...s.routes, route] })),
  updateRoute: (id, updates) =>
    set((s) => ({
      routes: s.routes.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    })),
  deleteRoute: (id) =>
    set((s) => ({ routes: s.routes.filter((r) => r.id !== id) })),

  setSelected: (id) => set({ selectedId: id }),

  selectAndFly: (id) => {
    const { pops, routes } = get();
    set({ selectedId: id });
    const pop = pops.find((p) => p.id === id);
    if (pop) {
      set({ flyTarget: { type: "point", lat: pop.lat, lng: pop.lng, zoom: 14 } });
      return;
    }
    const route = routes.find((r) => r.id === id);
    if (route) {
      set({ flyTarget: { type: "bounds", waypoints: route.waypoints } });
    }
  },
  setDrawingMode: (mode) =>
    set({ drawingMode: mode, drawingWaypoints: [], mousePos: null }),
  addDrawingWaypoint: (wp) =>
    set((s) => ({ drawingWaypoints: [...s.drawingWaypoints, wp] })),
  resetDrawing: () =>
    set({ drawingMode: "none", drawingWaypoints: [], mousePos: null }),
  setMousePos: (pos) => set({ mousePos: pos }),
  setSearchQuery: (q) => set({ searchQuery: q }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setCreateDialogOpen: (v) => set({ createDialogOpen: v }),
  setPendingCoord: (coord) => set({ pendingCoord: coord }),
  setFlyTarget: (t) => set({ flyTarget: t }),
  toggleSimulation: () => set((s) => ({ simulationActive: !s.simulationActive })),

  getStats: () => {
    const { routes, pops } = get();
    return {
      totalKm: routes.reduce((acc, r) => acc + (r.distanceKm || 0), 0),
      totalRoutes: routes.length,
      active:
        routes.filter((r) => r.status === "active").length +
        pops.filter((p) => p.status === "active").length,
      alerts:
        routes.filter((r) => r.status === "alert").length +
        pops.filter((p) => p.status === "alert").length,
      inactive:
        routes.filter((r) => r.status === "inactive").length +
        pops.filter((p) => p.status === "inactive").length,
      downGbps: routes.reduce((acc, r) => acc + (r.downGbps || 0), 0),
      upGbps: routes.reduce((acc, r) => acc + (r.upGbps || 0), 0),
    };
  },
}));

export { calcDistanceKm };
