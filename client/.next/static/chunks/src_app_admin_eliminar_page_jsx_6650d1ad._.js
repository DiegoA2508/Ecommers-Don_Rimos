(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/admin/eliminar/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EliminarProducto)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$autoprefixer$2f$lib$2f$autoprefixer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/autoprefixer/lib/autoprefixer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function EliminarProducto() {
    _s();
    const [productos, setProductos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mensaje, setMensaje] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EliminarProducto.useEffect": ()=>{
            fetch('http://localhost:3001/api/productos').then({
                "EliminarProducto.useEffect": (res)=>res.json()
            }["EliminarProducto.useEffect"]).then({
                "EliminarProducto.useEffect": (data)=>setProductos(data)
            }["EliminarProducto.useEffect"]).catch({
                "EliminarProducto.useEffect": ()=>setMensaje('❌ Error al obtener productos')
            }["EliminarProducto.useEffect"]);
        }
    }["EliminarProducto.useEffect"], []);
    const eliminarProducto = async (id)=>{
        try {
            const res = await fetch(`http://localhost:3001/api/productos/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setMensaje('✅ Producto eliminado');
                setProductos(productos.filter((p)=>p.id !== id));
            } else {
                setMensaje('❌ Error al eliminar el producto');
            }
        } catch (err) {
            setMensaje('❌ Error al conectar con el servidor');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-8 max-w-xl mx-auto text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4 text-center",
                children: "Eliminar Producto"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/eliminar/page.jsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            mensaje && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-4 text-sm text-gray-700",
                children: mensaje
            }, void 0, false, {
                fileName: "[project]/src/app/admin/eliminar/page.jsx",
                lineNumber: 37,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid gap-4",
                children: productos.map((producto)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "border p-4 rounded flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: producto.nombre
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/eliminar/page.jsx",
                                lineNumber: 44,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>eliminarProducto(producto.id),
                                className: "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600",
                                children: "Eliminar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/eliminar/page.jsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, this)
                        ]
                    }, producto.nombre, true, {
                        fileName: "[project]/src/app/admin/eliminar/page.jsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/eliminar/page.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/eliminar/page.jsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_s(EliminarProducto, "hlJO5DeAqZcsFQGBWuVIKp2oVg4=");
_c = EliminarProducto;
var _c;
__turbopack_context__.k.register(_c, "EliminarProducto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_admin_eliminar_page_jsx_6650d1ad._.js.map