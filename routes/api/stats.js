const express = require("express");
const router = express.Router();

// @route  GET api/stats
// @desc   Test route
// @access Public
router.get("/", (req, res) => res.send("Stats route"));

module.exports = router;
