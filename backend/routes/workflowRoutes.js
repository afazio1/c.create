const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const workflow = require("../controllers/workflowController");

router.route("/")
    .post(protect, workflow.createWorkflow)
    .get(protect, workflow.getWorkflows);

router.route("/:id")
    .put(protect, workflow.updateWorkflow)
    .delete(protect, workflow.deleteWorkflow)
    .get(protect, workflow.singleWorkflow)


module.exports = router;