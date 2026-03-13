const db = require("../config/database");

exports.findByEmail = async (email) => {

   const [rows] = await db.query(
    `SELECT 
        u.id,
        u.email,
        u.password,
        r.name AS role
     FROM users u
     JOIN roles r ON r.id = u.role_id
     WHERE u.email = ?`,
    [email]
  );

  return rows[0];
};

exports.createUser = async (email, password,role_id) => {

  const [result] = await db.query(
    "INSERT INTO users (email, password, role_id) VALUES (?, ?, ?)",
    [email, password,role_id]
  );

  return result.insertId;
};

exports.findById = async (id) => {

  const [rows] = await db.execute(
    "SELECT id, email, role_id FROM users WHERE id = ?",
    [id]
  );

  return rows[0];

};