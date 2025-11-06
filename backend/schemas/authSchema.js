import Joi from "joi";
import {
  passwordPattern,
  tokenJwtPattern,
  usernamePattern,
} from "../schemas/patternRegexSchema.js";

export const loginSchema = Joi.object({
  username: Joi.string().pattern(usernamePattern).min(3).required(),
  password: Joi.string().pattern(passwordPattern).required(),
});

export const resetPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const validateResetPasswordSchema = Joi.object({
  tokenJwt: Joi.string().pattern(tokenJwtPattern),
  confirmPassword: Joi.string()
    .pattern(passwordPattern)
    .required()
    .equal(Joi.ref("password"))
    .messages({ "any,only": "{{#label}} does not match" }),
});

export default loginSchema;
