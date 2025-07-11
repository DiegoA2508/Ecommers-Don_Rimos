'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ResultadosBusqueda() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        if (!query) return;

        fetch(`http://localhost:3001/api/productos?q=${encodeURIComponent(query)}`)
            .then(res => {
                if (!res.ok){
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                return res.json();
            })
            .then(data => setProductos(data))
            .catch(err => console.error('Error al obtener productos:', err))
    }, [query]);

    return (
        <main className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl text-orange-500 font-bold mb-4">Resultados para: "{query}"</h1>
            {productos.length > 0 ? (
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productos.map(producto => (
                        <li key={producto.id} className="border rounded-lg p-4 shadow-sm bg-white">
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                className="w-full h-40 object-cover rounded mb-2"
                            />
                            <h2 className="text-black text-lg font-semibold">{producto.nombre}</h2>
                            <p className="text-sm text-gray-600">{producto.descripcion}</p>
                            <p className="text-orange-600 font-bold mt-2">
                                ${Number(producto.precio).toLocaleString('es-CO')}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">No se encontraron resultados.</p>
            )}
        </main>
    )
}
