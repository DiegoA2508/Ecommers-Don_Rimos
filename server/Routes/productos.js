const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinaryConfig');
const { 
    crearProducto, 
    obtenerProductos, 
    obtenerProductosPorId, 
    eliminarProducto 
} = require('../controllers/productosController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage()});

router.get('/', obtenerProductos);
router.get('/:id', obtenerProductosPorId);

// ✅ Ruta que recibe FormData con imagen y campos de texto
router.post('/', upload.array('imagenes'), async (req, res) => {
  try {
    const archivos = req.files;

    if (!archivos || archivos.length === 0) {
      return res.status(400).json({ error: 'No se recibió imagen' });
    }

    const streamifier = require('streamifier');
    const imagenes = await Promise.all(
      archivos.map((archivo) => 
        new Promise((resolve, reject) =>{
          const stream = cloudinary.uploader.upload_stream(
            { folder: 'prodcutos' },
            (err, url) => (err ? reject(err) : resolve(url.secure_url))
          );
          streamifier.createReadStream(archivo.buffer).pipe(stream);
        })
      )  
    );

    // Combinar campos del form con la URL de Cloudinary
    const producto = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: parseFloat(req.body.precio),
      imagenes: JSON.stringify(imagenes),
      categoria: req.body.categoria,
      stock: parseInt(req.body.stock, 10),
    };

    crearProducto(producto, res);
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
});

router.put('/:id', express.json(), async (req, res) => {
  // Si quieres soportar re-subida de imagen, habría que anidar multer aquí también
  const actualizado = {
    ...req.body,
    precio: parseFloat(req.body.precio),
    stock:  parseInt(req.body.stock, 10),
  };
  const id = req.params.id;
  eliminarProducto; // placeholder, implementa tu controlador de update
});

router.delete('/:id', eliminarProducto);

module.exports = router;
