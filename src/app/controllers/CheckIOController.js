

// const ListIO = require('../models/ListIO');
const Room = require('../models/Room');
const Customer = require('../models/Customer');
const {multipleMongooseToObject } = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');


// class CheckIOController{

    //[GET] /checkIO
    const showIO = (req, res, next) => {
        Customer.find({ status: '2' }).populate('idphong')
            .then(customer => 
                res.render('TabInOut/listIO', { customer: multipleMongooseToObject(customer) })
                // res.json(listIO)
            )
            .catch(next);
    }

    // [GET] /checkIO/searchIO
    const searchIO = async (req, res, next) => {
        let q = req.query.q;
        let listio= await ListIO.find();
        let result = listio.filter((r) =>{
            return r.tenKH.toLowerCase().indexOf(q.toLowerCase()) !== -1 || r.sophong.toLowerCase().indexOf(q.toLowerCase()) !== -1 
        })
        // res.json(result)
        res.render('TabInOut/listIO',{ listio: multipleMongooseToObject(result)})
    }

    //[GET] /checkIO/:id/edit
    const edit = async (req, res, next) => {
        const customer = await Customer.findById( req.params.id);
        const customer1 = await Customer.findById( req.params.id).populate('idphong');
        res.render('bill/chinhHoaDon', {customer: mongooseToObject(customer), customer1: mongooseToObject(customer1)})
    }

    //[PUT] /checkIO/:id/edit
    const update = async (req, res, next) => {
        // await ListIO.updateOne({ _id: req.params.id }, req.body)
        //     .then(() => res.redirect('/checkIO'))
        //     .catch(next);

        await Customer.updateOne({ _id: req.params.id }, {
            // sophieucheckIO: req.body.sophieucheckin,
            // sohoadon: req.body.sohoadon,
            // tinhtranghoadon: req.body.tinhtranghoadon,
            ngaytao: req.body.ngaytao,
            sophong: req.body.sophong,
            type: req.body.loaiphong,
            hovaten: req.body.tenkhachhang,
            sodienthoai: req.body.sodienthoaiKH,
            ngaynhan: req.body.ngaynhanphong,
            ngaytra: req.body.ngaytraphong,
            // giaphong: req.body.giaphong,
          })
          
        .then(() => res.redirect('/checkIO'))
        .catch(next);
    }
// }

module.exports = {showIO, searchIO, edit, update};
// module.exports = new CheckIOController;