const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: false },
    completada: { type: Boolean, default: false }
}, {timestamps: true});

module.exports = mongoose.model('Task', taskSchema)
