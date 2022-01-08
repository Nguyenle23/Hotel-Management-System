

const Room = require('../models/Room');
const Customer = require('../models/Customer');
const Promotion = require('../models/Promotion');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

// [GET] /promotionTab
const listPromotion = async (req, res, next) => {
    Promotion.find()
        .then(promotion => {
            res.render('TabPromotion/promotionTab', { promotion: multipleMongooseToObject(promotion) })
        })
        .catch(error => {
            console.log(error);
        })
}

//[POST] /promotionTab/storePromotionTab
const storePromotionTab = (req, res, next) => {
    const promotion = new Promotion(req.body);
    promotion.save()
        .then(() => res.redirect('back'))
}

//[GET] /promotionTab/:id/edit
const edit = (req, res, next) => {
    Promotion.findById(req.params.id)
        .then(promotion =>
            res.render('TabPromotion/editPromotionTab', { promotion: mongooseToObject(promotion) })
            // res.json(listIO)
        )
        .catch(next);
}

//[PUT] /promotionTab/:id
const update = async (req, res, next) => {
    // await ListIO.updateOne({ _id: req.params.id }, req.body)
    //     .then(() => res.redirect('/checkIO'))
    //     .catch(next);

    await Promotion.updateOne({ _id: req.params.id }, {
        makm: req.body.makm,
        ngayapdung: req.body.ngayapdung,
        ngayhethan: req.body.ngayhethan,
        giakm: req.body.giakm,
        motakm: req.body.giakm,
    })

        .then(() => res.redirect('/promotionTab'))
        .catch(next);
}
// [DELETE] /promotion/:id
const destroy = (req, res, next) => {
    Promotion.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next);
}

module.exports = { listPromotion, storePromotionTab, edit, update, destroy }