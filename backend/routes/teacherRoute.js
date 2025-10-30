import express from "express";
import {
  createTeacher,
  getAllTeacher,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} from "../controllers/teacherController.js";

const router = express.Router();

router.post("/", createTeacher);
router.get("/", getAllTeacher);
router.get("/:id", getTeacherById);
router.put("/:id", updateTeacher);
router.delete("/:id", deleteTeacher);

export default router;
