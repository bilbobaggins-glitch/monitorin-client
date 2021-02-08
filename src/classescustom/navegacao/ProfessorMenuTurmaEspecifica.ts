
import { PerfilPage } from "../../pages/perfil/perfil";
import { CadastroDisciplinaPage } from "../../pages/cadastro-disciplina/cadastro-disciplina";
import { MenuItem } from "./MenuItem";
import { Turma } from "../modelo/Turma";
import { ControllerProvider } from "../../providers/controller-provider/controller-provider";
import { ProfessorMenuAtividades } from "./ProfessorMenuAtividades";
import { ProfessorMenuFrequencia } from "./ProfessorMenuFrequencia";


export class ProfessorMenuTurmaEspecifica{
    lista: Array<MenuItem> = new Array<MenuItem>();
    
    constructor(ctrlProv: ControllerProvider, turmaId: number){
        this.lista.push( new MenuItem( "Novo Cadastro", CadastroDisciplinaPage, null, null ) );
        this.lista.push( new MenuItem( "Atividade", null, new ProfessorMenuAtividades(ctrlProv, turmaId), null ) );
        this.lista.push( new MenuItem("Frequencia",  null, new ProfessorMenuFrequencia(ctrlProv, turmaId), null) );
    }

    refresh(){
        
    }
}