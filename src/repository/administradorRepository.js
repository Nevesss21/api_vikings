import con from "./connection.js";


export async function inserirAdm(adm){
    const comando = `   
    INSERT INTO tb_administrador (cpf, email, senha)
    VALUES(?, ?, ?);
    
        `;
    let resposta = await con.query(comando,[adm.cpf, adm.email, adm.senha]);
    let info = resposta[0];

    return info.insertId;
}



export async function alterarAdm(id, adm){
    const comando = `
    update tb_administrador
    set
    senha = ?
    where id = ?;
    `;
    let resposta = await con.query(comando,[adm.senha, id]);
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
    
    let registros = await con.query(comando, [pessoa.cpf, pessoa.senha])
    return registros[0][0];
}