
const siteRouter = require('./site');

const loginRouter = require('./login');
const feedbackRouter = require('./feedback');
const serviceRouter = require('./service');
const roomRouter = require('./room');

function route(app) {


    app.use('/login', loginRouter);
    app.use('/feedback', feedbackRouter);
    app.use('/service', serviceRouter);
    app.use('/room', roomRouter);

    app.use('/', siteRouter);
}

module.exports = route;