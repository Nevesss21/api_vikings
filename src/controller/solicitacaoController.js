import * as db from '../repository/solicitacaoRepository.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.get('/solicitar/:id', async (req, resp) =>{
    try {
        let id = req.params.id
        let registros = await db.conusltarSolicitacao(id);
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
endpoints.get('/solicitar-cpf/', async (req, resp) =>{
    try {

        let registros = await db.conusltarSolicitacaoCpf();
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
endpoints.post('/solicitar/', async (req, resp) =>{
    try {
        let solicitacao = req.body;
        let id = await db.inserirSolicitacao(solicitacao);

        resp.send({
            novoId: id
        })        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;