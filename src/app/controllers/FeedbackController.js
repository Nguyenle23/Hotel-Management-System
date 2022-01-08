const { data } = require("jquery");
const { multipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");
const Feedback = require("../models/Feedback");
const feedback = require("../models/Feedback");

class FeedbackController {
    // [GET] /feedback/
    create(req, res, next) {
        res.render("feedback/createFB");
    }

    //[POST] /feedback/
    recieve(req, res, next) {
        console.log(req.body);
        const feedback = new Feedback(req.body);
        feedback
            .save()
            .then(() => res.redirect("/feedback"))
            .catch(next);
    }
    // [GET] /feedback/store 
    store(req, res, next) {
        Feedback.find({})
            .then(data => res.render("feedback/feedbacklist", {
                data: multipleMongooseToObject(data)
            }))
            .catch(next);
    }


    // [DELETE] /feedback/:id
    destroy(req, res, next) {
        Feedback.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}


module.exports = new FeedbackController();
