import express from "express";
import {
  createPresence,
  getAllPresence,
  getPresenceById,
  updatePresence,
  deletePresence,
} from "../controllers/presenceController.js";

const router = express.Router();

router.post("/:idTeachingNote/:idStudentHistory", createPresence);
router.get("/", getAllPresence);
router.get("/:id", getPresenceById);
router.put("/:id", updatePresence);
router.delete("/:id", deletePresence);

export default router;
