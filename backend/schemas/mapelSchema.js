import Joi from "joi";

const mapelSchema = Joi.object({
  mapel: Joi.string().min(3).required(),
  kode_mapel: Joi.string().min(3).optional(),
});

export default mapelSchema;
