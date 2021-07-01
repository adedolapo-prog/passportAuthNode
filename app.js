const express = require("express")
const app = express()
const indexRouter = require("./routes/index")
const userRouter = require("./routes/users")
const expressLayouts = require("express-ejs-layouts")

const PORT = process.env.PORT || 5000

//defining middlewares
app.use(expressLayouts)
app.set("view engine", "ejs")

//defining routes
app.use("/api/v1", indexRouter)
app.use("/api/v1/users", userRouter)

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
