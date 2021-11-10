const express = require('express');
const app = express();

const port=process.env.PORT || 3000;


//Conexion a base de datos
const mongoose = require('mongoose');

const user='prueba'
const password='OlQOilPlQARRl6jy';
const dbname='veterinaria';
const uri=`mongodb+srv://${user}:${password}@cluster0.jfkcv.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,
{useNewUrlParser:true, useUnifiedTopology: true}
)
.then(() => console.log('base de datos conectada'))
.catch(e => console.log(e))


//motor deplantillas

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./router/rutasWeb'));
app.use('/mascotas',require('./router/mascotas'))


app.use((req, res, next)=>{
    res.status(404).render("404", {
        titulo:"404",
        descripcion:"descripcion de la pagina web"

    })
})

app.listen(port,()=>{
    console.group('servidor a su servicio en el puerto')
    
})