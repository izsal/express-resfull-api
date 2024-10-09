import express from "express";
import { customerPurchasesReport } from "../controllers/reportController";

const router = express.Router();

router.get("/customer-purchases", customerPurchasesReport);

export default router;
