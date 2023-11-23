const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    age :{
        type: String,
        required : true
    },
})

const employeModel = mongoose.model("employe",employeSchema);

module.exports = employeModel;