import { MenuItem } from "./MenuItem";
import { ControllerProvider } from "../../providers/controller-provider/controller-provider";
import { PerfilPage } from "../../pages/perfil/perfil";
import { CadastroDisciplinaPage } from "../../pages/cadastro-disciplina/cadastro-disciplina";
import { ProfessorMenuTurmaEspecifica } from "./ProfessorMenuTurmaEspecifica";

export class ProfessorMenuTurmas{
    menuItens: Array<MenuItem> = new Array<MenuItem>();

    constructor(public controller: ControllerProvider){
        this.menuItens.push( new MenuItem( "Cadastrar", CadastroDisciplinaPage, null, null ) );
        this.turmasCarregar();
    }

    turmasCarregar(){
        let servidorMensagemObjeto = {
            json: {
                obj: {
                "dadosEntrada": {
                    "usuario": this.controller.usuarioLogado.usuario,
                    "senha": this.controller.usuarioLogado.senha,
                },
                "dadosSaida": {
                    "turmas": null
                }
                }, 
                txt: null
            }
        }

        let observable = this.controller.servidorMensagemEnviar(servidorMensagemObjeto, 'getturmasbyprofessor');
        observable.subscribe((dados) => this.turmasCarregarServidorRespostaHandler(dados));
    }

    turmasCarregarServidorRespostaHandler(dados){
        for(let i = 0; i < dados['length']; i++){
            this.menuItens.push(new MenuItem(dados[i].disciplina, null, new ProfessorMenuTurmaEspecifica(this.controller, dados[i].id), null));       
        }
    }

    refresh(){
        this.menuItens.splice(0);
        this.menuItens.push( new MenuItem( "Cadastrar", CadastroDisciplinaPage, null, null ) );
        this.turmasCarregar();
    }
}