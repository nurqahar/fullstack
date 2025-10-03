import Joi from "joi";

const guruSchema = Joi.object({
  nama_guru: Joi.string().min(3).required(),
});

export default guruSchema;
