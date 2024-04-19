const { Router } = require('express');
const ClubController = require('../controllers/ClubController');
const club = require('../models/club');
const clubRoutes = Router();

const clubController = new clubController();

clubRoutes.get("/clubs", clubController.index);

module.exports = clubRoutes;