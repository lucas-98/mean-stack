const express = require('express'),
      app = express(),
      morgan = require('morgan');

const { mongoose }  = require('./database');

//configuracion
app.set('port', process.env.PORT || 3000 );


//middlewares
app.use(morgan('dev'));
app.use(express.json());


//routes
app.use('/api/empleados/' ,require('./routes/empleado.routes'))

//arrancando el servidor      
app.listen(app.get('port'), ()=> {
    console.log('Server on port ' , app.get('port'));
})