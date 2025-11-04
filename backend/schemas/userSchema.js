import Joi from "joi";
import { usernamePattern, passwordPattern } from "./patternRegexSchema.js";

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().pattern(usernamePattern).min(3).required(),
  password: Joi.string().pattern(passwordPattern).required(),
});

export default userSchema;
