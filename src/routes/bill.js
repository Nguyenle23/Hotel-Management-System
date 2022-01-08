const express = require('express');
const router = express.Router();

const billController = require('../app/controllers/BillController');


router.get('/:id/watch', billController.watch);


router.put('/:id/store', billController.store);



module.exports = router;