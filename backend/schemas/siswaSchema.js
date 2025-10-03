import Joi from "joi";
import {
  patternJenisKelamin,
  patternPeriodeTahun,
} from "./regexPatternSchema.js";

const siswaSchema = Joi.object({
  nis: Joi.number().integer().greater(0).required(),
  nama: Joi.string().min(3).required(),
  jk: Joi.string().pattern(patternJenisKelamin).required(),
  tahun_diterima: Joi.string().pattern(patternPeriodeTahun).required(),
});

export default siswaSchema;
