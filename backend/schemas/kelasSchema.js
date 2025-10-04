import Joi from "joi";
import { patternTingkat, patternProdi } from "./patternRegexSchema.js";

const kelasSchema = Joi.object({
  tingkat: Joi.string().pattern(patternTingkat).required(),
  prodi: Joi.string().pattern(patternProdi).required(),
});

export default kelasSchema;
