const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userRepo = require("../repositories/userRepository");
const jwtUtil = require("../utils/jwt");

exports.login = async (email, password) => {

  const user = await userRepo.findByEmail(email);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    throw new Error("Password incorrecto");
  }

  const accessToken = jwtUtil.generateAccessToken(user);
  const refreshToken = jwtUtil.generateRefreshToken(user);

  return {
    accessToken,
    refreshToken
  };

};

exports.register = async (email, password) => {

  const existingUser = await userRepo.findByEmail(email);

  if (existingUser) {
    throw new Error("El usuario ya existe");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userId = await userRepo.createUser(email, hashedPassword, 2);

  return userId;

};

exports.refreshToken = async (token) => {

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET
    );

    const user = await userRepo.findById(decoded.id);

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const newAccessToken = jwtUtil.generateAccessToken(user);

    return newAccessToken;

  } catch (error) {

    console.log("ERROR VERIFY:", error);

    throw new Error("Refresh token inválido");

  }

};