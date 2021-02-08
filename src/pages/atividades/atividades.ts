import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AtividadeEspecificaPage } from '../atividade-especifica/atividade-especifica';
import { Atividade } from '../../classescustom/modelo/Atividade'
import { AtividadesManagerProvider } from '../../providers/atividades-manager/atividades-manager';
import { ControllerProvider } from '../../providers/controller-provider/controller-provider';
import { EstudanteAtividade } from '../../classescustom/modelo/EstudanteAtividade';
import { Usuario } from '../../classescustom/modelo/Usuario';
import { Turma } from '../../classescustom/modelo/Turma';

@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html'
})
export class AtividadesPage {
  estudanteAtividades: Array<EstudanteAtividade> = new Array<EstudanteAtividade>();
  notaRecomendada: number = undefined;

  constructor(public navCtrl: NavController, public ctrlProvider: ControllerProvider, public navParams: NavParams) {
    // let usuarioLogado: Estudante = ctrlProvider.usuarioLogado();
    // let turmaEscolhida: Turma = navParams.get('param');

    // this.estudanteAtividades = ctrlProvider.getEstudanteAtividadeByEstudanteByTurma(usuarioLogado, turmaEscolhida);
    // this.estudanteAtividades = usuarioLogado.estudanteAtividades;
    // ctrlProvider.getNotaRecomendadaProx(usuarioLogado, turmaEscolhida);
  }

  goToVoltar(){
    this.navCtrl.pop();
  }

  goToAtividadeTrabalhoFinal(atividade){
    this.navCtrl.push(AtividadeEspecificaPage, { atividadeParam: atividade });
  }
}
