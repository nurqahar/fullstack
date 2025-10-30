import express from "express";
import subjectRoute from "./subjectRoute.js";
import teachingNoteRoute from "./teachingNoteRoute.js";
import teacherRoute from "./teacherRoute.js";
import classRoute from "./classRoute.js";
import presenceRoute from "./presenceRoute.js";
import studentHistoryRoute from "./studentHistoryRoute.js";
import studentRoute from "./studentRoute.js";

const router = express.Router();

router.use("/subject", subjectRoute);
router.use("/teachingNote", teachingNoteRoute);
router.use("/teacher", teacherRoute);
router.use("/class", classRoute);
router.use("/presence", presenceRoute);
router.use("/studentHistory", studentHistoryRoute);
router.use("/student", studentRoute);

export default router;
