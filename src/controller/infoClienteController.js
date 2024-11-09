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

export default endpoints;