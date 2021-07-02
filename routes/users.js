const express = require("express")
const router = express.Router()
const { validator } = require("../validation/validation")

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

/**
 *  @description register page
 *  @route POST /api/v1/users/register
 */
router.post("/register", async (req, res) => {
  const { name, email, password, password2 } = req.body
  // console.log(req.body)

  //entry validations
  try {
    const valid = await validator(req.body)
    console.log(valid)
    res.send("posted")
  } catch (err) {
    console.log(err.details[0].message)
    res.send("error")
  }
})

module.exports = router
