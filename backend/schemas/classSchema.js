import Joi from "joi";
import { patternLevel, patternStudyProgram } from "./patternRegexSchema.js";

export const classSchema = Joi.object({
  level: Joi.string().pattern(patternLevel).required(),
  studyProgram: Joi.string().pattern(patternStudyProgram).required(),
});
