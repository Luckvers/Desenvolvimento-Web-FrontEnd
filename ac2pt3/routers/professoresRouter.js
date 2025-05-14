const express = require("express");
const router = express.Router();
const controller = require("../controllers/professoresController");

router.get("/", controller.getTodos);
router.get("/:id", controller.getPorId);
router.get("/:id/turmas", controller.getTurmas);
router.put("/:id", controller.atualizar);
router.post("/:id/turmas", controller.adicionarTurma);
router.get("/departamento/:departamento", controller.getPorDepartamento);
router.delete("/:id", controller.remover);

module.exports = router;