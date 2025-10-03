import express from "express";
import {
  createMapel,
  getAllMapel,
  getMapelById,
  updateMapel,
  deleteMapel,
} from "../controllers/mapelController.js";

const router = express.Router();
router.post("/:idKelas", createMapel);
router.get("/", getAllMapel);
router.get("/:id", getMapelById);
router.put("/:id", updateMapel);
router.delete("/:id", deleteMapel);

export default router;
