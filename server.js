const express = require('express')
const app = express()

const port = process.env.PORT || 3003 

app.get('/', (req, res) => {      
    return res.send('/home.vue')
     })
app.listen(port)