import express from "express";
import {
  createKelas,
  getAllKelas,
  getKelasById,
  updateKelas,
  deleteKelas,
} from "../controllers/kelasController.js";

const router = express.Router();

router.post("/", createKelas);
router.get("/", getAllKelas);
router.get("/:id", getKelasById);
router.put("/:id", updateKelas);
router.delete("/:id", deleteKelas);

export default router;
