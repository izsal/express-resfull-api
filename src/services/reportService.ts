import mysql from "mysql2/promise";
import { db } from "../models/db";

export const getCustomerPurchases = async () => {
  const connection = await db.getConnection();
  try {
    const [rows] = await connection.query(`
            SELECT customer_id, SUM(quantity) as total_purchases
            FROM purchases
            GROUP BY customer_id
            ORDER BY total_purchases DESC
        `);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};
