import con from "./connection.js";

export async function inserirConsulta(consulta){
    const comando = `   
    INSERT INTO tb_consulta ( data_consulta, hora, preco, marcado, id_cliente)
    VALUES(?, ?, ?, false,?);

        `;

    let resposta = await con.query(comando,[consulta.data, consulta.hora, consulta.preco, consulta.id]);
    let info = resposta[0];

    return info.insertId;
}

export async function conusltarMarcar(){
    const comando = `
        SELECT 
        c.id AS cliente_id,
        c.nome,
        c.cpf,
        c.genero,
        c.idade,
        c.telefone,
        c.email,
        c.ideia AS cliente_ideia
    FROM 
        tb_cliente c
    LEFT JOIN 
        tb_consulta con ON c.id = con.id_cliente;

    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarConsulta(id){
    const comando = `
        update tb_consulta
        set marcado = true
        where id = ?;
    `;
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}