import * as db from '../repository/clienteRepository.js'

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/cliente/', async (req, resp) =>{
    try {
    
        let registros = await db.conusltarCliente();
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/cliente/:id', async (req, resp) =>{
    try {
        let id = req.params.id
        let registros = await db.conusltarClienteId(id);
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/cliente/', async (req, resp) =>{
    try {
        let cliente = req.body;
        let id = await db.inserirCliente(cliente);

        resp.send({
            novoId: id
        })        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/cliente/:id', async (req, resp) =>{
    try {
        let id = req.params.id;
        let cliente = req.body;

        let linhasAfetadas = await db.alterarCliente(id, cliente);
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

endpoints.put('/marcar/:id', async (req, resp) =>{
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.consultaMarcada(id);
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

export default endpoints