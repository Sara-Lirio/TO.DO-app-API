const usuarioController = (app) => {
    app.get('/usuario', (req, res) => {
        res.send("Rota do Usuário")
    })

    app.post('/usuario',(req,res) => {
        res.send("Rota POST de usuário ativada: usuário adicionado ao banco de dados")
    })
}


export default usuarioController