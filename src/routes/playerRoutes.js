const { Router } = require('express');
const PlayerController = require('../controllers/PlayerController');
const playerRoutes = Router();

const playerController = new PlayerController();

playerRoutes.get("/players", playerController.indexPlayers);

module.exports = playerRoutes;