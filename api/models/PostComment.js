const mongoose = require("mongoose");

const PostCommentSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        max: 300,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PostComment", PostCommentSchema);
