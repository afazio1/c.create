const express = require("express");
const router = express.Router();

const workflow = require("../controllers/workflowController");

router.route("/")
    .post(workflow.create)
    .get(workflow.index);

router.route("/:id")
    .put(workflow.update)
    .get(workflow.singular)


module.exports = router;