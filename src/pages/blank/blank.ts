import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstudanteAtividadesPage } from '../estudante-atividades/estudante-atividades';
import { AtividadeEspecificaPage } from '../atividade-especifica/atividade-especifica';
import { TurmaManagerProvider } from '../../providers/turma-manager/turma-manager';
import { Turma } from '../../classescustom/modelo/Turma';
import { ControllerProvider } from '../../providers/controller-provider/controller-provider';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html'
})
export class BlankPage {
  constructor(public controller: ControllerProvider){
    let servidorMensagemEnviar = {
      json: {
        obj: {
          dadosEntrada: {
            usuario: 'miguelsilva1',
            senha: '1235'
          },
          dadosSaida: {
            erros: null,
            sucesso: null
          }
        },
        txt: null
      }
    }

    console.log("lalalal");
    console.log(servidorMensagemEnviar);

    // let observable = this.controller.servidorMensagemEnviar(servidorMensagemEnviar, 'turma/insert');
    // observable.subscribe((dados) => {
    //   let erro;
    //   for(let i = 0; i < dados['dadosSaida'].erros.length; i++){
    //     erro = dados['dadosSaida'].erros[i];
    //     console.log(erro.numero + " ERROR: " + erro.nome);
    //     console.log(erro.mensagem);
    //   }
    // });

    let mensagemObjeto = {
      usuario: "miguelsilva1",
      senha: "1234"
    }

    let observable = this.controller.servidorMensagemEnviarPOST(mensagemObjeto, 'login');
    observable.subscribe((dados) => { console.log(dados); });

    // let observable = this.controller.servidorMensagemEnviar2(servidorMensagemEnviar, 'turmas');
    // observable.subscribe((data) => { console.log(data); } );
  }
}
