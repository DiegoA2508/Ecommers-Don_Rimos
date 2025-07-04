module.exports = {

"[project]/src/app/admin/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Admin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function Admin() {
    const [formulario, setFormulario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        nombre: '',
        descripcion: '',
        precio: '',
        categoria: '',
        stock: ''
    });
    const [archivoSeleccionado, setArchivoSeleccionado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mensaje, setMensaje] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleChange = (e)=>{
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };
    const handleArchivo = (e)=>{
        setArchivoSeleccionado(e.target.files[0]);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!archivoSeleccionado) {
            setMensaje('Por favor selecciona una imagen');
            return;
        }
        const formData = new FormData();
        formData.append('imagen', archivoSeleccionado);
        formData.append('nombre', formulario.nombre);
        formData.append('descripcion', formulario.descripcion);
        formData.append('precio', parseFloat(formulario.precio));
        formData.append('categoria', formulario.categoria);
        formData.append('stock', parseInt(formulario.stock));
        try {
            const res = await fetch('http://localhost:3001/api/productos', {
                method: 'POST',
                body: formData
            });
            if (res.ok) {
                setMensaje('✅ Producto creado correctamente');
                setFormulario({
                    nombre: '',
                    descripcion: '',
                    precio: '',
                    categoria: '',
                    stock: ''
                });
                setArchivoSeleccionado(null);
            } else {
                const data = await res.json();
                setMensaje(`❌ Error al crear el producto: ${data.error || 'Error desconocido'}`);
            }
        } catch (error) {
            setMensaje('❌ Error al conectar con el servidor');
            console.error(error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-8 max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Agregar Producto"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.js",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "grid gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "nombre",
                        placeholder: "Nombre",
                        value: formulario.nombre,
                        onChange: handleChange,
                        required: true,
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "descripcion",
                        placeholder: "Descripción",
                        value: formulario.descripcion,
                        onChange: handleChange,
                        required: true,
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        name: "precio",
                        placeholder: "Precio",
                        value: formulario.precio,
                        onChange: handleChange,
                        required: true,
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        onChange: handleArchivo,
                        accept: "image/*",
                        required: true,
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "categoria",
                        placeholder: "Categoría",
                        value: formulario.categoria,
                        onChange: handleChange,
                        required: true,
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        name: "stock",
                        placeholder: "Stock",
                        value: formulario.stock,
                        onChange: handleChange,
                        required: true,
                        className: "border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-brown-700 hover:bg-brown-800 text-white py-2 px-4 rounded",
                        children: "Crear Producto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.js",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            mensaje && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm text-center text-gray-700",
                children: mensaje
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.js",
                lineNumber: 131,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/page.js",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_admin_page_649776fb.js.map