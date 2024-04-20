const { Router } = require('express');
const PlayerController = require('../controllers/PlayerController');
const playerRoutes = Router();

const playerController = new PlayerController();

playerRoutes.get("/", playerController.indexPlayers);

playerRoutes.post("/add", playerController.createPlayer);

playerRoutes.put("/transf", playerController.transferPlayer);

playerRoutes.delete("/del", playerController.deletePlayer);

module.exports = playerRoutes;