const Joi = require('joi');

userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
})

module.exports = userSchema;