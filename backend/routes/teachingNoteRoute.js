import express from "express";
import {
  createTeachingNote,
  getAllTeachingNote,
  getTeachingNoteById,
  updateTeachingNote,
  deleteTeachingNote,
} from "../controllers/teachingNoteController.js";

const router = express.Router();

router.post("/:idSubject/:idTeacher", createTeachingNote);
router.get("/", getAllTeachingNote);
router.get("/:id", getTeachingNoteById);
router.put("/:id", updateTeachingNote);
router.delete("/:id", deleteTeachingNote);

export default router;
