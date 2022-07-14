import express from 'express'


const app = express()
const port = 3001

app.get('/t', (req,res) =>{
   return res.send('teste!!')
});

app.listen(port, ()=>{  
    console.log(`Servidor online no endereço http://localhost:${port}`)
});
