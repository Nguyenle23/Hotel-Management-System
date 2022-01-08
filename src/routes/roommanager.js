const express = require('express');
const router = express.Router();

const roommanagerController = require('../app/controllers/RoommanagerController');


router.get('/', roommanagerController.create);

router.post('/', roommanagerController.recieve);

router.get('/store', roommanagerController.store);

router.get('/show', roommanagerController.createshow);

router.get('/:id/edit', roommanagerController.edit);

router.put('/:id', roommanagerController.update);

router.delete('/:id', roommanagerController.destroy);

module.exports = router;