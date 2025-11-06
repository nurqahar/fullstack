import db from "../migrations/knex.js";
import bcrypt from "bcryptjs";

const tableName = "users";
const saltRound = 10;
export default class UserModel {
  static async createUser({ password, ...otherData }) {
    const hashedPassword = await bcrypt.hash(password, saltRound);
    const [{ id }] = await db(tableName)
      .insert({
        password: hashedPassword,
        ...otherData,
      })
      .returning("id");
    return { ...otherData, id };
  }
  static getAllUser() {
    return db(tableName).select("*");
  }

  static getUserById(id) {
    return db(tableName).where({ id }).first();
  }

  static async updateUser(id, Userdata) {
    const { password, ...otherData } = Userdata;
    const updatedUser = { ...otherData };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, saltRound);
      updatedUser.password = hashedPassword;
    }
    await db(tableName).where({ id }).update(updatedUser);
    return { ...updateData, id };
  }

  static async deleteUser(id) {
    await db(tableName).where({ id }).del();
  }

  static async getEmailByPassword({ email, password }) {
    const user = await db(tableName).where({ email }).first();

    if (!user) {
      throw new Error("User email not found");
    }

    if (password) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        throw new Error("Incorrect password");
      }
    }
    return user;
  }
}
