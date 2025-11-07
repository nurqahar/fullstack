import Joi from "joi";

export const attendanceSchema = Joi.object({
  attendance: Joi.string().min(3).required(),
});
