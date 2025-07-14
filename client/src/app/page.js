'use client'
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import Toast from '@/components/Toast';

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('http://192.168.18.220:3001/api/productos')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setProductos(data);
      });
  }, []);

  const handleAdd = (producto) => {
    addToCart(producto);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000); // 2s visible
  };

  return (
    <main className="p-8 bg-[#fdf8f3] min-h-screen">
      <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center font-serif">
        Don Rimos Chocolate Tradicional 🍫
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productos
          .filter(producto =>
            producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
          )
          .map(producto => (
            <div key={producto.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
              <img src={producto.imagen} alt={producto.nombre} className="w-full h-52 object-cover rounded-xl mb-4" />
              <h2 className="text-black text-xl font-bold text-brown-800">{producto.nombre}</h2>
              <p className="text-sm text-gray-700">{producto.descripcion}</p>
              <p className="text-lg text-green-700 font-semibold mt-2">
                ${Number(producto.precio).toLocaleString('es-CO')}
              </p>
              <button
                onClick={() => handleAdd(producto)}
                className="mt-4 bg-brown-700 hover:bg-brown-800 text-orange-500 py-2 rounded-lg border"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
      </div>

      <Toast show={toastVisible} message="Producto agregado al carrito 🛒" />
    </main>
  );
}
