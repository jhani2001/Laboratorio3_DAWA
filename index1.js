const express = require('express')

const port = 3500

const app = express()

app.get('/',(req, res) => {
    res.send('Hello world')
})

app.get('/myfile', (req, res) => {
    res.sendFile('./michi.png', {
        root:__dirname
    })
})

app.get('/user', (req, res) => {
    res.json({nombre:"Jhanina",
              apellido:"Alarcón",
              edad:20,
              points :[1, 2, 3],
              adress: { 
                ciudad:"Lima- Perú",
                distrito:"San Miguel",
                calle: "Av. Brigida Silva"
              }
            })
})

app.get('/isAlive', (req, res) => {
    res.sendStatus(204)
})

app.listen(port)
console.log('Server on port ${port}')