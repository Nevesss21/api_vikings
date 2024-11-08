import con from "./connection.js";


export async function conusltarSolicitacao(id){
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
    tb_cliente c ON s.fk_id_cliente = c.id
WHERE 
    c.id = ?;
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0][0];

    return registros;
}
export async function conusltarSolicitacaoCpf(){
    const comando = `
       SELECT 
            c.id,
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
export async function inserirSolicitacao(solicitar){
    const comando = `
      insert into tb_solicitacao(fk_id_cliente)
        values(?);
    `;

    let resposta = await con.query(comando,[solicitar.id]);
    let info = resposta[0];

    return info.insertId;
}

