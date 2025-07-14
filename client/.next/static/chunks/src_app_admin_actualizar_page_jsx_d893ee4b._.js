(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/admin/actualizar/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ActualizarProducto)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ActualizarProducto() {
    _s();
    const [productos, setProductos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [seleccionado, setSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formulario, setFormulario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nombre: '',
        descripcion: '',
        precio: '',
        categoria: '',
        stock: ''
    });
    const [mensaje, setMensaje] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [imagenesSeleccionadas, setImagenesSeleccionadas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [previews, setPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ActualizarProducto.useEffect": ()=>{
            fetch('http://localhost:3001/api/productos').then({
                "ActualizarProducto.useEffect": (res)=>res.json()
            }["ActualizarProducto.useEffect"]).then({
                "ActualizarProducto.useEffect": (data)=>setProductos(data)
            }["ActualizarProducto.useEffect"]);
        }
    }["ActualizarProducto.useEffect"], []);
    const seleccionarProducto = (producto)=>{
        setSeleccionado(producto);
        setFormulario({
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            categoria: producto.categoria,
            stock: producto.stock
        });
        setPreviews(producto.imagenes ? JSON.parse(producto.imagenes) : []);
    };
    const handleChange = (e)=>{
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };
    const handleImagenes = (e)=>{
        const archivos = Array.from(e.target.files);
        setImagenesSeleccionadas(archivos);
        const previews = archivos.map((archivo)=>URL.createObjectURL(archivo));
        setPreviews(previews);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('nombre', formulario.nombre);
        formData.append('descripcion', formulario.descripcion);
        formData.append('precio', formulario.precio);
        formData.append('categoria', formulario.categoria);
        formData.append('stock', formulario.stock);
        imagenesSeleccionadas.forEach((img)=>{
            formData.append('imagenes', img);
        });
        try {
            const res = await fetch(`http://localhost:3001/api/productos/${seleccionado.id}`, {
                method: 'PUT',
                body: formData
            });
            if (res.ok) {
                setMensaje('✅ Producto actualizado');
            } else {
                const data = await res.json();
                setMensaje(`❌ Error: ${data.error || 'desconocido'}`);
            }
        } catch (err) {
            console.error(err);
            setMensaje('❌ Error de conexión');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-8 max-w-3xl mx-auto ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl text-black text-center font-bold mb-4",
                children: "Actualizar Productos"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/actualizar/page.jsx",
                lineNumber: 82,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mb-6 space-y2",
                children: productos.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>seleccionarProducto(p),
                        className: "cursor-pointer bg-orange-500 text-white hover:bg-orange-600 p-4 border rounded",
                        children: p.nombre
                    }, p.id, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 86,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/actualizar/page.jsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            seleccionado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "grid gap-2 text-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: " text-black",
                        children: "Nombre: "
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 100,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "nombre",
                        placeholder: "Nombre",
                        value: formulario.nombre,
                        onChange: handleChange,
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 101,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: " text-black",
                        children: "Descripcion: "
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 109,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "descripcion",
                        placeholder: "Descripcion",
                        value: formulario.descripcion,
                        onChange: handleChange,
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 110,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: " text-black",
                        children: "Precio: "
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 117,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        name: "precio",
                        placeholder: "Precio",
                        value: formulario.precio,
                        onChange: handleChange,
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 118,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: " text-black",
                        children: "Categoría: "
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 126,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "categoria",
                        placeholder: "Categoría",
                        value: formulario.categoria,
                        onChange: handleChange,
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 127,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: " text-black",
                        children: "Stock: "
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 135,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        name: "stock",
                        placeholder: "Stock",
                        value: formulario.stock,
                        onChange: handleChange,
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 136,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: " text-black",
                                children: "Seleccionar imagenes a actualizar (opcional): "
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/actualizar/page.jsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-700 text-sm",
                                        children: imagenesSeleccionadas.length > 0 ? imagenesSeleccionadas.map((f)=>f.name).join(',') : 'Ningun archivo Seleccionado'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                                        lineNumber: 148,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>document.getElementById('inputArchivo').click(),
                                        className: "bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded",
                                        children: "Seleccionar Archivo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                                        lineNumber: 155,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "inputArchivo",
                                        type: "file",
                                        multiple: true,
                                        onChange: handleImagenes,
                                        accept: "image/*",
                                        required: true,
                                        className: "border p-2 rounded hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                                        lineNumber: 163,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/actualizar/page.jsx",
                                lineNumber: 147,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-2 mt-2",
                                children: previews.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: src,
                                        alt: `Preview ${index}`,
                                        className: "h-20 w-full object-cover border rounded"
                                    }, index, false, {
                                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                                        lineNumber: 176,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/actualizar/page.jsx",
                                lineNumber: 174,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 145,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600",
                        children: "Guardar Cambios"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/actualizar/page.jsx",
                        lineNumber: 187,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/actualizar/page.jsx",
                lineNumber: 99,
                columnNumber: 17
            }, this),
            mensaje && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-black text-center text-sm",
                children: mensaje
            }, void 0, false, {
                fileName: "[project]/src/app/admin/actualizar/page.jsx",
                lineNumber: 193,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/actualizar/page.jsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
_s(ActualizarProducto, "ZBfQOxqW2NoB98f6AFapkdftAbU=");
_c = ActualizarProducto;
var _c;
__turbopack_context__.k.register(_c, "ActualizarProducto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_admin_actualizar_page_jsx_d893ee4b._.js.map