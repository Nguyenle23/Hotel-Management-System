const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

let Room = new Schema({
    name: { type: String, maxLength: 255 },
    price: { type: String, maxLength: 1000 },
    area: { type: String, maxLength: 255 },
    bed: { type: String, maxLength: 255 },
    extra: { type: String, maxLength: 1000 },
    people: { type: String, maxLength: 50 },
    description1: { type: String },
    description2: { type: String },
    slug: { type: String, unique: true }, // vào const Course nhé
    type: { type: String },
    sophong: { type: String },
    status: { type: String, default: 0 },
    img: { type: String },
    customerID: { type: Schema.Types.ObjectId, ref: 'customers' },
}, {
    timestamps: true,
});

//var RoomsModel = mongoose.model('Rooms', Room);
module.exports = mongoose.model('Rooms', Room);