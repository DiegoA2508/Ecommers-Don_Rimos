const db = require('../../db');

function obtenerProductos(req, res){
    db.query('SELECT * FROM productos', (err, results) => {
        if(err) return res.status(500).end(JSON.stringify({ error: 'Error al obtener los productos' }));
        res.end(JSON.stringify(results));
    })
}

function obtenerProductosPorId(req, res, id){
    db.query('SELECT * FROM productos WHERE id = ?', [id], (err, result) => {
        if(err) return res.status(500).end(JSON.stringify({ error: 'Error'}));
        if(result.length === 0) return res.status(404).end(JSON.stringify({ error: 'No encontrado'}));
        res.end(JSON.stringify(result[0]));
    });
}

function crearProducto(req, res, body){
    const { nombre, descripcion, precio, imagen, categoria, stock } = JSON.parse(body);
    const query = 'INSERT INTO productos (nombre, descripcion, precio, imagen, categoria, stock) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [nombre, descripcion, precio, imagen, categoria, stock], (err, result) => {
        if(err) return res.status(500).end(JSON.stringify({ error: 'Error al crear el producto' }));
        res.end(JSON.stringify({ id: result.insertId }));
    });
}

function actualizarProducto(req, res, id, body){
    const { nombre, descripcion, precio, imagen, categoria, stock } = JSON.parse(body);
    const query = 'UPDATE productos SET nombre=?, descripcion=?, precio=?, imagen=?, categoria=?, stock=? WHERE id=?';
    db.query(query, [nombre, descripcion, precio, imagen, categoria, stock], (err) => {
        if(err) return res.status(500).end(JSON.stringify({ error: 'Error al actualizar el producto'}));
        res.end(JSON.stringify({ mensaje: 'Producto actualizado' }));
    });
}

function eliminarProducto(req, res, id){
    db.query('DELETE FROM productos WHERE id=?', [id], (err) =>{
        if(err) return res.status(500).end(JSON.stringify({ error: 'Error al eliminar el producto'}));
        res.end(JSON.stringify({ mensaje: 'Producto eliminado'}));
    });
}

module.exports = {
    obtenerProductos,
    obtenerProductosPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
};