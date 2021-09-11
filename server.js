const env = require('dotenv')
env.config()

//importa o express
const express = require('express')
//cria o app do tipo express()
const app = express()

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_Name, process.env.DB_User, process.env.DB_Password, {
    host: process.env.DB_Host,
    dialect: 'mssql'
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

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