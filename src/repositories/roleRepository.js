const db = require("../config/database");

exports.getAll = async () => {
  const [rows] = await db.query("SELECT * FROM roles");
  return rows;
};

exports.getById = async (id) => {
  const [rows] = await db.query("SELECT * FROM roles WHERE id = ?", [id]);
  return rows[0];
};

exports.create = async (name) => {
  const [result] = await db.query(
    "INSERT INTO roles (name) VALUES (?)",
    [name]
  );
  return result.insertId;
};

exports.update = async (id, name) => {
  await db.query(
    "UPDATE roles SET name = ? WHERE id = ?",
    [name, id]
  );
};

exports.remove = async (id) => {
  await db.query(
    "DELETE FROM roles WHERE id = ?",
    [id]
  );
};