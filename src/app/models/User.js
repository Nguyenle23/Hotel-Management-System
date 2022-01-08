

const mongoose = require('mongoose');
const slug =require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

let User = new Schema({
    username: { type: String, maxLength: 255, required: true},
    password: { type: String, maxLength: 255},
}, {
    timestamps: true,
});

//var RoomsModel = mongoose.model('Rooms', Room);
module.exports =  mongoose.model('Users', User);