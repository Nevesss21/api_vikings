import con from "./connection.js";


export async function conusltarSolicitacao(){
    const comando = `
        SELECT 
        c.nome,
        c.cpf,
        c.genero,
        c.idade,
        c.telefone,
        c.email,
        c.ideia
    FROM 
        tb_solicitacao s
    JOIN 
        tb_cliente c ON s.fk_id_cliente = c.id;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}
export async function conusltarSolicitacaoCpf(){
    const comando = `
       SELECT 
            c.nome,
            c.cpf
       FROM 
            tb_solicitacao s
    JOIN 
        tb_cliente c ON s.fk_id_cliente = c.id;

    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}
