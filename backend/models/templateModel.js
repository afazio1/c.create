const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    platform: String,
    title: String,
    description: String,
    hashtags: [String],
    image: String
});

module.exports = mongoose.model("Template", templateSchema);
