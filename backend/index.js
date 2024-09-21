const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Task } = require("./models");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// CRUD operations
app.get("/tasks", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.create({ title, description, status: false });
  res.json(task);
});

app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  await Task.update({ title, description, status }, { where: { id } });
  res.json({ message: "Task updated" });
});

app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  await Task.destroy({ where: { id } });
  res.json({ message: "Task deleted" });
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
