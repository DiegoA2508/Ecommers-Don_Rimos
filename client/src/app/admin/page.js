'use client'

import { useRouter } from "next/navigation";

export default function AdminMenu() {

  const router = useRouter();

  const opciones = [
    { nombre: 'Agregar Producto', ruta: '/admin/agregar'},
    { nombre: 'Eliminar Producto', ruta: '/admin/eliminar'},
    { nombre: 'Actualizar Producto', ruta: '/admin/actualizar'},
  ];

  return (
    <main className="p-8 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6 text-black">Panel de Administración</h1>
      <div className="grid gap-4">
      
        <button 
          onClick={() => router.push('/admin/agregar')}
          className="bg-green-500 hover:bg-green-600 text.white py-2 px-4 rounded shadow"
        >
          Agregar Producto
        </button>

        <button 
          onClick={() => router.push('/admin/eliminar')}
          className="bg-red-500 hover:bg-red-600 text.white py-2 px-4 rounded shadow"
        >
          Eliminar Producto
        </button>

        <button 
          onClick={() => router.push('/admin/actualizar')}
          className="bg-blue-500 hover:bg-blue-600 text.white py-2 px-4 rounded shadow"
        >
          Actualizar Producto
        </button>
        
      </div>
    </main>
  );
}
