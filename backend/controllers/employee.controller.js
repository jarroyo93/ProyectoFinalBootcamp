const Employee=require('../models/employee');
const employeeCtrl = {};

employeeCtrl.getEmployees= async(req, res)=>{

    const employees = await Employee.find(); //Como la consulta va a tomar tiempo, con el await se le indica a js que cuando termine de consultar los datos, los guarde en la variable employess
    res.json(employees);        

}
employeeCtrl.createEmployees= async (req, res)=>{

    const employee = new Employee({
        nombre: req.body.nombre,
        numId: req.body.numId,
        telefono: req.body.telefono,
        empresa : req.body.empresa,
        temperatura: req.body.temperatura,
        sucursal: req.body.sucursal,
        fechaToma:req.body.fechaToma,
        horaToma: req.body.horaToma, 
        funcionarioToma:req.body.funcionarioToma,
    });
    await employee.save();
    res.json({
        'status': 'Employee saved'

    });
    

}
employeeCtrl.getEmployee= async(req, res)=>{

    const employee = await Employee.findById(req.params.id);
    res.json(employee);

}
employeeCtrl.updateEmployee= async(req, res)=>{
    const {id} = req.params; //se obtiene solo el id de los parametros
    const employee ={ //datos a modificar
        nombre: req.body.nombre,
        numId: req.body.numId,
        telefono: req.body.telefono,
        empresa : req.body.empresa,
        temperatura: req.body.temperatura,
        sucursal: req.body.sucursal,
        fechaToma:req.body.fechaToma,
        horaToma: req.body.horaToma, 
        funcionarioToma:req.body.funcionarioToma

    };
    await Employee.findOneAndUpdate(id, {$set:employee}, {new: true});
    res.json({status: 'Registro de empleado actualizado'});

}
employeeCtrl.deleteEmployee= async(req, res)=>{
        await Employee.findByIdAndRemove(req.params.id);
        res.json({status: 'Registro eliminado'});

}

module.exports = employeeCtrl;