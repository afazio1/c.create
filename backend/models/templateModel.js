const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
    platform: String,
    title: String,
    description: String,
    hashtags: [String],
    image: String
});

module.exports = mongoose.model("Template", templateSchema);
