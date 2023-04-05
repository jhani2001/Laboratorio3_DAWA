const express = require('express')

const port = 3500

const app = express()

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/user',(req, res) => {
    //re s.send('Nuevo usuario creado')
    console .log(req.body)
    res.send('Nuevo usuario creado')
})

app.listen(port)
console.log('Server on port ${port}')
