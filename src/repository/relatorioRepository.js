import con from "./connection.js";


export async function inserirRelatorio(relatorio) {
    const comando = `   
        INSERT INTO tb_relatorio (data, id_criar, total_pessoas, renda, masculino, feminino, outro, maior, menor)
            VALUES (? ,?, ?, ?, ?, ?, ?, ?, ?);   
        `;
    let resposta = await con.query(comando, [relatorio.data, relatorio.id, relatorio.pessoas, relatorio.renda, relatorio.masculino, relatorio.feminino, relatorio.outro, relatorio.maior, relatorio.menor]);
    let info = resposta[0];

    return info.insertId;
}

export async function conusltarRelatorio() {
    const comando = `
        SELECT 
            COUNT(CASE WHEN genero = 'Feminino' AND marcado = true THEN 1 END) AS quantidade_feminino,
            COUNT(CASE WHEN genero = 'Masculino' AND marcado = true THEN 1 END) AS quantidade_masculino,
            COUNT(CASE WHEN genero = 'Outro' AND marcado = true THEN 1 END) AS quantidade_outro,
            COUNT(*) AS total_pessoas,
            (SELECT SUM(preco) FROM tb_consulta) AS renda_final,
            COUNT(CASE WHEN idade >= 18 AND marcado = true THEN 1 END) AS idade_igual_18,
            COUNT(CASE WHEN idade < 18 AND marcado = true THEN 1 END) AS idade_18
        FROM tb_cliente;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}
