const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config("./db.js");

var MongoDB = process.env.MONGODB_URL;

mongoose.set('strictQuery', true);

mongoose.connect(MongoDB , {useUnifiedTopology:true , useNewUrlParser:true});

mongoose.connect(MongoDB, (err)=>{
    if(!err){
        console.log("DATABASE is connected.");
    }else{
        console.log("DATABASE is not connnected.");
    }
});

module.exports = mongoose

