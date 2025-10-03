import presensiSchema from "../schemas/presensiSchema.js";
import presensiModel from "../models/presensiModel.js";

export const createPresensi = async (req, res) => {
  const { error, value } = presensiSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idCatatanMengajar = parseInt(req.params.idCatatanMengajar, 10);
  const idRiwayatSiswa = parseInt(req.params.idRiwayatSiswa, 10);
  try {
    const newData = await presensiModel.createData({
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

export const getAllPresensi = async (req, res) => {
  try {
    const allData = await presensiModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getPresensiById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await presensiModel.getDataById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updatePresensi = async (req, res) => {
  const { error, value } = presensiSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idCatatanMengajar = parseInt(req.params.idCatatanMengajar, 10);
  const idRiwayatSiswa = parseInt(req.params.idRiwayatSiswa, 10);
  const dataId = parseInt(req.params.id, 10);
  const data = await presensiModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await presensiModel.updateData(dataId, {
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

export const deletePresensi = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await presensiModel.getDataById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    await presensiModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};
