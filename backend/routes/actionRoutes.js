const express = require("express");
const router = express.Router();

const action = require("../controllers/actionController");
const { protect } = require("../middleware/authMiddleware");


router.route("/")
    .post(protect, action.createAction)
    .get(protect, action.getActions)

router.route("/:id")
    .put(protect, action.updateAction)
    .get(protect, action.singleAction)
    .delete(protect, action.deleteAction)


module.exports = router;