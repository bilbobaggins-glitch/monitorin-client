import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BlankPage } from '../blank/blank';
import { CadastroDeUsuarioPage } from '../cadastro-de-usuario/cadastro-de-usuario';
import { CadastroDisciplinaPage } from '../cadastro-disciplina/cadastro-disciplina';
import { UsuarioManagerProvider } from '../../providers/usuario-manager/usuario-manager';
import { ControllerProvider } from '../../providers/controller-provider/controller-provider';
import { HttpClient } from '@angular/common/http';
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';
import { EstudanteMenuTurmas } from '../../classescustom/navegacao/EstudanteMenuTurmas';
import { getScrollData } from 'ionic-angular/umd/components/input/input';
import { SideMenuPage } from '../side-menu/side-menu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  nomeDeUsuarioInput: string;
  senhaInput: string;

  constructor(public http: HttpClient, public navController: NavController, public controllerProvider: ControllerProvider, public alertCtrl: AlertController) {

  }

  goToCadastroUsuario(){
    this.navController.push(CadastroDeUsuarioPage);
  }

  goToHome(){
    let mensagemObjeto = {
      json: {
        obj: {
          "dadosEntrada": {
            "nomedeusuario": this.nomeDeUsuarioInput,
            "senha": this.senhaInput
          },
          "dadosSaida": {
            "erros": {
              "usuarioVazio": null,
              "senhaVazia": null,
              "usuarioOuSenhaIncorreta": null
            },
            "sucesso": null
          }
        }, 
        txt: null
      }
    }

    let observable = this.controllerProvider.servidorMensagemEnviar(mensagemObjeto, 'realizarlogin');
    observable.subscribe((data) => {
      this.servidorRetornoHandler(data);
    });
  }

  servidorRetornoHandler(data: Object){
    if(data['dadosSaida'].sucesso == true){
      this.controllerProvider.usuarioLogado.usuario = data['dadosEntrada'].nomedeusuario;
      this.controllerProvider.usuarioLogado.senha = data['dadosEntrada'].senha;
      
      this.navController.push(SideMenuPage);
    } else {
      let alert = this.alertCtrl.create({
        title: 'Ops!',
        subTitle: "<p>Nome de usuário ou senha incorreto</p> <p>Tente novamente.</p>",
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
