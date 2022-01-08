
const Bill = require('../models/Bill');
// const ListIO = require('../models/ListIO');
const Room = require('../models/Room');
const Customer = require('../models/Customer');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const async = require('async');
const mongoose = require('../../util/mongoose');

//[GET] /createIO
const show = async (req, res, next) => {
    // const customer = await Customer.find({ status: '1' });

    const customer = await Customer.find({ status: '1' }).populate('idphong');
    const room = await Room.find();
    res.render('TabInOut/createIO', { customer: multipleMongooseToObject(customer), room: multipleMongooseToObject(room) })
}

//[PUT] /createIO/storeIO
const storeIO = async (req, res, next) => {
    const customer = await Customer(req.body);

    customer.status = '2';

    const room = await Room.findOne({ sophong: req.body.sophong })

    customer.idphong = room._id;

    const room1 = await Room.findOneAndUpdate({ _id: customer.idphong }, {status: '2'}, {new: true})

    const bill = new Bill(req.body);
    
    const userID = customer.id;

    bill.customerID = userID;

    bill.save()
 
    customer.save()
        .then(() => res.redirect('/createIO'))
        .catch(next);

}

// [GET] /createIO/searchRoom (danh sach dat phong)
const searchBooking = async (req, res, next) => {
    let q = req.query.q;
    const room = await Room.find();
    let customer = await Customer.find();
    let result = customer.filter((r) => {
        return r.hovaten.toLowerCase().indexOf(q.toLowerCase()) !== -1 || r.sodienthoai.toLowerCase().indexOf(q.toLowerCase()) !== -1 || r.email.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
    res.render('TabInOut/createIO', { customer: multipleMongooseToObject(result), room: multipleMongooseToObject(room) })
}

// [GET] /createIO/searchRoom (danh sach phong)
const searchListRoom = async (req, res, next) => {
    let q = req.query.q;
    const customer = await Customer.find();
    let room = await Room.find();
    let result = room.filter((r) => {
        return r.sophong.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
    res.render('TabInOut/createIO', { customer: multipleMongooseToObject(customer), room: multipleMongooseToObject(result) })
}

// [GET] /createIO/:id/checkIn
const checkIn = async (req, res, next) => {
    const customer = await Customer.findById(req.params.id);
    const customer1 = await Customer.find({ status: '1' }).populate('idphong');
    const room = await Room.find();
    const customer2 = await Customer.findById(req.params.id).populate('idphong');

    // console.log(customer2.idphong.price)

    res.render('TabInOut/checkIn', { customer: mongooseToObject(customer), customer1: multipleMongooseToObject(customer1), customer2: mongooseToObject(customer2), room: multipleMongooseToObject(room) })

}

//[POST] /createIO/:id/checkIn/taophieu
const taophieu = async (req, res, next) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id, { status: '2' });

    Customer.findById(req.params.id)
        .populate('idphong')
        .exec(function (err, r) {
            if (err) return console.log(err);

            Room.findByIdAndUpdate(r.idphong.id, { status: '2' })
                .then(() => {
                    res.redirect('/createIO')
                });


            const bill = new Bill(req.body);

            const userID = r.id;

            bill.customerID = userID;

            bill.save()

        });

}

module.exports = { show, storeIO, searchBooking, searchListRoom, checkIn, taophieu };


