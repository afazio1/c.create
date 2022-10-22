const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    workflows: [{ type: mongoose.Schema.Types.ObjectId, ref: "Workflow" }],
    triggers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trigger" }],
    actions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Action" }],
    templates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Template" }]
});

module.exports = mongoose.model("User", userSchema);
