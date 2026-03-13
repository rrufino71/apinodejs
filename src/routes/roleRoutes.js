const express = require("express");
const router = express.Router();

const controller = require("../controllers/roleController");
const auth = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");



// router.get("/", auth, controller.getRoles);
// router.post("/", auth, controller.createRole);
// router.put("/:id", auth, controller.updateRole);
// router.delete("/:id", auth, controller.deleteRole);

// obtener roles (admin)
router.get("/",auth,authorize("admin","user"),controller.getRoles);

// crear rol (admin)
router.post("/",auth,authorize("admin"),controller.createRole);

// actualizar rol (admin)
router.put("/:id",auth,authorize("admin"),controller.updateRole);

// eliminar rol (admin)
router.delete("/:id",auth,authorize("admin"),controller.deleteRole);


module.exports = router;