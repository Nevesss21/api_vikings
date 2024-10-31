import { Router } from 'express';
const endpoints = Router();
import * as db from '../repository/contatoRepository.js'

endpoints.post('/contato/', async (req, resp) =>{
    try {
        let contato = req.body;
        let id = await db.inserirContato(contato);

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