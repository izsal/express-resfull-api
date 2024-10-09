import app from "./app";
import mysql from "mysql2/promise";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

startServer();
