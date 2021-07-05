const express = require("express")
const router = express.Router()
const { profileValidator, emailValidator } = require("../validation/validation")
const User = require("../models/userSchema")
const passport = require("passport")

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

  //entry validations
  try {
    await profileValidator(req.body)
    const { name, email, password } = req.body
    const newUser = await new User({ name, email, password })
    await newUser.save()

    //set user password to undefined
    newUser.password = undefined
    console.log(newUser)
    res.status(200).redirect("/api/v1/users/login")
    // res.status(200).json({ success: true, data: newUser })
  } catch (err) {
    console.log(err)
    res.send("ERROR")
  }
})

/**
 *  @description login page
 *  @route POST /api/v1/users/login
 */
router.post("/login", async (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/api/v1/dashboard",
    failureRedirect: "/api/v1/users/login",
    // failureFlash: true,
  })(req, res, next)
})

/**
 *  @description logout page
 *  @route POST /api/v1/users/logout
 */
router.get("/logout", async (req, res) => {
  req.logout()
  res.redirect("/api/v1/users/login")
})

module.exports = router
