const express = require("express");
const router = express.Router();

const workflow = require("../controllers/workflowController");

router.route("/")
    .post(workflow.createWorkflow)
    .get(workflow.getWorkflows);

router.route("/:id")
    .put(workflow.updateWorkflow)
    .delete(workflow.deleteWorkflow)
    .get(workflow.singleWorkflow)


module.exports = router;