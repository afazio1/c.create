const asyncHandler = require("express-async-handler");
const Template = require("../models/templateModel");
const User = require("../models/userModel");

module.exports.getTemplates = asyncHandler(async (req, res) => {
    const templates = await Template.find({ user: req.user.id });
    res.status(200).json(templates);
});

module.exports.createTemplate = asyncHandler(async (req, res) => {
    const template = new Template({
        ...req.body,
        user: req.user.id
    });
    await template.save();
    res.status(200).json(template);
});

module.exports.updateTemplate = asyncHandler(async (req, res) => {
    const template = Template.findById({ _id: req.params.id });

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
    const updatedTemplate = await Template.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).json(updatedTemplate);
});

module.exports.singleTemplate = asyncHandler(async (req, res) => {
    const template = await Template.findById({ _id: req.params.id });
    if (!template) {
        res.status(400);
        throw new Error("Cannot find template");
    }
    res.status(200).json(template);
});

module.exports.deleteTemplate = asyncHandler(async (req, res) => {
    const template = await Template.findById({ _id: req.params.id });
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
        throw new Error("Cannot find template");
    }
    const deletedTemplate = await Template.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json(deletedTemplate);
});