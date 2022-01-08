const express = require('express');
const router = express.Router();

const standardController = require('../app/controllers/StandardController');



router.get('/', standardController.general);


module.exports = router;