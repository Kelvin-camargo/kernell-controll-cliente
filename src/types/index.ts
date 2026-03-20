export type NodeStatus = "active" | "alert" | "inactive";

export interface POP {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: NodeStatus;
  description?: string;
  address?: string;
}

export interface BackboneRoute {
  id: string;
  name: string;
  waypoints: [number, number][];
  status: NodeStatus;
  distanceKm: number;
  downGbps?: number;
  upGbps?: number;
  popIds?: string[];
}

export type DrawingMode = "none" | "addPOP" | "drawRoute";

export interface DrawingState {
  mode: DrawingMode;
  waypoints: [number, number][];
  mousePos: [number, number] | null;
}

export interface MapStats {
  totalKm: number;
  totalRoutes: number;
  active: number;
  alerts: number;
  inactive: number;
  downGbps: number;
  upGbps: number;
}
