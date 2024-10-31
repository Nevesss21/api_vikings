import con from "./connection.js";



export async function inserirContato(contato){
    const comando = `
    INSERT INTO tb_contato (nome, telefone, email, assunto, mensagem) VALUES
    (?,?,?,?,?);   
   
        `;

    let resposta = await con.query(comando,[contato.nome, contato.telefone, contato.email, contato.assunto, contato.mensagem]);
    let info = resposta[0];

    return info.insertId;
}
