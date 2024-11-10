import { Router } from 'express';
const endpoints = Router();
import * as db from '../repository/criarRepository.js'

endpoints.post('/criar/', async (req, resp) =>{
    try {
        let id = await db.criar();

        resp.send({
            novoId: id
        })        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/data/', async (req, resp) =>{
    try {

        let registros = await db.data();
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;