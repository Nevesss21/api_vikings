import con from "./connection.js";


export async function inserirRelatorio(relatorio) {
    const comando = `   
        INSERT INTO tb_relatorio (data, total_pessoas, renda, masculino, feminino, outro, maior, menor)
            VALUES (CURDATE(), ?, ?, ?, ?, ?, ?, ?);   
        `;
    let resposta = await con.query(comando, [relatorio.pessoas, relatorio.renda, relatorio.masculino, relatorio.feminino, relatorio.outro, relatorio.maior, relatorio.menor]);
    let info = resposta[0];

    return info.insertId;
}

export async function conusltarRelatorio() {
    const comando = `
     SELECT 
    c.id,
    COUNT(CASE WHEN c.genero = 'Feminino' AND c.marcado = true THEN 1 END) AS quantidade_feminino,
    COUNT(CASE WHEN c.genero = 'Masculino' AND c.marcado = true THEN 1 END) AS quantidade_masculino,
    COUNT(CASE WHEN c.genero = 'Outro' AND c.marcado = true THEN 1 END) AS quantidade_outro,
    COUNT(*) AS total_pessoas,
    (SELECT SUM(preco) FROM tb_consulta) AS renda_final,
    COUNT(CASE WHEN c.idade >= 18 AND c.marcado = true THEN 1 END) AS idade_igual_18,
    COUNT(CASE WHEN c.idade < 18 AND c.marcado = true THEN 1 END) AS idade_18
FROM 
    tb_cliente AS c
GROUP BY 
    c.id;

    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros[0];
}

export async function conusltarRelatorioData(id) {
    const comando = `
       SELECT id,data FROM tb_relatorio
        where id = ?;
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros[0];
}
