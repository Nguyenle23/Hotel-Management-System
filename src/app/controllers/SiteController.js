const Room = require('../models/Room');
const { multipleMongooseToObject } = require('../../util/mongoose');
// import lib ulti to convert object in mongoose to normal object

class SiteController {
    
    //[GET] /room
    index(req, res, next){
        // Room.find({})
        //     .then(room => 
        //         res.render('home')
        //     )
        //     .catch(next);
        res.render('home')
    }

}

module.exports = new SiteController;
