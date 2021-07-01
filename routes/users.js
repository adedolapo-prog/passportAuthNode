const express = require("express")
const router = express.Router()

/**
 *  @description login page
 *  @route GET /api/v1/users/login
 */
router.get("/login", (req, res) => {
  res.render("login")
})

/**
 *  @description register page
 *  @route GET /api/v1/users/register
 */
router.get("/register", (req, res) => {
  res.render("register")
})

module.exports = router
