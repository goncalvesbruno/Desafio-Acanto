const { Router } = require('express');
const ClubController = require('../controllers/ClubController');
const clubRoutes = Router();

const clubController = new ClubController();

clubRoutes.get("/", clubController.indexClubs);

clubRoutes.post("/add", clubController.createClub);

module.exports = clubRoutes;