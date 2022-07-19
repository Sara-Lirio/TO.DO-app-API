const usuarioController = (app) => {
    app.get('/usuario', (req, res) => {
        res.json("Rota do Usuário")
    })

    app.post('/usuario',(req,res) => {
        console.log('no post');
        console.log(req.body);
        res.json("Rota POST de usuário ativada: usuário adicionado ao banco de dados")
    })
}


export default usuarioController