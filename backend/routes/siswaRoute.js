import express from "express";
import {
  createSiswa,
  getAllSiswa,
  getSiswaById,
  updateSiswa,
  deleteSiswa,
} from "../controllers/siswaController.js";

const router = express.Router();

router.post("/", createSiswa);
router.get("/", getAllSiswa);
router.get("/:id", getSiswaById);
router.put("/:id", updateSiswa);
router.delete("/:id", deleteSiswa);

export default router;
