import Joi from "joi";
import { patternPeriodeTahun } from "./patternRegexSchema.js";

const catatanMengajarSchema = Joi.object({
  materi: Joi.string().min(3).required(),
  tanggal_mengajar: Joi.date().iso().required(),
  jam_ke: Joi.number().integer().greater(0).max(15).required(),
  jumlah_jp: Joi.number().integer().greater(0).max(15).required(),
  tahun_ajaran: Joi.string().pattern(patternPeriodeTahun).required(),
  semester: Joi.number().integer().required(),
  keterangan: Joi.string().min(2),
});

export default catatanMengajarSchema;
