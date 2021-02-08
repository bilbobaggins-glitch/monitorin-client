export class MenuItem {
    label: string;
    pagina: any;
    submenu: any;
    parametroObjeto: any;

    constructor(labelParametro: string, paginaParametro: any, submenuParametro: any, parametroObjetoParametro: any){
        this.label = labelParametro;
        this.pagina = paginaParametro;
        this.submenu = submenuParametro;
        this.parametroObjeto = parametroObjetoParametro;
    }
}