import Joi from "joi";
import { patternAcademicYear } from "./patternRegexSchema.js";

export const teachingNoteSchema = Joi.object({
  material: Joi.string().min(3).required(),
  date: Joi.date().iso().required(),
  period: Joi.number().integer().greater(0).max(15).required(),
  lessonHours: Joi.number().integer().greater(0).max(15).required(),
  academicYear: Joi.string().pattern(patternAcademicYear).required(),
  semester: Joi.number().integer().required(),
  information: Joi.string(),
});
