import express from "express";
import {
  createStudentHistory,
  getAllStudentHistory,
  getStudentHistoryById,
  getStudentHistoryByJoin,
  updateStudentHistory,
  deleteStudentHistory,
} from "../controllers/studentHistoryController.js";

const router = express.Router();

router.post("/:idStudent/:idClass/:idTeacher", createStudentHistory);
router.get("/", getAllStudentHistory);
router.get("/:id", getStudentHistoryById);
router.get("/detail/:id", getStudentHistoryByJoin);
router.put("/:id", updateStudentHistory);
router.delete("/:id", deleteStudentHistory);

export default router;
