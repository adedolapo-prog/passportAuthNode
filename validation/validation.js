const Joi = require("joi")
const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  password2: Joi.ref("password"),
}).with("password", "password2")

module.exports.validator = async body => {
  try {
    const value = await schema.validateAsync(body)
    return value
  } catch (err) {
    throw err
  }
}
