import Joi from "joi";
import {
  patternStatusSiswa,
  patternPeriodeTahun,
} from "./patternRegexSchema.js";

const riwayatSiswaSchema = Joi.object({
  tahun_ajaran: Joi.string().pattern(patternPeriodeTahun).required(),
  semester: Joi.number().integer().greater(0).max(8).required(),
  tanggal_masuk: Joi.date().iso().required(),
  tanggal_keluar: Joi.date().iso(),
  status: Joi.string().pattern(patternStatusSiswa).required(),
});

export default riwayatSiswaSchema;
