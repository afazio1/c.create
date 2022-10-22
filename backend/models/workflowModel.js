const mongoose = require("mongoose");

const workflowSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    trigger: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trigger"
    },
    actions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Action" }],
    active: Boolean
});

module.exports = mongoose.model("Workflow", workflowSchema);
