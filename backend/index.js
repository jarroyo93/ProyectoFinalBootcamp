const express = require('express');
const morgan = require('morgan') //morgan ayuda a ver por consola lo que el usuario está pidiendo
const cors = require('cors');
const app = express();

const {mongoose} = require('./database'); //indica que del archivo de database.js solo va a tomar la conexión
//Settings: configuración del server

app.set('port', process.env.PORT || 3000); //crear una variable que va a ser accedida desde cualquier parte del servidor (1)
//en caso tal se vaya a desplegar la aplicación el producción, la linea "process.env.PORT" le indica a la aplicació
//que tome el puerto que le sea asignado

//-------------------------------------------------------------------------------------------------------
//Middlewares: Funciones encargadas de procesar los datos

app.use(morgan('dev')); 
app.use(express.json());//ayuda a entender el código que viene en formato json desde el navegador para que el servidor pueda entenderlo
app.use(cors({origin:'http://localhost:4200'}));
//-------------------------------------------------------------------------------------------------------
//routes: rutas del servidor
app.use('/api/employees',require('./routes/employee.routes'));
//-------------------------------------------------------------------------------------------------------
//starting the server
app.listen(app.get('port'), ()=>{ // se está oteniendo la variable (1)

    console.log('server runnig on port:', app.get('port'));


})