const express = require('express');
const router = express.Router();

const billController = require('../app/controllers/BillController');


router.get('/:id/watch', billController.watch);

router.get('/:id/watch/backCheckIO', billController.back);

router.put('/:id/store', billController.store);

module.exports = router;