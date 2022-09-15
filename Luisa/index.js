// importar las bibliotecas
const express = require('express'); // es opcional el ';'
const path = require('path');
const consolaRouters =require('./routes/consola');

const app = express();
// middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(consolaRouters);
// definición de nuestra aplicación
app.get('/bigote', (request, response) => {
    console.log('Hola hola');
    response.send('<H1> Hola Hola </H1>')
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'pagina1.html'));
})

app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'formulario.html'));
})

app.get('/palind', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'palind.html'));
})

app.get('/pagina1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'pagina1.html'));
})

// FORMULARIO
app.get('/formulario',(req, res)=>{
    console.log(req.query);
    res.sendFile(path.join(__dirname, 'views', 'formulario.html'));
});

app.get('/palindromo',(req, res)=>{
    console.log(req.query);
    res.sendFile(path.join(__dirname, 'views', 'palind.html'));
});


//prueba
app.get('/prueba', (req, res) => {
    console.log(req.query)
    res.send("Datos enviados por Query" + req.query.name)
});

//prueba params
app.get('/prueba2/:name/:age',(req, res)=> {
    console.log(req.params);
    console.log(req.query);
    console,console.log(req.params)
    res.send('Datos enviados por params'+req.params.name)
});

app.get('/prueba3', (req, res) => {
    console.log(req.boody)
    res.send("Datos recibidos")
});



// lanzar la aplicación
app.listen(8081, () => {
    console.log("Servidor en línea :)")
});
