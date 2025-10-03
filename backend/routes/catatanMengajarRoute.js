import express from "express";
import {
  createCatatanMengajar,
  getAllCatatanMengajar,
  getCatatanMengajarById,
  updateCatatanMengajar,
  deleteCatatanMengajar,
} from "../controllers/catatanMengajarController.js";

const router = express.Router();

router.post("/:idMapel/:idGuru", createCatatanMengajar);
router.get("/", getAllCatatanMengajar);
router.get("/:id", getCatatanMengajarById);
router.put("/:id", updateCatatanMengajar);
router.delete("/:id", deleteCatatanMengajar);

export default router;
