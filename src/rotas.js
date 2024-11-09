import clienteController from './controller/clienteController.js'
import administradorController from './controller/administradorController.js'
import marcarConsultaController from './controller/marcarConsultaController.js'
import relatorioController from  './controller/relatorioController.js'
import secaoContoller from './controller/secaoController.js'
import solicitacaoController from './controller/solicitacaoController.js'
import contatoController from './controller/contatoController.js'
import infoClienteController from './controller/infoClienteController.js'


export default function adicionarRotas(servidor){
    servidor.use(clienteController);
    servidor.use(administradorController);
    servidor.use(marcarConsultaController);
    servidor.use(relatorioController);
    servidor.use(secaoContoller);
    servidor.use(solicitacaoController);
    servidor.use(contatoController);
    servidor.use(infoClienteController);
}
