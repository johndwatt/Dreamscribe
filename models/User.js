const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please provide an username to signup."],
            unique: [true, "There is already an account associated with this username."],
        },
        email: {
            type: String,
            required: [true, "Please provide an email to signup."],
            unique: [true, "There is already an account associated with this email."],
        },
        password: {
            type: String,
            required: [true, "Please provide a password to signup."],
        },
        avatar: {
            type: String,
            default: "",  
        },
        joinDate: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;