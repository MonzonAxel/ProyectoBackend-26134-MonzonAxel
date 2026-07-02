import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productsRouter from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Servidor funcionando correctamente" });
});

app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

export default app;
