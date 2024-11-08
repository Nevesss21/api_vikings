import con from "./connection.js";


export async function inserirRelatorio(relatorio) {
    const comando = `   
    INSERT INTO tb_relatorio (data_relatorio, opcao, fk_id_cliente, fk_id_consulta, fk_id_sessao) 
    VALUES(?, ?, ?, ?, ?);
   
        `;
    let resposta = await con.query(comando, [relatorio.data, relatorio.opcao, relatorio.fkCliente, relatorio.fkConsulta, relatorio.fkSecao]);
    let info = resposta[0];

    return info.insertId;
}

export async function conusltarRelatorio() {
    const comando = `
 
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}
