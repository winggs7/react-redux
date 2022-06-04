const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLenght: 3,
        maxLenght: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minLength: 6,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
    coverPic: {
        type: String,
        default: "",
    },
    desc: {
        type: String,
        maxLenght: 50,
        default: "",
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        dafault: [],
    },
    isAdmin: {
        type: Boolean,
        dafault: false,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", UserSchema);
