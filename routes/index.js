const express = require("express")
const router = express.Router()

/**
 *  @description index page
 *  @route GET /api/v1
 */
router.get("/", (req, res) => {
  res.send("Welcome")
})
module.exports = router
