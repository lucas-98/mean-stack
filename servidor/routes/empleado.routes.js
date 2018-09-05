const express = require('express'),
      router = express.Router();

const empleado = require('../controllers/empleados.controller');

router.get('/', empleado.obtenerEmpleados);
router.post('/', empleado.crearEmpleado);
router.get('/:id', empleado.obtenerEmpleado );
router.put('/:id', empleado.editarEmpleado);
router.delete('/:id', empleado.borrarEmpleado)


module.exports = router;