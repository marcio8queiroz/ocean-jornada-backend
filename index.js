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
  // Envio a lista inteira como resposta HTTP
  res.send(lista)
})

//Read By ID -> [GET] /item/:
app.get('/item/:id', function (req, res) {
  //Acesso o id no parâmetro de rota 
  const id = req.params.id

  // Acesso item na lista baseado no ID recebido
  const item = lista[id]

  // Envio o item obtido como resposta HTTP
  res.send(item)
})

app.use(express.json())

//Create - > [POST]/item
app.post('/item', function (req, res) {
  //Extraímos o corpo da requisição
  const body = req.body
// pegamos o nome que foi enviado dentro do corpo
  const item = body.nome

  //Colocamos o nome dentro da lista de itens
  lista.push(item)

 res.send('Item adicionado com sucesso')
 
})
 
app.listen(3000)