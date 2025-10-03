import riwayatSiswaSchema from "../schemas/riwayatSiswaSchema.js";
import riwayatSiswaModel from "../models/riwayatSiswaModel.js";

export const createRiwayatSiswa = async (req, res) => {
  const { error, value } = riwayatSiswaSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idSiswa = parseInt(req.params.idSiswa, 10);
  const idKelas = parseInt(req.params.idKelas, 10);
  const idWaliKelas = parseInt(req.params.idWaliKelas, 10);
  try {
    const newData = await riwayatSiswaModel.createData({
      idSiswa,
      idKelas,
      idWaliKelas,
      ...value,
    });
    return res.status(201).json({ msg: "success", ...newData });
  } catch (err) {
    const { detail } = err;
    return res.status(401).json({ error: detail });
  }
};

export const getAllRiwayatSiswa = async (req, res) => {
  try {
    const allData = await riwayatSiswaModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getRiwayatSiswaById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await riwayatSiswaModel.getDataById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updateRiwayatSiswa = async (req, res) => {
  const { error, value } = riwayatSiswaSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const dataId = parseInt(req.params.id, 10);
  const idSiswa = parseInt(req.params.idSiswa, 10);
  const idKelas = parseInt(req.params.idKelas, 10);
  const idWaliKelas = parseInt(req.params.idWaliKelas, 10);
  const data = await riwayatSiswaModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await riwayatSiswaModel.updateData(dataId, {
      idSiswa,
      idKelas,
      idWaliKelas,
      ...value,
    });
    return res.status(200).json({ msg: "updated", ...updatedData });
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const deleteRiwayatSiswa = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await riwayatSiswaModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    await riwayatSiswaModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getRiwayatSiswaByJoin = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await riwayatSiswaModel.getDataByJoin(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(404).json({ error: detail });
  }
};
