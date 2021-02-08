import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events, NavParams, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BlankPage } from '../blank/blank';
import { MenuItem } from '../../classescustom/navegacao/MenuItem';
import { ProfessorMenuInicial } from '../../classescustom/navegacao/ProfessorMenuInicial';
import { ControllerProvider } from '../../providers/controller-provider/controller-provider';
import { LoginPage } from '../login/login';
import { MonitoradaPage } from '../monitorada/monitorada';
import { EstudanteAtividadesPage } from '../estudante-atividades/estudante-atividades';
import { Usuario } from '../../classescustom/modelo/Usuario';
import { Turma } from '../../classescustom/modelo/Turma';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CadastroDeUsuarioPage } from '../cadastro-de-usuario/cadastro-de-usuario';
import { CadastroDisciplinaPage } from '../cadastro-disciplina/cadastro-disciplina';
import { EstudanteMenuInicial } from '../../classescustom/navegacao/EstudanteMenuInicial';

@Component({
  templateUrl: 'side-menu.html'
})
export class SideMenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = null;

  itensAnteriores: Array<Array<any>> = new Array<Array<any>>();
  itens: Array<any> = new Array<any>();

  constructor(public http: HttpClient, public navController: NavController, public events: Events, public navParam: NavParams, public controllerProvider: ControllerProvider, public menuController: MenuController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ionViewDidLoad(){
    this.professorEstudanteDeterminar();
  }

  professorEstudanteDeterminar(){
    let servidorMensagemObjeto = {
      json: {
        obj: {
          "dadosEntrada": {
            "nomedeusuario": this.controllerProvider.usuarioLogado.usuario,
            "senha": this.controllerProvider.usuarioLogado.senha,
          },
          "dadosSaida": {
            "professor": null
          }
        }, 
        txt: null
      }
    }

    let observable = this.controllerProvider.servidorMensagemEnviar(servidorMensagemObjeto, 'testeprofessor');
    observable.subscribe((data) => {
      this.professorEstudanteDeterminarServidorRespostaHandler(data);
    });
  }

  professorEstudanteDeterminarServidorRespostaHandler(data){
    let menu;
    if(data['dadosSaida'].professor == true){
      menu = new ProfessorMenuInicial(this.controllerProvider);
      this.itensAnteriores.push(menu.menuItens);
      this.itens = this.itensAnteriores[this.itensAnteriores.length - 1];

      this.rootPage = BlankPage;
    } else {
      menu = new EstudanteMenuInicial(this.controllerProvider);
      this.itensAnteriores.push(menu.menuItens);
      this.itens = this.itensAnteriores[this.itensAnteriores.length - 1];

      this.rootPage = BlankPage;
    }
  }

  menuRedirecionar(item: MenuItem) {
    if(item.pagina != null){
      this.nav.setRoot(item.pagina, { param: item.parametroObjeto });
      this.menuController.close();
    } else if (item.submenu != null){
      item.submenu.refresh();

      this.itensAnteriores.push(item.submenu.menuItens);
      this.itens = this.itensAnteriores[this.itensAnteriores.length - 1];
    } else {

    }
  }

  voltarMenu(){
    this.itensAnteriores.pop();
    this.itens = this.itensAnteriores[this.itensAnteriores.length - 1];
  }

  logoff(){
    this.navController.setRoot(LoginPage);
    this.menuController.close();
  }
}
