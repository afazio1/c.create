const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, "An account with this email already exists"]
    },
    password: String,
    // workflows: [{ type: mongoose.Schema.Types.ObjectId, ref: "Workflow" }],
    // triggers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trigger" }],
    // actions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Action" }],
    // templates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Template" }]
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);
