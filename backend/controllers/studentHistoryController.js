import { studentHistorySchema } from "../schemas/studentHistorySchema.js";
import studentHistoryModel from "../models/studentHistory.js";

export const createStudentHistory = async (req, res) => {
  const { error, value } = studentHistorySchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idStudent = parseInt(req.params.idStudent, 10);
  const idClass = parseInt(req.params.idClass, 10);
  const idTeacher = parseInt(req.params.idTeacher, 10);
  try {
    const newData = await studentHistoryModel.createData({
      idStudent,
      idClass,
      idTeacher,
      ...value,
    });
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllStudentHistory = async (req, res) => {
  try {
    const allData = await studentHistoryModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getStudentHistoryById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await studentHistoryModel.getDataById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updateStudentHistory = async (req, res) => {
  const { error, value } = studentHistorySchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const dataId = parseInt(req.params.id, 10);
  const idStudent = parseInt(req.params.idStudent, 10);
  const idClass = parseInt(req.params.idClass, 10);
  const idTeacher = parseInt(req.params.idTeacher, 10);
  const data = await studentHistoryModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await studentHistoryModel.updateData(dataId, {
      idStudent,
      idClass,
      idTeacher,
      ...value,
    });
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const deleteStudentHistory = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await studentHistoryModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    await studentHistoryModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getStudentHistoryByJoin = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await studentHistoryModel.getDataByJoin(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(404).json({ error: detail });
  }
};
