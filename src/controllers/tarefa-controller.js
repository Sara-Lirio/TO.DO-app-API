const tarefaController = (app) => {
    app.get('/tarefa', (req, res) => {
        res.send("Rota tarefa do usuário")
    })

    app.post('/tarefa', (req, res) => {
            res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
       
    })
}

export default tarefaController