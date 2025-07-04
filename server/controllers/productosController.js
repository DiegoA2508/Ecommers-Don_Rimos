const db = require('../db');

function obtenerProductos(req, res) {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener los productos' });
        res.json(results);
    });
}

function obtenerProductosPorId(req, res) {
    const id = req.params.id;

    db.query('SELECT * FROM productos WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error' });
        if (result.length === 0) return res.status(404).json({ error: 'No encontrado' });
        res.json(rows[0]);
    });
}

function crearProducto(producto, res) {
  const { nombre, descripcion, precio, imagen, categoria, stock } = producto;
  const query = `
    INSERT INTO productos
      (nombre, descripcion, precio, imagen, categoria, stock, creado_en)
    VALUES (?, ?, ?, ?, ?, ?, NOW())
  `;
  db.query(query, [nombre, descripcion, precio, imagen, categoria, stock], (err, result) => {
    if (err) {
      console.error('MySQL error:', err);
      return res.status(500).json({ error: 'Error al insertar producto' });
    }
    res.status(201).json({ id: result.insertId });
  });
}


function actualizarProducto(req, res) {
    const id = req.params.id;
    const { nombre, descripcion, precio, imagen, categoria, stock } = req.body;

    const query = `
        UPDATE productos 
        SET nombre=?, descripcion=?, precio=?, imagen=?, categoria=?, stock=?
        WHERE id=?
    `;

    db.query(query, [nombre, descripcion, precio, imagen, categoria, stock, id], (err) => {
        if (err) return res.status(500).json({ error: 'Error al actualizar el producto' });
        res.json({ mensaje: 'Producto actualizado' });
    });
}

function eliminarProducto(req, res) {
    const id = req.params.id;

    db.query('DELETE FROM productos WHERE id=?', [id], (err) => {
        if (err) return res.status(500).json({ error: 'Error al eliminar el producto' });
        res.json({ mensaje: 'Producto eliminado' });
    });
}

module.exports = {
    obtenerProductos,
    obtenerProductosPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
};
