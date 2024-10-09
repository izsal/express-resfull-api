import express from "express";
import { scheduleTask } from "../controllers/taskController";

const router = express.Router();

router.post("/", scheduleTask);

export default router;
