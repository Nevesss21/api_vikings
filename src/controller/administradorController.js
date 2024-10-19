import * as db from '../repository/administradorRepository.js'
import { gerarToken } from '../utils/jwt.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.post('/adm/', async (req, resp) =>{
    try {
        let adm = req.body;
        let id = await db.inserirAdm(adm);

        resp.send({
            novoId: id
        })        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/entrar/', async (req, resp) => {
    try {
        let pessoa = req.body;

        let usuario = await db.validarUsuario(pessoa);

        if (usuario == null) {
            resp.send({ erro: "Usuário ou senha incorreto(s)" })
        } else {
            let token = gerarToken(usuario);
            resp.send({
                "token": token 
            })
        } 
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/adm/:id', async (req, resp) =>{
    try {
        let id = req.params.id;
        let adm = req.body;

        let linhasAfetadas = await db.alterarAdm(id, adm);
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