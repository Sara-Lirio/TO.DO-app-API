import bd from '../database/bd.js'

export default class TarefaModel{


    insereTarefa = (tarefa)=>{
        bd.tarefa.push(tarefa)
    }

    pegaTarefas = ()=>{
        return bd.tarefa
    }

    pegaUmaTarefa = (titulo)=>{
        return bd.tarefa.filter(tarefa=>tarefa.titulo===titulo)
    }

    deletaTarefa = (titulo)=>{
        const newDB = bd.tarefa.filter(tarefa=>tarefa.titulo!==titulo)
        bd.tarefa = newDB
    }

    atualizaTarefa = (titulo, novosDados)=>{
        const newDb = bd.tarefa.map(tarefa=>{
            if(tarefa.titulo === titulo){
                return {
                    "id": tarefa.id,
                    "titulo" : novosDados.titulo || tarefa.titulo,
                    "descricao" : novosDados.descricao || tarefa.descricao,
                    "status" : novosDados.status || tarefa.status,
                    "dataCriacao" : tarefa.dataCriacao
                }
            }
            return tarefa
        })
        bd.tarefa = newDb
    }

}
