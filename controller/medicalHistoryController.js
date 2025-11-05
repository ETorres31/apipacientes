// Importamos el modelo
const Historial = require('../models/MedicalHistory');

// Función para traer todos los historiales de un paciente
exports.getHistoriales = async (req, res) => {
    const { pacienteId } = req.params;
    try {
        const historiales = await Historial.find({ pacienteId });
        res.json(historiales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Agregar historial médico
exports.addHistorial = async (req, res) => {
    const { pacienteId, diagnostico, tratamiento, notas, fecha } = req.body;
    const historial = new Historial({ pacienteId, diagnostico, tratamiento, notas, fecha });
    try {
        await historial.save();
        res.status(201).json(historial);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar historial médico
exports.updateHistorial = async (req, res) => {
    const { id } = req.params;
    const { diagnostico, tratamiento, notas, fecha } = req.body;
    try {
        const historial = await Historial.findByIdAndUpdate(id, { diagnostico, tratamiento, notas, fecha }, { new: true });
        if (!historial) {
            return res.status(404).json({ message: 'Historial NO Encontrado' });
        } else {
            res.status(201).json(historial);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar historial médico
exports.deleteHistorial = async (req, res) => {
    const { id } = req.params;
    try {
        await Historial.findByIdAndDelete(id);
        res.status(200).json({ message: 'Historial Eliminado' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
