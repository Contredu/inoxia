import express from 'express';
import { prisma } from './src/prisma/client.js';

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Hello World! - Servidor Express + Prisma funcionando');
});

// Ruta de health check con Prisma
app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', db: 'connected' });
  } catch (error: any) {
    res.status(500).json({ status: 'error', db: 'disconnected', message: error.message });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

export default app;
