const asyncHandler = require("express-async-handler");
const Workflow = require("../models/workflowModel");

module.exports.getWorkflows = asyncHandler(async (req, res) => {
    const workflows = await Workflow.find({});
    res.status(200).json(workflows);
});

module.exports.createWorkflow = asyncHandler(async (req, res) => {
    const workflow = new Workflow(req.body);
    await workflow.save();
    res.status(200).json(workflow);
});

module.exports.updateWorkflow = asyncHandler(async (req, res) => {
    const workflow = await Workflow.findByIdAndUpdate({ _id: req.params.id }, req.body);
    if (!workflow) {
        res.status(400);
        throw new Error("Workflow not found");
    }
    res.status(200).json(workflow);
});

module.exports.singleWorkflow = asyncHandler(async (req, res) => {
    const workflow = await Workflow.findById({ _id: req.params.id });
    if (!workflow) {
        res.status(400);
        throw new Error("Cannot find workflow");
    }
    res.status(200).json(workflow);
});

module.exports.deleteWorkflow = asyncHandler(async (req, res) => {
    const workflow = await Workflow.findById({ _id: req.params.id });
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    if (!workflow) {
        res.status(400);
        throw new Error("workflow not found");
    }
    if (workflow.user.toString() !== user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    if (!workflow) {
        res.status(400);
        throw new Error("Cannot find workflow");
    }
    const deletedWorkflow = await Workflow.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json(deletedWorkflow);
});