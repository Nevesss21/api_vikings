import con from "./connection.js";
import crypto from "crypto-js"

export async function inserirAdm(adm) {
    const comando = `   
    INSERT INTO tb_administrador (cpf, email, senha)
    VALUES(?, ?, ?);
    
        `;

    let hash = crypto.SHA256(adm.senha).toString();
    let resposta = await con.query(comando, [adm.cpf, adm.email, hash]);
    let info = resposta[0];
    return info.insertId;
}



export async function alterarAdm(id, adm) {
    const comando = `
    update tb_administrador
    set
    senha = ?
    where id = ?;
    `;
    
    let hash = crypto.SHA256(adm.senha).toString();
    let resposta = await con.query(comando, [hash, id]);
    let info = resposta[0];
    return info.affectedRows;
}


export async function validarUsuario(pessoa) {
    const comando = `
    select id,
    cpf
    from tb_administrador
    where 
    cpf =? 
    and senha = ?
    `;

    let hash = crypto.SHA256(pessoa.senha).toString();
    let registros = await con.query(comando, [pessoa.cpf, hash])
    return registros[0][0];
}