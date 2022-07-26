import TarefaModel from "../model/Tarefa.js"
import ValidacaoTarefa from "../services/validacaoTarefa.js"
import db from '../database/db-sqlite.js'


const tarefaController = (app)=>{
    const tarefaModel = new TarefaModel()

    app.get('/tarefa', (req, res)=>{
        db.all('SELECT * FROM TAREFAS',(erro, linhas)=>{
            console.log(linhas)
            console.log(erro)
        })

        const tarefas = tarefaModel.pegaTarefas()

       
        res.json(
            {"tarefas" : tarefas,
             "erro" : false}
        )
    })

   
    app.get('/tarefa/titulo/:titulo', (req, res)=>{

        const titulo = req.params.titulo
        const tarefa = tarefaModel.pegaUmaTarefa(titulo)

        res.json(
            {"tarefa" : tarefa,
              "erro" : false}
        )
    })

    app.post('/tarefa', (req, res)=>{
        const body = req.body

        try {
         
            const novaTarefa = new ValidacaoTarefa(body.titulo, body.descricao, body.status)
            tarefaModel.insereTarefa(novaTarefa)

            res.json(
                {"msg" : "Tarefa inserida com sucesso",
                "tarefa" : novaTarefa,
                "erro" : false}
            ) 
        } catch (error) {
            res.json(
                {"msg" : error.message,
                "erro" : true}
            ) 
        }

    })

    app.delete('/tarefa/titulo/:titulo', (req,res)=>{
        const titulo = req.params.titulo
        tarefaModel.deletaTarefa(titulo)

        res.json({
            "msg" : `Tarefa com titulo ${titulo} deletada com sucesso`,
            "erro" : false
        })
    })

    app.put('/tarefa/titulo/:titulo', (req, res)=>{
        const body = req.body
        const titulo = req.params.titulo
        try {
            const novosDados = new ValidacaoTarefa(body.titulo, body.descricao, body.status)
            tarefaModel.atualizaTarefa(titulo, novosDados)
            res.json({
                "msg" : `Tarefa com título ${titulo} atualizada com sucesso`,
                "erro" : false
            })

        } catch (error) {
            res.json({
                "msg" : error.message,
                "erro" : true
            })
        }
    })
}

export default tarefaController
