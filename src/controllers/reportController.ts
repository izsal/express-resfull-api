import { Request, Response } from "express";
import { getCustomerPurchases } from "../services/reportService";

export const customerPurchasesReport = async (req: Request, res: Response) => {
  try {
    const report = await getCustomerPurchases();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
