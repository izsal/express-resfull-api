import express from "express";
import { createData } from "../controllers/dataController";

const router = express.Router();

router.post("/", createData);

export default router;
