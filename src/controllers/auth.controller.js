import { validateCredentials, generateToken } from "../services/auth.service.js";

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Email y contraseña son requeridos" });
  }

  const valid = validateCredentials(email, password);

  if (!valid) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  const token = generateToken({ email });
  res.json({ token });
};
