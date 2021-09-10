const env = require('dotenv')
env.config()

//importa o express
const express = require('express')
//cria o app do tipo express()
const app = express()

//define a porta do app como a do ambiente ou 3003
const port = process.env.PORT || 3003 

//cria uma rota na raiz do endereço da aplicação que retorna uma mensagem.
app.get('/', (req, res) => {      
    return res.send('API RODANDO COM SUCESSO!')
     })
//coloca a plaicação para rodar uma porta definida
app.listen(port, () => {
    console.log('Funcionando na porta', port)
})