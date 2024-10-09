import express from "express";
import dotenv from "dotenv";
import errorMiddleware from "./middlewares/errorMiddleware";
import authRoutes from "./routes/authRoutes";
import dataRoutes from "./routes/dataRoutes";
import taskRoutes from "./routes/taskRoutes";
import reportRoutes from "./routes/reportRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/reports", reportRoutes);

app.use(errorMiddleware);

export default app;
