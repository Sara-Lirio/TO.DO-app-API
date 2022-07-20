import express from 'express'
import usuarioController from './controllers/usuario-controller.js'
import tarefaController from './controllers/tarefa-controller.js'


const app = express()
const port = 3002

app.use(express.json())

usuarioController(app)
tarefaController(app)

app.listen(port, ()=>{  
    console.log(`Servidor online no endereço http://localhost:${port}`)
});

