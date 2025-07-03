'use client'
import { useEffect, useState } from "react";

export default function Home(){
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/productos')
    .then(res => res.json())
    .then(data => setProductos(data))
    .catch(err => console.error('Error cargando productos: ', err));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Don Rimos Chocolate Tradicional 🍫</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map(producto =>(
          <div key={producto.id} className="border p-4 rounded shadow">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold mt-2">{producto.nombre}</h2>
            <p className="text-gray-600">{producto.descripcion}</p>
            <p className="text-lg font-bold text-brown-800">${producto.precio.toLocaleString('es-CO')}</p>
          </div>
        ))}
      </div>
    </main>
  );
}