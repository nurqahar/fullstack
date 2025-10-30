import { subjectSchema } from "../schemas/subjectSchema.js";
import subjectModel from "../models/subjectModel.js";

export const createSubject = async (req, res) => {
  const { error, value } = subjectSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const idKelas = parseInt(req.params.idKelas, 10);
  try {
    const newData = await subjectModel.createData({ idKelas, ...value });
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllSubject = async (req, res) => {
  const data = await subjectModel.getAllData();
  return res.json(data);
};

export const getSubjectById = async (req, res) => {
  const data = await subjectModel.getDataById(parseInt(req.params.id, 10));
  if (data) {
    return res.json(data);
  }
  return res.status(404).json({ msg: "Data not found" });
};

export const updateSubject = async (req, res) => {
  const { error, value } = subjectSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const idKelas = parseInt(req.params.idKelas, 10);
  const dataId = parseInt(req.params.id, 10);
  const data = await subjectModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "Data not found" });

  try {
    const updatedData = await subjectModel.updateData(dataId, {
      idKelas,
      ...value,
    });
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const deleteSubject = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await subjectModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "Data not found" });

  await subjectModel.deleteData(dataId);
  return res.status(204).send();
};
