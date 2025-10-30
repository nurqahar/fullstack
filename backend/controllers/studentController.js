import { studentSchema } from "../schemas/studentSchema.js";
import studentModel from "../models/studentModel.js";

export const createStudent = async (req, res) => {
  const { error, value } = studentSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const newData = await studentModel.createData(value);
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllStudent = async (req, res) => {
  try {
    const allData = await studentModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getStudentById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await studentModel.getDataById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updateStudent = async (req, res) => {
  const { error, value } = studentSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const dataId = parseInt(req.params.id, 10);
  const data = await studentModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await studentModel.updateData(dataId, value);
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const deleteStudent = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await studentModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    await studentModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};
