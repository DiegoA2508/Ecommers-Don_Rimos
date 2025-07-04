'use client'

import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "@/utils/cart";

export default function cartPage(){
    const [carrito, setCarrito] = useState([]);

    useEffect(() =>{
        setCarrito(getCart());
    },[]);

    const total = carrito.reduce((sum, p) => sum + p.precio, 0);

    const handleRemove = (id) => {
        removeFromCart(id);
        setCarrito(getCart());
    };

    return(
        <main className="p-8 bg-[#fdf8f3] min-h-screen">
            <h1 className="text-3xl font-bold text-brown-800 mb-6 text-center">
                🛒 Tu Carrito
            </h1>

            {carrito.length === 0 ? (
                <p className="text-center text-gray-500">Tu carrito está vacío</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {carrito.map((item, index) =>(
                            <div key={index} className="bg-white rounded-xl shadow flex items-center justify-between p-4">
                                <div className="flex item-center space-x-4">
                                    <img 
                                        src={item.imagen}
                                        alt={item.nombre}
                                        className="w-20 h-20 object-cover rounded" 
                                    />
                                    <div>
                                        <h2 className="text-lg font-semibold text-brown-800">{item.nombre}</h2>
                                        <p className="text-green-700 font-medium">{item.precio.toLocaleString('es-CO')}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-right">
                        <p className="text-2xl font-bold text-brown-800">Total: ${total.toLocaleString('es-CO')}</p>
                        <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                            Proceder al pago
                        </button>
                    </div>
                </>
            )}
        </main>
    );
}