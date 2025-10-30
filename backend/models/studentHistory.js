import db from "../migrations/knex.js";

const tableName = "studentHistory";
export default class StudentHistoryModel {
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

  static getDataByJoin(id) {
    return db(tableName)
      .join("siswa", "riwayat_siswa.id_siswa", "=", "siswa.id")
      .join("kelas", "riwayat_siswa.id_kelas", "=", "kelas.id")
      .join("guru", "riwayat_siswa.id_wali_kelas", "guru.id")
      .select(
        "riwayat_siswa.id",
        "siswa.nama_siswa",
        "kelas.tingkat",
        "kelas.prodi",
        "riwayat_siswa.tahun_ajaran",
        "riwayat_siswa.semester",
        "riwayat_siswa.tanggal_masuk",
        "riwayat_siswa.tanggal_keluar",
        "guru.nama_guru",
        "riwayat_siswa.status",
      )
      .where({ id_siswa: id });
  }

  static async updateData(id, data) {
    await db(tableName).where({ id }).update(data);
    return { id, ...data };
  }

  static async deleteData(id) {
    return db(tableName).where({ id }).del();
  }
}
