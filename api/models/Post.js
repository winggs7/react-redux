const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        dafault: "",
        max: 1000
    },
    img: {
        type: Array,
        default: []
    },
    like: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Post", PostSchema);

