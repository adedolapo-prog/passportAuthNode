const express = require("express")
const app = express()
const indexRouter = require("./routes/index")
const userRouter = require("./routes/users")
const expressLayouts = require("express-ejs-layouts")
const connectDB = require("./connectDB")
const passport = require("passport")
const session = require("express-session")

//passport config
require("./config/passport")(passport)

//parsing incoming data
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
)

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//defining middlewares
app.use(expressLayouts)
app.set("view engine", "ejs")

//defining routes
app.use("/api/v1", indexRouter)
app.use("/api/v1/users", userRouter)

//connect Database
connectDB(app)
