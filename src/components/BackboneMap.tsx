"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useBackboneStore } from "@/store/backboneStore";
import type { POP, BackboneRoute, NodeStatus } from "@/types";
import { RoutePopup } from "./RoutePopup";
import { POPPopup } from "./POPPopup";

// ─── Fly-to handler ─────────────────────────────────────────────────
function FlyToHandler() {
  const { flyTarget, setFlyTarget } = useBackboneStore();
  const map = useMap();

  useEffect(() => {
    if (!flyTarget) return;
    if (flyTarget.type === "point") {
      map.flyTo([flyTarget.lat, flyTarget.lng], flyTarget.zoom ?? 13, { duration: 1.2 });
    } else if (flyTarget.type === "bounds" && flyTarget.waypoints.length >= 2) {
      map.flyToBounds(L.latLngBounds(flyTarget.waypoints), { padding: [80, 80], duration: 1.2 });
    }
    setTimeout(() => setFlyTarget(null), 1500);
  }, [flyTarget, map, setFlyTarget]);

  return null;
}

// ─── Simulation engine ───────────────────────────────────────────────
function SimulationEngine() {
  const simulationActive = useBackboneStore((s) => s.simulationActive);
  const updateRoute = useBackboneStore((s) => s.updateRoute);
  const updatePOP = useBackboneStore((s) => s.updatePOP);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!simulationActive) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      const { routes, pops } = useBackboneStore.getState();
      const activeRoutes = routes.filter((r) => r.status === "active" && r.downGbps);
      if (activeRoutes.length === 0) return;
      const route = activeRoutes[Math.floor(Math.random() * activeRoutes.length)];
      const delta = (Math.random() - 0.48) * 0.15;
      updateRoute(route.id, {
        downGbps: Math.max(0.1, (route.downGbps || 1) + delta),
        upGbps: Math.max(0.1, (route.upGbps || 0.8) + delta * 0.9),
      });
      // Randomly alert a POP briefly
      if (Math.random() < 0.06) {
        const activePOPs = pops.filter((p) => p.status === "active");
        if (activePOPs.length === 0) return;
        const pop = activePOPs[Math.floor(Math.random() * activePOPs.length)];
        updatePOP(pop.id, { status: "alert" });
        setTimeout(() => updatePOP(pop.id, { status: "active" }), 4000 + Math.random() * 3000);
      }
    }, 2000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [simulationActive, updateRoute, updatePOP]);

  return null;
}


// ─── Custom marker icons ────────────────────────────────────────────
const createPOPIcon = (status: NodeStatus, selected: boolean) => {
  const colors: Record<NodeStatus, string> = {
    active: "#00e87e",
    alert: "#ffb800",
    inactive: "#ff3b5c",
  };
  const glows: Record<NodeStatus, string> = {
    active: "rgba(0,232,126,0.5)",
    alert: "rgba(255,184,0,0.5)",
    inactive: "rgba(255,59,92,0.4)",
  };
  const color = colors[status];
  const glow = glows[status];
  const size = selected ? 18 : 14;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size + 16}" height="${size + 16}" viewBox="0 0 ${size + 16} ${size + 16}">
      <circle cx="${(size + 16) / 2}" cy="${(size + 16) / 2}" r="${size / 2 + 6}" fill="${color}" opacity="0.12"/>
      <circle cx="${(size + 16) / 2}" cy="${(size + 16) / 2}" r="${size / 2 + 3}" fill="${color}" opacity="0.2"/>
      <circle cx="${(size + 16) / 2}" cy="${(size + 16) / 2}" r="${size / 2}" fill="${color}" />
      <circle cx="${(size + 16) / 2}" cy="${(size + 16) / 2}" r="${size / 2 - 4}" fill="#060b14" />
      <circle cx="${(size + 16) / 2}" cy="${(size + 16) / 2}" r="${size / 2 - 7}" fill="${color}" />
    </svg>
  `;

  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [size + 16, size + 16],
    iconAnchor: [(size + 16) / 2, (size + 16) / 2],
    popupAnchor: [0, -(size + 8)],
  });
};

const createDrawingIcon = () => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8" fill="rgba(0,232,126,0.15)" stroke="#00e87e" stroke-width="1.5"/>
      <circle cx="10" cy="10" r="3" fill="#00e87e"/>
    </svg>
  `;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

// ─── Route colors ───────────────────────────────────────────────────
const routeColors: Record<NodeStatus, string> = {
  active: "#00e87e",
  alert: "#ffb800",
  inactive: "#ff3b5c",
};

const routeDashArray: Record<NodeStatus, string | undefined> = {
  active: undefined,
  alert: "8 4",
  inactive: "4 6",
};

// ─── Map interaction handler ────────────────────────────────────────
function MapInteraction() {
  const {
    drawingMode,
    addDrawingWaypoint,
    drawingWaypoints,
    setMousePos,
    resetDrawing,
  } = useBackboneStore();

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      if (drawingMode === "addPOP") {
        useBackboneStore.getState().setPendingCoord([lat, lng]);
        useBackboneStore.getState().setCreateDialogOpen("pop");
        return;
      }

      if (drawingMode === "drawRoute") {
        addDrawingWaypoint([lat, lng]);
        return;
      }
    },

    dblclick(e) {
      if (drawingMode === "drawRoute" && drawingWaypoints.length >= 2) {
        e.originalEvent.preventDefault();
        useBackboneStore.getState().setCreateDialogOpen("route");
        return;
      }
    },

    mousemove(e) {
      if (drawingMode !== "none") {
        setMousePos([e.latlng.lat, e.latlng.lng]);
      }
    },

    mouseout() {
      setMousePos(null);
    },
  });

  return null;
}

// ─── Preview polyline while drawing ────────────────────────────────
function DrawingPreview() {
  const { drawingMode, drawingWaypoints, mousePos } = useBackboneStore();

  if (drawingMode !== "drawRoute" || drawingWaypoints.length === 0) return null;

  const previewPoints: [number, number][] = mousePos
    ? [...drawingWaypoints, mousePos]
    : drawingWaypoints;

  return (
    <>
      {/* Committed segments */}
      <Polyline
        positions={drawingWaypoints}
        pathOptions={{
          color: "#00e87e",
          weight: 3,
          opacity: 0.9,
          dashArray: "6 3",
        }}
      />
      {/* Preview to cursor */}
      {mousePos && (
        <Polyline
          positions={[drawingWaypoints[drawingWaypoints.length - 1], mousePos]}
          pathOptions={{
            color: "#00e87e",
            weight: 2,
            opacity: 0.5,
            dashArray: "4 4",
          }}
        />
      )}
      {/* Waypoint dots */}
      {drawingWaypoints.map((wp, i) => (
        <Marker
          key={`wp-${i}`}
          position={wp}
          icon={createDrawingIcon()}
          interactive={false}
        />
      ))}
    </>
  );
}

// ─── Selected route highlight ───────────────────────────────────────
function RouteLayer({
  route,
  selected,
}: {
  route: BackboneRoute;
  selected: boolean;
}) {
  const setSelected = useBackboneStore((s) => s.setSelected);
  const color = routeColors[route.status];

  return (
    <>
      {/* Glow layer */}
      {selected && (
        <Polyline
          positions={route.waypoints}
          pathOptions={{
            color,
            weight: 16,
            opacity: 0.12,
          }}
          interactive={false}
        />
      )}
      {/* Shadow */}
      <Polyline
        positions={route.waypoints}
        pathOptions={{
          color: "#000",
          weight: selected ? 7 : 5,
          opacity: 0.4,
        }}
        interactive={false}
      />
      {/* Main line */}
      <Polyline
        positions={route.waypoints}
        pathOptions={{
          color,
          weight: selected ? 4 : 2.5,
          opacity: selected ? 1 : 0.85,
          dashArray: routeDashArray[route.status],
          lineCap: "round",
          lineJoin: "round",
        }}
        eventHandlers={{
          click: () => setSelected(route.id),
        }}
      >
        <Popup>
          <RoutePopup route={route} />
        </Popup>
      </Polyline>
    </>
  );
}

import { MapControls } from "./MapControls";
import type { TileLayerKey } from "./MapControls";

// ─── MapControls wrapper (outside MapContainer) ──────────────────────
function MapControlsOverlay({
  tileLayer,
  onTileChange,
  onFitAll,
}: {
  tileLayer: TileLayerKey;
  onTileChange: (k: TileLayerKey) => void;
  onFitAll: () => void;
}) {
  return (
    <MapControls
      tileLayer={tileLayer}
      onTileChange={onTileChange}
      onFitAll={onFitAll}
    />
  );
}


function AutoFit({
  pops,
  routes,
}: {
  pops: POP[];
  routes: BackboneRoute[];
}) {
  const map = useMap();
  const fitted = useRef(false);

  useEffect(() => {
    if (fitted.current) return;
    const allPoints: [number, number][] = [
      ...pops.map((p): [number, number] => [p.lat, p.lng]),
      ...routes.flatMap((r) => r.waypoints),
    ];
    if (allPoints.length < 2) return;
    map.fitBounds(L.latLngBounds(allPoints), { padding: [60, 60] });
    fitted.current = true;
  }, [map, pops, routes]);

  return null;
}

// ─── FitAll handler triggered from outside ──────────────────────────
function FitAllHandler({ trigger }: { trigger: number }) {
  const { pops, routes } = useBackboneStore();
  const map = useMap();

  useEffect(() => {
    if (trigger === 0) return;
    const allPoints: [number, number][] = [
      ...pops.map((p): [number, number] => [p.lat, p.lng]),
      ...routes.flatMap((r) => r.waypoints),
    ];
    if (allPoints.length < 2) return;
    map.flyToBounds(L.latLngBounds(allPoints), { padding: [60, 60], duration: 1.0 });
  }, [trigger, map, pops, routes]);

  return null;
}

// ─── Main map component ─────────────────────────────────────────────
export default function BackboneMap() {
  const { pops, routes, selectedId, setSelected, drawingMode } = useBackboneStore();
  const [tileLayer, setTileLayer] = useState<"dark" | "satellite" | "terrain">("dark");
  const [fitAllTrigger, setFitAllTrigger] = useState(0);

  const tileUrls = {
    dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    terrain: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
  };

  return (
    <div className={`w-full h-full relative ${drawingMode !== "none" ? "drawing-mode" : ""}`}>
      <MapContainer
        center={[-27.5954, -48.548]}
        zoom={10}
        style={{ width: "100%", height: "100%", background: "#060b14" }}
        zoomControl={true}
        doubleClickZoom={false}
        attributionControl={true}
      >
        <TileLayer
          key={tileLayer}
          url={tileUrls[tileLayer]}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={20}
        />

        <AutoFit pops={pops} routes={routes} />
        <FitAllHandler trigger={fitAllTrigger} />
        <MapInteraction />
        <FlyToHandler />
        <SimulationEngine />

        {/* Routes */}
        {routes.map((route) => (
          <RouteLayer key={route.id} route={route} selected={selectedId === route.id} />
        ))}

        {/* POPs */}
        {pops.map((pop) => (
          <Marker
            key={pop.id}
            position={[pop.lat, pop.lng]}
            icon={createPOPIcon(pop.status, selectedId === pop.id)}
            eventHandlers={{ click: () => setSelected(pop.id) }}
            zIndexOffset={selectedId === pop.id ? 1000 : 0}
          >
            <Popup>
              <POPPopup pop={pop} />
            </Popup>
          </Marker>
        ))}

        <DrawingPreview />
      </MapContainer>

      {/* Map controls overlay */}
      <MapControlsOverlay
        tileLayer={tileLayer}
        onTileChange={setTileLayer}
        onFitAll={() => setFitAllTrigger((n) => n + 1)}
      />
    </div>
  );
}
