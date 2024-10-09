import { Request, Response } from "express";
import { createTask } from "../services/taskService";

export const scheduleTask = async (req: Request, res: Response) => {
  try {
    const { task_name, status } = req.body;
    const task = await createTask(task_name, status);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
