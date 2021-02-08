import { MenuItem } from "./MenuItem";
import { ControllerProvider } from "../../providers/controller-provider/controller-provider";
import { PerfilPage } from "../../pages/perfil/perfil";
import { CadastroDisciplinaPage } from "../../pages/cadastro-disciplina/cadastro-disciplina";
import { ProfessorMenuTurmaEspecifica } from "./ProfessorMenuTurmaEspecifica";
import { EstudanteMenuTurmaEspecifica } from "./EstudanteMenuTurmaEspecifica";
import { Turma } from "../modelo/Turma";

export class EstudanteMenuTurmas{
    menuItens: Array<MenuItem> = new Array<MenuItem>();
    turmas: Array<Turma> = new Array<Turma>();

    constructor(public ctrlProv: ControllerProvider){
        this.turmasCarregar();
    }

    turmasCarregar(){
        let servidorMensagemObjeto = {
            json: {
                obj: {
                "dadosEntrada": {
                    "usuario": this.ctrlProv.usuarioLogado.usuario,
                    "senha": this.ctrlProv.usuarioLogado.senha,
                },
                "dadosSaida": {
                    "turmas": null
                }
                }, 
                txt: null
            }
        }
        
        let observable = this.ctrlProv.servidorMensagemEnviar(servidorMensagemObjeto, 'turmas-get-by-estudante');
        observable.subscribe((dados) => this.turmasCarregarServidorRespostaHandler(dados));
    }

    turmasCarregarServidorRespostaHandler(dados){
        this.menuItens.splice(0);
        for(let i = 0; i < dados['length']; i++){
            this.menuItens.push(new MenuItem(dados[i].disciplina, null, new EstudanteMenuTurmaEspecifica(this.ctrlProv, dados[i].id), null));
        }
    }

    refresh(){
        this.turmasCarregar();
    }
}