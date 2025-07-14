'use client'

import { useState } from "react";

export default function AdminMenu() { 

  const [formulario, setFormulario] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: '',
    stock: ''
  });

  const [archivosSeleccionados, setArchivosSeleccionados] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [Previews, setPreviews] = useState([]);

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleArchivo = (e) => {
    const archivos = Array.from(e.target.files);
    setArchivosSeleccionados(archivos);
    const previews = archivos.map(archivo => URL.createObjectURL(archivo));
    setPreviews(previews)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!archivosSeleccionados || archivosSeleccionados.length === 0) {
      setMensaje('Por favor selecciona al menos una imagen');
      return;
    }

    const formData = new FormData();

    archivosSeleccionados.forEach((archivo) =>{
      formData.append('imagenes', archivo);
    });

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
        setArchivosSeleccionados([]);
        setPreviews([]);
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
    <main className="text-black p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Agregar Producto</h1>

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

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <span className="text-gray-700 text-sm">
                {archivosSeleccionados ? archivosSeleccionados.name : 'Ningún archivo Seleccionado'}
            </span>
            
            <button 
              type="button"
              onClick={() => document.getElementById('inputArchivo').click()}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
              >
                Seleccionar Archivo
            </button>
              
            <input
              id="inputArchivo"
              type="file"
              multiple
              onChange={handleArchivo}
              accept="image/*"
              required
              className="border p-2 rounded hidden"
            />
          </div>

          <div className="grid grid-cols-3 gap-2 mt-2">
            {Previews.map((src, index) =>
              <img
                key={index}  
                src={src}
                alt={`Preview ${index}`}
                className="h-20 w-full object-cover border rounded"
              />
            )}
          </div>

        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white border py-2 px-4 rounded"
        >
          Crear Producto
        </button>
      </form>

      {mensaje && <p className="mt-4 text-sm text-center text-gray-700">{mensaje}</p>}
    </main>
  );
}
