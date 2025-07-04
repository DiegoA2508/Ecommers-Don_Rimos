'use client'

import { useState } from "react";

export default function Admin() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: '',
    stock: ''
  });

  const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleArchivo = (e) => {
    setArchivoSeleccionado(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!archivoSeleccionado) {
      setMensaje('Por favor selecciona una imagen');
      return;
    }

    const formData = new FormData();
    formData.append('imagen', archivoSeleccionado);
    formData.append('nombre', formulario.nombre);
    formData.append('descripcion', formulario.descripcion);
    formData.append('precio', parseFloat(formulario.precio));
    formData.append('categoria', formulario.categoria);
    formData.append('stock', parseInt(formulario.stock));

    try {
      const res = await fetch('http://localhost:3001/api/productos', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        setMensaje('✅ Producto creado correctamente');
        setFormulario({
          nombre: '',
          descripcion: '',
          precio: '',
          categoria: '',
          stock: ''
        });
        setArchivoSeleccionado(null);
      } else {
        const data = await res.json();
        setMensaje(`❌ Error al crear el producto: ${data.error || 'Error desconocido'}`);
      }
    } catch (error) {
      setMensaje('❌ Error al conectar con el servidor');
      console.error(error);
    }
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Agregar Producto</h1>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formulario.nombre}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={formulario.descripcion}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={formulario.precio}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="file"
          onChange={handleArchivo}
          accept="image/*"
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={formulario.categoria}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formulario.stock}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-brown-700 hover:bg-brown-800 text-white py-2 px-4 rounded"
        >
          Crear Producto
        </button>
      </form>

      {mensaje && <p className="mt-4 text-sm text-center text-gray-700">{mensaje}</p>}
    </main>
  );
}
