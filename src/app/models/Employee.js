const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// tạo ra một đối tượng schema 
const Employee = new Schema({
    maNV: { type: String, required: true },
    name: { type: String, maxLength: 600 },
    cmnd: { type: String, maxLength: 400 },
    phone: { type: String, maxLength: 400 },
    email: { type: String, maxLength: 400 },
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('employee', Employee);