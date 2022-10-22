const asyncHandler = require("express-async-handler");
const Action = require("../models/actionModel");

module.exports.getActions = asyncHandler(async (req, res) => {
    const actions = await Action.find({});
    res.status(200).json(actions);
});

module.exports.createAction = asyncHandler(async (req, res) => {
    const action = new Action(req.body);
    await action.save();
    res.status(200).json(action);
});

module.exports.updateAction = asyncHandler(async (req, res) => {
    const action = Action.findById({ _id: req.params.id });

    const user = await User.findById(req.user.id);
    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    if (!action) {
        res.status(400);
        throw new Error("action not found");
    }
    if (action.user.toString() !== user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    const updatedAction = await Action.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json(updatedAction);
});

module.exports.singleAction = asyncHandler(async (req, res) => {
    const action = await Action.findById({ _id: req.params.id });
    if (!action) {
        res.status(400);
        throw new Error("Cannot find action");
    }
    res.status(200).json(action);
});

module.exports.deleteAction = asyncHandler(async (req, res) => {
    const action = await Action.findById({ _id: req.params.id });
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }
    if (!template) {
        res.status(400);
        throw new Error("template not found");
    }
    if (template.user.toString() !== user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    if (!template) {
        res.status(400);
        throw new Error("Cannot find action");
    }
    const deletedAction = await Action.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json(deletedAction);
});