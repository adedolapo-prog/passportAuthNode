const Joi = require("joi")

module.exports.profileValidator = async body => {
  const registerSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    password2: Joi.ref("password"),
  }).with("password", "password2")
  try {
    const value = await registerSchema.validateAsync(body)
    return value
  } catch (err) {
    throw err.details[0].message
  }
}

module.exports.emailValidator = async body => {
  const emailSchema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  })

  try {
    const value = await emailSchema.validateAsync(body)
    return value
  } catch (err) {
    throw err.details[0].message
  }
}
