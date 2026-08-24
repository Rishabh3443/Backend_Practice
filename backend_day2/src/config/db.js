const {Mongoose, default: mongoose} = require("mongoose");

const connectDb = async ()=>{
    try {
        await  mongoose.connect("mongodb+srv://risabhtri2478_db_user:qeloPO13YI8CfjJN@clusterforlearning.rpie6k5.mongodb.net/");
        console.log("mei connect hogya hu");
        
    } catch (error) {
        console.log("ye le error db ka",error);
        
    }
}

connectDb();

