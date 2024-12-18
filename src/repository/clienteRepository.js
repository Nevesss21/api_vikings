import con from "./connection.js";



export async function inserirCliente(cliente){
    const comando = `   
    INSERT INTO tb_cliente (nome, cpf, genero, idade, telefone, email, ideia, marcado)
           VALUES( ?, ?, ?, ?, ?, ?, ?, false);
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
               ideia        
          from tb_cliente
          where marcado = false;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];
    return registros;
}

export async function conusltarClienteId(id){
    const comando = `
        select id,
               nome,
               cpf,
               genero,
               idade,
               telefone,
               email,
               ideia        
          from tb_cliente
          where id = ?;
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros[0];
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
               ideia = ?
         where id = ?;
    `;
    let resposta = await con.query(comando,[cliente.nome,cliente.cpf,cliente.genero,cliente.idade, 
        cliente.telefone, cliente.email, cliente.data, cliente.ideia, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function consultaMarcada(id){
    const comando = `
        update tb_cliente
        set marcado = true
        where id = ?;
    `;
    let resposta = await con.query(comando,[id]);
    let info = resposta[0];

    return info.affectedRows;
}
