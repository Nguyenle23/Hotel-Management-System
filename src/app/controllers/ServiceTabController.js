

const Room = require('../models/Room');
const Customer = require('../models/Customer');
const Service = require('../models/Service');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

// [GET] /serviceTab
const listService = async (req, res, next) => {
    Service.find()
        .then(service => {
            res.render('TabService/serviceTab', { service: multipleMongooseToObject(service) })
        })
        .catch(error => {
            console.log(error);
        })
}

//[POST] /serviceTab/storeServiceTab
const storeServiceTab = (req, res, next) => {
    const service = new Service(req.body);
    service.save()
        .then(() => res.redirect('back'))
}

//[GET] /serviceTab/:id/edit
const edit = (req, res, next) => {
    Service.findById(req.params.id)
        .then(service =>
            res.render('TabService/editServiceTab', { service: mongooseToObject(service) })
            // res.json(listIO)
        )
        .catch(next);
}

//[PUT] /serviceTab/:id
const update = async (req, res, next) => {
    // await ListIO.updateOne({ _id: req.params.id }, req.body)
    //     .then(() => res.redirect('/checkIO'))
    //     .catch(next);

    await Service.updateOne({ _id: req.params.id }, {
        madv: req.body.madv,
        loaidv: req.body.loaiddv,
        tendv: req.body.tendv,
        giadv: req.body.giadv,
        motadv: req.body.motadv,
    })

        .then(() => res.redirect('/serviceTab'))
        .catch(next);
}
// [DELETE] /employee/:id
const destroy = (req, res, next) => {
    Service.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
}

module.exports = { listService, storeServiceTab, edit, update, destroy }