import UsuarioModel from "../model/Usuario.js"
import ValidaUsuario from "../services/validacaoUsuario.js"
import db from '../database/db-sqlite.js'

const usuarioController = (app)=>{
    const modelUsuario = new UsuarioModel()

    app.get('/usuario', (req, res)=>{
        db.all('SELECT * FROM USUARIOS',(erro, linhas)=>{
            console.log(linhas)
            console.log(erro)
        })

        const todosUsuarios = modelUsuario.pegaUsuarios()
    
        res.json({
            "usuarios" : todosUsuarios,
            "erro" : false
        })
    })

  
    app.get('/usuario/email/:email', (req, res)=>{


        const email = req.params.email


        const usuario = modelUsuario.pegaUmUsuario(email)

    
        res.json(
            {"usuario": usuario,
             "erro" : false}
        )
    })

    app.post('/usuario', (req, res)=>{
        const body = req.body
        try {
            
            const novoUsuario = new ValidaUsuario(body.nome, body.email, body.senha)

        
            modelUsuario.insereUsuario(novoUsuario)

          
            res.json(
                {"msg" : "Usuário inserido com sucesso",
                "usuario" : novoUsuario,
                "erro" : false}
            )
            
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }

    })

    app.delete('/usuario/email/:email', (req,res)=>{
        const email = req.params.email
        modelUsuario.deletaUsuario(email)

        res.json({
            "msg" : `Usuário com email ${email} deletado com sucesso`,
            "erro" : false
        })
    })

    app.put('/usuario/email/:email', (req, res)=>{
        const body = req.body
        const email = req.params.email
        try {
            const novosDados = new ValidaUsuario(body.nome, body.email, body.senha)
            modelUsuario.atualizaUsuario(email, novosDados)
            res.json({
                "msg" : `Usuário com email ${email} atualizado com sucesso`,
                "usuario" : novosDados,
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


export default usuarioController
