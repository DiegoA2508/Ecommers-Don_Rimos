'use client'
import { useEffect, useState } from "react";
import { addToCart } from "@/utils/cart";

export default function Home(){
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/productos')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) setProductos(data);
    });
  }, []);

  const handleAdd = (producto) => {
    addToCart(producto);
    alert('Producto agregado al carrito')
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Productos disponibles
      </h1>

      {productos.length === 0 ? (
        <p className="text-center text-gray-500">No hay Productos disponibles por ahora.</p>
      ): (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols2 gap-8">
          {productos.map(producto =>(
            <div key={producto.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between">
              <img 
                src={producto.imagen} 
                alt={producto.nombre} 
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold mt-2">{producto.nombre}</h2>
              <p className="text-gray-700 text-sm mt-1">{producto.descripcion}</p>
              <p className="text-lg font-bold text-brown-800">${producto.precio.toLocaleString('es-CO')}</p>
              <button 
                onClick={() => handleAdd(producto)}
                className="mt-4 bg-brown-700 hover:bg-brown-800 text-black py-2 rounded"
                >
                  Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}