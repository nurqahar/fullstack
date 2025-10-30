import mapelSchema from "../schemas/mapelSchema.js";
import mapelModel from "../models/mapelModel.js";

export const createMapel = async (req, res) => {
  const { error, value } = mapelSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const idKelas = parseInt(req.params.idKelas, 10);
  try {
    const newData = await mapelModel.createData({ idKelas, ...value });
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllMapel = async (req, res) => {
  const data = await mapelModel.getAllData();
  return res.json(data);
};

export const getMapelById = async (req, res) => {
  const data = await mapelModel.getDataById(parseInt(req.params.id, 10));
  if (data) {
    return res.json(data);
  }
  return res.status(404).json({ msg: "Data not found" });
};

export const updateMapel = async (req, res) => {
  const { error, value } = mapelSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const idKelas = parseInt(req.params.idKelas, 10);
  const dataId = parseInt(req.params.id, 10);
  const data = await mapelModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "Data not found" });

  try {
    const updatedData = await mapelModel.updateData(dataId, {
      idKelas,
      ...value,
    });
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const deleteMapel = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await mapelModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "Data not found" });

  await mapelModel.deleteData(dataId);
  return res.status(204).send();
};
