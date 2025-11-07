import db from "../migrations/knex.js";

const tableName = "attendance";
export default class AttendanceModel {
  static async createAttendance(data) {
    const [{ id }] = await db(tableName).insert(data).returning("id");
    return { id, ...data };
  }

  static getAllAttendance() {
    return db(tableName).select("*");
  }

  static getAttendanceById(id) {
    return db(tableName).where({ id }).first();
  }

  static async updateAttendance(id, data) {
    await db(tableName).where({ id }).update(data);
    return { id, ...data };
  }

  static async deleteAttendance(id) {
    return db(tableName).where({ id }).del();
  }
}
