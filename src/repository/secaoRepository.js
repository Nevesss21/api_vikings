import con from "./connection.js";



export async function inserirSecao(secao){
    const comando = `   
    INSERT INTO tb_sessao (anotacoes, situacao, fk_id_consulta,  fk_id_cliente) 
    VALUES(?, ?, ?, ?);
 
        `;

    let resposta = await con.query(comando,[secao.anotacoes, secao.situacao, secao.idConuslta, secao.idCliente]);
    let info = resposta[0];

    return info.insertId;
}

export async function conusltarSecao(){
    const comando = `
        SELECT 
        c.nome,
        c.cpf,
        a.data_consulta,
        a.hora
    FROM 
        tb_sessao s
    JOIN 
        tb_consulta a ON s.fk_id_consulta = a.id
    JOIN 
    tb_cliente c ON s.fk_id_cliente = c.id;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarSecao(id, consulta){
    const comando = `
    update tb_sessao
    set anotacoes = ?,
    situacao =?
    where id = ?;
    `;
    let resposta = await con.query(comando,[consulta.data, consulta.hora, consulta.preco, consulta.id, id]);
    let info = resposta[0];

    return info.affectedRows;
}



export async function removerSecao(id){
    const comando = `
    delete from tb_secao
    where id = ?;
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}
