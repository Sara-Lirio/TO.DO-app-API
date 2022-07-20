import Tarefa from '../models/tarefa-model.js'

const tarefaController = (app) => {
    app.get('/tarefa', (req, res) => {
        res.json("Rota tarefa do usuário")
    })

    app.post('/tarefa', (req, res) => {
            const tarefa = new Tarefa (req.body.titulo, req.body.descricao, req.body.status,req.body.dataCriacao)
            res.json(tarefa)
    })
}

export default tarefaController