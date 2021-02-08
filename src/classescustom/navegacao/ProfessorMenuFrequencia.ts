import { PerfilPage } from "../../pages/perfil/perfil";
import { CadastroDisciplinaPage } from "../../pages/cadastro-disciplina/cadastro-disciplina";
import { MenuItem } from "./MenuItem";
import { ControllerProvider } from "../../providers/controller-provider/controller-provider";
import { Turma } from "../modelo/Turma";
import { AulaPage } from "../../pages/aula/aula";

export class ProfessorMenuFrequencia{
    menuItens: Array<MenuItem> = new Array<MenuItem>();
    parametroObjeto: any;

    constructor(ctrlProv: ControllerProvider, turmaId: number){
    }
}