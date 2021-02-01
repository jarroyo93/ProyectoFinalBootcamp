const mongoose = require('mongoose');
const {Schema} = mongoose; //solo le esta pidiendo a mongoose el schema

const EmployeeSchema = new Schema({

    nombre: {type: String, required: true}, //se está especificando que el esquema lleva un campo nombre, tipo string y requerido obligatoriamente
    numId: {type: Number, required: true},
    telefono: {type: Number, required: true},
    empresa : {type: String, required: true},
    temperatura: {type: Number, required:true},
    sucursal: {type: String, required: true},
    fechaToma: {type: String, required:true},
    horaToma: {type:String, required: true},
    funcionarioToma: {type: String, required: true}


});

module.exports=mongoose.model('Employee', EmployeeSchema); //se necesita pasar el esquema anterior a un modelo de datos de mongoose
//'Employee' es como será guardado en la BD a través del esquema 'EmployeeSchema'