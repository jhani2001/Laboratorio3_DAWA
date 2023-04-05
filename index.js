const express = require('express')
const port = 3500
const app = express()

app.get('/products', (req, res) => {
    //validate data
    //query.bd
    //process.data
    //other.actions.on.data

    res.send('Lista de Productos')
})

app.post('/products',(req, res) => {
    res.send('Creando Productos')
})

app.put('/products',(req, res) => {
    res.send('Actualizando Productos')
})

app.delete('/products',(req, res) => {
    res.send('Eliminando Productos')
})

app.path('/products',(req, res) => {
    res.send('Actualizando una parte del producto')
})

app.listen(port)
console.log('Server on port ${port}')