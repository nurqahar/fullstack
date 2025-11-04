import express from "express";
import {
  login,
  resetPassword,
  validateResetPassword,
} from "../controllers/authController";

const router = express.Router();
router.post("/login", login);
router.post("/resetPassword", resetPassword);
router.post("/validate-reset", validateResetPassword);
