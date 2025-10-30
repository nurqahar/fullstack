import { classSchema } from "../schemas/classSchema.js";
import classModel from "../models/classModel.js";

export const createClass = async (req, res) => {
  const { error, value } = classSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const newData = await classModel.createData(value);
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllClass = async (req, res) => {
  try {
    const allData = await classModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getClassById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await classModel.getDataById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updateClass = async (req, res) => {
  const { error, value } = classSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const dataId = parseInt(req.params.id, 10);
  const data = await classModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await classModel.updateData(dataId, value);
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const deleteClass = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await classModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    await classModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};
