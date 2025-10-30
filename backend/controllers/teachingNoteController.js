import teachingNoteSchema from "../schemas/teachingNoteSchema.js";
import teachingNoteModel from "../models/teachingNoteModel.js";

export const createTeachingNote = async (req, res) => {
  const { error, value } = teachingNoteSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idSubject = parseInt(req.params.idSubject, 10);
  const idTeacher = parseInt(req.params.idTeacher, 10);
  try {
    const newData = await teachingNoteModel.createData({
      idSubject,
      idTeacher,
      ...value,
    });
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllTeachingNote = async (req, res) => {
  try {
    const allData = await teachingNoteModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getTeachingNoteById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await teachingNoteModel.getDataById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updateTeachingNote = async (req, res) => {
  const { error, value } = teachingNoteSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idSubject = parseInt(req.params.idSubject, 10);
  const idTeacher = parseInt(req.params.idTeacher, 10);
  const dataId = parseInt(req.params.id, 10);
  const data = await teachingNoteModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await teachingNoteModel.updateData(dataId, {
      idSubject,
      idTeacher,
      ...value,
    });
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const deleteTeachingNote = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await teachingNoteModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    await teachingNoteModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};
