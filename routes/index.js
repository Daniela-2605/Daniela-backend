import express from 'express';

const router = express.Router();
let usuarios = []; // Arreglo para almacenar los usuarios
let codigosIngresados = []; // Arreglo para almacenar códigos ingresados

// Ruta para crear un nuevo usuario
router.post('/registro', (req, res) => {
    const { nombre, fechaNacimiento, cedula, correo, celular, ciudad, contraseña } = req.body;

    // Validar si todos los campos requeridos están presentes
    if (!nombre || !fechaNacimiento || !cedula || !correo || !celular || !ciudad || !contraseña) {
        return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios.' });
    }

    // Agregar el nuevo usuario al arreglo
    const nuevoUsuario = {
        nombre,
        fechaNacimiento,
        cedula,
        correo,
        celular,
        ciudad,
        contraseña,
    };

    usuarios.push(nuevoUsuario);
    res.json({ success: true, message: 'Usuario creado exitosamente.' });
});

// Ruta para ingresar un código
router.post('/ingresar-codigo', (req, res) => {
    const { codigo } = req.body;

    // Validar que se haya ingresado un código
    if (!codigo) {
        return res.status(400).json({ success: false, message: 'El código es obligatorio.' });
    }

    // Obtener la fecha actual
    const fechaActual = new Date().toLocaleDateString();

    // Agregar el código ingresado al arreglo
    codigosIngresados.push({ fecha: fechaActual, codigo: codigo, premio: '' }); // Premio vacío

    res.json({ success: true, message: 'Código ingresado exitosamente.' });
});

// Ruta para obtener los códigos ingresados
router.get('/codigos', (req, res) => {
    res.json(codigosIngresados);
});

// Ruta para obtener usuarios
router.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

export default router;
