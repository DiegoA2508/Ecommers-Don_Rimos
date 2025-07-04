'use client'

import { useCart } from "@/context/CartContext";

export default function cartPage() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

  return (
    <main className="p-8 bg-[#fdf8f3] min-h-screen">
      <h1 className="text-3xl font-bold text-brown-800 mb-6 text-center">
        🛒 Tu Carrito
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Encabezados */}
          <div className="grid grid-cols-4 font-semibold text-gray-600 px-6 pb-2 border-b border-gray-300">
            <span>Producto</span>
            <span className="text-center">Precio</span>
            <span className="text-center">Cantidad</span>
            <span className="text-right">Subtotal</span>
          </div>

          {/* Lista de productos */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center bg-white px-6 py-4 rounded-xl shadow"
            >
              {/* Columna 1: Imagen + Nombre */}
              <div className="flex items-center gap-4">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-16 h-16 object-cover rounded"
                />
                <span className="font-medium text-gray-800">{item.nombre}</span>
              </div>

              {/* Columna 2: Precio */}
              <div className="text-center text-green-700 font-semibold">
                ${item.precio.toLocaleString('es-CO')}
              </div>

              {/* Columna 3: Cantidad + botón */}
              <div className="text-center">
                {item.cantidad}
                <br />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-600 hover:underline"
                >
                  Quitar 1
                </button>
              </div>

              {/* Columna 4: Subtotal + botón eliminar */}
              <div className="flex flex-col items-end">
                <span className="text-gray-800 font-semibold">
                  ${(item.precio * item.cantidad).toLocaleString('es-CO')}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-end items-center pt-4 border-t mt-4">
            <div className="text-right">
              <p className="text-xl font-bold text-gray-800">
                Total: ${total.toLocaleString('es-CO')}
              </p>
              <button className="mt-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded transition">
                Proceder al pago
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
