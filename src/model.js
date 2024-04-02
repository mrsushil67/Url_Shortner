const mongoose = require("mongoose")

const schema = new mongoose.Schema({
     longUrl:String,
     shortUrl:{
        type:String,
        default:null
     },
     shortKey:String 
    });
const Url = mongoose.model('Url', schema);

module.exports = Url