const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoute = require('./routers/taskRouter');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI) 
  .then(() => {console.log("Conectado a MongoDB")})
  .catch((err) => {console.log(`Error en la conexion`,err)});

app.use('/api/tareas', taskRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Servidor en el puerto ${PORT}`)});