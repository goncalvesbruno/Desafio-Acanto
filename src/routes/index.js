/*
*   Responsável por receber a requisição e encaminhar ao arquivo de rotas correspondente
*/
const { Router } = require('express');

const playerRoutes = require('./playerRoutes');
const clubRoutes = require('./clubRoutes');

const routes = Router();

routes.use('/players', playerRoutes);
routes.use('/clubs', clubRoutes);

module.exports = routes;