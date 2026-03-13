const { body, validationResult } = require("express-validator");

const validateRegister = [

  body("email").isEmail().withMessage("Debe enviar un email válido").normalizeEmail(),
  body("password").isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres"),
  body("password").matches(/[A-Z]/).withMessage("Debe contener mayúsculas"),
  body("password").matches(/[0-9]/).withMessage("Debe contener números"),

  (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: "Datos inválidos",
        details: errors.array()
      });
    }

    next();
  }

];

module.exports = validateRegister;