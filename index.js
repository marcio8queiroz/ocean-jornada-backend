const express = require('express')

const app = express()

 

app.get('/', function (req, res) {

  res.send('hello, world!')

  app.get('/oi', function (req, res) {
    res.send('Olá mundo!')
  })

})

//Lista de pesonagens
const lista = ['Rick Sanchez', 'Morty Smith', 'Sumer Smith']

// Read All -> [GET] / item
app.get('/item', function (req, res) {
  res.send(lista)
})

 
app.listen(3000)