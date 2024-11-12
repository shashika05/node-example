const express = require("express");
const db = require("../mysqlConn");

const router = express.Router();

// router.get("/", function (req, res) {
//   res.status(200).json({ message: "Hello World", code: 200 });
// });

// router.post("/sample/", function (req, res) {
//   const { name, age } = req.body;
//   res
//     .status(200)
//     .json({ name: `Hello ${name}`, age: `Your age ${age}`, code: 200 });
// });

// CRUD operations with MySQL

// Create
router.post("/add-user", async (req, res) => {
  const { name } = req.body;
  try {
    await db.query("insert into names (name) values (?)", [name]);
    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Read
router.get("/get-users", async (req, res) => {
  try {
    const [rows] = await db.query("select * from names");
    res.status(200).json({ data: rows });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update
router.put("/update-user/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await db.query("update names set name = ? where id = ?", [name, id]);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete
router.delete("/delete-user/:name", async (req, res) => {
  const { name } = req.params;
  try {
    await db.query("delete from names where name = ?", [name]);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
