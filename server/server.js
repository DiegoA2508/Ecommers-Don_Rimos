const http = require('http');
const productosRoute = require('./Routes/productos');
const { error } = require('console');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS'){
        return res.end();
    }

    if (req.url.startsWith('/api/productos')){
        return productosRoute(req, res);
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ error : 'Ruta no encontrada'}));
});

server.listen(3001, () =>{
    console.log('Servidor Backend corriendo en http://localhost:3001')
})