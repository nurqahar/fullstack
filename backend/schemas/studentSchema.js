import Joi from "joi";

export const studentSchema = Joi.object({
  studentId: Joi.number().integer().greater(0).required(),
  studentName: Joi.string().min(3).required(),
});
