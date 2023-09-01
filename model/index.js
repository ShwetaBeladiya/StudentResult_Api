const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var marks = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    sub1:{
        type:Number,
        required:true,
    },
    sub2:{
        type:Number,
        required:true,
    },
    sub3:{
        type:Number,
        required:true,
    },
    sub4:{
        type:Number,
        required:true,
    },
    sub5:{
        type:Number,
        required:true,
    },
    min:{
        type:Number,
    },
    max:{
        type:Number,
    },
    total:{
        type:Number,
    },
    per:{
        type:Number,
    },
    result:{
        type:String,
    },
});

//Export the model
const mark= mongoose.model('mark', marks);
module.exports = mark