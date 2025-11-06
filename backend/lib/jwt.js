import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export function generateJWT({
  emailPasswordUser,
  expiresIn = "1d",
  algorithm = "HS256",
}) {
  const { id } = emailPasswordUser;
  const payload = {
    sub: id,
    iat: Date.now(),
  };

  const tokenJWT = jwt.sign(payload, process.env.SECRET, {
    expiresIn,
    algorithm,
  });

  return {
    tokenJWT,
  };
}

export function decodeJWT({ tokenJWT, algorithm = ["HS256"] }) {
  return jwt.verify(tokenJWT, process.env.SECRET, { algorithm });
}
