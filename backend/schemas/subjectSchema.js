import Joi from "joi";

export const subjectSchema = Joi.object({
  subject: Joi.string().min(3).required(),
});
