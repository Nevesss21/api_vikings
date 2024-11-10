import con from "./connection.js";


export async function criar() {
    const comando = ` 
    insert into criar()
    values();`;

    let resposta = await con.query(comando);
    let info = resposta[0];

    return info.insertId;
}
export async function data() {
    const comando = ` 
    SELECT CURDATE();
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}