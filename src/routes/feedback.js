const express = require('express');
const router = express.Router();

const feedbackController = require('../app/controllers/FeedbackController');


// tạo route kết nối đến controller 
router.get('/', feedbackController.create);
// sau khi submit tại trang tạo phản hồi method post sẽ gửi đến chỉ mục 
// sau đó vào controller 
router.post('/', feedbackController.recieve);
// list danh  sách phản hồi
router.get('/store', feedbackController.store);
//delete phản hồi
router.delete('/:id', feedbackController.destroy);

module.exports = router;