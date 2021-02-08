import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { UsuarioManagerProvider } from '../../providers/usuario-manager/usuario-manager';
import { ControllerProvider } from '../../providers/controller-provider/controller-provider';


@Component({
  selector: 'page-cadastro-de-usuario',
  templateUrl: 'cadastro-de-usuario.html'
})
export class CadastroDeUsuarioPage {
  perfis: Array<{nome: string}> = new Array<{nome: string}>();

  senhaInput: string = '';
  nomeDeUsuarioInput: string = '';
  confirmacaoDeSenhaInput: string = '';
  rgInput: string = '';
  nomeInput: string = '';
  sobrenomeInput: string = '';

  inputError: boolean = false;
  senhaEqualConfirmationError: boolean = false;
  nomeDeUsuarioEmptyError: boolean = false;
  rgEmptyError: boolean = false;

  msgErro: string = '';

  superVar: Object;

  constructor(public ctrlProv: ControllerProvider, public navCtrl: NavController, public allertController: AlertController) {
  }

  cadastrar(){

    this.superVar = {
      json: {
        obj: {
          "dadosEntrada": {
            "nomedeusuario": this.nomeDeUsuarioInput,
            "senha": this.senhaInput,
            "senhaConfirmacao": this.confirmacaoDeSenhaInput,
            "rg": this.rgInput,
            "nome": this.nomeInput,
            "sobrenome": this.sobrenomeInput 
          },
          "dadosSaida": {
            "erros": {
              "rgNaoCadastrado": null
            },
            "sucesso": null
          }
        }, 
        txt: null
      }
    }

    if(this.senhaInput !== this.confirmacaoDeSenhaInput){
      this.senhaEqualConfirmationError = true;
    }
    if(this.nomeDeUsuarioInput == ''){
      this.nomeDeUsuarioEmptyError = true;
    }
    if(this.rgInput == ''){
      this.rgEmptyError = true;
    }

    if(this.senhaEqualConfirmationError == true ||
       this.nomeDeUsuarioEmptyError == true ||
       this.rgEmptyError == true){

        this.inputError = true;
    }

    if(this.senhaEqualConfirmationError == true){
      this.msgErro += '<p> - Senha não foi repetida corretamente! </p>'
    }
    if(this.nomeDeUsuarioEmptyError == true){
      this.msgErro += '<p> - Nome de usuário está vazio </p>'
    }
    if(this.rgEmptyError == true){
      this.msgErro += '<p> - RG está vazio! </p>'
    }

    let alert;
    if(this.inputError == true){
      alert = this.allertController.create({
        title: 'Ops!',
        subTitle: this.msgErro + "<p>Tente novamente.</p>",
        buttons: ['OK']
      });
      alert.present();
    }else{
      // this.ctrlProv.promiseSend(this.superVar, 'cadastrarusuario', this.cadastrarFinish, this);
    }

    this.msgErro = ''; //tem que reiniciar ou a cada execução a mensagem vai aumentando
    this.senhaEqualConfirmationError = false;
    this.nomeDeUsuarioEmptyError = false;
    this.rgEmptyError = false;
    this.inputError = false;
  }

  cadastrarFinish(data: Object, context: any){
    console.log(data);

    context.superVar['json'].txt = JSON.stringify(data);
    context.superVar['json'].obj = JSON.parse(context.superVar['json'].txt);

    let alert;
    if(context.superVar['json'].obj.dadosSaida.erros.rgNaoCadastrado == true){
      alert = context.allertController.create({
        title: 'Ops!',
        subTitle: "<p> - Esse RG não está cadastrado! Entre em contato com a sua instituição de ensino! </p>" + "<p>Tente novamente.</p>",
        buttons: ['OK']
      });
    } else {
      alert = context.allertController.create({
        title: 'Uhul!!',
        subTitle: 'SUCESS',
        buttons: ['OK']
      });
    }
    alert.present();
  }

}
