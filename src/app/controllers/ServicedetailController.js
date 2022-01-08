const { data } = require("jquery");
const { multipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");


class ServicedetailController {
    // [GET] /employee/
    restaurant(req, res, next) {
        res.render("Servicedetails/restaurantservice")
    }

    laundry(req, res, next) {
        res.render("Servicedetails/laundryservice")
    }

    spa(req, res, next) {
        res.render("Servicedetails/spaservice")
    }
}

module.exports = new ServicedetailController();