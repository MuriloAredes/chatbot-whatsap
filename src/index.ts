import 'reflect-metadata';
import express from 'express';
import 'dotenv/config';

import router from './routes'; // Certifique-se de que 'router' seja importado corretamente

const app = express();
app.use(express.json()); // Configure o middleware express.json() antes de definir rotas
app.use(router);

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
  });
  