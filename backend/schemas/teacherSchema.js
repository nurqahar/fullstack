import Joi from "joi";

export const teacherSchema = Joi.object({
  teacherName: Joi.string().min(3).required(),
});
