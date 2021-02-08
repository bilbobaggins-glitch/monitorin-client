import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { Atividade } from '../classescustom/modelo/Atividade';
import { Turma } from '../classescustom/modelo/Turma';
import { EstudanteAtividade } from '../classescustom/modelo/EstudanteAtividade';
import { ControllerProvider } from '../providers/controller-provider/controller-provider';
import { AtividadesManagerProvider } from '../providers/atividades-manager/atividades-manager';
import { UsuarioManagerProvider } from '../providers/usuario-manager/usuario-manager';
import { TurmaManagerProvider } from '../providers/turma-manager/turma-manager';
import { EstudanteAtividadeManagerProvider } from '../providers/estudante-atividade-manager/estudante-atividade-manager';
import { DiaDeAulaProvider } from '../providers/dia-de-aula/dia-de-aula';
import { EstudanteTurma } from '../classescustom/modelo/EstudanteTurma';
import { HttpClient } from '@angular/common/http';
import { EstudanteAtividadesPage } from '../pages/estudante-atividades/estudante-atividades';
import { BlankPage } from '../pages/blank/blank';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = BlankPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public atvMngr: AtividadesManagerProvider,
              public usuarioMngr: UsuarioManagerProvider,
              public turmaMngr: TurmaManagerProvider,
              public estudanteAtvMngr: EstudanteAtividadeManagerProvider,
              public diaDeAulaMngr: DiaDeAulaProvider,
              public controllerMngr: ControllerProvider,
              public http: HttpClient) {

      this.controllerMngr.http = http;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

