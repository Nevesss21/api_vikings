import * as db from '../repository/relatorioRepository.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.get('/relatorio/', async (req, resp) =>{
    try {

        let registros = await db.conusltarRelatorio();
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/relatorio-data/:id', async (req, resp) =>{
    try {

        let id = req.params.id
        let registros = await db.conusltarRelatorioData(id);
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/relatorio/', async (req, resp) =>{
    try {
        let relatorio = req.body;
        let id = await db.inserirRelatorio(relatorio);

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