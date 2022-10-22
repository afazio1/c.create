const mongoose = require("mongoose");

const actionSchema = new mongoose.Schema({
    platform: String,
    creatorID: String,
    actionType: String,
    template: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Template"
    }
});

module.exports = mongoose.model("Action", actionSchema);