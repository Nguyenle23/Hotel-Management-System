

const Room = require('../models/Room');
const {multipleMongooseToObject } = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');


class StandardController{

    //[GET] /standard
    general(req, res, next){
        Room.findOne({})
            .then(room => 
                res.render('rooms/standard', { room: mongooseToObject(room) })
                // res.json(room)
            )
            .catch(next);
    }

}

module.exports = new StandardController;