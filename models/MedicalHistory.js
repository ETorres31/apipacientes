const mongoose = require('mongoose');
const { Schema } = mongoose;

const historialSchema = new Schema({
  pacienteId: {
    type: Schema.Types.ObjectId,
    ref: 'Paciente',
    required: true
  },
  diagnostico: {
    type: String,
    required: true
  },
  tratamiento: {
    type: String,
    required: true
  },
  notas: { // ← antes era "indicaciones"
    type: String,
    required: false
  },
  fecha: {
    type: Date,
    required: true
  },
  creadoEn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('HistorialMedico', historialSchema);