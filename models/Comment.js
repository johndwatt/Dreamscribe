const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, "You cannot submit an empty comment"],   
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        journalId: {
            type: mongoose.Types.ObjectId,
            ref: "Journal",
        },
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;