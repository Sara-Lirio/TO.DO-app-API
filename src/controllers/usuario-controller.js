import Usuario from "../models/usuario-models.js"
import ValidaUsuario from "../service/validacaoUsuario.js"


const usuarioController = (app) => {

    const modelUsuario = new Usuario ()
    app.get('/usuario', (req, res) => {
        res.json("Rota do Usuário")
    })

    app.post('/usuario',(req,res) => {
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

    app.delete('/usuario/:email',(req,res) => {
        const email = req.params.email
        modelUsuario.deletaUsuario(email)
        res.json({"msg":"Usuario deletado"})
    })
}

export default usuarioController