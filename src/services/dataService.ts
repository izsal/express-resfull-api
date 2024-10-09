import mysql from "mysql2/promise";
import { db } from "../models/db";

export const saveData = async (
  unique_code: string,
  running_number: number,
  value: string
) => {
  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();
    const [rows] = await connection.query(
      "SELECT COUNT(*) as count FROM data WHERE unique_code = ?",
      [unique_code]
    );
    if (rows[0].count > 0) {
      throw new Error("Unique code already exists");
    }
    const [result] = await connection.query(
      "INSERT INTO data (unique_code, running_number, value) VALUES (?, ?, ?)",
      [unique_code, running_number, value]
    );
    await connection.commit();
    return { id: result, unique_code, running_number, value };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};
