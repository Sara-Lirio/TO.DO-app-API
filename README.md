# TO.DO-app-API
Criação e desenvolvimento de uma API para um quadro de tarefas no curso da Resilia T17.


  
  ##  <img src="https://miro.medium.com/max/400/1*tfZa4vsI6UusJYt_fzvGnQ.png" width="16px;"> Node.js <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"  width="25px;"> 

 **`package.json`** <sup> Contém a descrição do projeto, o gerenciador de scripts e o manifesto do aplicativo. 
                           Seu principal objetivo é rastrear as dependências do seu aplicativo e suas respectivas versões.</sup>
                           
**`package-lock.json`** <sup> Contém as denpendências.</sup>

###  <img src="https://miro.medium.com/max/400/1*tfZa4vsI6UusJYt_fzvGnQ.png" width="16px;"> Node Package Manager

 **`npm init`**   <sup>Criação de mini-biblioteca local </sup> <br>
 
  **`npm install express`**   <sup>Framework de Node.js mais utilizado para desenvolver webapps e API’s </sup> <br>
  
  **`npm install nodemon --save-dev`**   <sup>Adicionamos o nodemon ao projeto como dependência de desenvolvimento.</sup> <br>

   **`npm run [nome do comando]`**   <sup>Roda o comando dado em uma dependência criado por script. </sup> <br>


####  <img src="https://miro.medium.com/max/400/1*tfZa4vsI6UusJYt_fzvGnQ.png" width="14px;"> NPM Script

**Arquivo package.json**<br>

Exemplo:<br>
>"scripts" : {<br>
  "start" : "node ./src/app.js"<br>
},

**`npm run start`** <sup>Roda o comando start criado por script. </sup> <br>


>"scripts" : {<br>
  "dev" : "nodemon ./src/app.js"<br>
},

**`npm run dev`** <sup>Roda o comando dev criado por script. </sup> <br>


##  <img src="https://miro.medium.com/max/400/1*tfZa4vsI6UusJYt_fzvGnQ.png" width="16px;"> CRUD
**C** create - **POST**<br> 
**R** read -  **GET** <br> 
**U** update - **PUT** <br> 
**D** delete - **DELETE**<br> 

###  <img src="https://miro.medium.com/max/400/1*tfZa4vsI6UusJYt_fzvGnQ.png" width="16px;"> Rotas Implementadas

**GET**
`get'/usuario'`
`get'/tarefa'`<br>
**POST**
`post'/usuario'`
`post'/tarefa'`
