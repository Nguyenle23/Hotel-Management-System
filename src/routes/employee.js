const express = require('express');
const router = express.Router();

const employeeController = require('../app/controllers/EmployeeController');


// tạo route kết nối đến controller 
router.get('/', employeeController.create);
// sau khi submit tại trang tạo nhân viên method post sẽ gửi đến chỉ mục 
// sau đó vào controller 
router.post('/', employeeController.recieve);
// list danh  sách employeee
router.get('/store', employeeController.store);
// edit nhân viên
router.get('/:id/edit', employeeController.edit);
//update nhân viên
router.put('/:id', employeeController.update);
//delete nhân viên
router.delete('/:id', employeeController.destroy);

router.get('/searchEmployee', employeeController.searchEmployee);



module.exports = router;