import * as db from '../repository/secaoRepository.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.get('/secao/', async (req, resp) =>{
    try {

        let registros = await db.conusltarSecao();
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
endpoints.get('/secao/:id', async (req, resp) =>{
    try {
        let id = req.params.id

        let registros = await db.conusltarSecaoId(id);
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/secao/', async (req, resp) =>{
    try {
        let secao = req.body;
        let id = await db.inserirSecao(secao);

        resp.send({
            novoId: id
        })        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/secao/:id', async (req, resp) =>{
    try {
        let id = req.params.id;
        let secao = req.body;

        let linhasAfetadas = await db.alterarSecao(id, secao);
        if(linhasAfetadas >= 1){
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'nenhum registro encontrado '})
        } 
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
endpoints.delete('/secao/:id', async (req, resp) =>{
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerSecao(id);
        if(linhasAfetadas >= 1){
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'nenhum registro encontrado '})
        }  
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/secao-pesquisa/', async (req, resp) =>{
    try {
        let informacao = req.body
        let registros = await db.conusltarSessao(informacao);
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints