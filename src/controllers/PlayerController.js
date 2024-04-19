const Player = require('../models/players');
const { Router } = require('express');

const router = Router();

class PlayerController {

/**
 * GET method for listing all players in the database.
 * @param {*} req 
 * @param {*} res 
 */
    async indexPlayers(req, res) {
        const player = await Player.findAll();
        res.json({player})
    };

/**
 * GET method for listing all players of an especific club
 * @param {*} req 
 * @param {*} res 
 */
/*
async indexPlayers(req, res) {
    const player = await Player.findAll(req.params);
    res.json({player})
};
*/
 /**
  * POST method to create a new player in the database.
  * @param {*} req 
  * @param {*} res 
  */
    async createPlayer(req, res) {
        const {player_id, long_name, age, } = req.body;
        const player = await Player.create({long_name, age});

        res.json({player});
    }



}

module.exports = PlayerController;