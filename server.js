const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const corse = require('cors');

//Servidor HTTP
const app = express();

//Configuraciones
app.use(bodyParser.json());
app.use(corse());

//mongoose.connect('mongodb://localhost:27017/sistema-clinica')
mongoose.connect(process.env.MONGOBD_URI, 
    { useNewUrlParser:true, useUnifiedTopology: true }
)
    .then(() => console.log("Conexión a MongoDB Exitosa"))
    .catch(err => console.error("Error al conectar a MongoDB: ", err));

//Rutas
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
//Rutas parae paciente
const pacienteRoutes = require('./routes/paciente');
app.use('/api/pacientes', pacienteRoutes);
//Rutas parae Historial
const medicalHistoryRoutes = require('./routes/medicalHistory');
app.use('/api/medicalHistory', medicalHistoryRoutes);

//Configurar puerto para backend
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});