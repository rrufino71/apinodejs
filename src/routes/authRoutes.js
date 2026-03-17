const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const controller = require("../controllers/authController");
const rateLimit = require("express-rate-limit");
const validateLogin = require("../middleware/validateLogin");
const validateRegister = require("../middleware/validateRegister");

const WINDOW_MS = 60 * 1000; // 1 minutos


const loginLimiter = rateLimit({
  //produccion
  //windowMs: 15 * 60 * 1000, //en 15 minutos
  //max: 10 //10 intentos por IP

  //desarrollo
  windowMs: WINDOW_MS, //1 minuto
  max: 3, //20 intentos por IP
  
  handler: (req, res) => {
    const minutes = Math.ceil(WINDOW_MS / 1000 / 60);
    const retryAfter = res.getHeader("Retry-After");
    res.status(429).json({
      error: "Demasiados intentos de login",
      message: `Espere ${minutes} minuto(s) antes de intentar nuevamente`,
      retry_after_seconds: retryAfter ? parseInt(retryAfter) : minutes * 60,
      code: "TOO_MANY_LOGIN_ATTEMPTS"
    });
  }

});


router.post("/register",validateRegister,controller.register);
router.post("/login", loginLimiter, validateLogin, controller.login);
router.post("/refresh", controller.refresh);
router.get("/me",authMiddleware,controller.me);

module.exports = router;