const authService = require("../services/authService");
const logger = require("../utils/logger");

exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const tokens = await authService.login(email, password);

    logger.log("Usuario logueado");


    res.json({ tokens });

  } catch (error) {

    res.status(401).json({ error: error.message });

  }

};


exports.register = async (req, res) => {

  try {

    const { email, password } = req.body;

    const userId = await authService.register(email, password);

    res.status(201).json({
      message: "Usuario creado",
      userId: userId
    });

  } catch (error) {

    res.status(400).json({
      error: error.message,
      errorCode: error.code || "REGISTRATION_ERROR"
    });

  }

};


exports.me = async (req, res) => {

  try {

    res.json({
      id: req.user.id,
      email: req.user.email,
      role: req.user.role
    });

  } catch (error) {

    res.status(500).json({
      error: "Error obteniendo usuario"
    });

  }

};


exports.refresh = async (req, res) => {

  try {

    const { refreshToken } = req.body;
   
    const newToken = await authService.refreshToken(refreshToken);

    res.json({
      accessToken: newToken
    });

  } catch (error) {

    res.status(401).json({
      error: error.message
    });

  }

};