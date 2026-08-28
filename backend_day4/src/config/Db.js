const { default: mongoose } = require("mongoose");

const DbConnect = async ()=>{
   await mongoose.connect("mongodb://localhost:27017");
   console.log("database connected");
}

module.exports = DbConnect;