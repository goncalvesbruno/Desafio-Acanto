const Player = require('../models/Player');
const { Router } = require('express');

const router = Router();

/*
module.exports = {
    async indexPlayers(req, res) {
        const player = await Player.findAll();

        res.json({player});
    }
}
*/
class PlayerController {
    indexPlayers(req, res) {
        const player = Player.findByPk(158023)

        res.json(player);
    }


}

module.exports = PlayerController;