
const Room = require('../models/Room');
const Customer = require('../models/Customer');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');


//[GET] /room
const showRoom = async (req, res, next) => {
    let room = await Room.find();
    res.render('room', { room: multipleMongooseToObject(room) })
}

// [GET] /room/:slug
const showSlug = (req, res, next) => {
    Room.findOne({ slug: req.params.slug })
        .then(room =>
            res.render('rooms/showSlug', { room: mongooseToObject(room) })
        )
        .catch(next);
}

// [GET] /room/searchR
const searchRoom = async (req, res, next) => {
    let q = req.query.q;
    let room = await Room.find();
    let result = room.filter((r) => {
        return r.type.toLowerCase().indexOf(q.toLowerCase()) !== -1 || r.price.toLowerCase().indexOf(q.toLowerCase()) !== -1 || r.area.toLowerCase().indexOf(q.toLowerCase()) !== -1
    })
    res.render('room', { room: multipleMongooseToObject(result) })
}

//[GET] /room/:slug/booking
const booking = async (req, res, next) => {
    Room.findOne({ slug: req.params.slug })
        .then(room =>
            res.render('rooms/booking', { room: mongooseToObject(room) })
        )
        .catch(next);
}

//[POST] /room/:slug/booking/store
const store = async (req, res, next) => {
    const customer = await new Customer(req.body);

    customer.save(function (err, result) {
        Customer.findById(result.id)
            .populate('idphong')
            .exec(function (err, r) {
                if (err) return console.log(err);

                // console.log(r)

                // const room = Room.findOne({ slug: req.params.slug })
                // console.log(room)

                res.render('rooms/successfull', { r: mongooseToObject(r) })

                // Room.findByIdAndUpdate(r.idphong.id, { status: '2' })
                //     .then(() => {
                //         res.redirect('/createIO')
                //     })
            });
    });
}

//[GET] /room/:slug/booking/successfull
const successfull = async (req, res, next) => {
    const room = await Room.findOne({ slug: req.params.slug })
    const customer = await Customer.findOne({ slug: req.params.slug })
    res.render('rooms/successfull', { room: mongooseToObject(room), customer: mongooseToObject(customer) })
}

module.exports = { showRoom, showSlug, searchRoom, booking, store, successfull };