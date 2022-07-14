const tarefaController = (app) => {
    app.get('/tarefa', (req,res) => {
        res.send("Rota tarefa do usuário")
    })
}

export default tarefaController