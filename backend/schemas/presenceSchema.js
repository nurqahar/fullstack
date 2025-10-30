import Joi from "joi";

export const presenceSchema = Joi.object({
  presence: Joi.string().min(3).required(),
});
