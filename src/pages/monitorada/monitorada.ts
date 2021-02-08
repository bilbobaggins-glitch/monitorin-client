import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ControllerProvider } from '../../providers/controller-provider/controller-provider';

/**
 * Generated class for the MonitoradaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monitorada',
  templateUrl: 'monitorada.html',
})
export class MonitoradaPage {

  proximaNota: number = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ctrlProvider: ControllerProvider) {
    // ctrlProvider.getNotaRecomendadaProx(ctrlProvider.getLogado(), ctrlProvider.getTurma()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonitoradaPage');
  }

}
