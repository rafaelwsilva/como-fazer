const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())
app.use('/categorias',categorias)
app.use('/publicacoes',publicacoes)

const port = process.env.PORT || 3000

app.get('/', async(request, response) => {
    response.render('index')
})



app.listen(port, (err) =>{
    if(err){
        console.log('error')
    } else {
        console.log('Como-fazer Server is running')
    }
})

 