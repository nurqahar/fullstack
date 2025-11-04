import express from "express";
import {
  login,
  resetPassword,
  validateResetPassword,
} from "../controllers/authController.js";

const router = express.Router();
router.post("/login", login);
router.post("/resetPassword", resetPassword);
router.post("/validate-reset", validateResetPassword);

export default router;
