

const Room = require('../models/Room');
const Customer = require('../models/Customer');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');


// [GET] /bookingRoom
const listBooking = async (req, res, next) => {
    Customer.find()
        .populate('idphong')
        .exec(function (err, r) {
            if (err) return console.log(err);

            res.render('TabBooking/bookingRoom', { r: multipleMongooseToObject(r) })
        });
    // Customer.find()
    //     .then(customer => {
    //         res.render('TabBooking/bookingRoom', { customer: multipleMongooseToObject(customer) })
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

}

// [GET] /bookingRoom/searchName
const searchName = async (req, res, next) => {
    let q = req.query.q;
    let customer = await Customer.find();
    let result = customer.filter((r) => {
        return r.hovaten.toLowerCase().indexOf(q.toLowerCase()) !== -1 || r.sodienthoai.toLowerCase().indexOf(q.toLowerCase()) !== -1 || r.type.toLowerCase().indexOf(q.toLowerCase()) !== -1 || r.sophong.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
    res.render('TabBooking/bookingRoom', { customer: multipleMongooseToObject(result) })
}

//[PUT] /bookingRoom/confirm
const confirm = async (req, res, next) => {
    Customer.findByIdAndUpdate(req.params.id, { status: '1' })
        .then(customer => {
            res.redirect('/bookingRoom')
        })
        .catch(next);

    // Customer.aggregate([
    //     { $match: { status: "1" } },
    //     {
    //         $lookup: {
    //             from: "rooms",
    //             let: { sophong: "$sophong" },
    //             pipeline: [
    //                 // { $match: { $expr: { $eq: ["$sophong", "$$sophong"] } }, },
    //                 { $project: { sophong: 1, type: 1 } },
    //                 { $set: { status: "1" } }

    //             ],
    //             localField: "sophong",
    //             foreignField: "sophong",
    //             as: "booking_info",
    //         },
    //     },
    //     {
    //         $unwind: "$booking_info",

    //     },
    // ],
    // function( err, data ) {
    //     console.log(data); 
    //     // Room.update({status: '1'})
    //     // .catch(err);

    //   });
};

// [DELETE] /bookingRoom/:id
const destroy = (req, res, next) => {
    Customer.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
}

module.exports = { listBooking, searchName, confirm, destroy }  