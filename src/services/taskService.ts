import mysql from "mysql2/promise";
import { db } from "../models/db";

export const createTask = async (task_name: string, status: string) => {
  const connection = await db.getConnection();
  try {
    const [result] = await connection.query(
      "INSERT INTO tasks (task_name, status) VALUES (?, ?)",
      [task_name, status]
    );
    return { id: result, task_name, status };
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};
