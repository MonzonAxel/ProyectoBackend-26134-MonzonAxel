import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const validateCredentials = (email, password) => {
  return (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  );
};

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};
