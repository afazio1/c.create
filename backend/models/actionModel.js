const mongoose = require("mongoose");

const actionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    platform: String,
    creatorID: String,
    actionType: String,
    template: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Template"
    }
});

module.exports = mongoose.model("Action", actionSchema);