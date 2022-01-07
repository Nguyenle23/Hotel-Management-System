
const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')
var handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const route = require('./routes');

const app = express()
const port = process.env.PORT || 5000

// Static Files
// app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/img', express.static(__dirname + 'public/img'))
// app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
// app.set('views', './src/views')
// app.set('view engine', 'ejs')

//Template engine
var hbs = handlebars.create({
    extname: 'hbs', 
    helpers: {
        sum: (a,b) => a + b
    }
});
  
hbs.handlebars.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources','views'));

app.use(express.static(__dirname + '/public'));

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended : true }))
app.use(methodOverride('_method'));

// Routes
//const newsRouter = require('./src/routes/news')
// app.use('/', newsRouter)
// app.use('/article', newsRouter)

route(app);

// Listen on port 5000
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  });