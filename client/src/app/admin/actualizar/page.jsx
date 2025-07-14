'use client'

import { useEffect, useState } from "react"

export default function ActualizarProducto(){
    const [productos, setProductos] = useState([]);
    const [seleccionado, setSeleccionado] = useState(null);
    const [formulario, setFormulario] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        categoria: '',
        stock: '',
    });
    const [mensaje, setMensaje] = useState('');
    const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState([]);
    const [previews, setPreviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/productos')
            .then(res => res.json())
            .then(data => setProductos(data));
    }, []);

    const seleccionarProducto = (producto) => {
        setSeleccionado(producto);
        setFormulario({
            nombre: producto.nombre,
            descripcion:producto.descripcion,
            precio: producto.precio,
            categoria: producto.categoria,
            stock: producto.stock
        });
        setPreviews(producto.imagenes ? JSON.parse(producto.imagenes) : []);
    };

    const handleChange = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };

    const handleImagenes = (e) => {
        const archivos = Array.from(e.target.files);
        setImagenesSeleccionadas(archivos);
        const previews = archivos.map(archivo => URL.createObjectURL(archivo));
        setPreviews(previews);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nombre', formulario.nombre);
        formData.append('descripcion', formulario.descripcion);
        formData.append('precio', formulario.precio);
        formData.append('categoria', formulario.categoria);
        formData.append('stock', formulario.stock);

        imagenesSeleccionadas.forEach((img) =>{
            formData.append('imagenes', img);
        });

        try {
            const res = await fetch(`http://localhost:3001/api/productos/${seleccionado.id}`,{
                method: 'PUT',
                body: formData,
            });

            if (res.ok) {
                setMensaje('✅ Producto actualizado')
            } else {
                const data = await res.json();
                setMensaje(`❌ Error: ${data.error || 'desconocido'}`)
            }
        } catch (err) {
            console.error(err);
            setMensaje('❌ Error de conexión');
        }
    };

    return(
        <main className="p-8 max-w-3xl mx-auto ">
            <h1 className="text-2xl text-black text-center font-bold mb-4">Actualizar Productos</h1>

            <ul className="mb-6 space-y2">
                {productos.map(p => (
                    <li 
                        key={p.id}
                        onClick={() => seleccionarProducto(p)}
                        className="cursor-pointer bg-orange-500 text-white hover:bg-orange-600 p-4 border rounded"
                    >
                        {p.nombre}
                    </li>
                ))}
            </ul>

            
            {seleccionado && (
                
                <form onSubmit={handleSubmit} className="grid gap-2 text-black">
                    <h2 className=" text-black">Nombre: </h2>
                    <input 
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={formulario.nombre}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                    <h2 className=" text-black">Descripcion: </h2>
                    <textarea
                        name="descripcion"
                        placeholder="Descripcion"
                        value={formulario.descripcion}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                    <h2 className=" text-black">Precio: </h2>
                    <input 
                        type="number"
                        name="precio"
                        placeholder="Precio"
                        value={formulario.precio}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                    <h2 className=" text-black">Categoría: </h2>
                    <input 
                        type="text"
                        name="categoria"
                        placeholder="Categoría"
                        value={formulario.categoria}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                    <h2 className=" text-black">Stock: </h2>
                    <input 
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        value={formulario.stock}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />

                    <div className="flex flex-col gap-2">
                        <h2 className=" text-black">Seleccionar imagenes a actualizar (opcional): </h2>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-700 text-sm">
                                {imagenesSeleccionadas.length > 0 
                                    ? imagenesSeleccionadas.map(f => f.name).join(',')
                                    : 'Ningun archivo Seleccionado'
                                }
                            </span>
                            
                            <button 
                            type="button"
                            onClick={() => document.getElementById('inputArchivo').click()}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                            >
                                Seleccionar Archivo
                            </button>
                            
                            <input
                            id="inputArchivo"
                            type="file"
                            multiple
                            onChange={handleImagenes}
                            accept="image/*"
                            required
                            className="border p-2 rounded hidden"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-2">
                            {previews.map((src, index) =>
                            <img
                                key={index}  
                                src={src}
                                alt={`Preview ${index}`}
                                className="h-20 w-full object-cover border rounded"
                            />
                            )}
                        </div>

                    </div>

                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Guardar Cambios
                    </button>
                </form>
            )}

            {mensaje && <p className="mt-4 text-black text-center text-sm">{mensaje}</p>}
        </main>
    )
}