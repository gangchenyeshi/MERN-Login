const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    work: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    }
})

const userModel = mongoose.model("USERS", userSchema);

module.exports = userModel;
