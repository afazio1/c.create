const express = require("express");
const router = express.Router();
const trigger = require("../controllers/triggerController");
const { protect } = require("../middleware/authMiddleware");


router.route("/")
    .post(protect, trigger.createTrigger)
    .get(protect, trigger.getTriggers)

router.route("/:id")
    .put(protect, trigger.updateTrigger)
    .get(protect, trigger.singleTrigger)
    .delete(protect, trigger.deleteTrigger)

module.exports = router;