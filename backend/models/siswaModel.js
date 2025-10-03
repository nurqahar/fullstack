import db from "../database/knex.js";

const tableName = "siswa";
export default class Siswa {
  static async createData(data) {
    const [{ id }] = await db(tableName).insert(data).returning("id");
    return { id, ...data };
  }

  static getAllData() {
    return db(tableName).select("*");
  }

  static getDataById(id) {
    return db(tableName).where({ id }).first();
  }

  static async updateData(id, data) {
    await db(tableName).where({ id }).update(data);
    return { id, ...data };
  }

  static async deleteData(id) {
    return db(tableName).where({ id }).del();
  }
}
