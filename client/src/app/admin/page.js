'use client'
import { useState } from "react"

export default function Admin() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        imagen:'',
        categoria: '',
        stock: ''
    });

    const [mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3001/api/productos', {
            method: 'POST',
            headers: { 'Content-Type': 'aplication/json' },
            body: JSON.stringify({
                ...formulario,
                precio: parseFloat(formulario.precio),
                stock: parseInt(formulario.stock)
            })
        });

        if (res.ok){
            setMensaje(' Producto creado correctamente');
            setFormulario({nombre: '', descripcion: '', precio: '', imagen: '', categoria: '', stock: ''});
        } else {
            setMensaje(' Error al crear el producto');
        }
    };

    return(
        <main className="p-8 max-w 2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Agregar Producto</h1>

            <form onSubmit={handleSubmit} className="grid gap-4">
                <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} required className="border p-2 rounded" />
                <textarea name="descripcion" placeholder="Descripción" value={formulario.descripcion} onChange={handleChange} required className="border p-2 rounded" />
                <input type="number" name="precio" placeholder="Precio" value={formulario.precio} onChange={handleChange} required className="border p-2 rounded" />
                <input type="text" name="imagen" placeholder="URL de imagen" value={formulario.imagen} onChange={handleChange} required className="border p-2 rounded" />
                <input type="text" name="categoria" placeholder="Categoria" value={formulario.categoria} onChange={handleChange} required className="border p-2 rounded" />
                <input type="text" name="stock" placeholder="Stock" value={formulario.stock} onChange={handleChange} required className="border p-2 rounded" />
                <button type="submit" className="bg-brown-700 hover:bg-brown-800 text-white py-2 px-4 rounded">Crear Producto</button>
            </form>

            {mensaje && <p className="mt-4">{mensaje}</p>}
        </main>
    );
}
