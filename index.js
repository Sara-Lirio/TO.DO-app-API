import express from 'express'

const app = express()
const port = 3001

app.get('/t', (req,res) =>{
    res.send('teste!!')
})