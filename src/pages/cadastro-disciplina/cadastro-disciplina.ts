import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';

import { TurmaManagerProvider } from '../../providers/turma-manager/turma-manager';
import { AtividadesManagerProvider } from '../../providers/atividades-manager/atividades-manager';
import { UsuarioManagerProvider } from '../../providers/usuario-manager/usuario-manager';
import { EstudanteAtividadeManagerProvider } from '../../providers/estudante-atividade-manager/estudante-atividade-manager';
import { Atividade } from '../../classescustom/modelo/Atividade';
import { Turma } from '../../classescustom/modelo/Turma';
import { EstudanteAtividade } from '../../classescustom/modelo/EstudanteAtividade';
import { DiaDeAula } from '../../classescustom/modelo/DiaDeAula';
import { ControllerProvider } from '../../providers/controller-provider/controller-provider';
import { Usuario } from '../../classescustom/modelo/Usuario';

@IonicPage()
@Component({
  selector: 'page-cadastro-disciplina',
  templateUrl: 'cadastro-disciplina.html',
})
export class CadastroDisciplinaPage {
  turma: Turma = new Turma();

  estudantesEscolhidos: Array<Usuario>;
  estudantes: Array<Usuario> = new Array<Usuario>();
  atividades: Array<Atividade> = new Array<Atividade>();

  constructor(public events: Events, public controller: ControllerProvider, public navCtrl: NavController, public navParams: NavParams, public usuarioMngr: UsuarioManagerProvider, public turmaMngr: TurmaManagerProvider, public atividadesMngr: AtividadesManagerProvider, public estudanteAtividadeMngr: EstudanteAtividadeManagerProvider, public alertCtrl: AlertController) {
    this.estudantesEscolhidos = this.turma.estudantes;
  }

  ionViewDidLoad() {
    this.estudantesCarregar();
  }

  estudantesCarregar() {
    let servidorMensagemObjeto = {
      json: {
        obj: {
          "dadosEntrada": {
            "nomedeusuario": this.controller.usuarioLogado.usuario,
            "senha": this.controller.usuarioLogado.senha,
          },
          "dadosSaida": {
            "estudantes": null,
            "estudanteslength": 0
          }
        },
        txt: null
      }
    }

    let observable = this.controller.servidorMensagemEnviar(servidorMensagemObjeto, 'getestudantes');
    observable.subscribe((data) => this.estudantesCarregarServidorRespostaHandler(data));
  }

  estudantesCarregarServidorRespostaHandler(dados) {
    let servidorEstudantes = dados['dadosSaida'].estudantes;
    for (let i = 0; i < servidorEstudantes.length; i++) {
      this.estudantes.push(new Usuario());

      this.estudantes[i].id = servidorEstudantes[i].id;
      this.estudantes[i].nome = servidorEstudantes[i].nome;
      this.estudantes[i].sobrenome = servidorEstudantes[i].sobrenome;
    }
  }

  semanaDiaEvento(evento) {
  }

  showPromptFormulaAtividadeAdicionar() {
    const prompt = this.alertCtrl.create({
      title: 'Adicionar atividade',
      message: "Insira o nome da atividade que deseja adicionar à fórmula final",
      inputs: [
        {
          name: 'atividadeNome',
          placeholder: 'Prova Final'
        },
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
            let atividadeNova = new Atividade();
            atividadeNova.nome = data.atividadeNome;
            atividadeNova.turma = this.turma;
            this.atividades.push(atividadeNova);
          }
        }
      ]
    });
    prompt.present();
  }

  showPromptAlunoAdicionar() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Adicione os estudantes a sua turma!');

    for (let estudante of this.estudantes) {
      let i = 0;
      for (; i < this.estudantesEscolhidos.length; i++) {
        if (estudante == this.estudantesEscolhidos[i]) {
          alert.addInput({
            type: 'checkbox',
            label: estudante.nome + " " + estudante.sobrenome,
            value: estudante.id.toString(),
            checked: true
          });
          break;
        }
      }
      if (i >= this.estudantesEscolhidos.length) {
        alert.addInput({
          type: 'checkbox',
          label: estudante.nome + " " + estudante.sobrenome,
          value: estudante.id.toString(),
          checked: false
        });
      }
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: dados => {
        this.estudantesEscolhidosAtualizar(dados);
      }
    });
    alert.present();
  }

  estudantesEscolhidosAtualizar(dados) {
    this.estudantesEscolhidos.splice(0);
    for (let i = 0; i < dados.length; i++) {
      for (let estudante of this.estudantes) {
        if (estudante.id.toString() == dados[i]) {
          this.estudantesEscolhidos.push(estudante);
        }
      }
    }
  }

  cadastrar() {
    let servidorMensagemObjeto = {
      json: {
        obj: {
          "dadosEntrada": {
            "usuario": this.controller.usuarioLogado.usuario,
            "senha": this.controller.usuarioLogado.senha,
            "turma": this.turma
          },
          "dadosSaida": {
            "sucesso": null
          }
        },
        txt: null
      }
    }

    let observable = this.controller.servidorMensagemEnviar(servidorMensagemObjeto, 'disciplinacadastro');
    observable.subscribe((dados) => this.cadastrarServidorRetornoHandler(dados));

    // this.events.publish('disciplinaCadastrada'); //bom pra não ter que ir e voltar pra dar refresh
  }

  cadastrarServidorRetornoHandler(dados) {
  }

  atividadeAtualizar(peso, atividade) {
    atividade.peso = peso;
  }

  atividadeRemover() {

  }

  dataInicialAtualizar(dataInicial) {
    this.turma.dataInicial = new Date(dataInicial.year, dataInicial.month - 1, dataInicial.day);
  }

  dataFinalAtualizar(dataFinal) {
    this.turma.dataFinal = new Date(dataFinal.year, dataFinal.month - 1, dataFinal.day);
  }

}
