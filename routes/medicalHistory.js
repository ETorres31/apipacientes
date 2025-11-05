const express = require('express');
const router = express.Router();
const { getHistoriales, addHistorial, updateHistorial, deleteHistorial } = require('../controller/medicalHistoryController');

// Rutas
router.get('/:pacienteId', getHistoriales);       // Obtener todos los historiales de un paciente
router.post('/', addHistorial);                   // Agregar nuevo historial
router.put('/:id', updateHistorial);              // Actualizar historial por ID
router.delete('/:id', deleteHistorial);           // Eliminar historial por ID

module.exports = router;