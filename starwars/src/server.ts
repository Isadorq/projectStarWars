const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs'); 
require('dotenv').config();     // Carrega variáveis de ambiente do arquivo .env

// Inicialização do app
const app = express();
app.use(cors());
app.use(express.json());

// Conexão ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));

// Importação das rotas
const bookRoutes = require('./routes/characters');
app.use('/people', bookRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});