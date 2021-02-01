const express = require('express');

const router = express.Router();
const employeeCtrl = require('../controllers/employee.controller');

router.get('/', employeeCtrl.getEmployees); //obtener todos los empleados
router.post('/', employeeCtrl.createEmployees); //crear empleados
router.get('/:id', employeeCtrl.getEmployee); //obtener un solo empleado
router.put('/:id', employeeCtrl.updateEmployee); //actualizar un empleado
router.delete('/:id', employeeCtrl.deleteEmployee); //eliminar un empleado

module.exports = router;