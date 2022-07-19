const middlewareController = (app) => {
    app.use((req, res, next) => {
        console.log(req.headers)
        next()
    })
}

export default middlewareController