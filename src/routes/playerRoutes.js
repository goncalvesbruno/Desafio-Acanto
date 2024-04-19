const { Router } = require('express');
const PlayerController = require('../controllers/PlayerController');
const playerRoutes = Router();

const playerController = new PlayerController();

playerRoutes.get("/", playerController.indexPlayers);

playerRoutes.post("/add", playerController.createPlayer);

module.exports = playerRoutes;