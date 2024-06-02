const Router = require('express');
const { createControler } = require('../controlers/movieContr');
const { aboutControler } = require('../controlers/aboutContr');
const { notFoundController } = require('../controlers/404Contr');
const { detailsController, homeController, searchControler } = require('../controlers/catalogControler');

const router = Router();

router.get('/', homeController);
router.get('/create', createControler);
router.get('/about', aboutControler);
router.get('/search', searchControler);
router.get('/details/:id', detailsController);

router.get('*', notFoundController);

module.exports = {router};