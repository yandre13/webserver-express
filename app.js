const express = require('express'),
    app = express(),
    hbs = require('hbs'),
    c = console.log

require('./hbs/helpers')

const port = process.env.PORT || 3000
    //Carpeta pública
app.use(express.static(__dirname + '/public'))
    // Partials hbs
hbs.registerPartials(__dirname + '/views/partials')

//View engine hbs
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'MOto'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Moto'
    })
})

app.listen(port, () => c(`Escuchando peticiones en el puerto ${port}`))