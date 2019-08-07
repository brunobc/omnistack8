const express = require('express');
const DevController = require('./constrollers/DevController');
const LikeController = require('./constrollers/LikeController');
const DislikeController = require('./constrollers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);
module.exports = routes;