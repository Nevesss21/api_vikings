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
    COUNT(CASE WHEN genero = 'Feminino' AND marcado = true THEN 1 END) AS quantidade_feminino,
    COUNT(CASE WHEN genero = 'Masculino' AND marcado = true THEN 1 END) AS quantidade_masculino,
    COUNT(CASE WHEN genero = 'Outro' AND marcado = true THEN 1 END) AS quantidade_outro,
    COUNT(*) AS total_pessoas,
    (SELECT SUM(preco) FROM tb_consulta) AS renda_final,
    COUNT(CASE WHEN idade >= 18 AND marcado = true THEN 1 END) AS idade_igual_18,
    COUNT(CASE WHEN idade < 18 AND marcado = true THEN 1 END) AS idade_18
FROM tb_cliente
where marcado = true;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros[0];
}

export async function conusltarRelatorioData() {
    const comando = `
       SELECT id,data FROM tb_relatorio;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}
export async function conusltarRelatorioPorId(id) {
    const comando = `
        select * from tb_relatorio
        where id = ?;
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros;
}

export async function conusltarRelatorioPorRenda() {
    const comando = `
        select id, renda from tb_relatorio;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function conusltarRelatorioGenero() {
    const comando = `
     select id, total_pessoas, masculino, feminino, outro from tb_relatorio;
    `;
    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}
export async function conusltarRelatorioIdade() {
    const comando = `
     select id, total_pessoas, maior,  menor from tb_relatorio;
    `;
    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function deletarRelatorioData(id) {
    const comando = `
        delete from tb_relatorio
        where id = ?; 
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}
