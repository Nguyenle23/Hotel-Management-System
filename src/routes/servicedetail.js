const express = require('express');
const router = express.Router();

const ServicedetailController = require('../app/controllers/servicedetailController');


// tạo route kết nối đến controller 
router.get('/restaurant', ServicedetailController.restaurant);

router.get('/laundry', ServicedetailController.laundry);

router.get('/spa', ServicedetailController.spa);

module.exports = router;