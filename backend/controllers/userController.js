import UserModel from "../models/userModel.js";
import { userSchema } from "../schemas/userSchema.js";

export const createUser = async (request, response) => {
  const { error, value } = userSchema.validate(request.body);
  if (error) {
    return response.status(400).json({ error: error.details[0].message });
  }
  try {
    const newUser = await UserModel.createUser(value);
    return response.status(201).json(newUser);
  } catch (err) {
    const { detail } = err;
    return response.status(422).json({ error: detail });
  }
};

export const getAllUsers = async (req, res) => {
  const users = await UserModel.getAllUser();
  return res.json(users);
};

export const getUserById = async (req, res) => {
  const userId = parseInt(req.params.id, DECIMAL);
  const user = await UserModel.getUserById(userId);
  if (user) {
    return res.json(user);
  }
  return res.status(404).send("User not found");
};

export const updateUser = async (req, res) => {
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const userId = parseInt(req.params.id, DECIMAL);
  const user = await UserModel.getUserById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  try {
    const updatedUser = await UserModel.updateUser(userId, value);
    return res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    const { detail } = err;
    return res.status(422).json({ error: detail });
  }
};

export const deleteUser = async (req, res) => {
  const userId = parseInt(req.params.id, DECIMAL);
  const user = await UserModel.getUserById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  await UserModel.deleteUser(parseInt(req.params.id, DECIMAL));
  return res.status(204).send();
};
