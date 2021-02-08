import { MenuItem } from "./MenuItem";
import { PerfilPage } from "../../pages/perfil/perfil";
import { ControllerProvider } from "../../providers/controller-provider/controller-provider";
import { ProfessorMenuTurmas } from "./ProfessorMenuTurmas";

export class ProfessorMenuInicial{
    menuItens: Array<MenuItem> = new Array<MenuItem>();
    
    constructor(ctrlProv: ControllerProvider){
        this.menuItens.push( new MenuItem( "Perfil", PerfilPage, null, null) );
        this.menuItens.push( new MenuItem( "Turmas", null, new ProfessorMenuTurmas(ctrlProv), null ) );
    }

    refresh(){}
}