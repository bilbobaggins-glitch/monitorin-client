import { MenuItem } from "./MenuItem";
import { ControllerProvider } from "../../providers/controller-provider/controller-provider";
import { PerfilPage } from "../../pages/perfil/perfil";
import { CadastroDisciplinaPage } from "../../pages/cadastro-disciplina/cadastro-disciplina";
import { ProfessorMenuTurmaEspecifica } from "./ProfessorMenuTurmaEspecifica";
import { Turma } from "../modelo/Turma";

export class EstudanteMenuTurmaEspecifica{
    lista: Array<MenuItem> = new Array<MenuItem>();
    turmas: Array<Turma> = new Array<Turma>();

    constructor(public controllerProvider: ControllerProvider, public turmaId: number){
        this.lista.push( new MenuItem( "Atividade", null, null, null ) );
        this.lista.push( new MenuItem("Frequencia", null, null, null) );
    }

    refresh(){

    }
}