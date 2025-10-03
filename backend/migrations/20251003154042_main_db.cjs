/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("guru", (table) => {
    table.increments("id");
    table.string("nama_guru", "255");
  });

  await knex.schema.createTable("siswa", (table) => {
    table.increments("id");
    table.integer("nis", 20);
    table.string("nama_siswa", "255");
  });

  await knex.schema.createTable("kelas", (table) => {
    table.increments("id");
    table.string("tingkat", "10");
    table.string("prodi", "100");
  });

  await knex.schema.createTable("riwayat_siswa", (table) => {
    table.increments("id");
    table.integer("id_siswa").unsigned().references("id").inTable("siswa");
    table.integer("id_kelas").unsigned().references("id").inTable("kelas");
    table.string("tahun_ajaran", "255");
    table.integer("semester", 5);
    table.date("tanggal_masuk");
    table.date("tanggal_keluar");
    table.string("status", "100");
  });

  await knex.schema.createTable("mapel", (table) => {
    table.increments("id");
    table.string("nama_mapel", "255");
  });

  await knex.schema.createTable("catatan_mengajar", (table) => {
    table.increments("id");
    table.string("materi", "255");
    table.integer("id_mapel").unsigned().references("id").inTable("mapel");
    table.integer("id_kelas").unsigned().references("id").inTable("kelas");
    table.date("tanggal_mengajar");
    table.integer("jam_ke", 5);
    table.integer("jumlah_jp", 5);
    table.string("tahun_ajaran", "255");
    table.integer("semester", 5);
    table.string("keterangan", "255");
    table.integer("id_guru").unsigned().references("id").inTable("guru");
  });

  await knex.schema.createTable("presensi", (table) => {
    table.increments("id");
    table
      .integer("id_catatan_mengajar")
      .unsigned()
      .references("id")
      .inTable("catatan_mengajar");
    table
      .integer("id_riwayat_siswa")
      .unsigned()
      .references("id")
      .inTable("riwayat_siswa");
    table.string("kehadiran", "100");
    table.string("keterangan", "255");
  });

  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("email", "255");
    table.string("username", "255");
    table.string("password", "255");
    table.timestamp("createdAt").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("presensi");
  await knex.schema.dropTable("catatan_mengajar");
  await knex.schema.dropTable("mapel");
  await knex.schema.dropTable("riwayat_siswa");
  await knex.schema.dropTable("kelas");
  await knex.schema.dropTable("siswa");
  await knex.schema.dropTable("guru");
  await knex.schema.dropTable("users");
};
