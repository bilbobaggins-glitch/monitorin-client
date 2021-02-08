import { Atividade } from './../../classescustom/modelo/Atividade';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../classescustom/modelo/Usuario';
import { UsuarioManagerProvider } from '../../providers/usuario-manager/usuario-manager';
import { EstudanteAtividade } from '../../classescustom/modelo/EstudanteAtividade';
import { EstudanteAtividadeManagerProvider } from '../../providers/estudante-atividade-manager/estudante-atividade-manager';

@Component({
  selector: 'page-atividade-especifica',
  templateUrl: 'atividade-especifica.html'
})
export class AtividadeEspecificaPage {
  usuarios: Array<Usuario> = new Array<Usuario>();
  estudanteAtividades: Array<EstudanteAtividade>;

  constructor(public navCtrl: NavController, public estudanteAtvMngr: EstudanteAtividadeManagerProvider, public navParams: NavParams) {
    let atividadeSelecionada = navParams.get('param');  
  }

  goToVoltar(){
    this.navCtrl.pop();
  }
}
