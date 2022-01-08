
const Bill = require('../models/Bill');
const Room = require('../models/Room');
const Customer = require('../models/Customer');
// const ListIO = require('../models/ListIO');
const Service = require('../models/Service');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

//[GET] bill/:id/watch
const watch = async (req, res, next) => {

    const customer = await Customer.findById(req.params.id);
    const service = await Service.find();
    const customer1 = await Customer.findById(req.params.id).populate('idphong');
    const bill = await Bill.findOne({ customerID: customer._id })
    
    res.render('bill/xemHoaDon', { customer: mongooseToObject(customer), customer1: mongooseToObject(customer1), bill: mongooseToObject(bill), service: multipleMongooseToObject(service) })

}

//[PUT] bill/:id/store
const store = async (req, res, next) => {

    await Bill.updateOne({ _id: req.body.billID }, {
        tenDV: req.body.tenDV,
        quantity: req.body.quantity,
        totalPD: req.body.totalPD,
        total: req.body.total,
    });

    res.redirect('back')
}

//[GET] bill/:id/watch/back
const back = async (req, res, next) => {

    const bill = await Bill.findByIdAndUpdate(req.params.id, {status: '1'});

    const cusID = await Customer.findByIdAndUpdate(bill.customerID, {status: '3'});

    const room = await Room.findByIdAndUpdate(cusID.idphong, {status: '0'})

    res.redirect('/checkIO')

}

module.exports = { watch, store, back };