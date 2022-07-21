class Tarefas{
    constructor(titulo, descricao, status,dataCriacao){
        this.titulo=titulo,
        this.descricao=descricao,
        this.status=status,
        this.dataCriacao=dataCriacao
    }

    insereTarefa = (tarefa)=>{
        bd.tarefa.push(tarefa)
    }

    pegaTarefas = ()=>{
        return bd.tarefa
    }

    pegaUmaTarefa = (titulo)=>{
        return bd.tarefa.filter(tarefa=>tarefa.titulo===titulo)
    }
}

export default Tarefas