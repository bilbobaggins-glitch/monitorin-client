import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstudanteAtividade } from '../../classescustom/modelo/EstudanteAtividade';

@IonicPage()
@Component({
  selector: 'page-estudante-atividades',
  templateUrl: 'estudante-atividades.html',
})
export class EstudanteAtividadesPage {
  estudanteAtividades: Array<{nome: string; data: string; nota: number;}> = new Array<{data: string; nome: string; nota: number;}>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.estudanteAtividades.push({nome: "Prova I", data: "27 / 05", nota: 50});
    this.estudanteAtividades.push({nome: "Prova II", data: "06 / 05", nota: 50});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstudanteAtividadesPage');
  }

}
