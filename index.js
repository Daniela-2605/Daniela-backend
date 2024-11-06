import express from 'express';
import cors from 'cors';
import loginRoutes from './routes/index.js'; // Asegúrate de que la ruta sea correcta

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', loginRoutes); // Usar las rutas

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
