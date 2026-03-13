const repo = require("../repositories/roleRepository");

exports.getRoles = async (req, res) => {

  const roles = await repo.getAll();

  res.json(roles);

};

exports.createRole = async (req, res) => {

  const { name } = req.body;

  const id = await repo.create(name);

  res.status(201).json({ id });

};

exports.updateRole = async (req, res) => {

  const { id } = req.params;
  const { name } = req.body;

  await repo.update(id, name);

  res.json({ message: "Rol actualizado" });

};

exports.deleteRole = async (req, res) => {

  const { id } = req.params;

  await repo.remove(id);

  res.json({ message: "Rol eliminado" });

};