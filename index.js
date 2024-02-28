require('dotenv').config()
const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')

const dburl = process.env.DATABASE_URL
const dbName = 'OceanJornadaBackend'

async function main() {

const client = new MongoClient(dburl)

console.log('Conectando ao banco de dados...')
 await client.connect()
 console.log('Banco de dados conectado com sucesso!')

const app = express()




app.get('/', function (req, res) {

  res.send('hello, world!')

  app.get('/oi', function (req, res) {
    res.send('Olá mundo!')
  })

})

//Lista de pesonagens
const lista = ['Rick Sanchez', 'Morty Smith', 'Sumer Smith']
const db = client.db(dbName)
const collection = db.collection('itens')

// Read All -> [GET] / item
app.get('/item', async function (req, res) {
  const itens = collection.find().toArray()

  // Envio a lista inteira como resposta HTTP
  res.send(lista)
})

//Read By ID -> [GET] /item/:
app.get('/item/:id', async function (req, res) {
  //Acesso o id no parâmetro de rota 
  const id = req.params.id

  // Acesso item na lista baseado no ID recebido
   // Acesso item na lista baseado no ID recebido
   const itens =  await Collection.findOne ({
    _id: new ObjectId(id)
   } )
  // Envio o item obtido como resposta HTTP
  res.send(item)
})


app.use(express.json())

//Create - > [POST]/item
app.post('/item', async function (req, res) {
  //Extraímos o corpo da requisição
  const item = body.nome

 //Colocamos o nome dentro da lista de itens
 await collection.insertOne(item)

 res.send(item)

})
//update -> []PUT /item/:id
app.put('/item/:id', async function(req, res) {
  //pegamos o ID recebido pela rota
  const id = String(re.params.id)

  // pegamos o novo item do corpo da requisição
  const novoItem = req.body
  //Atualizamos o docmento na collection
  await collection.updateOne(
    {_id: new ObjectId(id) },
    {$set: novoItem}
  )

  // Enviamos uma mensagem de sucesso
  res.send('Item atualizado com sucesso!')
})

//Dlete -> [DELETE] /item/:id
app.delete('/item/:id', async function (req, res){
  //Pegamos o ID da rota
  const id = req.params.id

  // Realizamos a opeação de deleteOne
  await collection.deleteOne({ _id: new ObjectId(id)})

  res.send('Item removido com sucesso!')
})
 
app.listen(3000)
}

main()
