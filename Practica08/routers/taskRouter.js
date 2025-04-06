const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Obtener todas las tareas
router.get("/", async (req, res) => {
    try{
        const tareas = await Task.find();
        res.json(tasks);
}   catch (err){
        res.status(500).json({ error: err.message})
    }
});

// Agregar una nueva tarea
router.post("/", async (req, res) => {
    try{
    const tareas = new Task(req.body);
    await tarea.save();
    resizeTo.status(201).json(tarea);
    } catch (err){
        res.status(400).json({ error: err.message})
    }
});

// Actualizar una tarea
router.put("/:id", async (req, res) => {
    try {
      const tarea = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!tarea) return res.status(404).json({ message: "Tarea no encontrada" });
      res.json(tarea);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Eliminar una tarea
  router.delete("/:id", async (req, res) => {
    try {
      const tarea = await Task.findByIdAndDelete(req.params.id);
      if (!tarea) return res.status(404).json({ message: "Tarea no encontrada" });
      res.json({ message: "Tarea eliminada" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router;