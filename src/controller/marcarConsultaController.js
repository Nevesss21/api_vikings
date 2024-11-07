import * as db from '../repository/marcarConsultaRepository.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.get('/marcar/', async (req, resp) =>{
    try {

        let registros = await db.conusltarMarcar();
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/marcar/', async (req, resp) =>{
    try {
        let consulta = req.body;
        let id = await db.inserirConsulta(consulta);

        resp.send({
            novoId: id
        })        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/consulta/:id', async (req, resp) =>{
    try {
        let id = req.params.id;
        let consulta = req.body;

        let linhasAfetadas = await db.alterarConsulta(id, consulta);
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