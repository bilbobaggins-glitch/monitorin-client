import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstudanteAtividadesPage } from '../estudante-atividades/estudante-atividades';

@Component({
  selector: 'professor-frequencia',
  templateUrl: 'professor-frequencia.html'
})
export class ProfessorFrequenciaPage {
  estudantes: Array<{nome: string}> = new Array<{nome: string}>();

  constructor(public navCtrl: NavController) {
    this.estudantes.push({nome: "Roberta"});
    this.estudantes.push({nome: "Paola"});
    this.estudantes.push({nome: "Rúbia"});
    this.estudantes.push({nome: "Raquel"});
  }
  
}
