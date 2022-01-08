

const mongoose = require('mongoose');
const slug =require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

let Promotion = new Schema({
    stt: { type: String, maxLength: 255},
    makm: { type: String, maxLength: 255},
    ngayapdung: { type: String, maxLength: 255},
    ngayhethan: { type: String, maxLength: 255},
    giakm: { type: String, maxLength: 255},
    motakm: { type: String, maxLength: 255},
    // rooms: [{ 
    //     type: mongoose.Schema.Types.ObjectId, ref: "Rooms",
    // }],
}, {
    timestamps: true,
});

//var RoomsModel = mongoose.model('Rooms', Room);
module.exports =  mongoose.model('Promotions', Promotion);