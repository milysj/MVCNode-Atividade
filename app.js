const express = require('express');
const app = express();
const path = require('path');

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Importando as rotas de veículos
const veiculoRoute = require('./routes/LoginRoute');
app.use(veiculoRoute);

// Inicialização do servidor
app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
});