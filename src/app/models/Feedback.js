// cài đặt mongoose kết nổi qua 
const mongoose = require('mongoose');
// cài đặt schema 
const Schema = mongoose.Schema;


// tạo ra một đối tượng schema 
const feedback = new Schema({
    tenKH: { type: String, maxLength: 600 },
    sdtKH: { type: String, maxLength: 400 },
    contentFB: { type: String, maxLength: 1000 },
}, {
    timestamps: true,
});


module.exports = mongoose.model('feedback', feedback);