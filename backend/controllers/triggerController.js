const asyncHandler = require("express-async-handler");
const Trigger = require("../models/triggerModel");

module.exports.getTriggers = asyncHandler(async (req, res) => {
    const triggers = await Trigger.find({});
    res.status(200).json(triggers);
});

module.exports.createTrigger = asyncHandler(async (req, res) => {
    const trigger = new Trigger(req.body);
    await trigger.save();
    res.status(200).json(trigger);
});

module.exports.updateTrigger = asyncHandler(async (req, res) => {
    const trigger = await Trigger.findByIdAndUpdate({ _id: req.params.id }, req.body);
    if (!trigger) {
        res.status(400);
        throw new Error("trigger not found");
    }
    res.status(200).json(trigger);
});

module.exports.singleTrigger = asyncHandler(async (req, res) => {
    const trigger = await Trigger.findById({ _id: req.params.id });
    if (!trigger) {
        res.status(400);
        throw new Error("Cannot find trigger");
    }
    res.status(200).json(trigger);
});

module.exports.deleteTrigger = asyncHandler(async (req, res) => {
    const trigger = await Trigger.findByIdAndRemove({ _id: req.params.id });

    if (!trigger) {
        res.status(400);
        throw new Error("Cannot find trigger");
    }
    res.status(200).json(trigger);
});