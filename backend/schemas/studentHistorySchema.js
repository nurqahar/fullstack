import Joi from "joi";
import {
  patternStudentStatus,
  patternAcademicYear,
} from "./patternRegexSchema.js";

export const studentHistorySchema = Joi.object({
  academicYear: Joi.string().pattern(patternAcademicYear).required(),
  semester: Joi.number().integer().greater(0).max(8).required(),
  dateIn: Joi.date().iso().required(),
  dateOut: Joi.date().iso(),
  status: Joi.string().pattern(patternStudentStatus).required(),
});
