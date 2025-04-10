require('dotenv').config(); // Carrega variáveis de ambiente primeiro

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes); // Prefixo para rotas de autenticação

// Conexão segura com MongoDB (use variáveis de ambiente)
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://isa:<dora>@starwars.tzkqogz.mongodb.net/starWars?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true, // Opcional para versões mais antigas
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch(err => console.error('❌ Erro na conexão com MongoDB:', err));

// Verificação de variáveis de ambiente
console.log('🔑 JWT_SECRET:', process.env.JWT_SECRET ? 'Carregado com sucesso' : 'Não encontrado!');
console.log('🌐 Porta:', process.env.PORT || 5000);

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));