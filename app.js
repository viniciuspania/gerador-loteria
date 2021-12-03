const api = require('./api')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req,res) =>{
    res.render('indexnovo')
})


const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>{
    console.log('Servidor rodando')
})