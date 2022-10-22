const mongoose = require("mongoose");

const triggerSchema = new mongoose.Schema({
    platform: String,
    creatorID: String,
    triggerType: String
});

module.exports = mongoose.model("Trigger", triggerSchema);