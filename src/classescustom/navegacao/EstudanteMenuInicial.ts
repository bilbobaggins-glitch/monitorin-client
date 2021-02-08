import { MenuItem } from "./MenuItem";
import { PerfilPage } from "../../pages/perfil/perfil";
import { ControllerProvider } from "../../providers/controller-provider/controller-provider";
import { MonitoradaPage } from "../../pages/monitorada/monitorada";
import { EstudanteMenuTurmas } from "./EstudanteMenuTurmas";

export class EstudanteMenuInicial{
    menuItens: Array<MenuItem> = new Array<MenuItem>();
    
    constructor(controller: ControllerProvider){
        this.menuItens.push( new MenuItem( "Perfil", PerfilPage, null, null) );
        this.menuItens.push( new MenuItem( "Turmas", null, new EstudanteMenuTurmas(controller), null ) );
        // this.lista.push( new MyMenuItem( "Resumo", ResumoPage, null, null) );
        // this.lista.push( new MyMenuItem( "Monitoradas", MonitoradaPage, null, null) );
        this.menuItens.push( new MenuItem( "Resumo", null, null, null) );
        this.menuItens.push( new MenuItem( "Monitoradas", null, null, null) );
    }

    refresh(){}
}