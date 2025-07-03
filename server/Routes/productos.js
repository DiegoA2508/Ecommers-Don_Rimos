const { 
    obtenerProductos,
    obtenerProductosPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} = require('../controllers/productosController')

function productosRoute(req, res){
    const urlParts = req.url.split('/');
    const id = urlParts[3];

    if (req.method === 'GET' && req.url === '/api/productos') {
        return obtenerProductos(req, res);
    }

    if(req.method === 'GET' && id){
        return obtenerProductosPorId(req, res, id);
    } 

    if (req.method == 'POST' && req.url === '/api/productos'){
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => crearProducto(req, res, body));
    }

    if (req.method === 'DELETE' && id){
        return eliminarProducto(req, res, id);
    }
}

module.exports = productosRoute;