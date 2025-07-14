const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinaryConfig');
const { 
    crearProducto, 
    obtenerProductos, 
    obtenerProductosPorId, 
    eliminarProducto, 
    actualizarProducto
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
            { folder: 'productos' },
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

router.put('/:id', upload.array('imagenes'), async (req, res) => {
  try {
    const archivos = req.files;
    let imagenes = [];

    if (archivos && archivos.length > 0){
      const streamifier = require('streamifier');
      imagenes = await Promise.all(
        archivos.map((archivo) => 
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: 'productos' },
            (err, url) => (err ? reject(err) : resolve(url.secure_url))
          );
          streamifier.createReadStream(archivo.buffer).pipe(stream);
          })
        ) 
      );
    }

    // Construye el objeto actualizado
    const actualizado = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: parseFloat(req.body.precio),
      categoria: req.body.categoria,
      stock: parseInt(req.body.stock, 10),
    };

    // Si hay nuevas imágenes, actualiza el campo
    if (imagenes.length > 0){
      actualizado.imagenes = JSON.stringify(imagenes);
    }

    const id = req.params.id;
    await actualizarProducto(id, actualizado, res);

    //res.json({ mensaje: 'Producto actualizado correctamente', actualizado });
  } catch (error) {
      console.error('Error al actualizar el producto:', error);
      res.status(500).json({ error: 'Error al actualizar el producto:'})
  }
});

router.delete('/:id', eliminarProducto);

module.exports = router;
