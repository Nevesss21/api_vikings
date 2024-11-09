import con from "./connection.js";


export async function inserirInfo(infoCliente){
    const comando = ` 
        INSERT INTO tb_infoCliente (anotacoes, situacao) 
        VALUES(?,?);`;

    let resposta = await con.query(comando,[infoCliente.anotacao, infoCliente.situacao]);
    let info = resposta[0];

    return info.insertId;
}