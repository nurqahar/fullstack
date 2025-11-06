import UserModel from "../models/userModel.js";
import {
  loginSchema,
  resetPasswordSchema,
  validateResetPasswordSchema,
} from "../schemas/authSchema.js";
import { generateJWT } from "../lib/jwt.js";

// LOGIN
export const login = async (req, res) => {
  let validationResult;
  try {
    validationResult = loginSchema.validate(req.body);
  } catch (err) {
    const { message } = err;
    return res.status(400).json({ error: message });
  }

  const { error, value } = validationResult;
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const emailPasswordUser = await UserModel.getEmailByPassword(value);
    const auth = generateJWT({ emailPasswordUser });

    return res.status(200).json(auth);
  } catch (err) {
    const { message } = err;
    return res.status(422).json({ error: message });
  }
};

// RESET PASSWORD
export const resetPassword = async (req, res) => {
  let validationResult;
  try {
    validationResult = resetPasswordSchema.validate(req.body);
  } catch (error) {
    const { message } = err;
    return res.status(400).json({ error: message });
  }

  const { error, value } = validationResult;
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const user = await UserModel.getEmailByPassword(value);

    const { token: resetToken } = generateJWT({
      user,
      expiresIn: "10m",
      additionalPayload: { type: "resetPassword" },
    });

    const { email: to } = user;
    await sendResetPasswordEmail({ to, resetToken });
    return res.status(200).json({ message: "reset password sent success" });
  } catch (err) {
    const { message } = err;
    return res.status(422).json({ error: message });
  }
};

// VALIDATE RESET PASSWORD
export const validateResetPassword = async (req, res) => {
  let validationResult;
  try {
    validationResult = validateResetPasswordSchema.validate(req.body);
  } catch (error) {
    const { message } = error;
    return res.status(400).json({ error: message });
  }
  const { error, value } = validationResult;
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { token, password } = value;
  let id;
  try {
    const { sub } = decodeJwt({ token });
    id = sub;
  } catch (err) {
    return res.status(422).json({ error: err });
  }

  const user = await UserModel.getUserById(id);
  if (!user) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { email } = user;
  const isPasswordCorrect = await UserModel.getEmailByPassword({
    email,
    password,
    raiseError: false,
  });

  if (isPasswordCorrect) {
    return res.status(400).json({ error: "password is same with the old one" });
  }

  try {
    await UserModel.updateUser(id, { password });
  } catch (error) {
    return res.status(422).json({ error: error });
  }
  return res.status(200).json({ error: "reset password succes" });
};
