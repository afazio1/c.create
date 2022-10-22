const mongoose = require("mongoose");

const workflowSchema = new mongoose.Schema({
    trigger: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trigger"
    },
    actions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Action" }],
    active: Boolean
});

module.exports = mongoose.model("Workflow", workflowSchema);
