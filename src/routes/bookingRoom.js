const express = require('express');
const router = express.Router();

const bookingRoomController = require('../app/controllers/BookingRoomController');


router.get('/searchName', bookingRoomController.searchName);
router.delete('/:id', bookingRoomController.destroy);
router.get('/:id', bookingRoomController.confirm);
router.get('/', bookingRoomController.listBooking);




module.exports = router;