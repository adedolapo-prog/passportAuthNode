const express = require("express")
const router = express.Router()

/**
 *  @description index page
 *  @route GET /api/v1
 */
router.get("/", (req, res) => {
  res.render("welcome")
})
module.exports = router
