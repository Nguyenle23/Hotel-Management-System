

const express = require('express');
const router = express.Router();

const createIOController = require('../app/controllers/CreateIOController');

router.get('/searchListRoom', createIOController.searchListRoom);
router.get('/searchBooking', createIOController.searchBooking);

router.get('/:id/checkIn', createIOController.checkIn);
router.get('/:id/checkIn/taophieu', createIOController.taophieu);

router.put('/storeIO', createIOController.storeIO);
router.get('/', createIOController.show);


module.exports = router;