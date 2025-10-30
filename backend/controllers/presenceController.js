import { presenceSchema } from "../schemas/presenceSchema.js";
import presenceModel from "../models/presenceModel.js";

export const createPresence = async (req, res) => {
  const { error, value } = presenceSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idCatatanMengajar = parseInt(req.params.idCatatanMengajar, 10);
  const idRiwayatSiswa = parseInt(req.params.idRiwayatSiswa, 10);
  try {
    const newData = await presenceModel.createData({
      idCatatanMengajar,
      idRiwayatSiswa,
      ...value,
    });
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllPresence = async (req, res) => {
  try {
    const allData = await presenceModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getPresenceById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await presenceModel.getDataById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updatePresence = async (req, res) => {
  const { error, value } = presenceSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idCatatanMengajar = parseInt(req.params.idCatatanMengajar, 10);
  const idRiwayatSiswa = parseInt(req.params.idRiwayatSiswa, 10);
  const dataId = parseInt(req.params.id, 10);
  const data = await presenceModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await presenceModel.updateData(dataId, {
      idCatatanMengajar,
      idRiwayatSiswa,
      ...value,
    });
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const deletePresence = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await presenceModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    await presenceModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};
