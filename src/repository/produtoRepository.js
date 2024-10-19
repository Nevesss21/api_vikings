import con from "./connection.js";



export async function inserirProduto(produto){
    const comando = `   
    INSERT INTO tb_produto (nome, preco)
    VALUES (?, ?);
    
        `;
    let resposta = await con.query(comando,[produto.nome, produto.preco]);
    let info = resposta[0];

    return info.insertId;
}