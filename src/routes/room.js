const express = require('express');
const router = express.Router();

const roomController = require('../app/controllers/RoomController');


router.get('/', roomController.showRoom);
router.get('/searchR', roomController.searchRoom);

router.get('/:slug/booking', roomController.booking);
router.post('/:slug/booking/store', roomController.store);
router.get('/:slug/booking/successfull', roomController.successfull);
router.get('/:slug', roomController.showSlug); 




module.exports = router;