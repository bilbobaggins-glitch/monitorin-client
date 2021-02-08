
import { PerfilPage } from "../../pages/perfil/perfil";
import { CadastroDisciplinaPage } from "../../pages/cadastro-disciplina/cadastro-disciplina";
import { MenuItem } from "./MenuItem";
import { Turma } from "../modelo/Turma";
import { ControllerProvider } from "../../providers/controller-provider/controller-provider";
import { AtividadeEspecificaPage } from "../../pages/atividade-especifica/atividade-especifica";
import { Atividade } from "../modelo/Atividade";


export class ProfessorMenuAtividades{
    menuItens: Array<MenuItem> = new Array<MenuItem>();
    atividades: Atividade;
    
    constructor(public controller: ControllerProvider, public turmaId: number){}

    atividadesCarregar(){
        let servidorMensagemObjeto = {
            json: {
              obj: {
                "dadosEntrada": {
                  "usuario": this.controller.usuarioLogado.usuario,
                  "senha": this.controller.usuarioLogado.senha,
                  "turma_id": this.turmaId
                },
                "dadosSaida": {
                  "estudantes": null,
                  "estudanteslength": 0
                }
              }, 
              txt: null
            }
          }

        this.controller.servidorMensagemEnviar(servidorMensagemObjeto, 'atividade-get-by-turma-id');
    }

    refresh(){}
}