const express = require('express');
const router = express.Router();

const serviceTabController = require('../app/controllers/ServiceTabController');

router.post('/storeServiceTab', serviceTabController.storeServiceTab);
router.get('/', serviceTabController.listService);

router.put('/:id', serviceTabController.update);
router.get('/:id/edit', serviceTabController.edit);
router.delete('/:id', serviceTabController.destroy);
module.exports = router;