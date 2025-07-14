const db = require('../db');

function obtenerProductos(req, res) {
    const busqueda = req.query.q || '';

    let sql = 'SELECT * FROM productos';
    const valores = [];

    if (busqueda) {
        sql += ` WHERE nombre LIKE ? OR descripcion LIKE ? OR categoria LIKE ?`;
        const valorBusqueda = `%${busqueda}%`;
        valores.push(valorBusqueda, valorBusqueda, valorBusqueda);
    }

    db.query(sql, valores, (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener los productos' });
        
        // Extrae solo la primera imagen del array JSON
        const productosConImagenPrincipal = results.map(p => {
            let imagen = '';

            try {
                const imagenes = JSON.parse(p.imagenes);
                imagen = Array.isArray(imagenes) ? imagenes[0] : '';
            } catch {
                imagen = '';
            }

            return { ...p, imagen };
        });
        res.json(productosConImagenPrincipal);
    });
}


function obtenerProductosPorId(req, res) {
    const id = req.params.id;

    db.query('SELECT * FROM productos WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error' });
        if (result.length === 0) return res.status(404).json({ error: 'No encontrado' });
        res.json(result[0]);
    });
}

function crearProducto(producto, res) {
  const { nombre, descripcion, precio, imagenes, categoria, stock } = producto;
  const query = `
    INSERT INTO productos
      (nombre, descripcion, precio, imagenes, categoria, stock, creado_en)
    VALUES (?, ?, ?, ?, ?, ?, NOW())
  `;
  db.query(
    query, [nombre, descripcion, precio, imagenes, categoria, stock], 
    (err, result) => {
        if (err) {
        console.error('MySQL error:', err);
        return res.status(500).json({ error: 'Error al insertar producto' });
        }
    res.status(201).json({ id: result.insertId });
  });
}


function actualizarProducto(id, data, res) {
    const { nombre, descripcion, precio, imagenes, categoria, stock } = data;

    const query = `
        UPDATE productos 
        SET nombre=?, descripcion=?, precio=?, imagenes=?, categoria=?, stock=?
        WHERE id=?
    `;

    db.query(
        query, 
        [nombre, descripcion, precio, imagenes, categoria, stock, id], 
        (err) => {
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
