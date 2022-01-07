const mongoose = require('mongoose');
const dotenv = require('dotenv');

async function connect(){

    try {
        await mongoose.connect('mongodb+srv://nguyenle23:B1E24681010@cluster0.pmchj.mongodb.net/HotelManagement', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        console.log('Connected');
    } catch (error) {
        console.log('Connecting failed !!!!');
    }

};

module.exports = { connect };

//'mongodb://localhost:27017/f8_nodejs'