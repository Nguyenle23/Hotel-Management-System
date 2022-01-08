

const mongoose = require('mongoose');
const slug =require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

let Service = new Schema({
    stt: { type: String, maxLength: 255},
    madv: { type: String, maxLength: 255},
    loaidv: { type: String, maxLength: 255},
    tendv: { type: String, maxLength: 255},
    giadv: { type: String, maxLength: 255},
    motadv: { type: String, maxLength: 255},
    // rooms: [{ 
    //     type: mongoose.Schema.Types.ObjectId, ref: "Rooms",
    // }],
}, {
    timestamps: true,
});

//var RoomsModel = mongoose.model('Rooms', Room);
module.exports =  mongoose.model('Services', Service);