import con from "./connection.js";


export async function inserirInfo(infoCliente) {
    const comando = ` 
        INSERT INTO tb_infoCliente (anotacoes, situacao) 
        VALUES(?,?);`;

    let resposta = await con.query(comando, [infoCliente.anotacao, infoCliente.situacao]);
    let info = resposta[0];

    return info.insertId;
}

export async function alterarInfo(id, infoCliente) {
    const comando = `
    update tb_infoCliente
    set anotacoes = ?,
    situacao =?
    where id = ?;
    `;
    let resposta = await con.query(comando, [infoCliente.anotacao, infoCliente.situacao, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function conusltarInfo(informacao) {
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
            tb_cliente c ON s.fk_id_cliente = c.id
            WHERE 
            c.nome = ?
            or
            c.cpf = ?;
    `;

    let resposta = await con.query(comando, [informacao.nome, informacao.cpf]);
    let registros = resposta[0][0];

    return registros;
}