//database config

const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        const conct = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${conct.connection.host}`);
    }
    catch (err){
        console.log(`Error ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;