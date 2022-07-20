import Usuario from "../models/usuario-models.js"


const usuarioController = (app) => {
    app.get('/usuario', (req, res) => {
        res.json("Rota do Usuário")
    })

    app.post('/usuario',(req,res) => {
        const usuario = new Usuario(req.body.nome,req.body.email,req.body.senha)
        usuario.insereUsuario(usuario)
        res.json(usuario)
    })
}

export default usuarioController