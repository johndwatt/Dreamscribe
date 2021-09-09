const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "You must title your journal entry"],
        },
        content: {
            type: String,
            required: [true, "You cannot submit an empty journal entry"],   
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        isPublic: {
            type: Boolean,
            default: false,
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

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;