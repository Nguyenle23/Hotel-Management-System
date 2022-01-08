

const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

let Customer = new Schema({
    idphong: { type: String, ref: 'Rooms' },
    hovaten: { type: String, maxLength: 255 },
    email: { type: String, maxLength: 255 },
    sodienthoai: { type: String, maxLength: 255 },
    ngaynhan: { type: String, maxLength: 255 },
    ngaytra: { type: String, maxLength: 255 },
    status: { type: String, maxLength: 255, default: 0 },

}, {
    timestamps: true,
});

//var RoomsModel = mongoose.model('Rooms', Room);
module.exports = mongoose.model('Customers', Customer);