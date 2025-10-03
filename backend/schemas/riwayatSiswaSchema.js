import Joi from "joi";
import {
  patternStatusSiswa,
  patternPeriodeTahun,
} from "./regexPatternSchema.js";

const riwayatSiswaSchema = Joi.object({
  tahun_ajaran: Joi.string().pattern(patternPeriodeTahun).required(),
  semester: Joi.number().integer().greater(0).max(8).required(),
  tanggal_masuk: Joi.date().iso().required(),
  tanggal_keluar: Joi.date().iso().required(),
  wali_kelas: Joi.string().min(3).required(),
  status: Joi.string().pattern(patternStatusSiswa).required(),
});

export default riwayatSiswaSchema;
