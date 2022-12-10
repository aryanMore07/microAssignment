const mongoose = require("mongoose");

var MongoDB = process.env.MONGODB_URL;

mongoose.connect(MongoDB , {useUnifiedTopology:true , useNewUrlParser:true})

mongoose.connect(MongoDB, (err)=>{
    if(!err){
        console.log("DATABASE is connected.");
    }else{
        console.log("DATABASE is not connnected.");
    }
});

module.exports = mongoose

