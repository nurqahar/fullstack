import guruSchema from "../schemas/guruSchema.js";
import guruModel from "../models/guruModel.js";

export const createGuru = async (req, res) => {
  const { error, value } = guruSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const newData = await guruModel.createData(value);
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const importDataGuru = async (req, res) => {
  const { error, value } = guruSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const newData = await guruModel.createData(value);
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllGuru = async (req, res) => {
  try {
    const allData = await guruModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getGuruById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await guruModel.getDataById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updateGuru = async (req, res) => {
  const { error, value } = guruSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const dataId = parseInt(req.params.id, 10);
  const data = await guruModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await guruModel.updateData(dataId, value);
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const deleteGuru = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await guruModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    await guruModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};
