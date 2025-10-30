import express from "express";
import {
  createPresensi,
  getAllPresensi,
  getPresensiById,
  updatePresensi,
  deletePresensi,
} from "../controllers/presensiController.js";

const router = express.Router();

router.post("/:idCatatanMengajar/:idRiwayatSiswa", createPresensi);
router.get("/", getAllPresensi);
router.get("/:id", getPresensiById);
router.put("/:id", updatePresensi);
router.delete("/:id", deletePresensi);

export default router;
