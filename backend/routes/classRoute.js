import express from "express";
import {
  createClass,
  getAllClass,
  getClassById,
  updateClass,
  deleteClass,
} from "../controllers/classController.js";

const router = express.Router();

router.post("/", createClass);
router.get("/", getAllClass);
router.get("/:id", getClassById);
router.put("/:id", updateClass);
router.delete("/:id", deleteClass);

export default router;
