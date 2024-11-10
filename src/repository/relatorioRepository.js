import con from "./connection.js";


export async function inserirRelatorio(relatorio) {
    const comando = `   
    INSERT INTO tb_relatorio (data_relatorio, opcao) 
    VALUES(?, ?);
   
        `;
    let resposta = await con.query(comando, [relatorio.data, relatorio.opcao]);
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
