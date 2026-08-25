const { default: mongoose } = require("mongoose")


const dbConnect = ()=>{
    mongoose.connect("mongodb://localhost:27017");
    console.log("db connected");
};

module.exports = dbConnect;