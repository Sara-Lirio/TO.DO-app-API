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
        console.log(bd.usuario);
        bd.usuario.push(usuario)
        console.log(bd.usuario)
    }
}

export default Usuario