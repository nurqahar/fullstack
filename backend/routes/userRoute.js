import express from "express";
import passport from "passport";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();
router.get("/", getAllUsers);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getUserById,
);
router.post("/", createUser);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUser,
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteUser,
);

export default router;
