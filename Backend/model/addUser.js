const mongoose =require("mongoose");

const user = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    userID : {
        type: String,
        required: true
    },
    phone : {
        type: Number,
        required: true
    }
});

const register = new mongoose.model("user",user);
module.exports = register;