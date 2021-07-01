const express = require("express")
const app = express()
const indexRouter = require("./routes/index")
const userRouter = require("./routes/users")
const expressLayouts = require("express-ejs-layouts")
const connectDB = require('./connectDB')
//defining middlewares
app.use(expressLayouts)
app.set("view engine", "ejs")

//defining routes
app.use("/api/v1", indexRouter)
app.use("/api/v1/users", userRouter)

//connect Database
connectDB(app)