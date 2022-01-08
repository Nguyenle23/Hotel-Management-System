
const Bill = require('../models/Bill');
const Room = require('../models/Room');
const Customer = require('../models/Customer');
const Service = require('../models/Service');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

//[GET] /listBilll
const listBill = async (req, res, next) => {

    res.send('test')

}

module.exports = { listBill };