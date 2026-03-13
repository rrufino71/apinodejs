module.exports = (...roles) => {

  return (req, res, next) => {

    if (!req.user) {
      return res.status(401).json({
        error: "Usuario no autenticado"
      });
    }

    if (roles.length === 0) {
      return next();
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        error: "No autorizado"
      });
    }

    next();

  };

};