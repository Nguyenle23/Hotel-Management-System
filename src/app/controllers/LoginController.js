

const Room = require('../models/Room');
const User = require('../models/User');
const {multipleMongooseToObject } = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');

class LoginController{

    //[GET] /login (UI)
    login(req, res, next){
        res.render('login')
    }

    //[POST] /login/store (Back-End)
    store(req, res, next){ 
        const room = new User(req.body);
        room.save()
            .then(room => 
                res.render('admin/listEmployee', { room: mongooseToObject(room) })
            )
            .catch(next);
    }


}

module.exports = new LoginController;