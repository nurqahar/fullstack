import { teacherSchema } from "../schemas/teacherSchema.js";
import teacherModel from "../models/teacherModel.js";

export const createTeacher = async (req, res) => {
  const { error, value } = teacherSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const newData = await teacherModel.createData(value);
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const importDataTeacher = async (req, res) => {
  const { error, value } = teacherSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const newData = await teacherModel.createData(value);
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllTeacher = async (req, res) => {
  try {
    const allData = await teacherModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getTeacherById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await teacherModel.getDataById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updateTeacher = async (req, res) => {
  const { error, value } = teacherSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const dataId = parseInt(req.params.id, 10);
  const data = await teacherModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await teacherModel.updateData(dataId, value);
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const deleteTeacher = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await teacherModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    await teacherModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};
