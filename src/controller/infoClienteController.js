import * as db from '../repository/infoClienteRepository.js'

import { Router } from 'express';
const endpoints = Router();


endpoints.post('/info-cliente/', async (req, resp) =>{
    try {
        let info = req.body;
        let id = await db.inserirInfo(info);

        resp.send({
            novoId: id
        })        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/info-cliente/:id', async (req, resp) =>{
    try {
        let id = req.params.id;
        let info = req.body;

        let linhasAfetadas = await db.alterarInfo(id, info);
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

endpoints.post('/infocliente/', async (req, resp) =>{
    try {
        let informacao = req.body
        let registros = await db.conusltarInfo(informacao);
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;