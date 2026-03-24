(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/RoutePopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoutePopup",
    ()=>RoutePopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/backboneStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const statusLabel = {
    active: "ATIVO",
    alert: "ALERTA",
    inactive: "INATIVO"
};
const statusColor = {
    active: "text-accent-green border-accent-green/30 bg-accent-green/10",
    alert: "text-accent-yellow border-accent-yellow/30 bg-accent-yellow/10",
    inactive: "text-accent-red border-accent-red/30 bg-accent-red/10"
};
function RoutePopup({ route }) {
    _s();
    const { deleteRoute, updateRoute } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])();
    const cycleStatus = ()=>{
        const next = {
            active: "alert",
            alert: "inactive",
            inactive: "active"
        };
        updateRoute(route.id, {
            status: next[route.status]
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-60 font-rajdhani",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-3 pt-3 pb-2 border-b border-border-dim",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                className: "w-3.5 h-3.5 text-accent-blue"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoutePopup.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-600 text-sm text-text-primary tracking-wider",
                                children: route.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoutePopup.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RoutePopup.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: cycleStatus,
                        className: `text-[9px] font-mono px-1.5 py-0.5 rounded border tracking-wider cursor-pointer hover:opacity-70 transition-opacity ${statusColor[route.status]}`,
                        children: statusLabel[route.status]
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoutePopup.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RoutePopup.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2.5 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-text-muted",
                                children: "Distância"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoutePopup.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs text-text-primary font-600",
                                children: [
                                    route.distanceKm.toFixed(1),
                                    " km"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RoutePopup.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RoutePopup.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    (route.downGbps || route.upGbps) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                className: "w-3 h-3 text-accent-blue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RoutePopup.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Download"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RoutePopup.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RoutePopup.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs text-accent-blue font-600",
                                        children: [
                                            (route.downGbps || 0).toFixed(2),
                                            " Gbps"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RoutePopup.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RoutePopup.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 text-text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "w-3 h-3 text-accent-cyan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RoutePopup.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Upload"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RoutePopup.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RoutePopup.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs text-accent-cyan font-600",
                                        children: [
                                            (route.upGbps || 0).toFixed(2),
                                            " Gbps"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RoutePopup.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RoutePopup.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-text-muted",
                                children: "Waypoints"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoutePopup.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs text-text-muted",
                                children: [
                                    route.waypoints.length,
                                    " pontos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RoutePopup.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RoutePopup.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RoutePopup.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 px-2 pb-2 border-t border-border-dim pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: cycleStatus,
                        className: "flex-1 py-1.5 rounded text-[11px] font-600 tracking-wide text-text-muted hover:text-accent-yellow hover:bg-accent-yellow/10 transition-colors",
                        children: "Alterar Status"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoutePopup.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-border-dim"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoutePopup.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>deleteRoute(route.id),
                        className: "flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded text-[11px] font-600 tracking-wide text-text-muted hover:text-accent-red hover:bg-accent-red/10 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoutePopup.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            "Remover"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RoutePopup.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RoutePopup.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RoutePopup.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(RoutePopup, "AIiYnxxmdqyCPvnz2NfFwkKBjko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"]
    ];
});
_c = RoutePopup;
var _c;
__turbopack_context__.k.register(_c, "RoutePopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/POPPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POPPopup",
    ()=>POPPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/backboneStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const statusLabel = {
    active: "ATIVO",
    alert: "ALERTA",
    inactive: "INATIVO"
};
const statusColor = {
    active: "text-accent-green border-accent-green/30 bg-accent-green/10",
    alert: "text-accent-yellow border-accent-yellow/30 bg-accent-yellow/10",
    inactive: "text-accent-red border-accent-red/30 bg-accent-red/10"
};
const dotColor = {
    active: "bg-accent-green shadow-[0_0_6px_rgba(0,232,126,0.6)]",
    alert: "bg-accent-yellow shadow-[0_0_6px_rgba(255,184,0,0.6)]",
    inactive: "bg-accent-red"
};
function POPPopup({ pop }) {
    _s();
    const { deletePOP, updatePOP } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])();
    const cycleStatus = ()=>{
        const next = {
            active: "alert",
            alert: "inactive",
            inactive: "active"
        };
        updatePOP(pop.id, {
            status: next[pop.status]
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-56 font-rajdhani",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-3 pt-3 pb-2 border-b border-border-dim",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-3.5 h-3.5 text-accent-green"
                            }, void 0, false, {
                                fileName: "[project]/src/components/POPPopup.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-600 text-sm text-text-primary tracking-wider",
                                children: pop.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/POPPopup.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/POPPopup.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: cycleStatus,
                        className: `text-[9px] font-mono px-1.5 py-0.5 rounded border tracking-wider cursor-pointer transition-opacity hover:opacity-70 ${statusColor[pop.status]}`,
                        children: statusLabel[pop.status]
                    }, void 0, false, {
                        fileName: "[project]/src/components/POPPopup.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/POPPopup.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2.5 space-y-2",
                children: [
                    pop.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-text-muted",
                        children: pop.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/POPPopup.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    pop.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-text-muted mt-0.5",
                                children: "📍"
                            }, void 0, false, {
                                fileName: "[project]/src/components/POPPopup.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-text-muted",
                                children: pop.address
                            }, void 0, false, {
                                fileName: "[project]/src/components/POPPopup.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/POPPopup.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-2 h-2 rounded-full ${dotColor[pop.status]}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/POPPopup.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-mono text-text-muted",
                                children: [
                                    pop.lat.toFixed(5),
                                    ", ",
                                    pop.lng.toFixed(5)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/POPPopup.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/POPPopup.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/POPPopup.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 px-2 pb-2 border-t border-border-dim pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>updatePOP(pop.id, {
                                status: pop.status === "active" ? "inactive" : pop.status === "inactive" ? "alert" : "active"
                            }),
                        className: "flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded text-[11px] font-600 tracking-wide text-text-muted hover:text-accent-green hover:bg-accent-green/10 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/POPPopup.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            "Editar Status"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/POPPopup.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-border-dim"
                    }, void 0, false, {
                        fileName: "[project]/src/components/POPPopup.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>deletePOP(pop.id),
                        className: "flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded text-[11px] font-600 tracking-wide text-text-muted hover:text-accent-red hover:bg-accent-red/10 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/POPPopup.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            "Remover"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/POPPopup.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/POPPopup.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/POPPopup.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(POPPopup, "P3fqr/wvSZTGn2/Wrux+Q/4gI/o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"]
    ];
});
_c = POPPopup;
var _c;
__turbopack_context__.k.register(_c, "POPPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MapControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapControls",
    ()=>MapControls,
    "tileLayers",
    ()=>tileLayers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/backboneStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const tileLayers = {
    dark: {
        label: "Dark",
        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    },
    satellite: {
        label: "Satélite",
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    },
    terrain: {
        label: "Mapa",
        url: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
    }
};
function MapControls({ tileLayer, onTileChange, onFitAll }) {
    _s();
    const { simulationActive, toggleSimulation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])();
    const [layersOpen, setLayersOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-4 right-4 z-[900] flex flex-col gap-2 items-end",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-panel flex flex-col divide-y divide-border-dim overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlBtn, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MapControls.tsx",
                            lineNumber: 40,
                            columnNumber: 17
                        }, void 0),
                        title: "Ajustar ao mapa",
                        onClick: onFitAll
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapControls.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlBtn, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapControls.tsx",
                                    lineNumber: 48,
                                    columnNumber: 19
                                }, void 0),
                                title: "Camadas",
                                onClick: ()=>setLayersOpen((v)=>!v),
                                active: layersOpen
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapControls.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            layersOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-full top-0 mr-2 glass-panel overflow-hidden animate-glow_in whitespace-nowrap",
                                children: Object.keys(tileLayers).map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onTileChange(k);
                                            setLayersOpen(false);
                                        },
                                        className: `flex items-center gap-2 w-full px-3 py-2 text-left text-xs font-rajdhani font-600 tracking-wide transition-colors ${tileLayer === k ? "text-accent-green bg-accent-green/10" : "text-text-muted hover:text-text-primary hover:bg-white/5"}`,
                                        children: [
                                            tileLayer === k && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-accent-green",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MapControls.tsx",
                                                lineNumber: 65,
                                                columnNumber: 39
                                            }, this),
                                            tileLayer !== k && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MapControls.tsx",
                                                lineNumber: 66,
                                                columnNumber: 39
                                            }, this),
                                            tileLayers[k].label
                                        ]
                                    }, k, true, {
                                        fileName: "[project]/src/components/MapControls.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapControls.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapControls.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlBtn, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MapControls.tsx",
                            lineNumber: 76,
                            columnNumber: 17
                        }, void 0),
                        title: simulationActive ? "Parar simulação" : "Simular tráfego",
                        onClick: toggleSimulation,
                        active: simulationActive,
                        activeColor: "text-accent-yellow"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapControls.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapControls.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            simulationActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-panel flex items-center gap-2 px-2.5 py-1.5 animate-glow_in border-accent-yellow/25",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1.5 h-1.5 rounded-full bg-accent-yellow animate-pulse_dot"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapControls.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[9px] text-accent-yellow/80 tracking-widest",
                        children: "SIMULANDO TRÁFEGO"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapControls.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapControls.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MapControls.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(MapControls, "i6mcUIHnlA6vADijIaImpycEUzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"]
    ];
});
_c = MapControls;
function ControlBtn({ icon, title, onClick, active, activeColor = "text-accent-green" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        title: title,
        className: `p-2.5 transition-colors ${active ? `${activeColor} bg-white/5` : "text-text-muted hover:text-accent-green hover:bg-accent-green/8"}`,
        children: icon
    }, void 0, false, {
        fileName: "[project]/src/components/MapControls.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c1 = ControlBtn;
var _c, _c1;
__turbopack_context__.k.register(_c, "MapControls");
__turbopack_context__.k.register(_c1, "ControlBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BackboneMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackboneMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Polyline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/backboneStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoutePopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RoutePopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$POPPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/POPPopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MapControls.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// ─── Fly-to handler ─────────────────────────────────────────────────
function FlyToHandler() {
    _s();
    const { flyTarget, setFlyTarget } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlyToHandler.useEffect": ()=>{
            if (!flyTarget) return;
            if (flyTarget.type === "point") {
                map.flyTo([
                    flyTarget.lat,
                    flyTarget.lng
                ], flyTarget.zoom ?? 13, {
                    duration: 1.2
                });
            } else if (flyTarget.type === "bounds" && flyTarget.waypoints.length >= 2) {
                map.flyToBounds(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(flyTarget.waypoints), {
                    padding: [
                        80,
                        80
                    ],
                    duration: 1.2
                });
            }
            setTimeout({
                "FlyToHandler.useEffect": ()=>setFlyTarget(null)
            }["FlyToHandler.useEffect"], 1500);
        }
    }["FlyToHandler.useEffect"], [
        flyTarget,
        map,
        setFlyTarget
    ]);
    return null;
}
_s(FlyToHandler, "eiVKah0blJvfHIK7D3swqraD07U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = FlyToHandler;
// ─── Simulation engine ───────────────────────────────────────────────
function SimulationEngine() {
    _s1();
    const simulationActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])({
        "SimulationEngine.useBackboneStore[simulationActive]": (s)=>s.simulationActive
    }["SimulationEngine.useBackboneStore[simulationActive]"]);
    const updateRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])({
        "SimulationEngine.useBackboneStore[updateRoute]": (s)=>s.updateRoute
    }["SimulationEngine.useBackboneStore[updateRoute]"]);
    const updatePOP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])({
        "SimulationEngine.useBackboneStore[updatePOP]": (s)=>s.updatePOP
    }["SimulationEngine.useBackboneStore[updatePOP]"]);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimulationEngine.useEffect": ()=>{
            if (!simulationActive) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                return;
            }
            intervalRef.current = setInterval({
                "SimulationEngine.useEffect": ()=>{
                    const { routes, pops } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"].getState();
                    const activeRoutes = routes.filter({
                        "SimulationEngine.useEffect.activeRoutes": (r)=>r.status === "active" && r.downGbps
                    }["SimulationEngine.useEffect.activeRoutes"]);
                    if (activeRoutes.length === 0) return;
                    const route = activeRoutes[Math.floor(Math.random() * activeRoutes.length)];
                    const delta = (Math.random() - 0.48) * 0.15;
                    updateRoute(route.id, {
                        downGbps: Math.max(0.1, (route.downGbps || 1) + delta),
                        upGbps: Math.max(0.1, (route.upGbps || 0.8) + delta * 0.9)
                    });
                    // Randomly alert a POP briefly
                    if (Math.random() < 0.06) {
                        const activePOPs = pops.filter({
                            "SimulationEngine.useEffect.activePOPs": (p)=>p.status === "active"
                        }["SimulationEngine.useEffect.activePOPs"]);
                        if (activePOPs.length === 0) return;
                        const pop = activePOPs[Math.floor(Math.random() * activePOPs.length)];
                        updatePOP(pop.id, {
                            status: "alert"
                        });
                        setTimeout({
                            "SimulationEngine.useEffect": ()=>updatePOP(pop.id, {
                                    status: "active"
                                })
                        }["SimulationEngine.useEffect"], 4000 + Math.random() * 3000);
                    }
                }
            }["SimulationEngine.useEffect"], 2000);
            return ({
                "SimulationEngine.useEffect": ()=>{
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            })["SimulationEngine.useEffect"];
        }
    }["SimulationEngine.useEffect"], [
        simulationActive,
        updateRoute,
        updatePOP
    ]);
    return null;
}
_s1(SimulationEngine, "GS3XvXsMKy3RiTUqoEzK7295QuQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"]
    ];
});
_c1 = SimulationEngine;
// ─── Custom marker icons ────────────────────────────────────────────
const createPOPIcon = (status, selected)=>{
    const colors = {
        active: "#00e87e",
        alert: "#ffb800",
        inactive: "#ff3b5c"
    };
    const glows = {
        active: "rgba(0,232,126,0.5)",
        alert: "rgba(255,184,0,0.5)",
        inactive: "rgba(255,59,92,0.4)"
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        html: svg,
        className: "",
        iconSize: [
            size + 16,
            size + 16
        ],
        iconAnchor: [
            (size + 16) / 2,
            (size + 16) / 2
        ],
        popupAnchor: [
            0,
            -(size + 8)
        ]
    });
};
const createDrawingIcon = ()=>{
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8" fill="rgba(0,232,126,0.15)" stroke="#00e87e" stroke-width="1.5"/>
      <circle cx="10" cy="10" r="3" fill="#00e87e"/>
    </svg>
  `;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        html: svg,
        className: "",
        iconSize: [
            20,
            20
        ],
        iconAnchor: [
            10,
            10
        ]
    });
};
// ─── Route colors ───────────────────────────────────────────────────
const routeColors = {
    active: "#00e87e",
    alert: "#ffb800",
    inactive: "#ff3b5c"
};
const routeDashArray = {
    active: undefined,
    alert: "8 4",
    inactive: "4 6"
};
// ─── Map interaction handler ────────────────────────────────────────
function MapInteraction() {
    _s2();
    const { drawingMode, addDrawingWaypoint, drawingWaypoints, setMousePos, resetDrawing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"])({
        click (e) {
            const { lat, lng } = e.latlng;
            if (drawingMode === "addPOP") {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"].getState().setPendingCoord([
                    lat,
                    lng
                ]);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"].getState().setCreateDialogOpen("pop");
                return;
            }
            if (drawingMode === "drawRoute") {
                addDrawingWaypoint([
                    lat,
                    lng
                ]);
                return;
            }
        },
        dblclick (e) {
            if (drawingMode === "drawRoute" && drawingWaypoints.length >= 2) {
                e.originalEvent.preventDefault();
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"].getState().setCreateDialogOpen("route");
                return;
            }
        },
        mousemove (e) {
            if (drawingMode !== "none") {
                setMousePos([
                    e.latlng.lat,
                    e.latlng.lng
                ]);
            }
        },
        mouseout () {
            setMousePos(null);
        }
    });
    return null;
}
_s2(MapInteraction, "dNe9Z/oPK1PhV0vehM+RzJiT958=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapEvents"]
    ];
});
_c2 = MapInteraction;
// ─── Preview polyline while drawing ────────────────────────────────
function DrawingPreview() {
    _s3();
    const { drawingMode, drawingWaypoints, mousePos } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])();
    if (drawingMode !== "drawRoute" || drawingWaypoints.length === 0) return null;
    const previewPoints = mousePos ? [
        ...drawingWaypoints,
        mousePos
    ] : drawingWaypoints;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                positions: drawingWaypoints,
                pathOptions: {
                    color: "#00e87e",
                    weight: 3,
                    opacity: 0.9,
                    dashArray: "6 3"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/BackboneMap.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            mousePos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                positions: [
                    drawingWaypoints[drawingWaypoints.length - 1],
                    mousePos
                ],
                pathOptions: {
                    color: "#00e87e",
                    weight: 2,
                    opacity: 0.5,
                    dashArray: "4 4"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/BackboneMap.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this),
            drawingWaypoints.map((wp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                    position: wp,
                    icon: createDrawingIcon(),
                    interactive: false
                }, `wp-${i}`, false, {
                    fileName: "[project]/src/components/BackboneMap.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true);
}
_s3(DrawingPreview, "imq5M1q1A9+g4sVd9M3quPNATcE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"]
    ];
});
_c3 = DrawingPreview;
// ─── Selected route highlight ───────────────────────────────────────
function RouteLayer({ route, selected }) {
    _s4();
    const setSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])({
        "RouteLayer.useBackboneStore[setSelected]": (s)=>s.setSelected
    }["RouteLayer.useBackboneStore[setSelected]"]);
    const color = routeColors[route.status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                positions: route.waypoints,
                pathOptions: {
                    color,
                    weight: 16,
                    opacity: 0.12
                },
                interactive: false
            }, void 0, false, {
                fileName: "[project]/src/components/BackboneMap.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                positions: route.waypoints,
                pathOptions: {
                    color: "#000",
                    weight: selected ? 7 : 5,
                    opacity: 0.4
                },
                interactive: false
            }, void 0, false, {
                fileName: "[project]/src/components/BackboneMap.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                positions: route.waypoints,
                pathOptions: {
                    color,
                    weight: selected ? 4 : 2.5,
                    opacity: selected ? 1 : 0.85,
                    dashArray: routeDashArray[route.status],
                    lineCap: "round",
                    lineJoin: "round"
                },
                eventHandlers: {
                    click: ()=>setSelected(route.id)
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoutePopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutePopup"], {
                        route: route
                    }, void 0, false, {
                        fileName: "[project]/src/components/BackboneMap.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BackboneMap.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BackboneMap.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(RouteLayer, "PEcrigBHXxvp8TuQon7M1h8cWZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"]
    ];
});
_c4 = RouteLayer;
;
// ─── MapControls wrapper (outside MapContainer) ──────────────────────
function MapControlsOverlay({ tileLayer, onTileChange, onFitAll }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapControls"], {
        tileLayer: tileLayer,
        onTileChange: onTileChange,
        onFitAll: onFitAll
    }, void 0, false, {
        fileName: "[project]/src/components/BackboneMap.tsx",
        lineNumber: 306,
        columnNumber: 5
    }, this);
}
_c5 = MapControlsOverlay;
function AutoFit({ pops, routes }) {
    _s5();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const fitted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutoFit.useEffect": ()=>{
            if (fitted.current) return;
            const allPoints = [
                ...pops.map({
                    "AutoFit.useEffect": (p)=>[
                            p.lat,
                            p.lng
                        ]
                }["AutoFit.useEffect"]),
                ...routes.flatMap({
                    "AutoFit.useEffect": (r)=>r.waypoints
                }["AutoFit.useEffect"])
            ];
            if (allPoints.length < 2) return;
            map.fitBounds(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(allPoints), {
                padding: [
                    60,
                    60
                ]
            });
            fitted.current = true;
        }
    }["AutoFit.useEffect"], [
        map,
        pops,
        routes
    ]);
    return null;
}
_s5(AutoFit, "7BD6L9KmVEx1PAHYxufLcp8mZLE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c6 = AutoFit;
// ─── FitAll handler triggered from outside ──────────────────────────
function FitAllHandler({ trigger }) {
    _s6();
    const { pops, routes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FitAllHandler.useEffect": ()=>{
            if (trigger === 0) return;
            const allPoints = [
                ...pops.map({
                    "FitAllHandler.useEffect": (p)=>[
                            p.lat,
                            p.lng
                        ]
                }["FitAllHandler.useEffect"]),
                ...routes.flatMap({
                    "FitAllHandler.useEffect": (r)=>r.waypoints
                }["FitAllHandler.useEffect"])
            ];
            if (allPoints.length < 2) return;
            map.flyToBounds(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(allPoints), {
                padding: [
                    60,
                    60
                ],
                duration: 1.0
            });
        }
    }["FitAllHandler.useEffect"], [
        trigger,
        map,
        pops,
        routes
    ]);
    return null;
}
_s6(FitAllHandler, "vIyQj/P9mGoaXWh+/Q4GM2WwyHQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c7 = FitAllHandler;
function BackboneMap() {
    _s7();
    const { pops, routes, selectedId, setSelected, drawingMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"])();
    const [tileLayer, setTileLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [fitAllTrigger, setFitAllTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const tileUrls = {
        dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        terrain: "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full relative ${drawingMode !== "none" ? "drawing-mode" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
                center: [
                    -27.5954,
                    -48.548
                ],
                zoom: 10,
                style: {
                    width: "100%",
                    height: "100%",
                    background: "#060b14"
                },
                zoomControl: true,
                doubleClickZoom: false,
                attributionControl: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                        url: tileUrls[tileLayer],
                        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>',
                        subdomains: "abcd",
                        maxZoom: 20
                    }, tileLayer, false, {
                        fileName: "[project]/src/components/BackboneMap.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AutoFit, {
                        pops: pops,
                        routes: routes
                    }, void 0, false, {
                        fileName: "[project]/src/components/BackboneMap.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FitAllHandler, {
                        trigger: fitAllTrigger
                    }, void 0, false, {
                        fileName: "[project]/src/components/BackboneMap.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapInteraction, {}, void 0, false, {
                        fileName: "[project]/src/components/BackboneMap.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlyToHandler, {}, void 0, false, {
                        fileName: "[project]/src/components/BackboneMap.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimulationEngine, {}, void 0, false, {
                        fileName: "[project]/src/components/BackboneMap.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    routes.map((route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RouteLayer, {
                            route: route,
                            selected: selectedId === route.id
                        }, route.id, false, {
                            fileName: "[project]/src/components/BackboneMap.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, this)),
                    pops.map((pop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                            position: [
                                pop.lat,
                                pop.lng
                            ],
                            icon: createPOPIcon(pop.status, selectedId === pop.id),
                            eventHandlers: {
                                click: ()=>setSelected(pop.id)
                            },
                            zIndexOffset: selectedId === pop.id ? 1000 : 0,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$POPPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POPPopup"], {
                                    pop: pop
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BackboneMap.tsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/BackboneMap.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this)
                        }, pop.id, false, {
                            fileName: "[project]/src/components/BackboneMap.tsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawingPreview, {}, void 0, false, {
                        fileName: "[project]/src/components/BackboneMap.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BackboneMap.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapControlsOverlay, {
                tileLayer: tileLayer,
                onTileChange: setTileLayer,
                onFitAll: ()=>setFitAllTrigger((n)=>n + 1)
            }, void 0, false, {
                fileName: "[project]/src/components/BackboneMap.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BackboneMap.tsx",
        lineNumber: 370,
        columnNumber: 5
    }, this);
}
_s7(BackboneMap, "oPkLTgBYxYQ4BoUbnxABT4USUZg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$backboneStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackboneStore"]
    ];
});
_c8 = BackboneMap;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "FlyToHandler");
__turbopack_context__.k.register(_c1, "SimulationEngine");
__turbopack_context__.k.register(_c2, "MapInteraction");
__turbopack_context__.k.register(_c3, "DrawingPreview");
__turbopack_context__.k.register(_c4, "RouteLayer");
__turbopack_context__.k.register(_c5, "MapControlsOverlay");
__turbopack_context__.k.register(_c6, "AutoFit");
__turbopack_context__.k.register(_c7, "FitAllHandler");
__turbopack_context__.k.register(_c8, "BackboneMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BackboneMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/BackboneMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_6fc5d773._.js.map