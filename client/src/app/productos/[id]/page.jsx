import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function fetchProducto(id) {
  const res = await fetch(`http://localhost:3001/api/productos/${id}`, {
    cache: 'no-store'
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function ProductoPage({ params }) {
  const { id } = params;
  const producto = await fetchProducto(id);

  if (!producto) return notFound();

  const imagenes = producto.imagenes || [producto.imagen];

  return (
    <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Galería de imágenes */}
      <section className="md:col-span-1">
        <div className="flex flex-col gap-4">
          {imagenes.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Imagen ${i + 1}`}
              width={500}
              height={500}
              className="rounded border object-cover"
            />
          ))}
        </div>
      </section>

      {/* Descripción */}
      <section className="md:col-span-1">
        <h1 className="text-2xl font-bold mb-2">{producto.nombre}</h1>
        <p className="text-gray-700 mb-4">{producto.descripcion}</p>
        <p className="text-sm text-gray-500 mb-2">Categoría: {producto.categoria}</p>
        <p className="text-sm text-gray-500">Stock disponible: {producto.stock}</p>
      </section>

      {/* Compra */}
      <section className="md:col-span-1 border p-4 rounded shadow bg-white">
        <p className="text-3xl font-bold text-orange-600 mb-4">
          ${Number(producto.precio).toLocaleString('es-CO')}
        </p>
        <button className="bg-brown-700 hover:bg-brown-800 text-white py-2 px-4 w-full rounded">
          Agregar al carrito
        </button>
        <p className="text-sm text-gray-500 mt-2">Envío gratis a todo el país</p>
        <Link href="/cart" className="text-sm text-blue-600 mt-4 inline-block hover:underline">
          Ir al carrito
        </Link>
      </section>
    </main>
  );
}
