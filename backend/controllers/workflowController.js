const Workflow = require("../models/workflowModel");
const asyncHandler = require("express-async-handler");

module.exports.index = asyncHandler(async (req, res) => {
    const workflows = await Workflow.find({});
    res.json(workflows);
});

module.exports.create = asyncHandler(async (req, res) => {
    const workflow = new Workflow(req.body);
    await workflow.save();
});

module.exports.update = asyncHandler(async (req, res) => {
    const workflow = await Workflow.findByIdAndUpdate({ _id: req.params.id }, req.body);
});

module.exports.singular = asyncHandler(async (req, res) => {
    const workflow = await Workflow.findById({ _id: req.params.id });
});