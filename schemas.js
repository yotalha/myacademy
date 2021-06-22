const Joi = require('joi');

module.exports.userSchema = Joi.object({
  fullName: Joi.string().required(),
  username: Joi.string().min(6).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(6).required(),
})

module.exports.teacherSchema = Joi.object({
  name: Joi.string().required(),
  education: Joi.string().required(),
  specialization: Joi.string().required()
})

module.exports.studentSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  dob: Joi.date().required(),
  address: Joi.string().required()
})

module.exports.resultSchema = Joi.object({
  AssesmentId: Joi.number().integer().required(),
  StudentId: Joi.number().integer().required(),
  marksObtained: Joi.number().required()
})

module.exports.courseScheme = Joi.object({
  code: Joi.string().required(),
  description: Joi.string()
})

module.exports.classSchema = Joi.object({
  code: Joi.string().required(),
  block: Joi.string().required()
})

module.exports.assesmentScheme = Joi.object({
  description: Joi.string(),
  code: Joi.string().required(),
  TeacherId: Joi.number().integer().required(),
  CourseId: Joi.number().integer().required()
})