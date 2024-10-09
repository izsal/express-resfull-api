import { Request, Response } from "express";
import { saveData } from "../services/dataService";

export const createData = async (req: Request, res: Response) => {
  try {
    const { unique_code, running_number, value } = req.body;
    const result = await saveData(unique_code, running_number, value);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
