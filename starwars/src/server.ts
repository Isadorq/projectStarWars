import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';
import dotenv from 'dotenv';
import characterRoutes from './routes/people'; 

// Configuração do dotenv
dotenv.config();

// Inicialização do app
const app = express();  
app.use(cors());
app.use(express.json());

// Conexão ao MongoDB
mongoose.connect(process.env.MONGODB_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as mongoose.ConnectOptions)
.then(() => console.log('MongoDB conectado'))
.catch((err: Error) => console.error('Erro ao conectar ao MongoDB', err));

// Importação das rotas
app.use('/people', characterRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});