import express from "express";
import {
  registerController,
  loginWithJWTController,
} from "../controllers/authController";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginWithJWTController);

export default router;
