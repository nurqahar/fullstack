import Joi from "joi";

const presensiSchema = Joi.object({
  kehadiran: Joi.string().min(3).required(),
  keterangan: Joi.string().min(2).required(),
});

export default presensiSchema;
