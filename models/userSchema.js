const mongoose = require("mongoose")
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true); 
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlegth: 6,
    },
  },
  {
    timestamps: true,
  }
)

//hashing password before we save
userSchema.pre("save", async function (next) {
  let salt = await bcrypt.genSalt(10)
  let hash = await bcrypt.hash(this.password, salt)
  this.password = hash
  next()
})

const User = mongoose.model("user", userSchema)

module.exports = User
