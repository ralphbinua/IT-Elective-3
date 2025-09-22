const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
},
    {
    timestamp: true
    }
)

const Signup = mongoose.model("Signup", signupSchema);
module.exports = Signup;