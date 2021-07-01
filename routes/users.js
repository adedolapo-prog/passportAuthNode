const express = require("express")
const router = express.Router()

/**
 *  @description login page
 *  @route GET /api/v1/users/login
 */
router.get("/login", (req, res) => {
  res.send("Login")
})

/**
 *  @description register page
 *  @route GET /api/v1/users/register
 */
router.get("/register", (req, res) => {
  res.send("Register")
})

module.exports = router
