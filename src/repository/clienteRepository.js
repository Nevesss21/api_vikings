import con from "./connection.js";



export async function inserirCliente(cliente){
    const comando = `   
    INSERT INTO tb_cliente (nome, cpf, genero, idade, telefone, email, ideia)
           VALUES( ?, ?, ?, ?, ?, ?, ?);
        `;

    let resposta = await con.query(comando,[cliente.nome,cliente.cpf,cliente.genero,cliente.idade, 
        cliente.telefone, cliente.email, cliente.ideia]);
    let info = resposta[0];

    return info.insertId;
}

export async function conusltarCliente(){
    const comando = `
        select id,
               nome,
               cpf,
               genero,
               idade,
               telefone,
               email,
               data_cliente,
               ideia        
          from tb_cliente;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarCliente(id, cliente){
    const comando = `
        update tb_cliente
           set nome = ?,
               cpf = ?,
               genero = ?,
               idade = ?,
               telefone = ?,
               email = ?,
               data_cliente = ?,
               ideia = ?
         where id = ?;
    `;
    let resposta = await con.query(comando,[cliente.nome,cliente.cpf,cliente.genero,cliente.idade, 
        cliente.telefone, cliente.email, cliente.data, cliente.ideia, id]);
    let info = resposta[0];

    return info.affectedRows;
}
