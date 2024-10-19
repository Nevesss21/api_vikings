import * as db from '../repository/produtoRepository.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.post('/tattoo/', async (req, resp) =>{
    try {
        let produto = req.body;
        let id = await db.inserirProduto(produto);

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