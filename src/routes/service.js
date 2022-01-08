const express = require('express');
const router = express.Router();

const serviceController = require('../app/controllers/ServiceController');


// router.get('/:slug',newsController.show);
router.get('/', serviceController.showService);

module.exports = router;