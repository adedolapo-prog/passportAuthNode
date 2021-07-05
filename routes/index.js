const express = require("express")
const router = express.Router()

/**
 *  @description index page
 *  @route GET /api/v1
 */
router.get("/", (req, res) => {
  res.render("welcome")
})

/**
 *  @description dashboard page
 *  @route GET /api/v1/dashboard
 */
router.get("/dashboard", (req, res) => {
  res.render("dashboard")
})
module.exports = router
