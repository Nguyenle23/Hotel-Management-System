const express = require('express');
const router = express.Router();

const promotionTabController = require('../app/controllers/PromotionTabController');


router.post('/storePromotionTab', promotionTabController.storePromotionTab);
router.get('/', promotionTabController.listPromotion);

router.put('/:id', promotionTabController.update);
router.get('/:id/edit', promotionTabController.edit);
router.delete('/:id', promotionTabController.destroy);

module.exports = router;