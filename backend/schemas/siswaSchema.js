import Joi from "joi";

const siswaSchema = Joi.object({
  nis: Joi.number().integer().greater(0).required(),
  nama: Joi.string().min(3).required(),
});

export default siswaSchema;
