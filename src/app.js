// Importando o package express
import express from 'express'
import usuarioController from './controller/usuario-controller.js'
import tarefaController from './controller/tarefa-controller.js'


const app = express()
const port = 3002

app.use(express.json())

usuarioController(app)
tarefaController(app)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})
