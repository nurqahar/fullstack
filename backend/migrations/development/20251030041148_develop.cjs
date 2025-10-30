/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("teachers", (table) => {
    table.increments("id");
    table.string("teacherName", "255");
  });

  await knex.schema.createTable("students", (table) => {
    table.increments("id");
    table.integer("studentId", 20);
    table.string("studentName", "255");
  });

  await knex.schema.createTable("classes", (table) => {
    table.increments("id");
    table.string("level", "10");
    table.string("studyProgram", "100");
  });

  await knex.schema.createTable("studentsHistories", (table) => {
    table.increments("id");
    table.integer("id_student").unsigned().references("id").inTable("students");
    table.integer("id_class").unsigned().references("id").inTable("classes");
    table.string("academicYear", "255");
    table.integer("semester", 5);
    table.date("dateIn");
    table.date("dateOut");
    table.string("status", "100");
  });

  await knex.schema.createTable("subjects", (table) => {
    table.increments("id");
    table.string("subjectName", "255");
  });

  await knex.schema.createTable("teachingNotes", (table) => {
    table.increments("id");
    table.string("material", "255");
    table.integer("id_subject").unsigned().references("id").inTable("subjects");
    table.integer("id_class").unsigned().references("id").inTable("classes");
    table.date("date");
    table.integer("period", 5);
    table.integer("lessonHours", 5);
    table.string("academicYear", "255");
    table.integer("semester", 5);
    table.string("information", "255");
    table.integer("id_teacher").unsigned().references("id").inTable("teachers");
  });

  await knex.schema.createTable("presences", (table) => {
    table.increments("id");
    table
      .integer("id_teachingNotes")
      .unsigned()
      .references("id")
      .inTable("teachingNotes");
    table
      .integer("id_studentsHistories")
      .unsigned()
      .references("id")
      .inTable("studentsHistories");
    table.string("presences", "100");
    table.string("information", "255");
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
  await knex.schema.dropTable("presences");
  await knex.schema.dropTable("teachingNotes");
  await knex.schema.dropTable("subjects");
  await knex.schema.dropTable("studentsHistories");
  await knex.schema.dropTable("classes");
  await knex.schema.dropTable("students");
  await knex.schema.dropTable("teachers");
  await knex.schema.dropTable("users");
};
