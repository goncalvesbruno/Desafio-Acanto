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
        res.json({ player })
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
        const { player_id, long_name, age, club_name, nationality_name, club_team_id, player_position } = req.body;
        const player = await Player.create({ long_name, age, club_name, nationality_name, club_team_id, player_position });

        res.json({ player });
    }

    /**
    * PUT method do transfer a player to another club
    * @param {*} req 
    * @param {*} res 
    */
    async transferPlayer(req, res) {
        try {
            const { player_id, club_name } = req.body;
            const player = await Player.findOne({ where: { player_id } });

            if (!player) {
                res.json({ message: 'Player not found' });
            } else {
                const player = await Player.update({ club_name }, { where: { player_id } });
                res.json(player);
            }

        } catch (error) {
            console.error(error);
        }
    }

/**
 * Method to delete a player from the database
 * @param {*} req 
 * @param {*} res 
 */
    async deletePlayer(req, res) {
        try {
            const { player_id } = req.body;
            const player = await Player.findOne({ where: { player_id } });

            if (!player) {
                res.json({ message: 'Player not found' });
            } else {
                const player = await Player.destroy( { where: { player_id } });
                res.json({message: "jogador deletado"});
            }

        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = PlayerController;