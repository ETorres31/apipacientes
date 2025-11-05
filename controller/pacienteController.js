//Importamos el modelo
const Paciente = require('../models/Paciente');

//funcion para traer todos los pacientes
exports.getPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.find();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Agregamos pacientes
exports.addPaciente = async (req, res) => {
    const { nombre, apellido, direccion } = req.body;
    const paciente = new Paciente({ nombre, apellido, direccion });
    try {
        await paciente.save();
        res.status(201).json(paciente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Funcion para Actualizar el paciente
exports.updatePaciente = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, direccion } = req.body;
    try {
        const paciente = await Paciente.findByIdAndUpdate(id, { nombre, apellido, direccion }, { new: true });
        if (!paciente) {
            return res.status(404).json({ message: 'Paciente NO Encontrado' });
        } else {
            res.status(201).json(paciente);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//funcion para eliminar un paciente
exports.deletePaciente = async (req, res) => {
    const { id } = req.params;
    try {
        await Paciente.findByIdAndDelete(id);
        res.status(200).json({ message  : 'Paciente Eliminado' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};