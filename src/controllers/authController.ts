import { Request, Response } from "express";
import { register, loginWithJWT } from "../services/authService";

// Controller untuk register
export const registerController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const result = await register(username, password);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller untuk login menggunakan JWT
export const loginWithJWTController = async (req: Request, res: Response) => {
  const { token } = req.body;
  try {
    const result = await loginWithJWT(token);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
