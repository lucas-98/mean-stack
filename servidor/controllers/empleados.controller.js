const Empleado = require('../models/empleados');


const empleadoController = {};

empleadoController.obtenerEmpleados = async (req, res) => {
     const empleados = await Empleado.find();
     res.json(empleados);
        
}
empleadoController.crearEmpleado = async (req, res) =>{
    const empleado = new Empleado (req.body);
    await empleado.save()
    res.json('empleado guardado');
}

empleadoController.obtenerEmpleado =async (req, res) =>{
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
    // Empleado.findById(_id)
}

empleadoController.editarEmpleado = async (req, res) => {
    
    const { id } = req.params;
    const empleado = {
        nombre: req.body.nombre,
        posicion: req.body.posicion,
        oficina: req.body.oficina,
        salario: req.body.salario
    };
   await Empleado.findByIdAndUpdate(id, {$set: empleado}, {new: true});
    res.json(status= 'Emplado actualizado');
}

empleadoController.borrarEmpleado = async (req, res) =>{
    await Empleado.findByIdAndRemove(req.params.id);
    res.json(status= 'Empleado eliminado');
}
module.exports = empleadoController;