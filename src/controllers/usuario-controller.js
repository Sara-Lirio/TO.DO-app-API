const usuarioController = (app) => {
    app.get('/usuario', (req, res) => {
        res.send("Rota do Usário")
    })
}

export default usuarioController