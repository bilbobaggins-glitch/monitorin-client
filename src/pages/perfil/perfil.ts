import { Component } from '@angular/core';
import { NavController, AlertController, Alert } from 'ionic-angular';
import { ControllerProvider } from '../../providers/controller-provider/controller-provider';
import { Usuario } from '../../classescustom/modelo/Usuario';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  usuarioLogado: Usuario;
  prompt: Alert;

  erroPresent: boolean = false;
  erroSenhaVazia: boolean = false;
  erroSenhaConfirmaDiferente: boolean = false;
  erroSenhaAtualIncorreta: boolean = false;

  constructor(public navCtrl: NavController, public ctrlProv: ControllerProvider, public alertCtrl: AlertController) {
    this.usuarioLogado = ctrlProv.usuarioLogado;
  }

  senhaAlterarStart(){
    let prompt = this.alertCtrl.create({
      title: 'Alterar senha',
      message: "Insira os dados abaixo para alterar sua senha",
      inputs: [
        {
          name: 'senhaAtual',
          placeholder: 'Senha atual',
          type: 'password'
        },
        {
          name: 'senhaNova',
          placeholder: 'Senha nova',
          type: 'password'
        },
        {
          name: 'senhaNovaConfirma',
          placeholder: 'Confirmar senha nova',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {

          }
        },
        {
          text: 'Salvar',
          handler: data => {
            this.erroPresent = false;

            this.verificarSenhaNovaSend(data);

            // if(!this.erroPresent){
            //   prompt.onDidDismiss(() => this.sucessoAlert());
            // } else {
            //   prompt.onDidDismiss(() =>  this.erroAlert());
            // }
            // if(this.verificarSenhaNova(data)){
            //   this.ctrlProv.alterarSenha(data.senhaNova);
            //   prompt.onDidDismiss(() => this.sucessoAlert());
            // } else {
            //   prompt.onDidDismiss(() =>  this.erroAlert());
            // }
          }
        }
      ]
    });

    prompt.present();
  }

  verificarSenhaNovaSend(data): void{
    let superVar = {
      json: {
        obj: {
          "dadosEntrada": {
            "nomedeusuario": this.ctrlProv.usuarioLogado.usuario,
            "senha": data.senhaAtual,
            "senhaNova": data.senhaNova
          },
          "dadosSaida": {
            "sucesso": null
          }
        },
        txt: null
      }
    }

    // this.ctrlProv.promiseSend(superVar, 'senhanova', this.verificarSenhaNovaReceive, this);
  }

  verificarSenhaNovaReceive(data, context){
    // let alert;
    
    // alert = context.alertCtrl.create({
    //   title: "title",
    //   subTitle: JSON.stringify(data),
    //   buttons: ['OK']
    // });

    // alert.present();

    console.log(data);
  }

  verificarSenhaNova(data): boolean{
    this.erroPresent = false;

    if(data.senhaAtual == ""){
      this.erroSenhaVazia = true;
    }
    // if(data.senhaAtual != this.ctrlProv.usuarioLogadoGetSenha()){
    //   this.erroSenhaAtualIncorreta = true;
    // }
    if(true){
      this.erroSenhaAtualIncorreta = true;
    }
    if(data.senhaNova != data.senhaNovaConfirma){
      this.erroSenhaConfirmaDiferente = true;
    }

    console.log("senha nova: "); console.log(data.senhaNova);
    console.log("senha confirma: "); console.log(data.senhaNovaConfirma);

    if(this.erroSenhaVazia || this.erroSenhaConfirmaDiferente || this.erroSenhaAtualIncorreta){
      this.erroPresent = true;
    }

    let erroPresentTemp: boolean = this.erroPresent;

    this.erroPresent = false;

    return !erroPresentTemp;
  }

  sucessoAlert(){
    this.exibirAlert("Sucesso!", "<p> Sua senha foi alterada com sucesso! </p>");
  }

  erroAlert(){
    let mensagem: string = "";

    if(this.erroSenhaVazia){
      mensagem += "<p> - Senha está vazia! </p>";
      this.erroSenhaVazia = false;
    }
    if(this.erroSenhaAtualIncorreta){
      mensagem += "<p> - Senha atual incorreta! </p>";
      this.erroSenhaAtualIncorreta = false;
    }
    if(this.erroSenhaConfirmaDiferente){
      mensagem += "<p> - Senha de confirmação diferente da nova senha! </p>";
      this.erroSenhaConfirmaDiferente = false;
    }

    mensagem += "<p> Tente novamente. </p>";

    this.exibirAlert("ERRO", mensagem);
  }

  exibirAlert(title, msg){
    let alert;
    
    alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });

    alert.present();
  }
  
}
