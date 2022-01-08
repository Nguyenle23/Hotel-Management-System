
class ServiceController{

    // [GET] /service
    showService(req, res){
        res.render('service');
    }

    // //[GET] /news/:slug
    // show(req, res){
    //     res.render('search');
    // }
}

module.exports = new ServiceController;