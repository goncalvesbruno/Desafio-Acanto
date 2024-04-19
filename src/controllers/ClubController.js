const Club = require('../models/clubs');
const { Router } = require('express');

const router = Router();

class ClubController {

/**
 * GET method for listing all clubs in the database.
 * @param {*} req 
 * @param {*} res 
 */
    async indexClubs(req, res) {
        const club = await Club.findAll();
        res.json({club})
    };

/**
 * POST method to create a new player in the database.
 * @param {*} req 
 * @param {*} res 
 */
    async createClub(req, res) {
        const {team_id, team_name, short_name, league_name} = req.body;
        const club = await Club.create({team_name, short_name, league_name});

        res.json({club});
    }
}

module.exports = ClubController;