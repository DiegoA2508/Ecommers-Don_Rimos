const express = require('express');
const cors = require('cors');
const productosRoute = require('./Routes/productos');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/productos', productosRoute);

// Inicio del servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🟢 Servidor Backend corriendo en http://localhost:${PORT}`);
});
