import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../models/db";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Fungsi untuk register
export const register = async (username: string, password: string) => {
  const connection = await db.getConnection();
  try {
    // Hash password sebelum menyimpan ke database
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await connection.query(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword]
    );
    const userId = result;

    // Generate JWT token
    const token = jwt.sign({ userId, username }, JWT_SECRET, {
      expiresIn: "1h",
    });
    return { token, userId, username };
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};

// Fungsi untuk login dengan JWT
export const loginWithJWT = async (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
};
