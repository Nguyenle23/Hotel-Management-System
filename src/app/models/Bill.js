

const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

let Bill = new Schema({
    customerID: { type: String, ref: 'customers' },
    total: { type: String, default: 0 },
    tenDV: [{ type: String, }],
    quantity: [{ type: String, default: 0 }],
    totalPD: [{ type: String, default: 0 }],
    status: { type: String, default: 0 }
}, {
    timestamps: true,
});

//var RoomsModel = mongoose.model('Rooms', Room);
module.exports = mongoose.model('Bills', Bill);