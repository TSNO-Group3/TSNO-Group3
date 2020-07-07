const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
        name: {type: String, required: [true, "can't be blank"]},
        email: {type: String, required: [true, "can't be blank"], unique: true},
        password: {type: String, required: [true, "can't be blank"]},
        location: {type: String, required: false},
        service: {type: String, required: false},
        hourCost: {type: Number, required: false},
        img: {type: String, required: false},

        category: {type: String, required: false}

    },
    {
        timestamps: true
    });
    
    var User = mongoose.model("users", UserSchema);

    module.exports = User;