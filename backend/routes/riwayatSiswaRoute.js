import express from "express";
import {
  createRiwayatSiswa,
  getAllRiwayatSiswa,
  getRiwayatSiswaById,
  getRiwayatSiswaByJoin,
  updateRiwayatSiswa,
  deleteRiwayatSiswa,
} from "../controllers/riwayatSiswaController.js";

const router = express.Router();

router.post("/:idSiswa/:idKelas/:idWaliKelas", createRiwayatSiswa);
router.get("/", getAllRiwayatSiswa);
router.get("/:id", getRiwayatSiswaById);
router.get("/detail/:id", getRiwayatSiswaByJoin);
router.put("/:id", updateRiwayatSiswa);
router.delete("/:id", deleteRiwayatSiswa);

export default router;
