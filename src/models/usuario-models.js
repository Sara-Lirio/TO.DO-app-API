import bd from "../database/bd.js";
let id = 0
class Usuario {
    constructor(nome,email,senha){
        this.id=id++;
        this.nome=nome;
        this.email=email;
        this.senha=senha
    }

    insereUsuario = (usuario) => {
        bd.usuario.push(usuario)
    }

    pegaUsuarios = ()=>{
        return bd.usuario
    } 

    pegaUmUsuario = (email)=>{
        return bd.usuario.filter(usuario=>usuario.email===email)
    }

    deletaUsuario = (email) => {
        const newDB = bd.usuario.filter(usuario => usuario.email!==email)
        bd.usuario = newDB
    }
}

export default Usuario