// const multer = require('multer');
const res = require("express/lib/response");
const { data } = require("jquery");
const { multipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");
// const { find } = require("../models/Schema");
const Roommanager = require("../models/Room");
const Room = require("../models/Room");

class RoommanagerController {
    // [GET] /roommanager/
    create(req, res, next) {
        res.render("roommanager/createroommanager")
    }

    //[POST] /roommanager/
    recieve(req, res, next) {
        // kiểm tra dữ liệu đã vào hay chưa nó hiển thị dữ liệu trong terminal nghĩa là kiểm tra thành công 
        console.log(req.body);
        // tiến hành lưu nó vào database
        const roommanager = new Room(req.body);
        roommanager
            .save() // lưu vào trong database 
            // dùng hàm promise chạy tránh bất đồng bộ 
            // nếu mà thành công chuyến đến trang trủ cũng có thể chuyển đến trang khác 
            .then(() => res.redirect("/roommanager/store"))
            // nếu mà xảy ra lỗi thì next  ko chạy được 
            .catch(next);
    }
    // [GET] /employee/store 
    // danh sách khách hàng 
    store(req, res, next) {
        // employee bên model tìm ra dữ liệu employ duyệt no ra 
        Room.find({})
            .then(data => res.render('roommanager/roommanagerlist', {
                data: multipleMongooseToObject(data)
            }))
            .catch(next);
    }

    createshow(req, res, next) {
        Room.find({}).lean()
            .then((data) => {
                res.render("roommanager/showroom", { data: data })
            })
    }

    //EdIT nhân viên
    // [GET] /roommanager/:id/edit
    edit(req, res, next) {
        Room.findById(req.params.id)
            .then(data => res.render('roommanager/editroommanager', {
                data: mongooseToObject(data)
            }))
            .catch(next);
    }
    // [PUT] /roommanager/:id
    update(req, res, next) {
        Room.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/roommanager/store'))
            .catch(next);
    }


    destroy(req, res, next) {
        Room.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new RoommanagerController();
