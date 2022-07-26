import bd from '../database/bd.js'

export default class UsuarioModel{

    insereUsuario = (usuario)=>{
        bd.usuario.push(usuario)
    }

    pegaUsuarios = ()=>{
        return bd.usuario
    }

    pegaUmUsuario = (email)=>{
        return bd.usuario.filter(usuario=>usuario.email===email)
    }

    deletaUsuario = (email)=>{
        const newDB = bd.usuario.filter(usuario=>usuario.email!==email)
        bd.usuario = newDB
    }

    atualizaUsuario = (email, novosDados)=>{
        const newDb = bd.usuario.map(usuario=>{
            if(usuario.email === email){
                return {
                    "id": usuario.id,
                    "nome" : novosDados.nome || usuario.nome,
                    "email" : novosDados.email || usuario.email,
                    "senha" : novosDados.senha || usuario.senha,
                }
            }
            return usuario
        })

        bd.usuario = newDb

    }

}
