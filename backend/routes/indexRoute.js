import express from "express";
import subjectRoute from "./subjectRoute.js";
import teachingNoteRoute from "./teachingNoteRoute.js";
import teacherRoute from "./teacherRoute.js";
import classRoute from "./classRoute.js";
import attendanceRoute from "./attendanceRoute.js";
import studentHistoryRoute from "./studentHistoryRoute.js";
import studentRoute from "./studentRoute.js";
import userRoute from "../routes/userRoute.js";
import authRoute from "../routes/authRoute.js";

const router = express.Router();

router.use("/subject", subjectRoute);
router.use("/teachingNote", teachingNoteRoute);
router.use("/teacher", teacherRoute);
router.use("/class", classRoute);
router.use("/attendance", attendanceRoute);
router.use("/studentHistory", studentHistoryRoute);
router.use("/student", studentRoute);
router.use("/users", userRoute);
router.use("/auth", authRoute);

export default router;
