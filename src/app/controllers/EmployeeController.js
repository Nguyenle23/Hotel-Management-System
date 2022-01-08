const { data } = require("jquery");
const { multipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");
const Employee = require("../models/Employee");

class EmployeeController {

    // [GET] /bookingRoom/searchName
    async searchEmployee(req, res, next) {
        let q = req.query.q;
        let data = await data.find({});
        let result = data.filter((r) => {
            return r.maNV.toLowerCase().indexOf(q.toLowerCase()) !== -1 || r.name.toLowerCase().indexOf(q.toLowerCase()) !== -1 || r.phone.toLowerCase().indexOf(q.toLowerCase()) !== -1 || r.username.toLowerCase().indexOf(q.toLowerCase()) !== -1
        })
        res.render('employee/employeelist', { data: multipleMongooseToObject(result) })
    }

    // [GET] /employee/
    create(req, res, next) {
        res.render("employee/createemployee")
    }

    //[POST] /employee/
    recieve(req, res, next) {
        // kiểm tra dữ liệu đã vào hay chưa nó hiển thị dữ liệu trong terminal nghĩa là kiểm tra thành công 
        console.log(req.body);
        // tiến hành lưu nó vào database
        const employee = new Employee(req.body);
        employee
            .save() // lưu vào trong database 
            // dùng hàm promise chạy tránh bất đồng bộ 
            // nếu mà thành công chuyến đến trang trủ cũng có thể chuyển đến trang khác 
            .then(() => res.redirect("/employee/store"))
            // nếu mà xảy ra lỗi thì next  ko chạy được 
            .catch(next);
    }
    // [GET] /employee/store 
    // danh sách khách hàng 
    store(req, res, next) {
        // employee bên model tìm ra dữ liệu employ duyệt no ra 
        Employee.find({})
            .then(data => res.render('employee/employeelist', {
                data: multipleMongooseToObject(data)
            }))
            .catch(next);
    }

    //EdIT nhân viên
    // [GET] /employee/:id/edit
    edit(req, res, next) {
        Employee.findById(req.params.id)
            .then(data => res.render('employee/editemployee', {
                data: mongooseToObject(data)
            }))
            .catch(next);
    }
    // [PUT] /employee/:id
    update(req, res, next) {
        Employee.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/employee/store'))
            .catch(next);
    }

    // [DELETE] /employee/:id
    destroy(req, res, next) {
        Employee.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new EmployeeController();
