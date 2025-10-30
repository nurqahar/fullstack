import express from "express";
import {
  createSubject,
  getAllSubject,
  getSubjectById,
  updateSubject,
  deleteSubject,
} from "../controllers/subjectController.js";

const router = express.Router();
router.post("/:idClass", createSubject);
router.get("/", getAllSubject);
router.get("/:id", getSubjectById);
router.put("/:id", updateSubject);
router.delete("/:id", deleteSubject);

export default router;
