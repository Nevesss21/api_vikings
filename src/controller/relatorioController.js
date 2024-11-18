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

endpoints.get('/relatorio-data/', async (req, resp) =>{
    try {

        let registros = await db.conusltarRelatorioData();
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
endpoints.get('/relatorio-id/:id', async (req, resp) =>{
    try {
        let id = req.params.id;
        let registros = await db.conusltarRelatorioPorId(id);
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
endpoints.get('/relatorio-renda/', async (req, resp) =>{
    try {
        let registros = await db.conusltarRelatorioPorRenda();
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/apagar-data/:id', async (req, resp) =>{
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.deletarRelatorioData(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
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