import Usuario from "../models/usuario-models.js"

const usuarioController = (app) => {
    app.get('/usuario', (req, res) => {
        res.json("Rota do Usuário")
    })

    app.post('/usuario',(req,res) => {
        const instancia = new Usuario(req.body.nome,req.body.email,req.body.senha)
        res.json(instancia)
    })
}

export default usuarioController