'use client'

import { data } from "autoprefixer";
import { useEffect, useState } from "react"

export default function EliminarProducto(){
    const [ productos, setProductos] = useState([]);
    const [ mensaje, setMensaje] = useState('');

    useEffect(() =>{
        fetch('http://localhost:3001/api/productos')
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(() => setMensaje('❌ Error al obtener productos'));
    }, []);

    const eliminarProducto = async (id) => {
        try {
            const res = await fetch(`http://localhost:3001/api/productos/${id}`,{
                method: 'DELETE',
            });

            if (res.ok) {
                setMensaje('✅ Producto eliminado')
                setProductos(productos.filter(p => p.id !== id));
            }else {
                setMensaje('❌ Error al eliminar el producto')
            } 
        } catch (err) {
            setMensaje('❌ Error al conectar con el servidor')
        }
    };

    return(
        <main className="p-8 max-w-xl mx-auto text-black">
            <h1 className="text-2xl font-bold mb-4 text-center">Eliminar Producto</h1>
            {mensaje && <p className="mb-4 text-sm text-gray-700">{mensaje}</p>}
            <ul className="grid gap-4">
                {productos.map(producto => (
                    <li 
                        key={producto.nombre}
                        className="border p-4 rounded flex justify-between items-center"
                    >
                        <span>{producto.nombre}</span>
                        <button
                            onClick={() => eliminarProducto(producto.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    )
}
