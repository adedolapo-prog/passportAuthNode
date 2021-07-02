const mongoose = require("mongoose")
const { Mongo_URI } = require("./config/config.json")
const PORT = process.env.PORT || 5000

const connectDB = async app => {
  try {
    await mongoose.connect(Mongo_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("awesome, connected to db")
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`)
    })
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB
