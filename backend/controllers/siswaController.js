import siswaSchema from "../schemas/siswaSchema.js";
import siswaModel from "../models/siswaModel.js";

export const createSiswa = async (req, res) => {
  const { error, value } = siswaSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const newData = await siswaModel.createData(value);
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllSiswa = async (req, res) => {
  try {
    const allData = await siswaModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getSiswaById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await siswaModel.getDataById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updateSiswa = async (req, res) => {
  const { error, value } = siswaSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const dataId = parseInt(req.params.id, 10);
  const data = await siswaModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await siswaModel.updateData(dataId, value);
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const deleteSiswa = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await siswaModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    await siswaModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};
