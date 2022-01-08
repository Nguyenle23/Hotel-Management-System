
const Bill = require('../models/Bill');
const Room = require('../models/Room');
const Customer = require('../models/Customer');
const Service = require('../models/Service');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

//[GET] /listBilll
const listBill = async (req, res, next) => {
    const bill = await Bill.find({ status: '1'});
    res.render('bill/danhsachHoaDon', { bill: multipleMongooseToObject(bill)})
}

//[GET] /listBilll/watchDetail
const watchDetail = async (req, res, next) => {
    
    const bill = await Bill.findById(req.params.id)
    const customer = await Customer.findById(bill.customerID);
    const room = await Room.findById(customer.idphong)
    const service = await Service.find();

    res.render('bill/xemchitietHoaDon', { bill: mongooseToObject(bill), customer: mongooseToObject(customer), room: mongooseToObject(room), service: multipleMongooseToObject(service)})

}

module.exports = { listBill, watchDetail };