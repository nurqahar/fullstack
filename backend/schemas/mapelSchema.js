import Joi from "joi";

const mapelSchema = Joi.object({
  mapel: Joi.string().min(3).required(),
});

export default mapelSchema;
