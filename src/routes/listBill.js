const express = require('express');
const router = express.Router();

const listbillController = require('../app/controllers/ListBillController');


router.get('/', listbillController.listBill);


module.exports = router;