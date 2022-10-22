const express = require("express");
const router = express.Router();
const template = require("../controllers/templateController");
const { protect } = require("../middleware/authMiddleware");


router.route("/")
    .post(protect, template.createTemplate)
    .get(protect, template.getTemplates)

router.route("/:id")
    .put(protect, template.updateTemplate)
    .get(protect, template.singleTemplate)
    .delete(protect, template.deleteTemplate)


module.exports = router;