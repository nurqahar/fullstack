import catatanMengajarSchema from "../schemas/catatanMengajarSchema.js";
import catatanMengajarModel from "../models/catatanMengajarModel.js";

export const createCatatanMengajar = async (req, res) => {
  const { error, value } = catatanMengajarSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idMapel = parseInt(req.params.idMapel, 10);
  const idGuru = parseInt(req.params.idGuru, 10);
  try {
    const newData = await catatanMengajarModel.createData({
      idMapel,
      idGuru,
      ...value,
    });
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllCatatanMengajar = async (req, res) => {
  try {
    const allData = await catatanMengajarModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getCatatanMengajarById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await catatanMengajarModel.getDataById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updateCatatanMengajar = async (req, res) => {
  const { error, value } = catatanMengajarSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idMapel = parseInt(req.params.idMapel, 10);
  const idGuru = parseInt(req.params.idGuru, 10);
  const dataId = parseInt(req.params.id, 10);
  const data = await catatanMengajarModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await catatanMengajarModel.updateData(dataId, {
      idMapel,
      idGuru,
      ...value,
    });
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const deleteCatatanMengajar = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await catatanMengajarModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const deletedData = await catatanMengajarModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};
