import { attendanceSchema } from "../schemas/attendanceSchema.js";
import AttendanceModel from "../models/attendanceModel.js";

export const createAttendance = async (req, res) => {
  const { error, value } = attendanceSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idCatatanMengajar = parseInt(req.params.idCatatanMengajar, 10);
  const idRiwayatSiswa = parseInt(req.params.idRiwayatSiswa, 10);
  try {
    const newData = await AttendanceModel.createData({
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

export const getAllAttendance = async (req, res) => {
  try {
    const allData = await AttendanceModel.getAllData();
    return res.status(200).json(allData);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const getAttendanceById = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  try {
    const data = await AttendanceModel.getAttendanceById(dataId);
    return res.status(200).json(data);
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};

export const updateAttendance = async (req, res) => {
  const { error, value } = attendanceSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const idCatatanMengajar = parseInt(req.params.idCatatanMengajar, 10);
  const idRiwayatSiswa = parseInt(req.params.idRiwayatSiswa, 10);
  const dataId = parseInt(req.params.id, 10);
  const data = await AttendanceModel.getAttendanceById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    const updatedData = await AttendanceModel.updateAttendance(dataId, {
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

export const deleteAttendance = async (req, res) => {
  const dataId = parseInt(req.params.id, 10);
  const data = await AttendanceModel.getAttendanceById(dataId);
  if (!data) return res.status(404).json({ error: "data not found!" });
  try {
    await AttendanceModel.deleteData(dataId);
    return res.status(204).send();
  } catch (err) {
    const { detail } = err;
    return res.status(400).json({ error: detail });
  }
};
