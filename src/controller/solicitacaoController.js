import * as db from '../repository/solicitacaoRepository.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.get('/solicitar/', async (req, resp) =>{
    try {

        let registros = await db.conusltarSolicitacao();
        resp.send(registros)  
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;