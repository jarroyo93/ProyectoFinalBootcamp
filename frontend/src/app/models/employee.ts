export class Employee {

    constructor(_id='', nombre='', numId=0, telefono=0, empresa='', temperatura =0, sucursal='', fechaToma='', horatoma='', funcionarioToma=''){
        this._id = _id;
        this.nombre= nombre;
        this.numId= numId;
        this.telefono=telefono;
        this.empresa=empresa;
        this.temperatura=temperatura;
        this.sucursal=sucursal;
        this.fechaToma=fechaToma;
        this.horaToma=horatoma;
        this.funcionarioToma=funcionarioToma
         


    }
    _id:string;
    nombre: String; 
    numId: Number;
    telefono:Number;
    empresa: String;
    temperatura: Number;
    sucursal:String;
    fechaToma: String;
    horaToma: String;
    funcionarioToma: String
}
