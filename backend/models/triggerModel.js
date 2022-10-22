const mongoose = require("mongoose");

const triggerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    platform: String,
    creatorID: String,
    triggerType: String
});

module.exports = mongoose.model("Trigger", triggerSchema);